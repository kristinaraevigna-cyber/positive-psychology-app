'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson5Page() {
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
              Lesson 5 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 8 }}>
              Global Applications
            </h1>
            <p style={{ opacity: 0.8, marginTop: 8 }}>20 minutes</p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{ marginBottom: 50 }}>
            <p style={{ fontSize: 20, color: '#14532d', lineHeight: 1.8, fontStyle: 'italic', borderLeft: '4px solid #22c55e', paddingLeft: 24 }}>
              "The ultimate test of any psychology is whether it can help address the real challenges people face."
            </p>
          </div>

          {/* Climate */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Climate Anxiety & Eco-Wellbeing
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              As climate change becomes increasingly visible, researchers are applying positive psychology 
              to help people cope with eco-anxiety while remaining engaged with environmental action.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {[
                { title: 'Eco-Anxiety', desc: 'Chronic fear about environmental doom—affects up to 70% of young people' },
                { title: 'Solastalgia', desc: 'Distress from environmental change in one\'s home environment' },
                { title: 'Meaning-Making', desc: 'Finding purpose through climate action and community involvement' },
                { title: 'Hope & Agency', desc: 'Balancing realistic assessment with empowered action' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ color: '#14532d', marginBottom: 8, fontWeight: 600 }}>{item.title}</h4>
                  <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 15 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bullying */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Anti-Bullying & School Wellbeing
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Positive psychology has contributed significantly to school-based interventions that go 
              beyond punishment to build positive school climates and resilience.
            </p>
            
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: 24 }}>
              <h4 style={{ color: '#14532d', marginBottom: 16, fontWeight: 600 }}>Evidence-Based Approaches</h4>
              <ul style={{ color: '#166534', lineHeight: 2, paddingLeft: 20 }}>
                <li><strong>Whole-school approaches:</strong> Creating positive cultures, not just punishing bullies</li>
                <li><strong>Strengths-based programs:</strong> Helping all students identify and use their strengths</li>
                <li><strong>Bystander empowerment:</strong> Training students to intervene constructively</li>
                <li><strong>Social-emotional learning:</strong> Building empathy, self-regulation, and relationship skills</li>
                <li><strong>Restorative practices:</strong> Repairing harm rather than just punishing</li>
              </ul>
            </div>
          </section>

          {/* Refugees */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              Refugee & Immigrant Wellbeing
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              With over 100 million displaced people worldwide, positive psychology offers frameworks 
              for supporting resilience and post-traumatic growth in refugee populations.
            </p>
            
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { approach: 'Post-Traumatic Growth', desc: 'Many refugees report positive changes after adversity—new priorities, deeper relationships, greater appreciation for life' },
                { approach: 'Cultural Identity Strengths', desc: 'Maintaining cultural practices and identity as protective factors for wellbeing' },
                { approach: 'Community Connections', desc: 'Social support and community belonging as key predictors of adaptation' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#ffffff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <h4 style={{ color: '#14532d', marginBottom: 8, fontWeight: 600 }}>{item.approach}</h4>
                  <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LGBTQ+ */}
          <section style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 26, color: '#14532d', marginBottom: 20, fontWeight: 500 }}>
              LGBTQ+ Affirmative Approaches
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
              Positive psychology is increasingly being applied to support LGBTQ+ flourishing, moving 
              beyond a deficit model to celebrate diverse identities and build resilience.
            </p>
            
            <div style={{ background: '#faf5ff', borderRadius: 12, padding: 24, borderLeft: '4px solid #8b5cf6' }}>
              <h4 style={{ color: '#6b21a8', marginBottom: 16, fontWeight: 600 }}>Key Applications</h4>
              <ul style={{ color: '#7c3aed', lineHeight: 2, paddingLeft: 20 }}>
                <li><strong>Identity affirmation:</strong> Supporting authentic self-expression as wellbeing</li>
                <li><strong>Community connection:</strong> LGBTQ+ spaces and chosen family as strengths</li>
                <li><strong>Minority stress coping:</strong> Building resilience in face of discrimination</li>
                <li><strong>Pride and meaning:</strong> Finding purpose through advocacy and community</li>
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
                <li>Positive psychology addresses contemporary challenges like climate anxiety</li>
                <li>School interventions focus on building positive cultures, not just punishment</li>
                <li>Refugee research highlights post-traumatic growth and cultural strengths</li>
                <li>LGBTQ+ applications celebrate identity and community as wellbeing factors</li>
                <li>Global applications require cultural sensitivity and adaptation</li>
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
            <Link href="/modules/1/lessons/4" style={{
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
            
            <Link href="/modules/1/lessons/6" style={{
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