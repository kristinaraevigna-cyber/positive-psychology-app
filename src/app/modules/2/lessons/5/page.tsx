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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 5</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 5 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Resilience & Growth</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Bouncing back from adversity and growing through challenges</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Understanding Resilience</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Resilience is the capacity to recover quickly from difficulties - the ability to spring back into shape 
            after being bent, stretched, or compressed. In psychological terms, it refers to the process of adapting 
            well in the face of adversity, trauma, tragedy, threats, or significant sources of stress.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "Resilience is not a trait that people either have or do not have. It involves behaviors, thoughts, 
              and actions that can be learned and developed by anyone."
            </p>
          </div>

          {/* Resilience Factors */}
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 20 }}>Key Factors in Resilience</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Social Support', desc: 'Having caring, supportive relationships within and outside the family' },
              { title: 'Realistic Planning', desc: 'The capacity to make realistic plans and take steps to carry them out' },
              { title: 'Self-View', desc: 'A positive view of yourself and confidence in your strengths and abilities' },
              { title: 'Communication', desc: 'Skills in communication and problem-solving' },
              { title: 'Emotional Regulation', desc: 'The capacity to manage strong feelings and impulses' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Posttraumatic Growth</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            While resilience is about bouncing back, <strong>posttraumatic growth</strong> goes further - it is about 
            being transformed by the experience, emerging with new strengths, perspectives, or capabilities that were 
            not present before the adversity occurred.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'New Possibilities', desc: 'Identifying new opportunities or paths in life' },
              { title: 'Relating to Others', desc: 'Improved relationships and greater compassion' },
              { title: 'Personal Strength', desc: 'Increased sense of personal strength' },
              { title: 'Spiritual Change', desc: 'Spiritual development or existential change' },
              { title: 'Appreciation of Life', desc: 'Greater appreciation for life in general' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 12, padding: 18, border: '1px solid #bbf7d0' }}>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: '#14532d', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#166534', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Stress Mindset</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Research has shown that our <strong>mindset about stress</strong> can affect how we respond to it. 
            Viewing stress as enhancing rather than debilitating can lead to better performance, improved health, 
            and greater wellbeing. This doesn't mean seeking out stress, but rather reframing our relationship with it.
          </p>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Tedeschi, R. G., & Calhoun, L. G. (2004). Posttraumatic growth: Conceptual foundations and empirical evidence. <em>Psychological Inquiry, 15</em>(1), 1-18.</p>
            <p>Crum, A. J., Salovey, P., & Achor, S. (2013). Rethinking stress: The role of mindsets in determining the stress response. <em>Journal of Personality and Social Psychology, 104</em>(4), 716-733.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Think of a difficult time you have overcome. What helped you get through it?', 'Can you identify any ways you have grown as a result of past challenges?', 'How do you typically think about stress? Could reframing it change your experience?'].map((q, i) => (
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
          <Link href="/modules/2/lessons/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/2/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
