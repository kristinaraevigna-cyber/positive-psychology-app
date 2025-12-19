'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson4Page() {
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
              Lesson 4 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 8 }}>
              Cultural Considerations
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
              "Happiness looks different depending on where you stand in the world."
            </p>
          </div>

          {/* WEIRD Problem */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              The WEIRD Problem
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              In 2010, Henrich, Heine, and Norenzayan published a landmark paper revealing that 96% of 
              psychology research participants come from WEIRD populations:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
              {[
                { letter: 'W', word: 'Western', color: '#3b82f6' },
                { letter: 'E', word: 'Educated', color: '#8b5cf6' },
                { letter: 'I', word: 'Industrialized', color: '#ec4899' },
                { letter: 'R', word: 'Rich', color: '#f59e0b' },
                { letter: 'D', word: 'Democratic', color: '#22c55e' },
              ].map((item) => (
                <div key={item.letter} style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 20,
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: item.color,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 700,
                    margin: '0 auto 12px auto'
                  }}>
                    {item.letter}
                  </div>
                  <p style={{ color: '#475569', fontSize: 14, fontWeight: 500 }}>{item.word}</p>
                </div>
              ))}
            </div>
            
            <div style={{ background: '#fef3c7', borderRadius: 12, padding: 24 }}>
              <h4 style={{ color: '#92400e', marginBottom: 12, fontWeight: 600 }}>The Problem</h4>
              <p style={{ color: '#78350f', lineHeight: 1.7 }}>
                WEIRD populations represent only 12% of the world's population, yet findings from 
                these samples are often generalized as universal human truths. This is especially 
                problematic for subjective experiences like happiness and wellbeing.
              </p>
            </div>
          </section>

          {/* Hendriks Research */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Hendriks' Cross-Cultural Research
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Researcher Sanne Hendriks has led important work examining how wellbeing manifests 
              differently across cultures. Key findings include:
            </p>
            
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  title: 'Happiness Definitions',
                  content: 'Western cultures emphasize high-arousal positive emotions (excitement, joy). East Asian cultures often value low-arousal states (calm, contentment).'
                },
                {
                  title: 'Self vs. Social',
                  content: 'Individualist cultures tie wellbeing to personal achievement. Collectivist cultures emphasize social harmony and family relationships.'
                },
                {
                  title: 'Expression Norms',
                  content: 'Some cultures view expressing happiness as appropriate; others see it as inappropriate or inviting bad luck.'
                },
                {
                  title: 'Life Satisfaction',
                  content: 'What counts as a "good life" varies dramatically—career success, family honor, spiritual development, or community contribution.'
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24 }}>
                  <h4 style={{ color: '#14532d', marginBottom: 8, fontWeight: 600 }}>{item.title}</h4>
                  <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Indigenous Perspectives */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Indigenous & Non-Western Perspectives
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Many indigenous cultures have sophisticated wellbeing concepts that predate positive psychology 
              and offer alternative frameworks:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {[
                { culture: 'Māori (NZ)', concept: 'Te Whare Tapa Whā', desc: 'Four walls of health: spiritual, mental, physical, family' },
                { culture: 'Hawaiian', concept: 'Pono', desc: 'Righteous balance and harmony in all relationships' },
                { culture: 'Ubuntu (African)', concept: 'Ubuntu', desc: '"I am because we are"—wellbeing through community' },
                { culture: 'Buddhist', concept: 'Sukha', desc: 'Deep wellbeing from mental training, not external conditions' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#f0fdf4',
                  borderRadius: 12,
                  padding: 24
                }}>
                  <span style={{ color: '#16a34a', fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.culture}
                  </span>
                  <h4 style={{ color: '#14532d', fontSize: 18, margin: '8px 0', fontWeight: 600 }}>
                    {item.concept}
                  </h4>
                  <p style={{ color: '#166534', lineHeight: 1.6, fontSize: 15 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implications */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Implications for Practice
            </h2>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 30 }}>
              <ul style={{ color: '#166534', fontSize: 16, lineHeight: 2.2, paddingLeft: 20 }}>
                <li><strong>Assess cultural context</strong> before applying any intervention</li>
                <li><strong>Adapt measures</strong> rather than directly translating Western questionnaires</li>
                <li><strong>Include local stakeholders</strong> in designing wellbeing programs</li>
                <li><strong>Question assumptions</strong> about what "flourishing" means in each context</li>
                <li><strong>Learn from indigenous wisdom</strong> rather than only exporting Western models</li>
              </ul>
            </div>
          </section>

          {/* Key Takeaways */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Key Takeaways
            </h2>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 30 }}>
              <ul style={{ color: '#166534', fontSize: 16, lineHeight: 2, paddingLeft: 20 }}>
                <li>96% of psychology research uses WEIRD populations (only 12% of world)</li>
                <li>Happiness and wellbeing are culturally constructed concepts</li>
                <li>Individualist vs. collectivist cultures define flourishing differently</li>
                <li>Indigenous perspectives offer valuable alternative frameworks</li>
                <li>Ethical practice requires cultural humility and adaptation</li>
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
            <Link href="/modules/1/lessons/3" style={{
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
            
            <Link href="/modules/1/lessons/5" style={{
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