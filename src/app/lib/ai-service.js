// =============================================
// AI COACHING SERVICE
// Unified interface for Claude (Anthropic) and OpenAI
// =============================================

import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { SYSTEM_PROMPTS, buildPromptWithContext } from './ai-prompts';

// =============================================
// CONFIGURATION
// =============================================

const CONFIG = {
  anthropic: {
    model: 'claude-sonnet-4-20250514', // or 'claude-3-opus-20240229' for more depth
    maxTokens: 1024,
    temperature: 0.7,
  },
  openai: {
    model: 'gpt-4o', // or 'gpt-4-turbo-preview'
    maxTokens: 1024,
    temperature: 0.7,
  },
};

// =============================================
// CLIENT INITIALIZATION
// =============================================

let anthropicClient = null;
let openaiClient = null;

const getAnthropicClient = () => {
  if (!anthropicClient) {
    anthropicClient = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }
  return anthropicClient;
};

const getOpenAIClient = () => {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openaiClient;
};

// =============================================
// CORE CHAT FUNCTIONS
// =============================================

/**
 * Send a message to Claude (Anthropic)
 */
export async function chatWithClaude(messages, options = {}) {
  const client = getAnthropicClient();
  
  const systemPrompt = options.systemPrompt || 
    buildPromptWithContext(options.promptType || 'core', options.context || {});
  
  // Convert messages to Anthropic format
  const anthropicMessages = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: msg.content,
  }));
  
  try {
    const response = await client.messages.create({
      model: options.model || CONFIG.anthropic.model,
      max_tokens: options.maxTokens || CONFIG.anthropic.maxTokens,
      temperature: options.temperature ?? CONFIG.anthropic.temperature,
      system: systemPrompt,
      messages: anthropicMessages,
    });
    
    return {
      success: true,
      content: response.content[0].text,
      model: response.model,
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
      },
      provider: 'anthropic',
    };
  } catch (error) {
    console.error('Claude API error:', error);
    return {
      success: false,
      error: error.message,
      provider: 'anthropic',
    };
  }
}

/**
 * Send a message to OpenAI
 */
export async function chatWithOpenAI(messages, options = {}) {
  const client = getOpenAIClient();
  
  const systemPrompt = options.systemPrompt || 
    buildPromptWithContext(options.promptType || 'core', options.context || {});
  
  // Format messages for OpenAI
  const openaiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
  ];
  
  try {
    const response = await client.chat.completions.create({
      model: options.model || CONFIG.openai.model,
      max_tokens: options.maxTokens || CONFIG.openai.maxTokens,
      temperature: options.temperature ?? CONFIG.openai.temperature,
      messages: openaiMessages,
    });
    
    return {
      success: true,
      content: response.choices[0].message.content,
      model: response.model,
      usage: {
        inputTokens: response.usage.prompt_tokens,
        outputTokens: response.usage.completion_tokens,
      },
      provider: 'openai',
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    return {
      success: false,
      error: error.message,
      provider: 'openai',
    };
  }
}

/**
 * Unified chat function - uses configured default or specified provider
 */
export async function chat(messages, options = {}) {
  const provider = options.provider || 
    process.env.NEXT_PUBLIC_DEFAULT_AI_PROVIDER || 
    'claude';
  
  if (provider === 'openai') {
    return chatWithOpenAI(messages, options);
  }
  
  return chatWithClaude(messages, options);
}

// =============================================
// STREAMING VERSIONS
// =============================================

/**
 * Stream response from Claude
 */
export async function* streamClaude(messages, options = {}) {
  const client = getAnthropicClient();
  
  const systemPrompt = options.systemPrompt || 
    buildPromptWithContext(options.promptType || 'core', options.context || {});
  
  const anthropicMessages = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: msg.content,
  }));
  
  try {
    const stream = await client.messages.stream({
      model: options.model || CONFIG.anthropic.model,
      max_tokens: options.maxTokens || CONFIG.anthropic.maxTokens,
      temperature: options.temperature ?? CONFIG.anthropic.temperature,
      system: systemPrompt,
      messages: anthropicMessages,
    });
    
    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        yield {
          type: 'text',
          content: event.delta.text,
        };
      }
    }
    
    const finalMessage = await stream.finalMessage();
    yield {
      type: 'done',
      usage: {
        inputTokens: finalMessage.usage.input_tokens,
        outputTokens: finalMessage.usage.output_tokens,
      },
    };
  } catch (error) {
    yield {
      type: 'error',
      error: error.message,
    };
  }
}

/**
 * Stream response from OpenAI
 */
export async function* streamOpenAI(messages, options = {}) {
  const client = getOpenAIClient();
  
  const systemPrompt = options.systemPrompt || 
    buildPromptWithContext(options.promptType || 'core', options.context || {});
  
  const openaiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
  ];
  
  try {
    const stream = await client.chat.completions.create({
      model: options.model || CONFIG.openai.model,
      max_tokens: options.maxTokens || CONFIG.openai.maxTokens,
      temperature: options.temperature ?? CONFIG.openai.temperature,
      messages: openaiMessages,
      stream: true,
    });
    
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield {
          type: 'text',
          content,
        };
      }
    }
    
    yield { type: 'done' };
  } catch (error) {
    yield {
      type: 'error',
      error: error.message,
    };
  }
}

// =============================================
// SPECIALIZED COACHING FUNCTIONS
// =============================================

/**
 * Get AI reflection on Three Good Things entry
 */
export async function getGratitudeReflection(goodThings, options = {}) {
  const items = goodThings
    .filter(item => item.thing)
    .map(item => `"${item.thing}" (because: ${item.why || 'not specified'})`)
    .join('; ');
  
  return chat([
    {
      role: 'user',
      content: `I completed my Three Good Things for today:\n\n${items}\n\nPlease offer a brief, warm reflection.`,
    }
  ], {
    ...options,
    promptType: 'gratitudeReflection',
  });
}

/**
 * Get AI insight on daily check-in
 */
export async function getCheckinInsight(checkinData, options = {}) {
  const permaText = `
    - Positive Emotions: ${checkinData.positive_emotions || 'not rated'}/10
    - Engagement: ${checkinData.engagement || 'not rated'}/10
    - Relationships: ${checkinData.relationships || 'not rated'}/10
    - Meaning: ${checkinData.meaning || 'not rated'}/10
    - Accomplishment: ${checkinData.accomplishment || 'not rated'}/10
    - Overall Wellbeing: ${checkinData.overall_wellbeing || 'not rated'}/10
    - Energy: ${checkinData.energy_level || 'not rated'}/10
    - Stress: ${checkinData.stress_level || 'not rated'}/10
  `;
  
  const notesText = checkinData.highlights || checkinData.challenges || checkinData.intentions
    ? `
    Highlights: ${checkinData.highlights || 'none shared'}
    Challenges: ${checkinData.challenges || 'none shared'}
    Intentions: ${checkinData.intentions || 'none shared'}
    `
    : '';
  
  return chat([
    {
      role: 'user',
      content: `Here's my daily check-in:\n${permaText}\n${notesText}\n\nPlease offer a brief insight.`,
    }
  ], {
    ...options,
    promptType: 'dailyCheckin',
  });
}

/**
 * Get lesson support
 */
export async function getLessonHelp(lessonInfo, question, options = {}) {
  return chat([
    {
      role: 'user',
      content: `I'm studying the lesson "${lessonInfo.title}" about ${lessonInfo.description || lessonInfo.topic}.\n\nMy question: ${question}`,
    }
  ], {
    ...options,
    promptType: 'lessonSupport',
    context: {
      ...options.context,
      currentLesson: lessonInfo,
    },
  });
}

/**
 * Get activity guidance
 */
export async function getActivityGuidance(activityType, activityName, phase, options = {}) {
  const phasePrompts = {
    intro: `I'm about to start the "${activityName}" activity. Please give me a brief introduction and explain what I'll be doing.`,
    during: `I'm in the middle of the "${activityName}" activity. I could use some encouragement or guidance.`,
    complete: `I just finished the "${activityName}" activity. Please help me reflect on the experience.`,
  };
  
  return chat([
    {
      role: 'user',
      content: phasePrompts[phase] || phasePrompts.intro,
    }
  ], {
    ...options,
    promptType: 'activityGuidance',
  });
}

/**
 * Get strengths coaching
 */
export async function getStrengthsCoaching(userStrengths, question, options = {}) {
  return chat([
    {
      role: 'user',
      content: `My top character strengths are: ${userStrengths.join(', ')}.\n\n${question}`,
    }
  ], {
    ...options,
    promptType: 'strengthsCoaching',
    context: {
      ...options.context,
      userStrengths,
    },
  });
}

/**
 * Get goal-setting help
 */
export async function getGoalHelp(goalInfo, options = {}) {
  return chat([
    {
      role: 'user',
      content: `I want to set a goal around: ${goalInfo.description}\n\nCategory: ${goalInfo.category || 'general wellbeing'}\n\nPlease help me make this a meaningful, achievable goal.`,
    }
  ], {
    ...options,
    promptType: 'goalSetting',
  });
}

/**
 * Get resilience support
 */
export async function getResilienceSupport(situation, options = {}) {
  return chat([
    {
      role: 'user',
      content: situation,
    }
  ], {
    ...options,
    promptType: 'resilienceSupport',
  });
}

// =============================================
// CONVERSATION MANAGEMENT
// =============================================

/**
 * Continue an ongoing conversation
 */
export async function continueConversation(conversationHistory, newMessage, options = {}) {
  const messages = [
    ...conversationHistory.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
    {
      role: 'user',
      content: newMessage,
    },
  ];
  
  return chat(messages, options);
}

/**
 * Summarize a conversation for storage
 */
export async function summarizeConversation(messages, options = {}) {
  return chat([
    {
      role: 'user',
      content: `Please provide a brief 2-3 sentence summary of this coaching conversation for my records:\n\n${messages.map(m => `${m.role}: ${m.content}`).join('\n\n')}`,
    }
  ], {
    ...options,
    maxTokens: 150,
  });
}

export default {
  chat,
  chatWithClaude,
  chatWithOpenAI,
  streamClaude,
  streamOpenAI,
  getGratitudeReflection,
  getCheckinInsight,
  getLessonHelp,
  getActivityGuidance,
  getStrengthsCoaching,
  getGoalHelp,
  getResilienceSupport,
  continueConversation,
  summarizeConversation,
};
