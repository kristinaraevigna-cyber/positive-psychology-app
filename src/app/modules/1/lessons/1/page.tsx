use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson1Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return ('
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 1</span>
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
            Lesson 1 of 6
          </div>
          <h1 style={{ 
            fontSize: 36, 
            color: '#111827', 
            fontWeight: 600,
            marginBottom: 12,
            fontFamily: 'Georgia, serif'
          }}>
            The Birth of Positive Psychology
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Discover how a chance meeting in Hawaii sparked a revolution in psychology
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
          marginBottom: 40,
          position: 'relative',
          overflow: 'hidden'
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
            Dr. Jolanta Burke introduces the origins of positive psychology
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
          
          {/* Jolanta's Story */}
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
                <p style={{ color: '#64748b', fontSize: 13 }}>Personal Reflection</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "I have been deeply immersed in positive psychology for over two decades. From an early age, 
              I aspired to be a psychologist or psychotherapist – I wanted to help people. Yet, shortly 
              after completing my bachelor's degree, I gave away all my psychology textbooks and found 
              myself at crossroads. None of the traditional topics in psychology sparked my interest well 
              enough to pursue a master's degree. However, everything changed when I discovered positive 
              psychology."
            </p>
          </div>

          {/* Main Content */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            fontFamily: 'Georgia, serif'
          }}>
            A Chance Meeting in Hawaii
          </h2>
          
          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            In the 1990s while on family holidays in Hawaii, two psychologists, <strong>Martin Seligman</strong> from 
            the University of Pennsylvania and <strong>Mihaly Csikszentmihalyi</strong> from Claremont Graduate 
            University, accidentally crossed paths. Rather than lounging on the beach with cocktails in hand, 
            they spent hours discussing the need for psychology to pivot away from discussing what is wrong 
            with people and focus on what is right.
          </p>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            Inspired by their conversation, they decided to take action and vowed to create a special interest 
            group at the American Psychological Association (APA) that would explore the topics that were 
            neglected by the psychological field, such as strengths, creativity, and optimism.
          </p>

          {/* Quote Box */}
          <div style={{
            background: '#f8fafc',
            borderRadius: 12,
            padding: 32,
            margin: '32px 0',
            borderLeft: '4px solid #14532d'
          }}>
            <p style={{ 
              fontSize: 18, 
              color: '#14532d', 
              lineHeight: 1.8,
              fontStyle: 'italic',
              margin: 0
            }}>
              "Imagine living in a world where everyone focuses on what is wrong with you, defines you 
              through all the mistakes you have made, and barely considers all the positives. No matter 
              how resilient you are, it is bound to wear you down at some point."
            </p>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 16 }}>
              — From "The Foundation of Positive Psychology"
            </p>
          </div>

          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 40,
            fontFamily: 'Georgia, serif'
          }}>
            The Birth of a Movement
          </h2>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            Soon after, Martin and Mihaly invited Ray Fowler from the University of Alabama and, with all 
            their families, went to a "psychedelic" Grateful Dead house in Yucatán, Gulf of Mexico, to create 
            the field of positive psychology. Over the years, they were joined by other like-minded psychologists, 
            such as Christopher Peterson, Barbara Fredrickson, Ed Diener, and others, who began to shape the 
            contours of the field as we know it.
          </p>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            Then in 1998, Martin Seligman became the president of the APA. In his inaugural speech, he called 
            for others to join the conversation and explore the emerging field of positive psychology. Little 
            did they know that what began as a small group would soon expand into the fastest-growing field 
            in psychology.
          </p>

          {/* The Three Pillars */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 40,
            fontFamily: 'Georgia, serif'
          }}>
            The Three Pillars of Positive Psychology
          </h2>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            In their foundational 2000 paper, Seligman and Csikszentmihalyi proposed that positive psychology 
            should address three main areas:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              {
                title: 'Positive Subjective Experiences',
                description: 'Examining positive emotions, such as happiness, life satisfaction, and joy, to understand their role in enhancing overall wellbeing and quality of life.'
              },
              {
                title: 'Positive Individual Traits',
                description: 'Studying individual strengths, virtues, and character traits that contribute to a good life. These traits can help us uncover another side of human beings rarely discussed in psychology.'
              },
              {
                title: 'Positive Institutions and Communities',
                description: 'Understanding societal and environmental factors that facilitate human flourishing, including supportive social networks, nurturing communities, educational institutions, and workplaces.'
              }
            ].map((pillar, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: 24,
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#14532d',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 600
                  }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827' }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginLeft: 44 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Another Jolanta Story */}
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
                <p style={{ color: '#64748b', fontSize: 13 }}>On Discovering the Field</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "I clearly remember the early days of positive psychology, when even academics were unfamiliar 
              with it. Today, positive psychology has become mainstream, and my conversations with colleagues 
              and strangers curious about positive psychology are different. Given that people have developed 
              opinions about it, and they either embrace it or approach it with scepticism, I savour meaningful 
              discussions, spending hours exploring various perspectives on its research and practice."
            </p>
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
              Seligman, M. E. P., & Csikszentmihalyi, M. (2000). Positive psychology: An introduction. 
              <em>American Psychologist, 55</em>(1), 5–14.
            </p>
            <p>
              Sheldon, K. M., & King, L. (2001). Why positive psychology is necessary. 
              <em>American Psychologist, 56</em>(3), 216–217.
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
          <p style={{ color: '#64748b', marginBottom: 24, fontSize: 15 }}>
            Take a moment to reflect on what you've learned. Consider journaling your thoughts.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'How did you first discover positive psychology? What drew you to it?',
              'Think about your own experience with traditional psychology or self-help. Did it focus more on problems or on strengths?',
              'Which of the three pillars (experiences, traits, or institutions) resonates most with you and why?'
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
          <Link href="/modules/1" style={{
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
            Back to Module
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

          <Link href="/modules/1/lessons/2" style={{
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
