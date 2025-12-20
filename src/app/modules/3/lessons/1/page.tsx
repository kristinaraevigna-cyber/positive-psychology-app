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
            <Link href="/modules/3" style={{ color: '#64748b', textDecoration: 'none' }}>Interventions & Applications</Link><span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 1</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Lesson 1 of 7</div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>Wellbeing Without Interventions</h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Natural factors that influence happiness before we even try</p>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>The Spread of Happiness</h2>

          {/* Jolanta's Story - Skittles */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>The Skittles Experiment</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "My son loves science. He loves putting on his white coat and goggles, pulling out his gigantic 
              test tubes and dropper pipettes, and spending hours mixing up colours and other potions. Recently, 
              we played with a simpler activity that gave him a lot of joy. We put Skittles on a plate in a 
              circle, gently poured hot water onto the plate, and saw a rainbow of colours appear. The colours 
              stood like stripes on their own, and in some places, they mixed up. They reminded me of happiness 
              and how proximity to happy people can influence our subjective wellbeing."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Research drawing from a longitudinal study with almost 5,000 participants spanning over 20 years 
            showed that <strong>happiness extends to three degrees of separation</strong>. Our happiness impacts 
            not only our direct friends but also their friends, and our friends' friends' friends.
          </p>

          {/* Happiness Contagion Stats */}
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 28, margin: '32px 0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 20 }}>The Happiness Ripple Effect</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { percent: '25%', label: 'Direct friends within 1 mile' },
                { percent: '63%', label: 'Mutual friends who live nearby' },
                { percent: '34%', label: 'Next-door neighbours' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: 20, background: '#ffffff', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: 32, fontWeight: 600, color: '#14532d', marginBottom: 8 }}>{item.percent}</p>
                  <p style={{ fontSize: 13, color: '#64748b' }}>more likely to be happier when {item.label} become happier</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #14532d' }}>
            <p style={{ fontSize: 18, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "Happiness blooms in proximity; as one heart lifts, many more take flight."
            </p>
          </div>

          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>Money and Happiness</h2>

          {/* Jolanta's Story - Parents and Money */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Parents' Opposing Views</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "My mum and dad have always had opposing views about money. My dad claimed that having money 
              made him happier as it allowed him to do things he wouldn't be able to do otherwise. My mum, 
              however, said money had nothing to do with happiness. Instead, she kept talking about love 
              and education being the most important values and how nothing else matters as long as we have 
              people we love and can continuously develop ourselves."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Ed Diener and Robert Biswas-Diener</strong> argue that while money can enhance wellbeing 
            to some extent, its impact is nuanced. Money plays an essential role in satisfying basic needs. 
            Beyond that, additional income yields diminishing results.
          </p>

          {/* Amsterdam Conference Story */}
          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)', borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#92400e', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#78716c', fontSize: 13 }}>World Happiness Report in Amsterdam</p>
              </div>
            </div>
            <p style={{ color: '#78350f', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "At the European Conference on Positive Psychology in Amsterdam, John Halliwell told us that 
              those in the top 1% of earners were happier than others. I remember wondering what being in the 
              1% would be like. Then, Halliwell asked us to put up our hands if we earned more than 30,000 euros 
              a year. Most people in the room put their hands up. In response he told us that we were the 1%. 
              The room fell silent, and the presentation left me with goosebumps."
            </p>
          </div>

          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>Key References</h2>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>Fowler, J. H., & Christakis, N. A. (2008). Dynamic spread of happiness in a large social network. <em>BMJ, 337</em>, a2338.</p>
            <p>Diener, E., & Biswas-Diener, R. (2002). Will money increase subjective well-being? <em>Social Indicators Research, 57</em>(2), 119-169.</p>
          </div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Reflection Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Who in your immediate network tends to lift your mood? How might you spend more time with them?', 'Have you noticed how the happiness of people around you affects your own wellbeing?', 'What does the research on money and happiness mean for your own pursuit of wellbeing?'].map((q, i) => (
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
          <Link href="/modules/3" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Module
          </Link>
          <button onClick={() => setIsCompleted(!isCompleted)} style={{ background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            {isCompleted ? <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Completed</> : 'Mark as Complete'}
          </button>
          <Link href="/modules/3/lessons/2" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Next Lesson<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
