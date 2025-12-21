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
            <Link href="/modules/5" style={{ color: '#64748b', textDecoration: 'none' }}>Multidisciplinary Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 1</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 1 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Positive Health</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Where positive psychology meets healthcare</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>

          {/* Jolanta's Story - Colleague Discussion */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Different Perspectives</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "A few months ago, I met with a colleague whose research delved into positive health. Initially, 
              we were both excited about our merging interests, but after 15 minutes of discussion, we began to 
              see the differences in how we conceptualised the merging of health and wellbeing. I was focused on 
              bringing together positive psychology and lifestyle medicine; she was focused on psycho-social models 
              that supported health. This is not unusual in academia - it is also beautiful to work in multidisciplinary 
              teams where your views are considered and respected regardless of your stance."
            </p>
          </div>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Four Approaches to Positive Health</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            From a systematic review of 41 publications, researchers found four different approaches to 
            conceptualising positive health.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, border: '1px solid #bbf7d0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>1. Positive Health as Wellbeing</h3>
              <p style={{ fontSize: 15, color: '#166534', lineHeight: 1.7 }}>
                From <strong>Seligman</strong>: Health beyond absence of disease - combining physical wellbeing, 
                biological factors (like HRV), and functional factors. From <strong>Carol Ryff</strong>: Encompassing 
                the whole person including meaning, environmental mastery, and vocational wellbeing. The MIDUS 
                longitudinal study exemplifies this approach.
              </p>
            </div>

            <div style={{ background: '#eff6ff', borderRadius: 12, padding: 24, border: '1px solid #bfdbfe' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1d4ed8', marginBottom: 8 }}>2. Positive Health as Resilience</h3>
              <p style={{ fontSize: 15, color: '#1e3a8a', lineHeight: 1.7 }}>
                Based on the <strong>salutogenesis model</strong> - individuals can resist adversities or experience 
                wellbeing even when health is failing. The Health Asset Model defines health assets as factors that 
                help individuals and communities attain and maintain good health.
              </p>
            </div>

            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24, border: '1px solid #fde68a' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#92400e', marginBottom: 8 }}>3. Positive Health as Capacities</h3>
              <p style={{ fontSize: 15, color: '#78350f', lineHeight: 1.7 }}>
                Informed by <strong>Machteld Huber</strong>: Health as managing oneself in the context of social, 
                physical, and emotional challenges. When a patient comes in with ailments, this approach considers 
                not only physical condition but also social context and emotional coping.
              </p>
            </div>

            <div style={{ background: '#fdf4ff', borderRadius: 12, padding: 24, border: '1px solid #f5d0fe' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#a21caf', marginBottom: 8 }}>4. Lifestyle Medicine Integration</h3>
              <p style={{ fontSize: 15, color: '#86198f', lineHeight: 1.7 }}>
                At <strong>RCSI University</strong>, the focus is on combining positive psychology with lifestyle 
                medicine - a medical specialty helping people change their lifestyle to improve health - creating 
                a powerful tool for improving health and wellbeing.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Bodryzlova, Y., & Moullec, G. (2023). Definitions of positive health: A systematic scoping review. <em>Global Health Promotion</em>.</p>
            <p>Ryff, C. D., et al. (2004). Positive health: Connecting well-being with biology. <em>Philosophical Transactions of the Royal Society B</em>.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Which approach to positive health resonates most with your view of wellbeing?', 'How might integrating psychological wellbeing improve physical health outcomes?', 'What lifestyle factors could you change to improve both your physical and psychological health?'].map((q, i) => (
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
          <Link href="/modules/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Module</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/5/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
