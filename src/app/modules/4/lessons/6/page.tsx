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
            <Link href="/modules/4" style={{ color: '#64748b', textDecoration: 'none' }}>Maximising Impact</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 6</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 6 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Self-Determination Theory</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>The science of intrinsic motivation and lasting change</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>

          {/* Jolanta's Story - Sales A-Team */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>Consulting with a Sales Team</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I was once invited to consult with an organisation to help them explain why their sales A-team, 
              especially created for cold calling clients, were not successful, even though they all had outstanding 
              track records in other departments. The leadership wondered if it was the market, their leadership, or 
              the people. After interviewing staff and observing how they work, I concluded that it all boiled down 
              to self-determination theory. The team leader kept pushing extrinsic motivation to such an extent that 
              they lost the enjoyment of their work, leading to lack of intrinsic motivation. Small tweaks on how 
              the team was led resulted in significant improvements."
            </p>
          </div>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The Motivation Continuum</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Self-Determination Theory</strong> explains our varying energy levels and persistence in pursuing 
            different tasks. Motivation exists on a continuum from external to intrinsic.
          </p>

          {/* Motivation Spectrum */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, marginBottom: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 16, textAlign: 'center' }}>From External to Intrinsic</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'External', desc: 'Compliance, fear of punishment', color: '#dc2626' },
                { label: 'Introjected', desc: 'Ego-driven, "should" do it', color: '#f59e0b' },
                { label: 'Identified', desc: 'Valued but not enjoyed', color: '#22c55e' },
                { label: 'Integrated', desc: 'Congruent with self', color: '#3b82f6' },
                { label: 'Intrinsic', desc: 'Pure enjoyment', color: '#8b5cf6' }
              ].map((item, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: 8, background: item.color, borderRadius: i === 0 ? '4px 0 0 4px' : i === 4 ? '0 4px 4px 0' : 0 }} />
                  <p style={{ fontSize: 12, fontWeight: 600, color: item.color, marginTop: 8 }}>{item.label}</p>
                  <p style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
              <span style={{ fontSize: 11, color: '#dc2626', fontWeight: 500 }}>← Less Sustainable</span>
              <span style={{ fontSize: 11, color: '#8b5cf6', fontWeight: 500 }}>More Sustainable →</span>
            </div>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>The Three Core Needs</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Sheldon and Ryan argue that combining self-determination theory with positive psychology interventions 
            is a "marriage made in heaven". Three core needs support intrinsic motivation:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, border: '1px solid #bbf7d0', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>Autonomy</h3>
              <p style={{ fontSize: 14, color: '#166534', lineHeight: 1.6 }}>
                The sense that we have choice to select the best course of action. Freedom to choose practices that 
                resonate with us.
              </p>
            </div>
            <div style={{ background: '#eff6ff', borderRadius: 12, padding: 24, border: '1px solid #bfdbfe', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📈</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1d4ed8', marginBottom: 8 }}>Competence</h3>
              <p style={{ fontSize: 14, color: '#1e3a8a', lineHeight: 1.6 }}>
                Awareness that we are improving our skills. The growing sense that we know how to improve our 
                wellbeing.
              </p>
            </div>
            <div style={{ background: '#fdf4ff', borderRadius: 12, padding: 24, border: '1px solid #f5d0fe', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🤝</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#a21caf', marginBottom: 8 }}>Relatedness</h3>
              <p style={{ fontSize: 14, color: '#86198f', lineHeight: 1.6 }}>
                Feeling connected and experiencing a sense of belonging. Social connection in our wellbeing journey.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits. <em>Psychological Inquiry, 11</em>(4), 227-268.</p>
            <p>Sheldon, K. M., & Ryan, R. M. (2011). Positive psychology and self-determination theory. <em>Social and Personality Psychology Compass, 5</em>(11), 785-800.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Where on the motivation continuum are you with your wellbeing practices?', 'Which of the three needs - autonomy, competence, or relatedness - feels most fulfilled in your life?', 'How might you shift from extrinsic to more intrinsic motivation for your wellbeing goals?'].map((q, i) => (
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
          <Link href="/modules/4/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/4/lessons/7" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
