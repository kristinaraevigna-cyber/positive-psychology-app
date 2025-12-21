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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 4</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 4 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>The Dark Side of Happiness</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>When the pursuit of happiness can backfire</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            If you ask any parent what they want for their children, most will want them to be happy. 
            Yet, despite happiness being so well embedded in Western culture, there is a dark side to it. 
            <strong> Iris Mauss</strong> from the University of Denver and colleagues explored four critical questions.
          </p>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 24, fontFamily: 'Georgia, serif' }}>Four Questions About Happiness</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
            
            {/* Question 1 */}
            <div style={{ background: '#fef2f2', borderRadius: 12, padding: 24, border: '1px solid #fecaca' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#dc2626', marginBottom: 12 }}>1. What is the optimal level of happiness?</h3>
              <p style={{ fontSize: 16, color: '#7f1d1d', lineHeight: 1.7 }}>
                Perhaps moderation should be our aim. Extreme intensity of positive emotions is associated with 
                risk-taking, higher mortality rates, and neglecting dangers. Too much happiness could be 
                potentially detrimental to us.
              </p>
            </div>

            {/* Question 2 */}
            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24, border: '1px solid #fde68a' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#b45309', marginBottom: 12 }}>2. When is happiness appropriate?</h3>
              <p style={{ fontSize: 16, color: '#78350f', lineHeight: 1.7, marginBottom: 16 }}>
                Happiness may not always be effective in all circumstances. Experiencing positivity would not be 
                adaptive when in danger - fear may be more helpful.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8, padding: 16 }}>
                <p style={{ fontSize: 14, color: '#92400e', fontStyle: 'italic' }}>
                  <strong>Dr. Burke's example:</strong> "I was once asked by a weight-loss organisation whether 
                  positive emotions were good for people trying to lose weight. People who were happy with their 
                  weight loss celebrated by treating themselves to cake."
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, border: '1px solid #bbf7d0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#166534', marginBottom: 12 }}>3. Is there a right or wrong way to pursue happiness?</h3>
              <p style={{ fontSize: 16, color: '#14532d', lineHeight: 1.7 }}>
                Research shows that individuals who value happiness a lot tend to be more lonely and realise they 
                are less happy than they thought. How we pursue happiness matters.
              </p>
            </div>

            {/* Question 4 */}
            <div style={{ background: '#eff6ff', borderRadius: 12, padding: 24, border: '1px solid #bfdbfe' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1d4ed8', marginBottom: 12 }}>4. Are there wrong types of happiness?</h3>
              <p style={{ fontSize: 16, color: '#1e3a8a', lineHeight: 1.7 }}>
                Feeling pride not associated with specific success can lead to lower happiness. Not experiencing 
                emotions like embarrassment is usually harmful. The key is balance between emotions.
              </p>
            </div>
          </div>

          {/* Jolanta's Story - Becoming a Recluse */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Becoming a Recluse</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I remember years ago when I decided to try a range of wellbeing interventions, mainly focused on 
              pursuing happiness. I realised I had become a recluse, so focused on making myself happy that I 
              forgot to do my usual activities with friends."
            </p>
          </div>

          <div style={{ background: '#fef2f2', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #fecaca' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#dc2626', marginBottom: 12 }}>The Danger of Individual Blame</h3>
            <p style={{ fontSize: 16, color: '#7f1d1d', lineHeight: 1.7 }}>
              The belief that happiness depends entirely on the individual can backfire. What if a person is not 
              happy? Is it their fault they haven't pursued it hard enough? This line of thinking can be dangerous 
              and may lead to adverse outcomes. We need to keep this in mind as we search for happiness.
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Gruber, J., Mauss, I. B., & Tamir, M. (2011). A dark side of happiness? <em>Perspectives on Psychological Science, 6</em>(3), 222-233.</p>
            <p>Mauss, I. B., et al. (2011). Can seeking happiness make people unhappy? <em>Emotion, 11</em>(4), 807-815.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Have you ever experienced the downsides of pursuing happiness too intensely?', 'Are there times when you've felt pressure to be happy when other emotions would have been more appropriate?', 'How can you pursue wellbeing while avoiding the "dark side" pitfalls?'].map((q, i) => (
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
          <Link href="/modules/4/lessons/3" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/4/lessons/5" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
