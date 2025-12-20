'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson4Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '0 40px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)'
              }} />
              <span style={{ color: '#14532d', fontSize: 16, fontWeight: 600 }}>
                Positive Psychology
              </span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 32 }}>
            {['Dashboard', 'Modules', 'Journal', 'Assessments', 'AI Coach'].map((label) => (
              <Link key={label} href={`/${label.toLowerCase().replace(' ', '')}`} style={{
                color: label === 'Modules' ? '#14532d' : '#64748b',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: label === 'Modules' ? 600 : 500,
              }}>
                {label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40, height: 40, borderRadius: '50%', background: '#14532d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#ffffff', fontSize: 14, fontWeight: 600
          }}>JB</div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '16px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href="/modules/1" style={{ color: '#64748b', textDecoration: 'none' }}>The Fundamentals</Link>
            <span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 4</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ 
            display: 'inline-block', background: '#f0fdf4', color: '#166534',
            padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16
          }}>
            Lesson 4 of 6
          </div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Cultural Considerations
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Understanding how culture shapes our understanding of wellbeing
          </p>
        </div>

        {/* Video Section */}
        <div style={{
          background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>
            Dr. Jolanta Burke explores cultural dimensions of wellbeing
          </p>
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          {/* Jolanta's Story - Zimbabwe Student */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 40, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#14532d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', fontSize: 14, fontWeight: 600
              }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>A Transformative Seminar</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "When I worked at the University of East London, I had the privilege of engaging with students 
              worldwide. I will never forget this one particular online seminar on wellbeing. During a discussion, 
              one of the students from Zimbabwe commented that the positive psychological concept of wellbeing 
              differs significantly from how it is understood in her country. Curious, I invited her to share 
              with us her perspective. This sparked a lively discussion during which we explored diverse wellbeing 
              views with students from China, New Zealand, and other places. This was one of the most engaging 
              seminars I had the pleasure of delivering, and it made me realise how elitist and narrowly focused 
              positive psychology can be if it is not carefully contextualised."
            </p>
          </div>

          {/* WEIRD */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            The WEIRD Problem
          </h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            <strong>Tom Hendriks</strong> and his team conducted a bibliometric analysis of randomised controlled 
            trials on the science of wellbeing. They examined whether positive psychology research reached beyond 
            <strong> WEIRD</strong> populations—an acronym for <strong>White, Educated, Industrialised, Rich, and 
            Democratic</strong> population.
          </p>

          {/* Stats Box */}
          <div style={{
            background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0',
            textAlign: 'center', border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: 48, fontWeight: 300, color: '#14532d', marginBottom: 8 }}>78.2%</p>
            <p style={{ fontSize: 16, color: '#64748b' }}>
              of randomised controlled trials were from WEIRD populations
            </p>
            <p style={{ fontSize: 14, color: '#94a3b8', marginTop: 8 }}>
              Over 34,000 participants from just 24 countries
            </p>
          </div>

          {/* Individualism vs Collectivism */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Individualism vs. Collectivism
          </h2>

          {/* Jolanta's Story - Mixed Heritage Friend */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12, padding: 32, marginBottom: 32, borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: '#14532d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', fontSize: 14, fontWeight: 600
              }}>JB</div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Cultural Identity</p>
              </div>
            </div>
            <p style={{ color: '#166534', fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              "I am European – my genetic tests show I am over 97% Slavic. I was raised in an individualistic 
              ideology, so positive psychology research speaks to me loud and clear. From a young age, I was 
              taught the values of self-determination and personal responsibility. I believed that if I worked 
              hard and studied, I could make my dreams come true. At the same time, one of my friend's family 
              was culturally mixed, with one parent from Europe and one from Asia. Therefore, he was exposed 
              to a collectivist culture. I always learn so much when chatting with him about his worldviews, 
              as he is somewhere on a scale between the collectivist need for harmony and an individual's 
              authentic pursuits."
            </p>
          </div>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            According to <strong>Christopher and Hickinbottom</strong>, positive psychology is deeply rooted in 
            a Western ideology of ethnocentric individualism. This approach inadvertently promotes the idea of 
            an individual isolated from others, thereby undermining social connections and collective wellbeing. 
            The emphasis on personal success and individual responsibility could backfire when individuals are 
            unable to meet these "ideal" goals.
          </p>

          {/* Cultural Considerations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Individualistic Cultures', items: ['Personal achievement', 'Self-determination', 'Individual rights', 'Independence'] },
              { title: 'Collectivist Cultures', items: ['Group harmony', 'Social obligation', 'Community wellbeing', 'Interdependence'] }
            ].map((col, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 16 }}>{col.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 15, color: '#64748b', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key References */}
          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>
            Key References
          </h2>
          
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>
              Hendriks, T., et al. (2018). How WEIRD are positive psychology interventions? 
              <em>The Journal of Positive Psychology, 14</em>(4), 489–501.
            </p>
            <p>
              Christopher, J. C., & Hickinbottom, S. (2008). Positive psychology, ethnocentrism, 
              and the disguised ideology of individualism. <em>Theory & Psychology, 18</em>(5), 563–589.
            </p>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Reflection Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'How might your cultural background shape your understanding of what it means to live a "good life"?',
              'Think of someone from a different cultural background. How might their definition of wellbeing differ from yours?',
              'How can practitioners ensure they are culturally sensitive when applying positive psychology interventions?'
            ].map((question, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: '#e0f2fe', color: '#0369a1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0
                  }}>{i + 1}</div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>{question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/modules/1/lessons/3" style={{
            display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', textDecoration: 'none', fontSize: 15, fontWeight: 500
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Previous Lesson
          </Link>

          <button onClick={() => setIsCompleted(!isCompleted)} style={{
            background: isCompleted ? '#22c55e' : '#14532d', color: '#ffffff', border: 'none',
            padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8
          }}>
            {isCompleted ? (
              <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/></svg>Completed</>
            ) : 'Mark as Complete'}
          </button>

          <Link href="/modules/1/lessons/5" style={{
            display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600
          }}>
            Next Lesson
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
