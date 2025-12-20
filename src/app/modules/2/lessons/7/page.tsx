'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson7Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      <nav style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: '#86efac' }} />
              </div>
              <span style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>Positive Psychology</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Dashboard', 'Modules', 'Journal', 'Assessments', 'AI Coach'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '')}`} style={{ color: item === 'Modules' ? '#ffffff' : 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 8, background: item === 'Modules' ? 'rgba(255,255,255,0.15)' : 'transparent' }}>{item}</Link>
            ))}
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
        </div>
      </nav>

      <div style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link><span>/</span>
            <Link href="/modules/2" style={{ color: '#64748b', textDecoration: 'none' }}>The Primer to Wellbeing</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 7</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 7 of 7 - Final Lesson</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Additional Components of Wellbeing</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Hope, optimism, self-compassion, and authenticity</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Hope</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Hope</strong> is more than just wishful thinking. According to <strong>C.R. Snyder's Hope Theory</strong>, 
            hope consists of two components: <strong>pathways thinking</strong> (the ability to generate routes to goals) 
            and <strong>agency thinking</strong> (the motivation to use those pathways). Hopeful people believe they can 
            find ways to achieve their goals and have the willpower to pursue them.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, margin: '32px 0', display: 'flex', gap: 24 }}>
            <div style={{ flex: 1, textAlign: 'center', padding: 20, background: '#ffffff', borderRadius: 8, border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🛤️</div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>Pathways</h4>
              <p style={{ fontSize: 14, color: '#64748b' }}>The ability to generate routes to reach goals</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: 20, background: '#ffffff', borderRadius: 8, border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>⚡</div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>Agency</h4>
              <p style={{ fontSize: 14, color: '#64748b' }}>The motivation and willpower to pursue those paths</p>
            </div>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Optimism</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Optimism</strong> is the tendency to expect positive outcomes and interpret events in a positive way. 
            Optimistic people tend to have an <strong>explanatory style</strong> that views setbacks as temporary, specific, 
            and external, rather than permanent, pervasive, and personal. Research consistently shows that optimism is 
            associated with better health outcomes, greater persistence, and higher wellbeing.
          </p>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Self-Compassion</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Kristin Neff</strong> defines self-compassion as treating yourself with the same kindness you would 
            offer a good friend. It comprises three elements:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              { title: 'Self-Kindness', desc: 'Being warm and understanding toward ourselves when we suffer or fail, rather than being harshly self-critical' },
              { title: 'Common Humanity', desc: 'Recognizing that suffering and personal inadequacy are part of the shared human experience' },
              { title: 'Mindfulness', desc: 'Holding painful thoughts and feelings in balanced awareness rather than over-identifying with them' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 12, padding: 20, border: '1px solid #bbf7d0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 15, color: '#166534', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Authenticity</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Authenticity</strong> involves being true to oneself - owning one's personal experiences, thoughts, 
            emotions, and beliefs, and acting in accord with the true self. Authentic people express themselves genuinely 
            rather than conforming to others' expectations. Research shows that authenticity is strongly linked to 
            wellbeing and life satisfaction.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are."
            </p>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 16 }}>- Brené Brown</p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Snyder, C. R. (2002). Hope theory: Rainbows in the mind. <em>Psychological Inquiry, 13</em>(4), 249-275.</p>
            <p style={{ marginBottom: 12 }}>Neff, K. D. (2003). Self-compassion: An alternative conceptualization of a healthy attitude toward oneself. <em>Self and Identity, 2</em>(2), 85-101.</p>
            <p>Seligman, M. E. P. (2006). <em>Learned optimism: How to change your mind and your life.</em> Vintage Books.</p>
          </div>
        </div>

        {/* Module Completion */}
        <div style={{ 
          background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', 
          borderRadius: 16, padding: 48, marginBottom: 32, textAlign: 'center', color: '#ffffff'
        }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Congratulations!</h2>
          <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 24, maxWidth: 500, margin: '0 auto 24px auto' }}>
            You have completed Module 2: The Primer to Wellbeing. You now understand the major wellbeing models, 
            components, and factors that contribute to human flourishing.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modules" style={{ background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              Back to Modules
            </Link>
            <Link href="/assessments/strengths" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Take Strengths Assessment
            </Link>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Module Reflection</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'What was the most valuable concept you learned in this module?',
              'How has your understanding of wellbeing evolved through these lessons?',
              'Which wellbeing component will you focus on developing first?',
              'How will you apply what you have learned to your daily life?'
            ].map((q, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/modules/2/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Module Complete</> : 'Complete Module 2'}
          </button>
          <Link href="/modules" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            All Modules<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
