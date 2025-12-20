'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson2Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      <nav style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 20, height: 20, borderRadius: 4, background: '#86efac' }} /></div>
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
            <Link href="/modules/3" style={{ color: '#64748b', textDecoration: 'none' }}>Interventions & Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 2</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 2 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Gratitude & Best Possible Self</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Two foundational interventions for enhancing wellbeing</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Counting Blessings</h2>

          {/* Jolanta's Story */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Teaching Gratitude</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "Whenever I ask new students at our university to give me an example of a positive psychology 
              intervention, 99% of the time, they mention gratitude. This is one of the most common activities 
              that springs to mind."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            In the original article, <strong>Robert Emmons and Michael McCullough</strong> conducted a series 
            of studies comparing counting blessings to counting burdens and neutral events in life. The counting 
            blessings group reported the highest levels of wellbeing compared to the other groups. This article 
            was the beginning of an avalanche of research on gratitude.
          </p>

          {/* Original Instructions */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>The Original Gratitude Practice</h3>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>
              Think back over the past week and write down <strong>up to five things</strong> you are grateful for. 
              These can be large or small, from the mundane to the magnificent.
            </p>
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Variations of Gratitude Practices</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Three Good Things', desc: 'Write three things that went well today and why they happened' },
              { title: 'Gratitude Letter', desc: 'Write a letter to someone expressing your gratitude for them' },
              { title: 'Gratitude Visit', desc: 'Deliver your gratitude letter in person and read it aloud' },
              { title: 'Gratitude Journal', desc: 'Keep an ongoing record of things you appreciate' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 12, padding: 20, border: '1px solid #bbf7d0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: '#166534', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Best Possible Self</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            The <strong>Best Possible Self</strong> intervention involves imagining your life in the future, 
            assuming everything has gone as well as it possibly could. You have worked hard and accomplished 
            all your life goals. This visualisation technique has been shown to increase optimism and positive affect.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>How to Practice</h3>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 16, color: '#374151', lineHeight: 2 }}>
              <li>Set aside 20 minutes in a quiet place</li>
              <li>Think about your life in the future (1-10 years from now)</li>
              <li>Imagine everything has gone as well as it possibly could</li>
              <li>You have achieved all your goals in every domain: career, relationships, health, personal</li>
              <li>Write about this future in vivid detail</li>
              <li>Repeat for 4 consecutive days</li>
            </ol>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "The Best Possible Self intervention works by increasing optimism and helping people clarify 
              their goals and values, which in turn motivates goal-directed behaviour."
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Emmons, R. A., & McCullough, M. E. (2003). Counting blessings versus burdens. <em>Journal of Personality and Social Psychology, 84</em>(2), 377-389.</p>
            <p>King, L. A. (2001). The health benefits of writing about life goals. <em>Personality and Social Psychology Bulletin, 27</em>(7), 798-807.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['What are five things you are grateful for right now?', 'If everything went perfectly in your life over the next five years, what would that look like?', 'Who would you write a gratitude letter to, and what would you say?'].map((q, i) => (
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
          <Link href="/modules/3/lessons/1" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/3/lessons/3" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
