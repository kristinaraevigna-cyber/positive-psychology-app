'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson1Page() {
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
              Lesson 1 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 8 }}>
              The Birth of Positive Psychology
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
              "The aim of positive psychology is to catalyze a change in psychology from a preoccupation only with repairing the worst things in life to also building the best qualities in life."
            </p>
            <p style={{ color: '#64748b', marginTop: 12 }}>— Martin Seligman & Mihaly Csikszentmihalyi (2000)</p>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              The Hawaii Meeting (1997)
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              The story of positive psychology begins with a chance encounter. In 1997, Martin Seligman, 
              newly elected president of the American Psychological Association, was vacationing in Hawaii 
              when he met Mihaly Csikszentmihalyi, the renowned researcher known for his work on "flow" states.
            </p>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              During their conversations, both psychologists realized they shared a common frustration: 
              psychology had become almost exclusively focused on mental illness, dysfunction, and pathology. 
              While this work was important, it represented only half of the human experience.
            </p>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h4 style={{ color: '#14532d', marginBottom: 12, fontWeight: 600 }}>Key Insight</h4>
              <p style={{ color: '#166534', lineHeight: 1.7 }}>
                Before this meeting, psychology had developed 14 times more research on negative states 
                (depression, anxiety, trauma) than positive states (happiness, flourishing, resilience).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Seligman's APA Presidential Address (1998)
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              In his presidential address to the American Psychological Association, Seligman called for a 
              new direction in psychological science. He argued that psychology needed to move beyond its 
              "disease model" to also study what makes life worth living.
            </p>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              He proposed three pillars for this new "positive psychology":
            </p>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
              {[
                { title: 'Positive Emotions', desc: 'Studying happiness, joy, contentment, and hope' },
                { title: 'Positive Traits', desc: 'Understanding character strengths and virtues' },
                { title: 'Positive Institutions', desc: 'Building organizations that enable flourishing' },
              ].map((pillar, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24 }}>
                  <h4 style={{ color: '#14532d', marginBottom: 8, fontWeight: 600 }}>{pillar.title}</h4>
                  <p style={{ color: '#64748b', lineHeight: 1.6 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              The 2000 Manifesto Paper
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              In January 2000, Seligman and Csikszentmihalyi published their landmark paper 
              "Positive Psychology: An Introduction" in the American Psychologist. This paper 
              officially launched the field and set its research agenda.
            </p>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              The paper argued that psychology had made tremendous progress in understanding and 
              treating mental illness, but had neglected the other side of the coin: understanding 
              and promoting mental wellness.
            </p>
            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24, marginTop: 24 }}>
              <h4 style={{ color: '#92400e', marginBottom: 12, fontWeight: 600 }}>Historical Context</h4>
              <p style={{ color: '#78350f', lineHeight: 1.7 }}>
                This shift wasn't entirely new—humanistic psychologists like Abraham Maslow and Carl Rogers 
                had explored similar themes decades earlier. However, Seligman's contribution was to call 
                for rigorous, empirical research on positive human functioning.
              </p>
            </div>
          </section>

          {/* Reflection */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Reflection Question
            </h2>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 30, border: '2px solid #e2e8f0' }}>
              <p style={{ fontSize: 17, color: '#334155', lineHeight: 1.8, marginBottom: 20 }}>
                Think about your own experience with psychology (through education, therapy, media, or personal reading). 
                Has it been more focused on problems and pathology, or on strengths and flourishing? 
                How might a more balanced approach have benefited you?
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
                <li>Positive psychology emerged from a 1997 meeting between Seligman and Csikszentmihalyi</li>
                <li>The field was formally launched with the 2000 manifesto paper in American Psychologist</li>
                <li>It focuses on three pillars: positive emotions, positive traits, and positive institutions</li>
                <li>The goal is to complement (not replace) traditional psychology's focus on pathology</li>
                <li>It built upon earlier humanistic psychology but emphasized empirical research methods</li>
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
            <div></div>
            
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
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              {completed ? '✓ Completed' : 'Mark as Complete'}
            </button>
            
            <Link href="/modules/1/lessons/2" style={{
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