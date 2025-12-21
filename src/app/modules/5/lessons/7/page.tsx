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
            <Link href="/modules/5" style={{ color: '#64748b', textDecoration: 'none' }}>Multidisciplinary Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 7</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 7 of 7 - Final Lesson</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Wellbeing Arts</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>The role of arts and humanities in human flourishing</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>

          {/* Jolanta's Story - PhD and Gallery */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>PhD Years in Dublin</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "When completing my PhD at Trinity College Dublin, my office was right next door to the National 
              Gallery. For three wonderful years, I would escape into the world of art whenever I needed a break 
              from research. Sometimes, it was just a flying visit to sit and look at my favourite paintings for 
              five minutes and relax. Other times, it was a more immersive experience involving an exciting talk 
              or an exhibition. For the Irish, the arts were an important outlet through generations of struggle. 
              Music, literature, paintings, and other forms of expression allowed them to share their hardships, 
              hopes, and preserve their culture."
            </p>
          </div>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>How Arts Lead to Flourishing</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Louis Tay and colleagues developed a conceptual model showing how arts engagement leads to wellbeing 
            through specific mechanisms.
          </p>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Modes of Engagement</h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
            {['Creating', 'Performing', 'Studying', 'Consuming', 'Critiquing'].map((mode, i) => (
              <span key={i} style={{ background: '#f0fdf4', color: '#14532d', padding: '10px 20px', borderRadius: 20, fontSize: 14, fontWeight: 500, border: '1px solid #bbf7d0' }}>{mode}</span>
            ))}
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 16 }}>The Four Mechanisms</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Immersion', desc: 'Capturing attention and experiencing arts using various senses' },
              { title: 'Embeddedness', desc: 'Developing new perspectives, habits, or skills through arts engagement' },
              { title: 'Socialisation', desc: 'Taking on new roles or identities within arts communities' },
              { title: 'Reflectiveness', desc: 'Abandoning or transforming beliefs through arts involvement' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Jolanta's Story - Burlesque */}
          <div style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fdf4ff 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #a21caf' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#a21caf', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#a21caf', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>The Burlesque Experience</p>
              </div>
            </div>
            <p style={{ color: '#86198f', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "Let me illustrate this process using dance as an example. I went to a burlesque dance class a 
              decade ago, which was a lot of fun. My mode of engagement was immersion in the activities that 
              led to a boost of confidence. My involvement activity was socialisation, which allowed me to meet 
              many other people who did it for fun and even took part in an annual performance. We connected 
              deeper and even began arranging social activities with the burlesque group. The whole experience 
              led me to a boost of wellbeing for many months during my involvement in the burlesque community 
              in Dublin."
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p>Tay, L., Pawelski, J. O., & Keith, M. G. (2017). The role of the arts and humanities in human flourishing. <em>The Journal of Positive Psychology, 13</em>(3), 215-225.</p>
          </div>
        </div>

        {/* Course Completion */}
        <div style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', borderRadius: 16, padding: 48, marginBottom: 32, textAlign: 'center', color: '#ffffff' }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16, fontFamily: 'Georgia, serif' }}>🎉 Congratulations!</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 12 }}>
            You have completed <strong>The Foundation of Positive Psychology</strong>
          </p>
          <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 32, maxWidth: 600, margin: '0 auto 32px auto' }}>
            All 5 modules, 34 lessons, and countless insights from Dr. Jolanta Burke. You now have a comprehensive 
            foundation in the science of human flourishing.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modules" style={{ background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Review All Modules</Link>
            <Link href="/journal" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>Start Your Journal</Link>
            <Link href="/assessments" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>Take Assessments</Link>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Final Reflection</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['What has been the most meaningful insight from this entire course for you?', 'Which positive psychology practice will you commit to implementing in your life?', 'How might you share what you\'ve learned with others in your life?', 'What area of positive psychology would you like to explore more deeply?'].map((q, i) => (
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
          <Link href="/modules/5/lessons/6" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Course Complete!</> : 'Complete Course'}
          </button>
          <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Dashboard<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
