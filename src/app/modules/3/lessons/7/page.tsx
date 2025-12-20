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
            <Link href="/modules/3" style={{ color: '#64748b', textDecoration: 'none' }}>Interventions & Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 7</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 7 of 7 - Final Lesson</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Effectiveness of Interventions</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>What the research tells us about what works</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>This is How It All Began</h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            The first ever happiness programme was created in the 1970s by <strong>Michael Fordyce</strong>, an 
            eccentric professor of psychology who everyone loved. He completed his PhD in happiness in 1972 and 
            spent decades studying it. Until his programme was first published, many researchers doubted whether 
            happiness could be changed at all.
          </p>

          {/* Jolanta's Story */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Michael Fordyce's Legacy</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "When I was a student of positive psychology, we had reports of him living in Spain. One of my 
              fellow students decided to contact him and he kindly agreed to meet her to share some of his 
              life's insights. This experience was one of the highlights of her life. Even Freud famously said 
              that the best we can hope for is to turn misery into common unhappiness. Until 1977, nobody had 
              done it as part of research. Roll on 50 years, and according to The Lancet, we have never spent 
              as much money on wellbeing as we do now."
            </p>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Fordyce's Original Fundamentals</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {['Spending more time socialising', 'Developing an outgoing personality', 'Becoming more active', 'Lowering expectations', 'Developing optimistic thinking', 'Getting better organised', 'Eliminating worrying', 'Becoming more present-oriented', 'Valuing happiness', 'Keeping busy'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>What the Meta-Analyses Show</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Since Fordyce's pioneering work, numerous meta-analyses have examined the effectiveness of positive 
            psychology interventions. The findings are encouraging but nuanced.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Sin & Lyubomirsky (2009)', finding: 'PPIs can effectively enhance wellbeing and reduce depressive symptoms. Effect sizes are small to moderate but meaningful.' },
              { title: 'Bolier et al. (2013)', finding: 'Meta-analysis of 39 RCTs showed significant improvements in subjective and psychological wellbeing.' },
              { title: 'White et al. (2019)', finding: 'Multi-component PPIs and those lasting 4+ weeks showed strongest effects.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6 }}>{item.finding}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>The Replication Challenge</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Like all of psychology, positive psychology has faced replication challenges. Not all original findings 
            have held up under scrutiny. This has led to better research practices and a more nuanced understanding 
            of what works, for whom, and under what conditions.
          </p>

          <div style={{ background: '#fef3c7', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #fde68a' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#92400e', marginBottom: 12 }}>Key Considerations</h3>
            <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 16, color: '#78350f', lineHeight: 1.8 }}>
              <li>Individual differences matter - what works for one person may not work for another</li>
              <li>Context is crucial - timing, setting, and delivery all affect outcomes</li>
              <li>Effort and engagement predict success</li>
              <li>Longer interventions tend to have stronger effects</li>
              <li>Person-activity fit is essential (explored in Module 4)</li>
            </ul>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Fordyce, M. W. (1977). Development of a program to increase personal happiness. <em>Journal of Counseling Psychology, 24</em>(6), 511-521.</p>
            <p style={{ marginBottom: 12 }}>Sin, N. L., & Lyubomirsky, S. (2009). Enhancing well-being and alleviating depressive symptoms with positive psychology interventions. <em>Journal of Clinical Psychology, 65</em>(5), 467-487.</p>
            <p>Bolier, L., et al. (2013). Positive psychology interventions: A meta-analysis of randomized controlled studies. <em>BMC Public Health, 13</em>, 119.</p>
          </div>
        </div>

        {/* Module Completion */}
        <div style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', borderRadius: 16, padding: 48, marginBottom: 32, textAlign: 'center', color: '#ffffff' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Congratulations!</h2>
          <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 24, maxWidth: 500, margin: '0 auto 24px auto' }}>
            You have completed Module 3: Interventions & Applications. You now have a toolkit of evidence-based 
            practices for enhancing your wellbeing.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modules" style={{ background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Back to Modules</Link>
            <Link href="/journal" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>Try an Intervention</Link>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Module Reflection</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Which intervention from this module will you try first?', 'How might you adapt interventions to fit your own life and preferences?', 'What surprised you most about the research on intervention effectiveness?', 'How will you track whether the interventions are working for you?'].map((q, i) => (
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
          <Link href="/modules/3/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Module Complete</> : 'Complete Module 3'}
          </button>
          <Link href="/modules" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>All Modules<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
