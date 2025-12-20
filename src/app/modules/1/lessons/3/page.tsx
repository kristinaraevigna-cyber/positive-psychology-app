'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson3Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '0 40px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)'
              }} />
              <span style={{ color: '#14532d', fontSize: 16, fontWeight: 600 }}>
                Positive Psychology
              </span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/modules', label: 'Modules' },
              { href: '/journal', label: 'Journal' },
              { href: '/assessments', label: 'Assessments' },
              { href: '/coach', label: 'AI Coach' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.href === '/modules' ? '#14532d' : '#64748b',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: item.href === '/modules' ? 600 : 500,
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#14532d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600
          }}>
            JB
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 40px'
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href="/modules/1" style={{ color: '#64748b', textDecoration: 'none' }}>The Fundamentals</Link>
            <span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 3</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ 
            display: 'inline-block',
            background: '#f0fdf4', 
            color: '#166534',
            padding: '6px 12px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 16
          }}>
            Lesson 3 of 6
          </div>
          <h1 style={{ 
            fontSize: 36, 
            color: '#111827', 
            fontWeight: 600,
            marginBottom: 12,
            fontFamily: 'Georgia, serif'
          }}>
            Critical Perspectives
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Understanding the critiques that have shaped and strengthened the field
          </p>
        </div>

        {/* Video Section */}
        <div style={{
          background: '#1a1a2e',
          borderRadius: 16,
          aspectRatio: '16/9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
            Video coming soon
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>
            Dr. Jolanta Burke discusses the criticisms and how the field has responded
          </p>
        </div>

        {/* Content */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 16, 
          padding: 48,
          border: '1px solid #e5e7eb',
          marginBottom: 32
        }}>
          
          {/* Walk Before You Run */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            fontFamily: 'Georgia, serif'
          }}>
            "Walk Before You Run"
          </h2>
          
          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            When positive psychology was first established, Martin Seligman was a man on a mission. At 56, 
            with barely a decade before his retirement, he was determined to develop a field and create 
            lasting impact. His extensive network of academics gave him a decisive advantage, enabling a 
            flurry of activities that happened remarkably quickly.
          </p>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            <strong>Richard Lazarus</strong>, Professor Emeritus from the University of California, was one 
            of the first critics of the field and claimed that it started running before it could walk. He 
            found that positive psychology oversimplified the human experience, pointing to its neglect of 
            negative emotions and underplaying the importance of stress, suffering, and coping.
          </p>

          {/* Jolanta's Story - PhD */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>A Question That Stayed With Me</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "I remember my first year as a PhD scholar when I was stopped in a corridor of Trinity College 
              Dublin in Ireland by a psychology professor. He mentioned that he heard I was doing my PhD in 
              positive psychology and asked me to tell him about it. I was bright-eyed and bushy-tailed, as 
              positive psychology was a new science. So, I enthusiastically began explaining my study and 
              what I hoped to achieve. The professor listened attentively and asked many questions. The final 
              question he asked me stopped me in my tracks: 'Positive psychology seems to offer many benefits, 
              but how do you know it does not harm people?' This question stayed with me for a long time. 
              I spent the rest of my academic career reminding myself of it."
            </p>
          </div>

          {/* The Tyranny of Positive Thinking */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 48,
            fontFamily: 'Georgia, serif'
          }}>
            The Tyranny of Positive Thinking
          </h2>

          {/* Jolanta's Story - Toxic Leader */}
          <div style={{
            background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 32,
            borderLeft: '4px solid #ef4444'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Toxic Positivity</p>
              </div>
            </div>
            <p style={{ 
              color: '#7f1d1d', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "Toxic positivity can be incredibly draining, especially when it is imposed upon you. Years ago, 
              I had a leader who refused to let us 'complain', insisting that our negativity brought everyone's 
              spirits down. We were expected always to remain positive, no matter the circumstances. This 
              approach led to low staff morale and dwarfed team development, and took a personal toll on 
              many of us. Ironically, I complained more about working with this leader than ever. The tyranny 
              of positive thinking was exhausting and harmful."
            </p>
          </div>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            <strong>Barbara Held</strong> from Bowdoin College posited that by emphasising the positive, 
            the negative experiences were being disregarded. Valuing positive experiences too much could 
            lead to unrealistic and harmful effects. This "tyranny of positive thinking" is about individuals 
            feeling obliged to maintain a positive outlook—not because they feel like this, but because 
            it is seen as the right thing to do.
          </p>

          {/* Warning Box */}
          <div style={{
            background: '#fef3c7',
            borderRadius: 12,
            padding: 24,
            margin: '32px 0',
            borderLeft: '4px solid #f59e0b'
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#92400e', marginBottom: 8 }}>
              Important Distinction
            </h3>
            <p style={{ 
              fontSize: 15, 
              color: '#78350f', 
              lineHeight: 1.7,
              margin: 0
            }}>
              It is important to note that over the years, no positive psychologist Dr. Burke has ever 
              known would encourage this relentless pursuit of positivity. The field's response through 
              second-wave thinking has addressed these concerns directly.
            </p>
          </div>

          {/* Research with Students */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Being Cautious</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "Over the years, I have worked with students studying for their dissertations and creating 
              wellbeing interventions or programmes. Sometimes, they resulted in positive outcomes; other 
              times, we saw no difference in experimental groups compared to control groups, and there 
              were also times when we saw a reduction in some aspects of wellbeing in those who engaged 
              in wellbeing interventions. Our responsibility as researchers and practitioners is to 
              exercise caution when reading and acting upon these results. It is crucial to remember 
              people's individual differences and ensure we are not causing harm."
            </p>
          </div>

          {/* Key Criticisms Summary */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 48,
            fontFamily: 'Georgia, serif'
          }}>
            Key Criticisms of Positive Psychology
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              {
                title: 'Oversimplification',
                description: 'The artificial dichotomy of dividing psychology as negative and positive may not be helpful, as experiences are interdependent.'
              },
              {
                title: 'Cultural Bias',
                description: 'The field\'s emphasis on happiness, a notion developed by the Western world, is not universally shared across cultures.'
              },
              {
                title: 'Methodological Concerns',
                description: 'Difficulty in defining and measuring subjective experiences like happiness, and lack of longitudinal data.'
              },
              {
                title: 'Replication Issues',
                description: 'Recent systematic reviews highlight the need for more replicable studies within positive psychology.'
              }
            ].map((critique, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: 24,
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                  {critique.title}
                </h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {critique.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key References */}
          <h2 style={{ 
            fontSize: 20, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 16,
            marginTop: 40
          }}>
            Key References
          </h2>
          
          <div style={{
            background: '#f8fafc',
            borderRadius: 8,
            padding: 20,
            fontSize: 14,
            color: '#64748b',
            lineHeight: 1.8
          }}>
            <p style={{ marginBottom: 12 }}>
              Lazarus, R. S. (2003). Does the positive psychology movement have legs? 
              <em>Psychological Inquiry, 14</em>(2), 93–109.
            </p>
            <p>
              Held, B. S. (2004). The negative side of positive psychology. 
              <em>Journal of Humanistic Psychology, 44</em>(1), 9–46.
            </p>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 16, 
          padding: 48,
          border: '1px solid #e5e7eb',
          marginBottom: 32
        }}>
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            fontFamily: 'Georgia, serif'
          }}>
            Reflection Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Have you ever experienced "toxic positivity" in your life? How did it affect you?',
              'Why is it important to understand the criticisms of a field you are studying?',
              'How can practitioners balance promoting positive wellbeing while being cautious about potential harm?'
            ].map((question, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: 20,
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e0f2fe',
                    color: '#0369a1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                    flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>
                    {question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0'
        }}>
          <Link href="/modules/1/lessons/2" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#64748b',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 500
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Previous Lesson
          </Link>

          <button
            onClick={() => setIsCompleted(!isCompleted)}
            style={{
              background: isCompleted ? '#22c55e' : '#14532d',
              color: '#ffffff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            {isCompleted ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Completed
              </>
            ) : (
              'Mark as Complete'
            )}
          </button>

          <Link href="/modules/1/lessons/4" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#14532d',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 600
          }}>
            Next Lesson
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
