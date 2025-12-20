'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson6Page() {
  const [isCompleted, setIsCompleted] = useState(false);

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
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 6</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            Lesson 6 of 6 — Final Lesson
          </div>
          <h1 style={{ fontSize: 36, color: '#111827', fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Research Methods & Ethics
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Understanding the science and ethical practice of positive psychology
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
            Dr. Jolanta Burke discusses research methods and ethical practice
          </p>
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Ethics in Positive Psychology Practice
          </h2>
          
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            As positive psychology has grown, so has the need for ethical guidelines that are specific to the 
            field. General psychological ethics provide a foundation, but practitioners also need guidance on 
            issues unique to positive interventions.
          </p>

          {/* Ethics Guidelines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              { title: 'Do No Harm', description: 'Watch out for overusing strengths, forcing positivity, or applying interventions that may not be appropriate for the individual.' },
              { title: 'Assess Current Wellbeing', description: 'Before implementing interventions, understand where the client is starting from. What works for one person may not work for another.' },
              { title: 'Cultural Sensitivity', description: 'Consider cultural backgrounds when applying interventions. What promotes wellbeing in one culture may not in another.' },
              { title: 'Evidence-Based Practice', description: 'Use interventions that have empirical support, while remaining transparent about limitations in the research.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Research Methods */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Research Methods in Positive Psychology
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            Positive psychology employs a wide range of research methods. The field has been criticised for 
            relying too heavily on self-report measures and cross-sectional designs. In response, researchers 
            are increasingly using more rigorous approaches.
          </p>

          {/* Methods Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Randomised Controlled Trials', description: 'The gold standard for testing intervention effectiveness' },
              { title: 'Longitudinal Studies', description: 'Tracking wellbeing changes over time' },
              { title: 'Experience Sampling', description: 'Capturing in-the-moment experiences' },
              { title: 'Qualitative Methods', description: 'Understanding lived experiences in depth' }
            ].map((method, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: 12, padding: 20, border: '1px solid #bbf7d0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#14532d', marginBottom: 6 }}>{method.title}</h3>
                <p style={{ fontSize: 14, color: '#166534', margin: 0 }}>{method.description}</p>
              </div>
            ))}
          </div>

          {/* Epistemological Fruit Salad */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            The "Epistemological Fruit Salad"
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            One criticism of positive psychology research is what some have called an "epistemological fruit 
            salad"—mixing different philosophical approaches to knowledge without clear justification. The 
            field continues to grapple with questions about how we can best study subjective experiences 
            like happiness and meaning.
          </p>

          {/* Quote Box */}
          <div style={{
            background: '#f0fdf4', borderRadius: 12, padding: 32, margin: '32px 0', borderLeft: '4px solid #22c55e'
          }}>
            <p style={{ fontSize: 17, color: '#166534', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              "The topics discussed in positive psychology, such as happiness, awe, or joy, are often 
              dismissed as 'soft' and not rigorous. However, these topics require extra effort to provide 
              solid data. This is further complicated by the difficulty in defining and measuring these 
              topics, as it involves exploring individuals' subjective experiences."
            </p>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 16 }}>
              — From "The Foundation of Positive Psychology"
            </p>
          </div>

          {/* RE-AIM Framework */}
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, marginTop: 48, fontFamily: 'Georgia, serif' }}>
            Evaluating Interventions: The RE-AIM Framework
          </h2>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.9, marginBottom: 24 }}>
            The RE-AIM framework provides a comprehensive approach to evaluating positive psychology 
            interventions in real-world settings:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              { letter: 'R', title: 'Reach', description: 'How many people can the intervention reach?' },
              { letter: 'E', title: 'Effectiveness', description: 'How well does the intervention work?' },
              { letter: 'A', title: 'Adoption', description: 'How easily can organisations adopt it?' },
              { letter: 'I', title: 'Implementation', description: 'How consistently can it be delivered?' },
              { letter: 'M', title: 'Maintenance', description: 'How sustainable are the effects over time?' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#f8fafc', borderRadius: 12, padding: 20, border: '1px solid #e2e8f0' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 10, background: '#14532d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', fontSize: 20, fontWeight: 700, flexShrink: 0
                }}>{item.letter}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key References */}
          <h2 style={{ fontSize: 20, color: '#111827', fontWeight: 600, marginBottom: 16, marginTop: 40 }}>
            Key References
          </h2>
          
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 20, fontSize: 14, color: '#64748b', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>
              Hefferon, K., Ashfield, A., Waters, L., & Synard, J. (2017). Understanding optimal human 
              functioning – The 'call for qual' in exploring human flourishing and wellbeing. 
              <em>The Journal of Positive Psychology, 12</em>(3), 211–219.
            </p>
            <p>
              Glasgow, R. E., Vogt, T. M., & Boles, S. M. (1999). Evaluating the public health impact 
              of health promotion interventions: The RE-AIM framework. 
              <em>American Journal of Public Health, 89</em>(9), 1322–1327.
            </p>
          </div>
        </div>

        {/* Module Completion */}
        <div style={{ 
          background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', 
          borderRadius: 16, 
          padding: 48, 
          marginBottom: 32,
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
            Congratulations!
          </h2>
          <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 24, maxWidth: 500, margin: '0 auto 24px auto' }}>
            You've completed Module 1: The Fundamentals of Positive Psychology. You now have a solid 
            foundation in the history, evolution, critiques, and methods of this field.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modules" style={{
              background: '#ffffff', color: '#14532d', padding: '14px 28px', borderRadius: 8,
              fontSize: 15, fontWeight: 600, textDecoration: 'none'
            }}>
              Back to Modules
            </Link>
            <Link href="/journal/gratitude" style={{
              background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: 8,
              fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)'
            }}>
              Start Your Journal
            </Link>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ background: '#ffffff', borderRadius: 16, padding: 48, border: '1px solid #e5e7eb', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#111827', fontWeight: 600, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
            Module Reflection
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'What was the most surprising thing you learned in this module?',
              'How has your understanding of positive psychology changed from when you started?',
              'What aspects of the field are you most excited to explore further?',
              'How might you apply what you\'ve learned in your own life or work?'
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
          <Link href="/modules/1/lessons/5" style={{
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
                <polyline points="20 6 9 17 4 12"/></svg>Module Complete</>
            ) : 'Complete Module 1'}
          </button>

          <Link href="/modules" style={{
            display: 'flex', alignItems: 'center', gap: 8, color: '#14532d', textDecoration: 'none', fontSize: 15, fontWeight: 600
          }}>
            All Modules
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
