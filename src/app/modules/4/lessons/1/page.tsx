'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson1Page() {
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 1</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 1 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Wellbeing Online</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Designing effective digital positive psychology interventions</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          {/* Jolanta's Story - Failed Programme */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On a Comprehensive Programme That Failed</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "My university colleagues in the positive psychology field once designed a comprehensive wellbeing 
              programme. It contained the best interventions in positive psychology, starting with knowledge-enhancement, 
              developing skills, and practising interventions. Their content was awe-inspiring. Even though I love 
              this area of research very much, I don't think I could develop a more comprehensive programme than this. 
              Yet, despite their best efforts, the programme failed at the efficacy testing stage because the way 
              it was designed and delivered to participants did not work. Real life, combined with an online 
              intervention, needed additional considerations. Yet cyber psychologists were not involved in its design."
            </p>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Three Critical Factors for Online Success</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Acacia Parks</strong> has explored this topic in detail and identified three specific factors 
            that impact the efficacy of online interventions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
            
            {/* Factor 1: User Engagement */}
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#14532d', marginBottom: 16 }}>1. User Engagement</h3>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 16 }}>
                Attrition is a vital issue in online design. When individuals do not engage in an intervention, 
                no positive change is reported. Three factors impact user engagement:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { title: 'Relative Advantage', desc: 'Something unique the platform offers that others don\'t - social networking, word of mouth, or special features' },
                  { title: 'Compatibility', desc: 'Match between the user\'s goals and preferences. Tailoring interventions to individual needs is paramount' },
                  { title: 'Observability', desc: 'The user\'s ability to assess their progress. Seeing clear progress motivates continued engagement' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: 16, background: '#ffffff', borderRadius: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</p>
                      <p style={{ fontSize: 14, color: '#64748b' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor 2: Dosage */}
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#14532d', marginBottom: 16 }}>2. Dosage</h3>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>
                Research indicates that people searching for happiness apps prefer to practise several interventions 
                simultaneously. Those who practise <strong>four activities</strong> tend to report the best results. 
                The balance of interaction that suits the person and their time on it matters.
              </p>
            </div>

            {/* Factor 3: User Choice */}
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#14532d', marginBottom: 16 }}>3. User Choice</h3>
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>
                Users like having access to additional activities even if they might not choose the most effective ones. 
                Popular activities like goal setting tend to be less effective, yet users gravitate towards them. 
                It's crucial to offer preferred activities while guiding users toward more impactful interventions.
              </p>
            </div>
          </div>

          <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #bbf7d0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 12 }}>Key Takeaway</h3>
            <p style={{ fontSize: 16, color: '#166534', lineHeight: 1.7 }}>
              These guidelines are critical for designing any online intervention. They show the need to do it wisely 
              - keeping participants interested, making them return to the site, and giving them choices, regardless 
              of how effective those choices might be for them.
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p>Parks, A. C. (2014). A case for the advancement of the design and study of online positive psychological interventions. <em>The Journal of Positive Psychology, 9</em>(6), 502-508.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['What features of this course keep you engaged? What could be improved?', 'How many different wellbeing practices are you currently using? Is there an optimal number for you?', 'Do you prefer being guided to specific interventions or having complete freedom to choose?'].map((q, i) => (
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
          <Link href="/modules/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Module</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/4/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
