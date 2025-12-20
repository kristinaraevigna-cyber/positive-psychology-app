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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 3</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 3 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Meaning, Accomplishment & Relationships</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Three core pillars that contribute to a flourishing life</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Life Meaning and Purpose</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Purpose in life is a sense of direction. It relates to having goals and intentions that make life meaningful. 
            Our purpose evolves throughout our lifespan, changing depending on what becomes meaningful to us. It is 
            essential to feel that life is meaningful and that we have already contributed to it.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "When life lacks direction and we have no outlook, it becomes meaningless, negatively impacting wellbeing."
            </p>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 16 }}>- From The Foundation of Positive Psychology</p>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Accomplishment</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Accomplishment involves pursuing and achieving goals, mastering skills, and experiencing success. 
            It is not just about winning or external validation, but about the intrinsic satisfaction that 
            comes from effort, growth, and achieving what we set out to do. Accomplishment contributes to 
            our sense of competence and self-efficacy.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Intrinsic Goals', desc: 'Pursuing goals aligned with personal values and growth' },
              { title: 'Mastery', desc: 'Developing competence and expertise in meaningful areas' },
              { title: 'Progress', desc: 'Experiencing forward movement towards important objectives' },
              { title: 'Achievement', desc: 'Completing challenging tasks and reaching milestones' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Positive Relationships</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Positive relations with others</strong> are about having warm and trusting relationships, 
            whether in immediate or extended circles. It is associated with experiencing deep empathy for others, 
            expressing affection, and being able to experience intimacy. A person who has positive relations 
            tends to care for other people and understands the concept of give and take in a relationship.
          </p>

          <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #bbf7d0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 16 }}>Key Elements of Positive Relationships</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {['Warmth and trust', 'Deep empathy for others', 'Capacity for intimacy', 'Ability to compromise', 'Caring for others\' wellbeing'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, fontSize: 15, color: '#166534' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Seligman, M. E. P. (2011). <em>Flourish: A visionary new understanding of happiness and well-being.</em> Free Press.</p>
            <p>Steger, M. F. (2009). Meaning in life. In S. J. Lopez & C. R. Snyder (Eds.), <em>Oxford handbook of positive psychology</em> (2nd ed., pp. 679-687).</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['What gives your life the most meaning right now?', 'Think of a recent accomplishment. How did achieving it contribute to your wellbeing?', 'Who are the people in your life with whom you have the most positive relationships? What makes those relationships work?'].map((q, i) => (
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
          <Link href="/modules/2/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/2/lessons/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
