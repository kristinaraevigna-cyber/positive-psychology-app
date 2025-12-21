'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson6Page() {
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 6</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 6 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Workplace Wellbeing</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Creating thriving organisations</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>

          {/* Jolanta's Story - Angry Colleague */}
          <div style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fef2f2 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #dc2626' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#7f1d1d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>When Wellbeing Becomes a Beating Stick</p>
              </div>
            </div>
            <p style={{ color: '#7f1d1d', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I recently chatted with one of my English colleagues who half-jokingly said, 'Do not talk to me 
              about workplace wellbeing – it makes me mad!' Her organisation introduced an obligatory wellbeing 
              assessment at the end of each week. Employees who don't complete it are pestered daily with reminders. 
              The results are forwarded to HR, who contacts line managers if scores are low. What was intended as 
              a reflective, self-motivating tool became a beating stick for all staff involved. This highlights 
              how organisations can have good intentions but quickly get it wrong."
            </p>
          </div>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The What, Why, and How</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Page and Vella-Brodrick (2009) explored these three dimensions of workplace wellbeing, providing 
            a framework that could help organisations avoid the mistakes described above.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 20, border: '1px solid #bbf7d0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 12 }}>The What</h3>
              <p style={{ fontSize: 14, color: '#166534', lineHeight: 1.6 }}>
                Workplace wellbeing includes job satisfaction and work-related effects - the balance of 
                positive and negative emotions at work.
              </p>
            </div>
            <div style={{ background: '#eff6ff', borderRadius: 12, padding: 20, border: '1px solid #bfdbfe' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1d4ed8', marginBottom: 12 }}>The Why</h3>
              <p style={{ fontSize: 14, color: '#1e3a8a', lineHeight: 1.6 }}>
                Better retention, increased performance, reduced absenteeism. Organisations get financial 
                return on wellbeing investment.
              </p>
            </div>
            <div style={{ background: '#fdf4ff', borderRadius: 12, padding: 20, border: '1px solid #f5d0fe' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#a21caf', marginBottom: 12 }}>The How</h3>
              <p style={{ fontSize: 14, color: '#86198f', lineHeight: 1.6 }}>
                Frameworks like Gallup engagement and VIA character strengths offer practical strategies 
                for increasing engagement.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>The Power of Strengths at Work</h3>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, marginBottom: 32, border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              <div style={{ textAlign: 'center', padding: 20, background: '#f0fdf4', borderRadius: 8 }}>
                <p style={{ fontSize: 36, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>9x</p>
                <p style={{ fontSize: 14, color: '#166534' }}>more likely to flourish if high awareness of strengths</p>
              </div>
              <div style={{ textAlign: 'center', padding: 20, background: '#f0fdf4', borderRadius: 8 }}>
                <p style={{ fontSize: 36, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>18x</p>
                <p style={{ fontSize: 14, color: '#166534' }}>more likely to flourish if using strengths regularly at work</p>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Page, K. M., & Vella-Brodrick, D. A. (2009). The 'what', 'why' and 'how' of employee well-being. <em>Social Indicators Research, 90</em>(3), 441-458.</p>
            <p>Hone, L. C., et al. (2015). Measuring flourishing. <em>International Journal of Wellbeing, 5</em>(3), 62-90.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['How well does your workplace support employee wellbeing?', 'Are you aware of your top strengths? Do you use them regularly at work?', 'What would make workplace wellbeing initiatives more effective in your experience?'].map((q, i) => (
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
          <Link href="/modules/5/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/5/lessons/7" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
