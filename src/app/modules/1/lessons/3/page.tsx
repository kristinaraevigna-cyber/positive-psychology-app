'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson3Page() {
  const [completed, setCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Navigation */}
      <nav style={{ background: '#14532d', padding: '0 40px' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ color: '#ffffff', fontSize: 18, fontWeight: 500 }}>
              Foundations of <span style={{ color: '#86efac' }}>Positive Psychology</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/modules', label: 'Modules' },
              { href: '/journal', label: 'Journal' },
              { href: '/assessments', label: 'Assessments' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.href === '/modules' ? '#86efac' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '10px 20px',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 6,
                background: item.href === '/modules' ? 'rgba(255,255,255,0.1)' : 'transparent',
              }}>
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#14532d', fontWeight: 600
          }}>S</div>
        </div>
      </nav>

      {/* Lesson Header */}
      <div style={{ background: '#14532d', padding: '40px', color: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link href="/modules/1" style={{ color: '#86efac', textDecoration: 'none', fontSize: 14 }}>
            ← Back to Module 1
          </Link>
          <div style={{ marginTop: 20 }}>
            <span style={{ color: '#86efac', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
              Lesson 3 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 8 }}>
              Critical Perspectives
            </h1>
            <p style={{ opacity: 0.8, marginTop: 8 }}>25 minutes</p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{ marginBottom: 50 }}>
            <p style={{ fontSize: 20, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', borderLeft: '4px solid #22c55e', paddingLeft: 24 }}>
              "A mature science welcomes criticism and uses it to strengthen its foundations."
            </p>
          </div>

          {/* Van Zyl's Review */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              The 117 Criticisms: Van Zyl's Systematic Review
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              In 2023, Llewellyn van Zyl and colleagues conducted a comprehensive systematic review 
              of all published criticisms of positive psychology. They identified 117 distinct criticisms, 
              which they organized into six major themes.
            </p>
            
            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h4 style={{ color: '#92400e', marginBottom: 12, fontWeight: 600 }}>Why This Matters</h4>
              <p style={{ color: '#78350f', lineHeight: 1.7 }}>
                Understanding criticisms isn't about dismissing positive psychology—it's about becoming 
                a more sophisticated practitioner who can apply interventions thoughtfully and avoid 
                potential pitfalls.
              </p>
            </div>
          </section>

          {/* Six Themes */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              The Six Themes of Criticism
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  num: 1,
                  title: 'Ideological Concerns',
                  count: '23 criticisms',
                  points: [
                    'Overemphasis on individual responsibility for wellbeing',
                    'Neglect of structural and systemic factors',
                    'Alignment with neoliberal capitalist values',
                    'Potential for "victim blaming" those who struggle'
                  ]
                },
                {
                  num: 2,
                  title: 'Theoretical Concerns',
                  count: '31 criticisms',
                  points: [
                    'Lack of clear definition of key constructs (happiness, wellbeing)',
                    'Circular reasoning in some frameworks',
                    'Insufficient theoretical grounding',
                    'Oversimplification of complex phenomena'
                  ]
                },
                {
                  num: 3,
                  title: 'Methodological Concerns',
                  count: '27 criticisms',
                  points: [
                    'Over-reliance on self-report measures',
                    'Cross-sectional designs limiting causal claims',
                    'Publication bias toward positive findings',
                    'Replication failures (e.g., positivity ratio)'
                  ]
                },
                {
                  num: 4,
                  title: 'Application Concerns',
                  count: '18 criticisms',
                  points: [
                    'Interventions applied without cultural adaptation',
                    'One-size-fits-all approach to wellbeing',
                    'Commercialization and pop-psychology dilution',
                    'Inadequate practitioner training'
                  ]
                },
                {
                  num: 5,
                  title: 'Moral & Ethical Concerns',
                  count: '11 criticisms',
                  points: [
                    'Prescriptive approach to how people "should" feel',
                    'Potential for toxic positivity',
                    'Marginalizing legitimate negative emotions',
                    'Privacy concerns with workplace applications'
                  ]
                },
                {
                  num: 6,
                  title: 'Cultural Concerns',
                  count: '7 criticisms',
                  points: [
                    'WEIRD population bias in research',
                    'Western conception of happiness imposed globally',
                    'Neglect of collectivist perspectives',
                    'Insufficient attention to diverse populations'
                  ]
                },
              ].map((theme) => (
                <div key={theme.num} style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 28,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#14532d',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600
                    }}>
                      {theme.num}
                    </div>
                    <div>
                      <h3 style={{ color: '#14532d', fontSize: 18, fontWeight: 600, margin: 0 }}>
                        {theme.title}
                      </h3>
                      <span style={{ color: '#16a34a', fontSize: 13 }}>{theme.count}</span>
                    </div>
                  </div>
                  <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 56, margin: 0 }}>
                    {theme.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Responding to Critics */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              How the Field Has Responded
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Rather than dismissing criticism, many positive psychologists have embraced it as an 
              opportunity for growth. Key responses include:
            </p>
            
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24 }}>
              <ul style={{ color: '#166534', lineHeight: 2, paddingLeft: 20 }}>
                <li><strong>Second Wave integration:</strong> Embracing the dialectical nature of wellbeing</li>
                <li><strong>Methodological rigor:</strong> Pre-registration, replication studies, open science</li>
                <li><strong>Cultural adaptation:</strong> Developing culturally-sensitive measures and interventions</li>
                <li><strong>Contextual awareness:</strong> Acknowledging structural factors alongside individual change</li>
                <li><strong>Ethical guidelines:</strong> Professional standards for positive psychology practice</li>
              </ul>
            </div>
          </section>

          {/* Reflection */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Reflection Exercise
            </h2>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 30, border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: 17, color: '#334155', lineHeight: 1.8, marginBottom: 20 }}>
                Which criticism resonates most with you? How might awareness of this criticism 
                make you a more thoughtful consumer or practitioner of positive psychology?
              </p>
              <textarea
                placeholder="Write your reflection here..."
                style={{
                  width: '100%',
                  minHeight: 120,
                  padding: 16,
                  borderRadius: 8,
                  border: '1px solid #d1d5db',
                  fontSize: 16,
                  lineHeight: 1.6,
                  resize: 'vertical'
                }}
              />
            </div>
          </section>

          {/* Key Takeaways */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Key Takeaways
            </h2>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 30 }}>
              <ul style={{ color: '#166534', fontSize: 16, lineHeight: 2, paddingLeft: 20 }}>
                <li>Van Zyl identified 117 criticisms organized into six themes</li>
                <li>Criticisms span ideological, theoretical, methodological, and ethical domains</li>
                <li>Understanding limitations makes for better practice</li>
                <li>The field has actively responded to strengthen its foundations</li>
                <li>Critical thinking is essential for ethical positive psychology application</li>
              </ul>
            </div>
          </section>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 40,
            borderTop: '1px solid #e2e8f0'
          }}>
            <Link href="/modules/1/lessons/2" style={{
              background: '#f1f5f9',
              color: '#14532d',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600
            }}>
              ← Previous
            </Link>
            
            <button
              onClick={() => setCompleted(true)}
              style={{
                background: completed ? '#22c55e' : '#14532d',
                color: '#ffffff',
                border: 'none',
                padding: '16px 32px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {completed ? '✓ Completed' : 'Mark Complete'}
            </button>
            
            <Link href="/modules/1/lessons/4" style={{
              background: '#f1f5f9',
              color: '#14532d',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600
            }}>
              Next →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}