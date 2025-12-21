'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson5Page() {
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
            <Link href="/modules/4" style={{ color: '#64748b', textDecoration: 'none' }}>Maximising Impact</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 5</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 5 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Synergistic Change Model</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>How change in one area cascades to others</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>

          {/* Jolanta's Story - Symbol Film */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On a Bizarre Film</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I watched an absorbing, albeit slightly bizarre, film a few years ago. It was Hitoshi Matsumoto's 
              'Symbol'. A man wakes up in captivity in a white room with no windows or doors. Suddenly, he sees 
              something sticking on a wall, and as soon as he presses it, random objects fall out of the walls. 
              Each action he takes causes an unpredictable reaction. This reminds me of the Synergistic Change 
              Model - the chain reaction of changes we make in life; sometimes the outcomes are easy to see, 
              otherwise they seem unexpected. These changes are like pushing one button, only to realise several 
              other buttons have come out."
            </p>
          </div>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The Core Principle</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            The <strong>Synergistic Change Model</strong> by Reuben Rusk and colleagues emphasises the dynamic 
            nature of interactions between domains. A change in one domain can trigger a cascade of effects in 
            other domains, creating either positive spirals or setbacks.
          </p>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Three Types of Interactions</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <div style={{ background: '#fef2f2', borderRadius: 12, padding: 24, border: '1px solid #fecaca' }}>
              <h4 style={{ fontSize: 17, fontWeight: 600, color: '#dc2626', marginBottom: 8 }}>1. Relapse</h4>
              <p style={{ fontSize: 15, color: '#7f1d1d', lineHeight: 1.7 }}>
                Changes can sometimes cause negative knock-on effects. For example, setting a goal may increase 
                awareness of the gap between actions and values, increasing negative emotions and making it 
                harder to meet the initial goal.
              </p>
            </div>

            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, border: '1px solid #bbf7d0' }}>
              <h4 style={{ fontSize: 17, fontWeight: 600, color: '#166534', marginBottom: 8 }}>2. Spill-over</h4>
              <p style={{ fontSize: 15, color: '#14532d', lineHeight: 1.7 }}>
                Positive interactions that work to our advantage. Setting a relationship goal may increase 
                awareness of connection, encourage help-seeking coping strategies, and improve multiple domains 
                simultaneously.
              </p>
            </div>

            <div style={{ background: '#eff6ff', borderRadius: 12, padding: 24, border: '1px solid #bfdbfe' }}>
              <h4 style={{ fontSize: 17, fontWeight: 600, color: '#1d4ed8', marginBottom: 8 }}>3. Synergy</h4>
              <p style={{ fontSize: 15, color: '#1e3a8a', lineHeight: 1.7 }}>
                The "tray tip" effect - when non-linear change occurs, causing permanent transformation. 
                The new behaviour becomes so embedded in our psyche that it becomes a stable part of our lives.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Three Strategies for "Tipping the System"</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { num: 1, title: 'Target Pivotal Elements', desc: 'Focus on domains that have potent impact on others, like positive emotions' },
              { num: 2, title: 'Leverage Strengths', desc: 'Use existing strengths and values to guide engagement in interventions' },
              { num: 3, title: 'Create Connections', desc: 'Design interventions that naturally link multiple domains' }
            ].map((item) => (
              <div key={item.num} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#14532d', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, margin: '0 auto 12px auto' }}>{item.num}</div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p>Rusk, R. D., et al. (2018). Synergistic change model. <em>International Journal of Wellbeing, 8</em>(1), 1-22.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Think of a positive change you made. How did it affect other areas of your life?', 'Which domain might be your "pivotal element" - the one that impacts all others most?', 'Have you ever experienced the "tray tip" effect - a change that became permanent?'].map((q, i) => (
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
          <Link href="/modules/4/lessons/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/4/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
