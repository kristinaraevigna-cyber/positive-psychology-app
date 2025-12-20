'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson2Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
        padding: '0 40px', position: 'sticky', top: 0, zIndex: 100
      }}>
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
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '')}`} style={{
                color: item === 'Modules' ? '#ffffff' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 8,
                background: item === 'Modules' ? 'rgba(255,255,255,0.15)' : 'transparent'
              }}>{item}</Link>
            ))}
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href="/modules/2" style={{ color: '#64748b', textDecoration: 'none' }}>The Primer to Wellbeing</Link>
            <span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 2</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            Lesson 2 of 7
          </div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Positive Emotions
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            The broaden-and-build theory and why positive emotions matter
          </p>
        </div>

        {/* Video Section */}
        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>Dr. Jolanta Burke on positive emotions</p>
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Broaden-and-Build Theory
          </h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            What is good about positive emotions? This is a question that researchers overlooked for decades. 
            However, the narrative changed when <strong>Barbara Fredrickson</strong> developed a theory that 
            became a cornerstone of positive psychological research. When conducting background research for 
            her book, Dr. Burke discovered that Fredrickson's article introducing this theory was the most 
            cited in positive psychology.
          </p>

          {/* Jolanta's Story - Car Crash */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>The Broadening and Narrowing of Mind</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I was once driving my car. It was Friday afternoon, and I was thinking about what my friends 
              and I would do over the weekend. I was smiling, singing to a tune on the radio and feeling 
              happy. Then suddenly, a car in front of me slammed on its brakes, and I immediately slammed 
              on mine. However, instead of stopping, my car began to aquaplane. I remember that in that 
              short moment, my options had narrowed down from what I could do over the weekend to a simple 
              dichotomous decision: Will I hit the car head-on or turn left and hit the railings? I chose 
              to hit the car head-on. Thankfully, everyone was ok. The trauma of this situation made me 
              realise the functional power of emotions: negative emotions help us narrow our options to 
              survive; positive emotions help us open up our minds."
            </p>
          </div>

          {/* Three Functions */}
          <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 20 }}>
            The Three Functions of Positive Emotions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Broaden', desc: 'Positive emotions broaden our perspective. Physiologically, we see more in our peripheral vision. Psychologically, they open doors to creativity and help us see solutions not accessible when experiencing negative emotions.' },
              { title: 'Build', desc: 'Regular positive emotions have an accumulative effect, building psychological, emotional, physiological, and cognitive resources. They become a magnet for attracting and multiplying themselves in the future.' },
              { title: 'Undo', desc: 'Positive emotions can undo the harmful effects of negative emotions. Having moments of positivity during challenging events helps us recover from the negative effects of adversity.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{i + 1}. {item.title}</h4>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Positivity Ratios */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Positivity Ratios
          </h2>

          {/* Jolanta's Story - Positivity Ratios */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Experimenting with Positivity</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I remember the day when I learnt about positivity ratios - I found this research fascinating. 
              As a psychology student, I once experimented with myself, assessing my positivity daily for a 
              month. I found that it did not make sense to me. On days when I had a high positivity ratio, 
              I didn't necessarily feel fulfilled or content; it was just that my balance of positive versus 
              negative emotions was biased towards the positive, making me more giggly. Also, during my PhD, 
              I spent years working with people with anxiety and depression. When together we tried to 
              introduce the 3:1 ratio in their daily lives, we found it a challenge and often settled for 
              aiming to experience more positive than negative emotions."
            </p>
          </div>

          {/* Practical Application */}
          <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 28, margin: '32px 0', borderLeft: '4px solid #22c55e' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#14532d', marginBottom: 12 }}>Practical Application</h3>
            <p style={{ fontSize: 16, color: '#166534', lineHeight: 1.7 }}>
              "Whenever I speak with someone who shares something upsetting, I do not let them leave until 
              we undo the negative emotions. So, I ask them a question that changes their emotional state 
              to more positive. When I see someone grieving and feeling guilty about experiencing joy, I 
              encourage them to give themselves at least a short break each day to experience positive 
              emotions. Whether it's spending time in nature, nurturing hopeful thoughts, or enjoying a 
              bubble bath, these small acts can serve as a reset for the soul."
            </p>
          </div>

          {/* Key References */}
          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Fredrickson, B. L. (2001). The role of positive emotions in positive psychology. <em>American Psychologist, 56</em>(3), 218-226.</p>
            <p>Fredrickson, B. L. (2004). The broaden-and-build theory of positive emotions. <em>Philosophical Transactions of the Royal Society B, 359</em>(1449), 1367-1378.</p>
          </div>
        </div>

        {/* Reflection */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Think of a time when positive emotions helped you see solutions you might have missed otherwise.',
              'How do you currently "undo" negative emotions in your daily life?',
              'What activities reliably generate positive emotions for you?'
            ].map((q, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/modules/2/lessons/1" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Previous Lesson
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/2/lessons/3" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
