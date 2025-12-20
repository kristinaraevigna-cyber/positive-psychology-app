'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson3Page() {
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 3</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 3 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Savouring</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Attending fully to life's joyful moments</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          {/* Winnie the Pooh Quote */}
          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #f59e0b' }}>
            <p style={{ fontSize: 20, color: '#78350f', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 16 }}>
              "We didn't realise we were making memories. We just knew we were having fun."
            </p>
            <p style={{ color: '#92400e', fontSize: 14, fontWeight: 600 }}>— Winnie the Pooh to Piglet</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Literature and Wisdom</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I love reading literature for its wise advice. Some of it is explicit when a sentence amid another 
              sentence suddenly leaves me stunned. Other is hidden between the lines. Some books show wisdom in 
              abundance, just like Winnie the Pooh. This simple sentence is a depiction of the savouring 
              intervention in positive psychology."
            </p>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>What is Savouring?</h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Savouring is a process of attending to a moment, whether in the past, present, or future. Unlike 
            mindfulness, which involves attending to any moment regardless of valence, <strong>savouring implies 
            an abundance of positive emotions</strong>. It involves slowing down, engaging all possible senses, 
            and reflecting on what the moment means to us.
          </p>

          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 20 }}>Ten Strategies for Savouring</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              { num: 1, title: 'Sharing with Others', desc: 'Tell family about your positive experiences during the day with all the detail it deserves' },
              { num: 2, title: 'Memory Building', desc: 'Take a "mental photograph" while having fun - pause and take in everything about this picture of happiness' },
              { num: 3, title: 'Comparing', desc: 'Reflect on what makes this moment unique compared to others you\'ve experienced' },
              { num: 4, title: 'Sensory Sharpening', desc: 'Put a spotlight on one sense or object, as if it\'s at high alert' },
              { num: 5, title: 'Self-Congratulation', desc: 'Congratulate yourself for something you\'re proud of' },
              { num: 6, title: 'Absorption', desc: 'Lose yourself completely in an activity' },
              { num: 7, title: 'Behavioural Expression', desc: 'Dance, sing, laugh - physically express your joy' },
              { num: 8, title: 'Temporal Awareness', desc: 'Be aware of how quickly time passes; reflect on how children grow or time flies when having fun' },
              { num: 9, title: 'Counting Blessings', desc: 'Reflect on how fortunate you are to have something or someone in your life' },
              { num: 10, title: 'Avoiding Killjoy Thinking', desc: 'Resist ruminating over the temporary nature of joy' }
            ].map((item) => (
              <div key={item.num} style={{ background: '#f8fafc', borderRadius: 10, padding: 18, border: '1px solid #e2e8f0', display: 'flex', gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#14532d', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>{item.num}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 28, margin: '32px 0', border: '1px solid #bbf7d0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 12 }}>A Word of Caution</h3>
            <p style={{ fontSize: 16, color: '#166534', lineHeight: 1.7 }}>
              As with all things in life, moderation is required. Experiencing too many positive events may actually 
              reduce savouring. When arranging your next holiday, feel free to reduce the number of places you visit 
              but focus on how you could savour those places before you get there, while you are there, and after 
              you leave them. <strong>Less is more.</strong>
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Bryant, F. B., & Veroff, J. (2007). <em>Savoring: A new model of positive experience.</em> Taylor Francis Group.</p>
            <p>Quoidbach, J., Dunn, E. W., Hansenne, M., & Bustin, G. (2015). The price of abundance. <em>Personality & Social Psychology Bulletin, 41</em>(3), 393-404.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Which of the ten savouring strategies do you naturally use? Which might you try?', 'Think of a recent positive moment. How could you have savoured it more fully?', 'How might "less is more" apply to your approach to positive experiences?'].map((q, i) => (
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
          <Link href="/modules/3/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Previous Lesson</Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/3/lessons/4" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </div>
    </div>
  );
}
