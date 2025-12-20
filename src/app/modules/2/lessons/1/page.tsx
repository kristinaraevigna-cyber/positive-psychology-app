'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson1Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
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
                width: 36, height: 36, borderRadius: 8,
                background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: '#86efac' }} />
              </div>
              <span style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>Positive Psychology</span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 8 }}>
            {['Dashboard', 'Modules', 'Journal', 'Assessments', 'AI Coach'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '')}`} style={{
                color: item === 'Modules' ? '#ffffff' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none', fontSize: 14, fontWeight: 500,
                padding: '8px 16px', borderRadius: 8,
                background: item === 'Modules' ? 'rgba(255,255,255,0.15)' : 'transparent'
              }}>{item}</Link>
            ))}
          </div>

          <div style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#ffffff', fontSize: 14, fontWeight: 600
          }}>JB</div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href="/modules/2" style={{ color: '#64748b', textDecoration: 'none' }}>The Primer to Wellbeing</Link>
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
            display: 'inline-block', background: '#f0fdf4', color: '#166534',
            padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16
          }}>
            Lesson 1 of 7
          </div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Wellbeing Models
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Understanding the major frameworks that define what it means to flourish
          </p>
        </div>

        {/* Video Section */}
        <div style={{
          background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>
            Dr. Jolanta Burke introduces the major wellbeing models
          </p>
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          {/* Subjective Wellbeing */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Subjective Wellbeing: The Hedonic Approach
          </h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Ed Diener</strong>, known as "Dr. Happiness," coined the concept of subjective wellbeing 
            when he published his first article in 1984. He has always been fascinated with happiness research, 
            even during times when it was looked down upon. The model of Subjective Wellbeing was the first 
            to emerge and describe wellbeing, aligned with the philosophical stance of hedonism.
          </p>

          {/* Three Elements Box */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>
              The Three Elements of Subjective Wellbeing
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { title: 'High Positive Emotions', desc: 'Experiencing frequent positive emotional states' },
                { title: 'Low Negative Emotions', desc: 'Experiencing fewer negative emotional states' },
                { title: 'Life Satisfaction', desc: 'A cognitive evaluation of how life compares to expectations' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', background: '#14532d',
                    color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 600, flexShrink: 0, marginTop: 2
                  }}>{i + 1}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</p>
                    <p style={{ fontSize: 14, color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Psychological Wellbeing */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Psychological Wellbeing: The Eudaimonic Approach
          </h2>

          {/* Jolanta's Story - Carol Ryff */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#14532d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', fontSize: 14, fontWeight: 600
              }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>Meeting Carol Ryff in Lublin</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "Nestled within the ancient city walls of Lublin's old town in Poland, I met with Carol Ryff 
              on the steps of the Cathedral, where we had a chance to chat before a conference where we 
              were both scheduled to speak. After a warm greeting, we headed to a nearby restaurant 
              serving delicious local food. As we sat in the bustling square, sipping fruit tea with 
              Polish pierogi, our discussion turned towards the Psychological Wellbeing model. I asked 
              Carol what inspired her to create it. Her response was simple: The Subjective Wellbeing 
              model didn't feel right. So, she decided to search the existing literature and draw from 
              the fathers of psychology to see what else matters in life."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Carol Ryff</strong> published her first position article in 1989, in which she critiqued 
            the hedonistic approach to wellbeing and explored alternative perspectives. She examined the 
            broader definitions of hedonism and eudaimonia and discussed differences between happiness 
            and psychological wellbeing.
          </p>

          {/* Six Components Grid */}
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 20 }}>
            The Six Components of Psychological Wellbeing
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Self-Acceptance', desc: 'Having a positive attitude towards oneself, acknowledging both good and bad qualities' },
              { title: 'Positive Relations', desc: 'Warm, trusting relationships with deep empathy and capacity for intimacy' },
              { title: 'Autonomy', desc: 'Ability to think independently and live according to personal standards' },
              { title: 'Environmental Mastery', desc: 'Effectively managing life activities and selecting suitable environments' },
              { title: 'Purpose in Life', desc: 'Having goals and intentions that make life meaningful' },
              { title: 'Personal Growth', desc: 'Continuously developing, expanding perspective, and realizing potential' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0'
              }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mental Health Continuum */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            The Mental Health Continuum
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Corey Keyes</strong> proposed the Mental Health Continuum model, suggesting that mental health 
            exists on a spectrum from languishing to flourishing. This model integrated both hedonic and 
            eudaimonic components, providing a more complete picture of mental health that goes beyond 
            the mere absence of mental illness.
          </p>

          {/* Continuum Visual */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#dc2626' }}>Languishing</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#f59e0b' }}>Moderate Mental Health</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>Flourishing</span>
            </div>
            <div style={{ height: 12, borderRadius: 6, background: 'linear-gradient(90deg, #fecaca 0%, #fef08a 50%, #bbf7d0 100%)' }} />
            <p style={{ fontSize: 14, color: '#64748b', marginTop: 16, textAlign: 'center' }}>
              Mental health is not just the absence of illness, but a continuum of flourishing
            </p>
          </div>

          {/* Key References */}
          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>
            Key References
          </h2>
          
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>
              Diener, E. (1984). Subjective well-being. <em>Psychological Bulletin, 95</em>(3), 542-575.
            </p>
            <p style={{ marginBottom: 12 }}>
              Ryff, C. D. (1989). Happiness is everything, or is it? <em>Journal of Personality and Social Psychology, 57</em>(6), 1069-1081.
            </p>
            <p>
              Keyes, C. L. M. (2002). The mental health continuum. <em>Journal of Health and Social Behavior, 43</em>(2), 207-222.
            </p>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Reflection Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Do you tend to think of wellbeing more in hedonic terms (pleasure and happiness) or eudaimonic terms (meaning and growth)?',
              'Which of Ryff\'s six components do you feel strongest in? Which might need more attention?',
              'Where would you place yourself on the mental health continuum right now?'
            ].map((question, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: '#e0f2fe', color: '#0369a1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0
                  }}>{i + 1}</div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/modules/2" style={{
            display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Module
          </Link>

          <button onClick={() => setIsCompleted(!isCompleted)} style={{
            background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none',
            padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8
          }}>
            {isCompleted ? (
              <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/></svg>Completed</>
            ) : 'Mark as Complete'}
          </button>

          <Link href="/modules/2/lessons/2" style={{
            display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600
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

