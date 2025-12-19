'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson2Page() {
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
              Lesson 2 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 8 }}>
              Evolution of the Field
            </h1>
            <p style={{ opacity: 0.8, marginTop: 8 }}>30 minutes</p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{ marginBottom: 50 }}>
            <p style={{ fontSize: 20, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', borderLeft: '4px solid #22c55e', paddingLeft: 24 }}>
              "Positive psychology is not about painting a smiley face on every life challenge; it's about understanding the full spectrum of human experience."
            </p>
            <p style={{ color: '#64748b', marginTop: 12 }}>— Second Wave Perspective</p>
          </div>

          {/* First Wave */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              First Wave: The Positive Focus (2000-2010)
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              The first decade of positive psychology was characterized by an enthusiastic focus on positive 
              phenomena. Researchers studied happiness, optimism, resilience, and strengths with the goal 
              of understanding what makes life worth living.
            </p>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Key developments included:
            </p>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
              {[
                { year: '2002', event: 'VIA Classification of Character Strengths published' },
                { year: '2004', event: 'First World Congress on Positive Psychology' },
                { year: '2005', event: 'MAPP (Masters in Applied Positive Psychology) launched at UPenn' },
                { year: '2006', event: 'Positive Psychology reaches 1 million Google search results' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ background: '#22c55e', color: '#fff', padding: '4px 12px', borderRadius: 4, fontSize: 14, fontWeight: 600 }}>
                    {item.year}
                  </span>
                  <span style={{ color: '#475569', fontSize: 16 }}>{item.event}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Second Wave */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Second Wave: Embracing Dialectics (2010-2020)
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Around 2010, scholars began questioning the "tyranny of the positive." Led by researchers 
              like Tim Lomas and Itai Ivtzan, Second Wave Positive Psychology (SWPP) emerged with a 
              more nuanced, dialectical approach.
            </p>
            
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h4 style={{ color: '#14532d', marginBottom: 16, fontWeight: 600 }}>Key Second Wave Principles</h4>
              <ul style={{ color: '#166534', lineHeight: 2, paddingLeft: 20 }}>
                <li><strong>Dialectical thinking:</strong> Positive and negative are intertwined, not opposites</li>
                <li><strong>Context matters:</strong> What's "positive" depends on situation and culture</li>
                <li><strong>Growth through adversity:</strong> Post-traumatic growth and "what doesn't kill you"</li>
                <li><strong>Dark side of positivity:</strong> Too much optimism can be harmful</li>
                <li><strong>Non-linear processes:</strong> Wellbeing isn't always about maximizing positives</li>
              </ul>
            </div>
            
            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h4 style={{ color: '#92400e', marginBottom: 12, fontWeight: 600 }}>The Positivity Ratio Controversy</h4>
              <p style={{ color: '#78350f', lineHeight: 1.7 }}>
                Fredrickson and Losada's (2005) claim of a precise 2.9013 positivity ratio for flourishing 
                was debunked by Brown et al. (2013). This controversy highlighted the need for more 
                rigorous methodology and less "positive" conclusions in the field.
              </p>
            </div>
          </section>

          {/* Third Wave */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Third Wave: Systems & Complexity (2020-Present)
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              The emerging Third Wave focuses on systems thinking, recognizing that wellbeing exists within 
              complex social, cultural, and environmental contexts. Key themes include:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 24 }}>
              {[
                { title: 'Collective Wellbeing', desc: 'Moving beyond individual to community and societal flourishing' },
                { title: 'Environmental Connection', desc: 'Eco-psychology and climate-aware wellbeing' },
                { title: 'Systems Approaches', desc: 'Understanding wellbeing as emergent from complex systems' },
                { title: 'Social Justice', desc: 'Addressing equity, access, and structural factors in wellbeing' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ color: '#14532d', marginBottom: 8, fontWeight: 600 }}>{item.title}</h4>
                  <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 15 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Comparing the Three Waves
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <thead>
                  <tr style={{ background: '#14532d', color: '#fff' }}>
                    <th style={{ padding: 16, textAlign: 'left' }}>Aspect</th>
                    <th style={{ padding: 16, textAlign: 'left' }}>First Wave</th>
                    <th style={{ padding: 16, textAlign: 'left' }}>Second Wave</th>
                    <th style={{ padding: 16, textAlign: 'left' }}>Third Wave</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: 'Focus', first: 'Positive states', second: 'Dialectical balance', third: 'Systems & context' },
                    { aspect: 'View of negative', first: 'To be reduced', second: 'Sometimes valuable', third: 'Part of whole system' },
                    { aspect: 'Unit of analysis', first: 'Individual', second: 'Individual in context', third: 'Systems & collectives' },
                    { aspect: 'Goal', first: 'Maximize happiness', second: 'Optimal balance', third: 'Systemic flourishing' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: 16, fontWeight: 600, color: '#14532d' }}>{row.aspect}</td>
                      <td style={{ padding: 16, color: '#475569' }}>{row.first}</td>
                      <td style={{ padding: 16, color: '#475569' }}>{row.second}</td>
                      <td style={{ padding: 16, color: '#475569' }}>{row.third}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Takeaways */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Key Takeaways
            </h2>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 30 }}>
              <ul style={{ color: '#166534', fontSize: 16, lineHeight: 2, paddingLeft: 20 }}>
                <li>Positive psychology has evolved through three distinct waves since 2000</li>
                <li>First Wave focused on positive phenomena; Second Wave embraced dialectics</li>
                <li>The field has become more nuanced about the "dark side" of positivity</li>
                <li>Third Wave emphasizes systems thinking and collective wellbeing</li>
                <li>Modern positive psychology integrates positive AND negative experiences</li>
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
            <Link href="/modules/1/lessons/1" style={{
              background: '#f1f5f9',
              color: '#14532d',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600
            }}>
              ← Previous Lesson
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
              {completed ? '✓ Completed' : 'Mark as Complete'}
            </button>
            
            <Link href="/modules/1/lessons/3" style={{
              background: '#f1f5f9',
              color: '#14532d',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600
            }}>
              Next Lesson →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}