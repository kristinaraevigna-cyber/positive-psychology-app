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
            <Link href="/modules/3" style={{ color: '#64748b', textDecoration: 'none' }}>Interventions & Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 6</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 6 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Additional Interventions</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>More evidence-based practices for wellbeing</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 32 }}>
            Beyond the core interventions, positive psychology offers a rich toolkit of additional practices 
            for enhancing wellbeing. Here we explore some of the most promising approaches.
          </p>

          {/* Interventions Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            
            {/* Humour */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Humour</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                Humour serves as both a coping mechanism and a wellbeing enhancer. Interventions include keeping a 
                humour diary, practising finding the funny side of daily hassles, and intentionally seeking out 
                comedy. Research shows that affiliative humour (used to enhance relationships) is particularly 
                beneficial for wellbeing.
              </p>
            </div>

            {/* Optimism */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Optimism Training</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                Based on Martin Seligman's work on <strong>learned optimism</strong>, these interventions help people 
                shift their explanatory style. When bad things happen, optimists see them as temporary, specific, 
                and external rather than permanent, pervasive, and personal.
              </p>
              <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 20, border: '1px solid #bbf7d0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>The ABCDE Model</h4>
                <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 15, color: '#166534', lineHeight: 1.8 }}>
                  <li><strong>A</strong>dversity - The challenging event</li>
                  <li><strong>B</strong>elief - Your interpretation of it</li>
                  <li><strong>C</strong>onsequence - How you feel and act</li>
                  <li><strong>D</strong>isputation - Challenge negative beliefs</li>
                  <li><strong>E</strong>nergisation - The new outcome</li>
                </ul>
              </div>
            </div>

            {/* Awe Walk */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Awe Walks</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                An <strong>awe walk</strong> is a deliberate practice of walking while attending to the vastness around 
                you - whether in nature, architecture, or art. Research shows that experiencing awe regularly can 
                reduce inflammation, increase generosity, and enhance wellbeing.
              </p>
              <div style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 8 }}>How to Practice</h4>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7 }}>
                  During your walk, shift your attention outward. Notice the vastness of nature, the intricacy of 
                  a leaf, the expanse of the sky, or the detail in historic architecture. Let yourself feel small 
                  in a good way.
                </p>
              </div>
            </div>

            {/* Nine Beautiful Things */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Nine Beautiful Things</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                This simple intervention involves noticing and recording nine beautiful things each day. It trains 
                attention toward aesthetic appreciation and can shift habitual negativity bias toward noticing 
                what is good and beautiful in the world.
              </p>
            </div>

            {/* Meaning & Purpose */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Meaning & Purpose Interventions</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                These interventions help people clarify what matters most to them and align their lives accordingly. 
                Examples include values clarification exercises, writing about meaningful experiences, and 
                identifying personal life themes.
              </p>
            </div>

            {/* Courage */}
            <div>
              <h2 style={{ fontSize: 22, color: '#111827', fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>Courage</h2>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                Courage interventions involve deliberately practising small acts of bravery. This might include 
                speaking up in a meeting, trying something new, or having a difficult conversation. Each small 
                act builds the "courage muscle" over time.
              </p>
            </div>

          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Seligman, M. E. P. (2006). <em>Learned optimism: How to change your mind and your life.</em> Vintage Books.</p>
            <p>Keltner, D., & Haidt, J. (2003). Approaching awe, a moral, spiritual, and aesthetic emotion. <em>Cognition and Emotion, 17</em>(2), 297-314.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Which of these additional interventions appeals to you most? Why?', 'When did you last experience awe? What triggered it?', 'How might you incorporate more humour into your daily life?'].map((q, i) => (
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
          <Link href="/modules/3/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/3/lessons/7" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
