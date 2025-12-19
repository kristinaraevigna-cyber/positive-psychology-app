// =============================================
// API ROUTES FOR AI COACHING
// =============================================

// =============================================
// File: app/api/ai/chat/route.js (Next.js 13+ App Router)
// =============================================

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { chat, chatWithClaude, chatWithOpenAI } from '@/lib/ai-service';

export async function POST(request) {
  try {
    // Authenticate user
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { 
      messages, 
      provider = 'claude', 
      promptType = 'core',
      context = {},
      sessionId,
    } = body;

    // Add user context
    const userContext = {
      ...context,
      userName: session.user.user_metadata?.full_name || 'there',
    };

    // Get user's strengths if available
    const { data: strengthData } = await supabase
      .from('strength_assessments')
      .select('signature_strengths')
      .eq('user_id', session.user.id)
      .order('assessed_at', { ascending: false })
      .limit(1)
      .single();

    if (strengthData?.signature_strengths) {
      userContext.userStrengths = strengthData.signature_strengths;
    }

    // Get recent mood average
    const { data: checkinData } = await supabase
      .from('daily_checkins')
      .select('overall_wellbeing')
      .eq('user_id', session.user.id)
      .order('check_in_date', { ascending: false })
      .limit(7);

    if (checkinData?.length > 0) {
      const avg = checkinData.reduce((sum, c) => sum + (c.overall_wellbeing || 0), 0) / checkinData.length;
      userContext.recentMood = Math.round(avg * 10) / 10;
    }

    // Call AI
    const response = await chat(messages, {
      provider,
      promptType,
      context: userContext,
    });

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    // Store conversation in database
    const conversationEntries = [
      ...messages.map(msg => ({
        user_id: session.user.id,
        session_id: sessionId,
        context_type: promptType,
        role: msg.role,
        content: msg.content,
        model_used: null,
      })),
      {
        user_id: session.user.id,
        session_id: sessionId,
        context_type: promptType,
        role: 'assistant',
        content: response.content,
        model_used: response.model,
        tokens_used: response.usage?.inputTokens + response.usage?.outputTokens,
      },
    ];

    await supabase.from('ai_conversations').insert(conversationEntries);

    return NextResponse.json({
      content: response.content,
      model: response.model,
      provider: response.provider,
    });

  } catch (error) {
    console.error('AI Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// =============================================
// File: app/api/ai/stream/route.js (Streaming endpoint)
// =============================================

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { streamClaude, streamOpenAI } from '@/lib/ai-service';

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { messages, provider = 'claude', promptType = 'core', context = {} } = body;

    const stream = provider === 'openai' 
      ? streamOpenAI(messages, { promptType, context })
      : streamClaude(messages, { promptType, context });

    // Create a readable stream for the response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const data = JSON.stringify(chunk) + '\n';
            controller.enqueue(encoder.encode(data));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('AI Stream API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

// =============================================
// File: app/api/ai/reflect/route.js (Quick reflections)
// =============================================

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { 
  getGratitudeReflection, 
  getCheckinInsight,
  getActivityGuidance,
} from '@/lib/ai-service';

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { type, data, provider = 'claude' } = body;

    let response;

    switch (type) {
      case 'gratitude':
        response = await getGratitudeReflection(data.goodThings, { provider });
        break;
        
      case 'checkin':
        response = await getCheckinInsight(data.checkin, { provider });
        break;
        
      case 'activity':
        response = await getActivityGuidance(
          data.activityType,
          data.activityName,
          data.phase,
          { provider }
        );
        break;
        
      default:
        return NextResponse.json({ error: 'Unknown reflection type' }, { status: 400 });
    }

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    // Store the AI reflection in the appropriate table
    if (type === 'gratitude' && data.entryId) {
      await supabase
        .from('gratitude_entries')
        .update({ ai_reflection: response.content })
        .eq('id', data.entryId);
    } else if (type === 'checkin' && data.checkinId) {
      await supabase
        .from('daily_checkins')
        .update({ ai_insight: response.content })
        .eq('id', data.checkinId);
    }

    return NextResponse.json({
      reflection: response.content,
      provider: response.provider,
    });

  } catch (error) {
    console.error('AI Reflect API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// =============================================
// File: app/api/ai/lesson-help/route.js
// =============================================

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getLessonHelp } from '@/lib/ai-service';

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { lessonInfo, question, provider = 'claude' } = body;

    const response = await getLessonHelp(lessonInfo, question, { provider });

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json({
      answer: response.content,
      provider: response.provider,
    });

  } catch (error) {
    console.error('Lesson Help API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// =============================================
// File: app/api/ai/strengths/route.js
// =============================================

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getStrengthsCoaching } from '@/lib/ai-service';

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { strengths, question, provider = 'claude' } = body;

    // If no strengths provided, try to get from database
    let userStrengths = strengths;
    if (!userStrengths || userStrengths.length === 0) {
      const { data } = await supabase
        .from('strength_assessments')
        .select('signature_strengths')
        .eq('user_id', session.user.id)
        .order('assessed_at', { ascending: false })
        .limit(1)
        .single();
      
      userStrengths = data?.signature_strengths || [];
    }

    if (userStrengths.length === 0) {
      return NextResponse.json({ 
        error: 'No strengths found. Please complete a strengths assessment first.',
        needsAssessment: true,
      }, { status: 400 });
    }

    const response = await getStrengthsCoaching(userStrengths, question, { provider });

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json({
      answer: response.content,
      strengths: userStrengths,
      provider: response.provider,
    });

  } catch (error) {
    console.error('Strengths API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// =============================================
// LEGACY PAGES ROUTER VERSIONS (if using pages/)
// =============================================

// File: pages/api/ai/chat.js
/*
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import { chat } from '@/lib/ai-service';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createPagesServerClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { messages, provider, promptType, context } = req.body;

  try {
    const response = await chat(messages, {
      provider,
      promptType,
      context,
    });

    if (!response.success) {
      return res.status(500).json({ error: response.error });
    }

    return res.status(200).json({
      content: response.content,
      model: response.model,
      provider: response.provider,
    });
  } catch (error) {
    console.error('AI Chat error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
*/
