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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 6</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 6 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Character Strengths</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Discovering and applying what is best in you</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The VIA Classification</h2>

          {/* Jolanta's Story - Teaching */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Teaching Character Strengths</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "What I have always loved about teaching positive psychology at the third level was the type of 
              students this field has attracted. They are some of the most fascinating people I have met, with 
              many exciting stories to tell. At some point throughout the process, we encourage students to 
              share why they began their studies or what studying positive psychology meant to them. Their 
              stories are always heartwarming, exuding resilience and virtue. They often have experienced 
              life's ups and downs and found the strength to keep going. They are often drawn towards positive 
              psychology as it offers the tools needed to live a good life. One such tool is character strengths."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Character strengths were created as an <strong>"anti-DSM"</strong> (Diagnostic and Statistical Manual of 
            Mental Disorders). While the DSM catalogues what can go wrong with people, the <strong>VIA Classification</strong> 
            identifies what is good and right about people. Christopher Peterson and Martin Seligman identified 
            24 character strengths organised under 6 core virtues.
          </p>

          {/* 6 Virtues and 24 Strengths */}
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 20 }}>The 6 Virtues & 24 Strengths</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { virtue: 'Wisdom', strengths: 'Creativity, Curiosity, Judgment, Love of Learning, Perspective', color: '#7c3aed' },
              { virtue: 'Courage', strengths: 'Bravery, Perseverance, Honesty, Zest', color: '#dc2626' },
              { virtue: 'Humanity', strengths: 'Love, Kindness, Social Intelligence', color: '#ec4899' },
              { virtue: 'Justice', strengths: 'Teamwork, Fairness, Leadership', color: '#0284c7' },
              { virtue: 'Temperance', strengths: 'Forgiveness, Humility, Prudence, Self-Regulation', color: '#059669' },
              { virtue: 'Transcendence', strengths: 'Appreciation of Beauty, Gratitude, Hope, Humor, Spirituality', color: '#f59e0b' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0', borderTop: `4px solid ${item.color}` }}>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: item.color, marginBottom: 10 }}>{item.virtue}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.strengths}</p>
              </div>
            ))}
          </div>

          {/* Three Functions */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Functions of Character Strengths</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Ryan Niemiec</strong>, whose name has become synonymous with character strengths, identified 
            three key functions of strengths in situations of opportunity:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Priming Function', desc: 'Reflecting on your strengths BEFORE an event can boost confidence and ensure positive outcomes. Therapists who became aware of their clients\' strengths were more likely to focus on them during sessions.' },
              { title: 'Mindfulness Function', desc: 'Training attention DURING an event to be mindful of strengths in the situation. This can mean giving a presentation mindfully while practising the strength of zest, or problem-solving using perspective.' },
              { title: 'Appreciation Function', desc: 'Strength-spotting and appreciating strengths AFTER events - your own and others\'. For example, appreciating a partner\'s kindness or reflecting on leadership used in an emergency.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{i + 1}. {item.title}</h4>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', borderRadius: 12, padding: 28, marginTop: 40, textAlign: 'center' }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>Discover Your Strengths</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', marginBottom: 20 }}>Take the free VIA Survey to identify your signature strengths</p>
            <Link href="/assessments/strengths" style={{ display: 'inline-block', background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              Take the Assessment
            </Link>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Peterson, C., & Seligman, M. E. P. (2004). <em>Character strengths and virtues: A handbook and classification.</em> Oxford University Press.</p>
            <p>Schutte, N. S., & Malouff, J. M. (2019). The impact of signature character strengths interventions. <em>Journal of Happiness Studies, 20</em>(4), 1179-1196.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Which character strengths do you think are your signature strengths?', 'How could you use your top strengths more intentionally this week?', 'Think of someone you admire. What character strengths do they exemplify?'].map((q, i) => (
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
          <Link href="/modules/2/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/2/lessons/7" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
