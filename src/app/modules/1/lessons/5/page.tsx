'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson5Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  const bigIssues = [
    {
      title: 'Climate Change & Eco-Wellbeing',
      description: 'Positive psychology is increasingly addressing climate anxiety and eco-wellbeing, helping individuals find meaning and action in the face of environmental challenges.',
      color: '#059669'
    },
    {
      title: 'Bullying Prevention',
      description: 'Strengths-based approaches and positive education programs are being used to create supportive school environments and reduce bullying.',
      color: '#0284c7'
    },
    {
      title: 'Refugee Wellbeing',
      description: 'Understanding post-traumatic growth and resilience in refugee populations, focusing on strengths rather than deficits.',
      color: '#7c3aed'
    },
    {
      title: 'LGBTQ+ Flourishing',
      description: 'Applying positive psychology to support LGBTQ+ individuals in developing resilience, finding meaning, and building supportive communities.',
      color: '#db2777'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)' }} />
              <span style={{ color: '#14532d', fontSize: 16, fontWeight: 600 }}>Positive Psychology</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 32 }}>
            {['Dashboard', 'Modules', 'Journal', 'Assessments', 'AI Coach'].map((label) => (
              <Link key={label} href={`/${label.toLowerCase().replace(' ', '')}`} style={{
                color: label === 'Modules' ? '#14532d' : '#64748b', textDecoration: 'none', fontSize: 14, fontWeight: label === 'Modules' ? 600 : 500
              }}>{label}</Link>
            ))}
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 5</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            Lesson 5 of 6
          </div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Big Issues in Positive Psychology
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            How positive psychology addresses major global challenges
          </p>
        </div>

        {/* Video Section */}
        <div style={{
          background: '#1a1a2e', borderRadius: 16, aspectRatio: '16/9',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40
        }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>Video coming soon</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>
            Dr. Jolanta Burke discusses positive psychology's response to global challenges
          </p>
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Addressing Global Challenges
          </h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Positive psychology has expanded beyond individual wellbeing to address some of the most pressing 
            challenges of our time. The field recognises that true flourishing cannot happen in isolation from 
            the broader social, environmental, and political contexts in which people live.
          </p>

          {/* Big Issues Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 40 }}>
            {bigIssues.map((issue, i) => (
              <div key={i} style={{
                background: '#ffffff', borderRadius: 12, padding: 24,
                border: '1px solid #e2e8f0', borderTop: `4px solid ${issue.color}`
              }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 12 }}>
                  {issue.title}
                </h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {issue.description}
                </p>
              </div>
            ))}
          </div>

          {/* Climate Section */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Climate Anxiety & Eco-Wellbeing
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            With growing awareness of climate change, many individuals—particularly young people—experience 
            what researchers call "eco-anxiety" or "climate grief." Positive psychology offers frameworks 
            for finding meaning and agency in the face of environmental challenges, promoting sustainable 
            behaviours that align with personal values.
          </p>

          {/* Quote Box */}
          <div style={{
            background: '#f0fdf4', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #22c55e'
          }}>
            <p style={{ fontSize: 17, color: '#166534', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "The third wave of positive psychology recognises that individual wellbeing is deeply 
              interconnected with collective and planetary wellbeing. We cannot truly flourish while 
              the world around us suffers."
            </p>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 16 }}>
              — From "The Foundation of Positive Psychology"
            </p>
          </div>

          {/* Bullying Prevention */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Bullying Prevention in Schools
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Positive education approaches have been particularly effective in addressing bullying. Rather than 
            focusing solely on punitive measures, strengths-based programmes help create school environments 
            where bullying is less likely to occur. These programmes build empathy, resilience, and positive 
            peer relationships.
          </p>

          {/* Refugee Wellbeing */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Supporting Refugee Populations
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Positive psychology's focus on resilience and post-traumatic growth offers valuable perspectives 
            for supporting refugees. Rather than viewing refugees only through the lens of trauma and deficit, 
            this approach recognises and builds upon their strengths, cultural resources, and capacity for 
            adaptation.
          </p>

          {/* LGBTQ+ Section */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            LGBTQ+ Flourishing
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Positive psychology has increasingly addressed the wellbeing of LGBTQ+ individuals, moving beyond 
            a focus on minority stress to explore the unique strengths and sources of meaning within LGBTQ+ 
            communities. This includes examining how identity affirmation, community connection, and pride 
            contribute to flourishing.
          </p>

          {/* Key Takeaways */}
          <div style={{
            background: '#f8fafc', borderRadius: 12, padding: 32, margin: '32px 0', border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>
              Key Takeaways
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {[
                'Positive psychology is expanding to address systemic and global issues',
                'Individual wellbeing cannot be separated from collective and environmental wellbeing',
                'Strengths-based approaches can be applied to vulnerable populations',
                'The field must continue to adapt to emerging challenges like climate change'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 15, color: '#374151', marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Reflection Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Which of these "big issues" resonates most with you? Why?',
              'How might positive psychology approaches be applied to other global challenges you care about?',
              'What role can individual wellbeing practices play in addressing systemic issues?'
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
          <Link href="/modules/1/lessons/4" style={{
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

          <Link href="/modules/1/lessons/6" style={{
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
