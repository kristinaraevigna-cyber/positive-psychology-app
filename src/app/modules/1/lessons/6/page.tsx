'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson6Page() {
  const [completed, setCompleted] = useState(false);
  const [responses, setResponses] = useState({
    origin: '',
    criticism: '',
    culture: '',
    application: '',
  });

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
      <div style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', padding: '40px', color: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link href="/modules/1" style={{ color: '#fef3c7', textDecoration: 'none', fontSize: 14 }}>
            ← Back to Module 1
          </Link>
          <div style={{ marginTop: 20 }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: 4, fontSize: 13, fontWeight: 600 }}>
              ACTIVITY • Lesson 6 of 6
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 400, marginTop: 12 }}>
              Module 1 Integration
            </h1>
            <p style={{ opacity: 0.9, marginTop: 8 }}>25 minutes • Reflective Activities</p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{ marginBottom: 50 }}>
            <p style={{ fontSize: 18, color: '#475569', lineHeight: 1.8 }}>
              Congratulations on completing Module 1! This integration activity will help you 
              synthesize your learning and prepare a strong foundation for the modules ahead. 
              Take your time with each reflection.
            </p>
          </div>

          {/* Activity 1 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>
                  1
                </div>
                <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, margin: 0 }}>
                  Your Origin Story
                </h3>
              </div>
              
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                Just as positive psychology has its origin story (Seligman and Csikszentmihalyi in Hawaii), 
                you have your own story of what brought you to study wellbeing. Reflect on your personal 
                "origin story" with positive psychology.
              </p>
              
              <label style={{ display: 'block', color: '#64748b', fontSize: 14, marginBottom: 8 }}>
                What drew you to studying positive psychology? What do you hope to gain or contribute?
              </label>
              <textarea
                value={responses.origin}
                onChange={(e) => setResponses({ ...responses, origin: e.target.value })}
                placeholder="Share your story..."
                style={{
                  width: '100%',
                  minHeight: 150,
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

          {/* Activity 2 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>
                  2
                </div>
                <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, margin: 0 }}>
                  Critical Thinking Exercise
                </h3>
              </div>
              
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                Select one of the 117 criticisms from van Zyl's review that you find most important. 
                Consider how awareness of this criticism might shape your approach to positive psychology.
              </p>
              
              <label style={{ display: 'block', color: '#64748b', fontSize: 14, marginBottom: 8 }}>
                Which criticism did you choose, and how will it inform your practice?
              </label>
              <textarea
                value={responses.criticism}
                onChange={(e) => setResponses({ ...responses, criticism: e.target.value })}
                placeholder="Describe the criticism and your thoughts..."
                style={{
                  width: '100%',
                  minHeight: 150,
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

          {/* Activity 3 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>
                  3
                </div>
                <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, margin: 0 }}>
                  Cultural Wellbeing Mapping
                </h3>
              </div>
              
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                Consider your own cultural background. How does your culture define a "good life" 
                or "wellbeing"? How might this differ from the WEIRD-focused positive psychology research?
              </p>
              
              <label style={{ display: 'block', color: '#64748b', fontSize: 14, marginBottom: 8 }}>
                Describe your cultural perspective on wellbeing and how it shapes your understanding.
              </label>
              <textarea
                value={responses.culture}
                onChange={(e) => setResponses({ ...responses, culture: e.target.value })}
                placeholder="Explore your cultural context..."
                style={{
                  width: '100%',
                  minHeight: 150,
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

          {/* Activity 4 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>
                  4
                </div>
                <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, margin: 0 }}>
                  Future Application
                </h3>
              </div>
              
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                Looking at the global applications discussed (climate, schools, refugees, LGBTQ+), 
                which area interests you most? How might you apply positive psychology in this domain?
              </p>
              
              <label style={{ display: 'block', color: '#64748b', fontSize: 14, marginBottom: 8 }}>
                Which application area resonates with you and why?
              </label>
              <textarea
                value={responses.application}
                onChange={(e) => setResponses({ ...responses, application: e.target.value })}
                placeholder="Describe your interest and potential application..."
                style={{
                  width: '100%',
                  minHeight: 150,
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

          {/* Module Summary */}
          <section style={{ marginBottom: 50 }}>
            <div style={{
              background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
              borderRadius: 16,
              padding: 32,
              color: '#ffffff'
            }}>
              <h3 style={{ fontSize: 22, marginBottom: 16, fontWeight: 500 }}>
                🎉 Module 1 Complete!
              </h3>
              <p style={{ opacity: 0.9, lineHeight: 1.8, marginBottom: 20 }}>
                You've built a strong foundation in the origins, evolution, and critical perspectives 
                of positive psychology. In Module 2, we'll dive deep into the core theories of wellbeing: 
                PERMA, psychological wellbeing, and character strengths.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: 16, flex: 1 }}>
                  <p style={{ fontSize: 28, fontWeight: 600, marginBottom: 4 }}>6</p>
                  <p style={{ fontSize: 13, opacity: 0.8 }}>Lessons Completed</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: 16, flex: 1 }}>
                  <p style={{ fontSize: 28, fontWeight: 600, marginBottom: 4 }}>2.5</p>
                  <p style={{ fontSize: 13, opacity: 0.8 }}>Hours of Learning</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: 16, flex: 1 }}>
                  <p style={{ fontSize: 28, fontWeight: 600, marginBottom: 4 }}>4</p>
                  <p style={{ fontSize: 13, opacity: 0.8 }}>Reflections Written</p>
                </div>
              </div>
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
            <Link href="/modules/1/lessons/5" style={{
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
              {completed ? '✓ Module Complete!' : 'Complete Module 1'}
            </button>
            
            <Link href="/modules" style={{
              background: '#14532d',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600
            }}>
              Back to Modules →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}