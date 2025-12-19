'use client';

import Link from 'next/link';

export default function HomePage() {
  const modules = [
    { id: 1, title: 'The Fundamentals', subtitle: 'Origins, Evolution & Critical Perspectives', lessons: 6 },
    { id: 2, title: 'The Primer to Wellbeing', subtitle: 'PERMA & Character Strengths', lessons: 8, locked: true },
    { id: 3, title: 'Interventions & Applications', subtitle: 'Evidence-Based Practices', lessons: 9, locked: true },
    { id: 4, title: 'Maximizing Impact', subtitle: 'Person-Activity Fit', lessons: 6, locked: true },
    { id: 5, title: 'Multidisciplinary Applications', subtitle: 'Health, Education & Work', lessons: 6, locked: true },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
        padding: '80px 40px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <p style={{ 
          color: '#86efac', 
          fontSize: 14, 
          letterSpacing: 3, 
          textTransform: 'uppercase',
          marginBottom: 16 
        }}>
          Masters-Level Course
        </p>
        <h1 style={{ 
          fontSize: 48, 
          fontWeight: 400, 
          marginBottom: 20,
          maxWidth: 800,
          margin: '0 auto 20px auto'
        }}>
          Foundations of Positive Psychology
        </h1>
        <p style={{ 
          fontSize: 20, 
          opacity: 0.9, 
          maxWidth: 600, 
          margin: '0 auto 40px auto',
          lineHeight: 1.6
        }}>
          Explore the science of human flourishing with Dr. Jolanta Burke
        </p>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dashboard" style={{
            background: '#86efac',
            color: '#14532d',
            padding: '16px 32px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Go to Dashboard
          </Link>
          <Link href="/coach" style={{
            background: 'transparent',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.3)'
          }}>
            Talk to AI Coach
          </Link>
        </div>
      </div>

      {/* Quick Navigation */}
      <div style={{ padding: '60px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: '#14532d', 
            fontSize: 32, 
            marginBottom: 40,
            fontWeight: 400
          }}>
            Start Your Journey
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 24 
          }}>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#f0fdf4',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
                <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 8 }}>Dashboard</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Track your progress</p>
              </div>
            </Link>
            
            <Link href="/modules" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#f0fdf4',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>📚</div>
                <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 8 }}>Modules</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Course content</p>
              </div>
            </Link>
            
            <Link href="/journal" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#f0fdf4',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>📝</div>
                <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 8 }}>Journal</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Reflect & grow</p>
              </div>
            </Link>
            
            <Link href="/assessments" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#f0fdf4',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
                <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 8 }}>Assessments</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Measure wellbeing</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Modules Preview */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: '#14532d', 
            fontSize: 32, 
            marginBottom: 16,
            fontWeight: 400
          }}>
            Course Modules
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#64748b', 
            marginBottom: 40,
            fontSize: 17
          }}>
            5 comprehensive modules covering the science of flourishing
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {modules.map((module) => (
              <Link 
                key={module.id} 
                href={module.locked ? '#' : `/modules/${module.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  opacity: module.locked ? 0.6 : 1,
                  cursor: module.locked ? 'not-allowed' : 'pointer'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      background: module.locked ? '#e2e8f0' : '#14532d',
                      color: module.locked ? '#94a3b8' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: 18
                    }}>
                      {module.id}
                    </div>
                    <div>
                      <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 4 }}>
                        {module.title}
                      </h3>
                      <p style={{ color: '#64748b', fontSize: 14 }}>
                        {module.subtitle} • {module.lessons} lessons
                      </p>
                    </div>
                  </div>
                  
                  {module.locked ? (
                    <span style={{ fontSize: 20 }}>🔒</span>
                  ) : (
                    <span style={{
                      background: '#14532d',
                      color: '#ffffff',
                      padding: '10px 20px',
                      borderRadius: 6,
                      fontSize: 14,
                      fontWeight: 600
                    }}>
                      Start →
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* AI Coach CTA */}
      <div style={{ padding: '60px 40px', background: '#14532d' }}>
        <div style={{ 
          maxWidth: 800, 
          margin: '0 auto', 
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <div style={{ fontSize: 50, marginBottom: 20 }}>🧠</div>
          <h2 style={{ fontSize: 32, marginBottom: 16, fontWeight: 400 }}>
            Meet Dr. Flourish
          </h2>
          <p style={{ 
            fontSize: 18, 
            opacity: 0.9, 
            marginBottom: 30,
            lineHeight: 1.7
          }}>
            Your AI coach for positive psychology. Ask questions, explore concepts, 
            and get personalized guidance on your wellbeing journey.
          </p>
          <Link href="/coach" style={{
            background: '#86efac',
            color: '#14532d',
            padding: '16px 40px',
            borderRadius: 8,
            fontSize: 17,
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '40px', 
        background: '#0f3a21', 
        textAlign: 'center',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 14
      }}>
        <p>Foundations of Positive Psychology • Created by Dr. Jolanta Burke</p>
      </div>
    </div>
  );
}
