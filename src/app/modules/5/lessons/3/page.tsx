'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson3Page() {
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
            <Link href="/modules/5" style={{ color: '#64748b', textDecoration: 'none' }}>Multidisciplinary Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 3</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 3 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Positive Psychotherapy</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Integrating strengths into clinical practice</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Strength-Based Approach to Therapy</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Positive Psychotherapy</strong> represents a shift in clinical practice - from focusing solely 
            on reducing symptoms to also building strengths, meaning, and positive emotions. It complements 
            traditional approaches by addressing what's right with people, not just what's wrong.
          </p>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>The Dual Continuum Model</h3>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Mental health and mental illness exist on two separate continua. A person can have a mental illness 
            and still experience high wellbeing, or have no diagnosed condition yet languish. This model suggests 
            that treatment should address both dimensions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#fef2f2', borderRadius: 12, padding: 24, border: '1px solid #fecaca' }}>
              <h4 style={{ fontSize: 17, fontWeight: 600, color: '#dc2626', marginBottom: 12 }}>Traditional Focus</h4>
              <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 15, color: '#7f1d1d', lineHeight: 1.7 }}>
                <li>Reduce symptoms</li>
                <li>Treat disorders</li>
                <li>Fix what's wrong</li>
                <li>Manage illness</li>
              </ul>
            </div>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, border: '1px solid #bbf7d0' }}>
              <h4 style={{ fontSize: 17, fontWeight: 600, color: '#166534', marginBottom: 12 }}>Positive Additions</h4>
              <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 15, color: '#14532d', lineHeight: 1.7 }}>
                <li>Build strengths</li>
                <li>Create meaning</li>
                <li>Enhance wellbeing</li>
                <li>Foster flourishing</li>
              </ul>
            </div>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Wellbeing Therapy</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Giovanni Fava's Wellbeing Therapy</strong> is a specific approach based on Ryff's model of 
            psychological wellbeing. It targets the six dimensions: autonomy, environmental mastery, personal 
            growth, positive relations, purpose in life, and self-acceptance.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "The role of mental health in recovery from mental illness is increasingly recognised. 
              Building wellbeing isn't just nice to have - it's essential for complete recovery."
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Seligman, M. E. P., Rashid, T., & Parks, A. C. (2006). Positive psychotherapy. <em>American Psychologist, 61</em>(8), 774-788.</p>
            <p>Fava, G. A., & Ruini, C. (2003). Development and characteristics of a well-being enhancing psychotherapeutic strategy. <em>Journal of Behavior Therapy and Experimental Psychiatry, 34</em>(1), 45-63.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['How might a dual focus on reducing problems AND building strengths benefit you?', 'Which of Ryff\'s six dimensions do you most need to develop?', 'How could positive psychology complement traditional mental health support?'].map((q, i) => (
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
          <Link href="/modules/5/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/5/lessons/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
