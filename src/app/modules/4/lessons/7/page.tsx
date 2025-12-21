'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson7Page() {
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 7</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 7 of 7 - Final Lesson</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Models for Lasting Change</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>The transtheoretical model and sustainable practice</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The Transtheoretical Model</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            The <strong>Transtheoretical Model</strong> (Prochaska & DiClemente) describes change as a process 
            that unfolds over time through a series of stages. Understanding which stage you're in helps you 
            select the right strategies for moving forward.
          </p>

          {/* Stages of Change */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              { stage: 'Precontemplation', desc: 'Not yet considering change. May be unaware there is a problem.', color: '#94a3b8' },
              { stage: 'Contemplation', desc: 'Aware of the need for change but ambivalent about taking action.', color: '#f59e0b' },
              { stage: 'Preparation', desc: 'Ready to take action. Making plans and gathering resources.', color: '#22c55e' },
              { stage: 'Action', desc: 'Actively modifying behaviour and environment.', color: '#3b82f6' },
              { stage: 'Maintenance', desc: 'Working to sustain the change and prevent relapse.', color: '#8b5cf6' },
              { stage: 'Termination', desc: 'Change is fully integrated. No temptation to return to old ways.', color: '#14532d' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: '#f8fafc', borderRadius: 10, borderLeft: `4px solid ${item.color}` }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: item.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.stage}</h4>
                  <p style={{ fontSize: 14, color: '#64748b' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Ego Depletion & Willpower</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Ego depletion</strong> theory suggests that willpower is a limited resource that can be exhausted. 
            When we use self-control in one area, we may have less available for other tasks. This has implications 
            for how we design and pace our wellbeing practices.
          </p>

          <div style={{ background: '#fef3c7', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #fde68a' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#92400e', marginBottom: 12 }}>Practical Implications</h3>
            <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 16, color: '#78350f', lineHeight: 1.8 }}>
              <li>Don't try to change everything at once</li>
              <li>Build habits that reduce the need for willpower</li>
              <li>Practice self-compassion when you "slip"</li>
              <li>Create environments that support your goals</li>
              <li>Rest and recover between demanding tasks</li>
            </ul>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Meta-Theory for PPIs</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Researchers have proposed a meta-theory that integrates insights from multiple models. The key 
            principles for effective positive psychology interventions include:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Match to Stage', desc: 'Interventions should match the person\'s readiness for change' },
              { title: 'Person-Activity Fit', desc: 'Activities should align with personality and preferences' },
              { title: 'Support Autonomy', desc: 'Give choice and avoid external pressure' },
              { title: 'Build Competence', desc: 'Start simple and increase complexity gradually' },
              { title: 'Foster Connection', desc: 'Include social elements where possible' },
              { title: 'Sustain Practice', desc: 'Focus on habit formation and integration' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 10, padding: 18, border: '1px solid #bbf7d0' }}>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: '#14532d', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#166534', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking. <em>Journal of Consulting and Clinical Psychology, 51</em>(3), 390-395.</p>
            <p>Baumeister, R. F., et al. (1998). Ego depletion: Is the active self a limited resource? <em>Journal of Personality and Social Psychology, 74</em>(5), 1252-1265.</p>
          </div>
        </div>

        {/* Module Completion */}
        <div style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', borderRadius: 16, padding: 48, marginBottom: 32, textAlign: 'center', color: '#ffffff' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Congratulations!</h2>
          <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 24, maxWidth: 500, margin: '0 auto 24px auto' }}>
            You have completed Module 4: Maximising Impact. You now understand the science behind sustainable 
            change and can design your personal wellbeing practice for lasting results.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modules" style={{ background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Back to Modules</Link>
            <Link href="/modules/5" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>Start Module 5</Link>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Module Reflection</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['What stage of change are you in for your primary wellbeing goal?', 'How can you design your practice to avoid ego depletion?', 'Which model from this module will most influence how you approach wellbeing?', 'What is one specific change you will make based on what you\'ve learned?'].map((q, i) => (
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
          <Link href="/modules/4/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Module Complete</> : 'Complete Module 4'}
          </button>
          <Link href="/modules" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>All Modules<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
