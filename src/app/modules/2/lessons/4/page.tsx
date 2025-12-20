'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson4Page() {
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 4</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 4 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Flow & Self-Actualisation</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Finding absorption in activities and growing towards your potential</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The State of Flow</h2>

          {/* Jolanta's Story - Musicians */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>Lunch with Symphony Musicians</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I once had lunch with a group of professional musicians from a national symphony orchestra, 
              when one of them asked me to share a curious positive psychology fact. I immediately thought 
              of 'flow', which is a state of becoming so absorbed in a task that we lose ourselves in what 
              we do, lose track of time, place, and who we are. Everyone around the table related to it. 
              They nodded enthusiastically and shared stories about working through the night not realising 
              dawn was coming, or playing a 3-hour concert that felt like minutes. They had all been there, 
              except for one person. He said that while he really enjoyed playing music, he rarely experienced 
              flow. A few years later, I met him on a university campus. He said he quit his job in the 
              orchestra and was now pursuing a different career. I often wondered if our conversation that 
              day had influenced his decision."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Mihaly Csikszentmihalyi</strong>, the psychologist who pioneered the concept of flow, 
            described it as a state where our entire focus is on the task at hand. What is wonderful about 
            a flow experience is that after we come out of it, we experience a boost of wellbeing, which 
            is so addictive that it makes us crave more flow.
          </p>

          {/* Flow Diagram */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', textAlign: 'center' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 20 }}>The Flow Channel</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>😰</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#dc2626' }}>Anxiety</p>
                <p style={{ fontSize: 12, color: '#64748b' }}>High challenge,<br/>Low skill</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: '#bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, border: '3px solid #22c55e' }}>
                  <span style={{ fontSize: 32 }}>🎯</span>
                </div>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#14532d' }}>FLOW</p>
                <p style={{ fontSize: 12, color: '#64748b' }}>Challenge matches skill</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>😴</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#f59e0b' }}>Boredom</p>
                <p style={{ fontSize: 12, color: '#64748b' }}>Low challenge,<br/>High skill</p>
              </div>
            </div>
          </div>

          {/* Autotelic Personality */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>The Autotelic Personality</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Some of us are fortunate to have an <strong>autotelic personality</strong> that makes us more 
            likely to get into the state of flow. Dwight Tse and colleagues identified the attributes of 
            individuals with an autotelic personality:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 32 }}>
            {['Natural curiosity', 'Persistence in pursuing interests', 'Low self-centeredness', 'Intrinsic motivation', 'Enjoyment of challenges', 'Ability to transform boredom', 'Control of attention'].map((item, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 8, padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontSize: 14, color: '#166534' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Self-Acceptance & Personal Growth */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Self-Acceptance & Personal Growth</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Self-acceptance</strong> relates to having a positive attitude towards oneself, acknowledging 
            and appreciating many aspects of yourself, including accepting good and bad qualities. 
            <strong> Personal growth</strong> is a feeling of continuously developing, growing, and expanding 
            perspective. It is about self-actualisation - that "becoming" which is a hallmark of personal growth.
          </p>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Csikszentmihalyi, M. (1990). <em>Flow: The psychology of optimal experience.</em> Harper & Row.</p>
            <p>Tse, D. C. K., Nakamura, J., & Csikszentmihalyi, M. (2020). Living well by "flowing" well. <em>The Journal of Positive Psychology, 16</em>(3), 310-321.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['When was the last time you experienced flow? What were you doing?', 'What activities could you adjust to create more flow experiences in your life?', 'Which autotelic traits do you already have? Which could you develop?'].map((q, i) => (
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
          <Link href="/modules/2/lessons/3" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/2/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
