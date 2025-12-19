'use client';

import Link from 'next/link';

export default function Dashboard() {
  const modules = [
    { id: 1, title: 'The Fundamentals', progress: 0, lessons: 6 },
    { id: 2, title: 'The Primer to Wellbeing', progress: 0, lessons: 8, locked: true },
    { id: 3, title: 'Interventions & Applications', progress: 0, lessons: 9, locked: true },
    { id: 4, title: 'Maximizing Impact', progress: 0, lessons: 6, locked: true },
    { id: 5, title: 'Multidisciplinary Applications', progress: 0, lessons: 6, locked: true },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Navigation */}
      <nav style={{
        background: '#14532d',
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
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: item.href === '/dashboard' ? '#86efac' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 6,
                  background: item.href === '/dashboard' ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#14532d',
            fontWeight: 600
          }}>
            S
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '50px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Welcome */}
          <div style={{ marginBottom: 50 }}>
            <h1 style={{
              fontSize: 36,
              color: '#14532d',
              fontWeight: 400,
              marginBottom: 8
            }}>
              Welcome back, Student
            </h1>
            <p style={{ color: '#64748b', fontSize: 17 }}>
              Continue your journey into the science of human flourishing.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            marginBottom: 50
          }}>
            {[
              { label: 'Current Streak', value: '0 days', color: '#f59e0b' },
              { label: 'Lessons Completed', value: '0 / 35', color: '#14532d' },
              { label: 'Journal Entries', value: '0', color: '#8b5cf6' },
              { label: 'Assessments', value: '0 / 5', color: '#06b6d4' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: 28,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
              }}>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </p>
                <p style={{ color: stat.color, fontSize: 32, fontWeight: 600 }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
            <div>
              <h2 style={{ fontSize: 22, color: '#14532d', marginBottom: 24, fontWeight: 500 }}>
                Your Progress
              </h2>
              
              {modules.map((module) => (
                <Link key={module.id} href={module.locked ? '#' : `/modules/${module.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    padding: 24,
                    marginBottom: 16,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    opacity: module.locked ? 0.6 : 1,
                    cursor: module.locked ? 'not-allowed' : 'pointer',
                    border: module.id === 1 ? '2px solid #22c55e' : '2px solid transparent'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div>
                        <span style={{ color: '#16a34a', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                          Module {module.id}
                        </span>
                        <h3 style={{ color: '#14532d', fontSize: 18, fontWeight: 500, marginTop: 4 }}>
                          {module.title}
                        </h3>
                      </div>
                      {module.locked ? (
                        <span style={{ fontSize: 24 }}>🔒</span>
                      ) : (
                        <span style={{
                          background: '#f1f5f9',
                          color: '#64748b',
                          padding: '6px 14px',
                          borderRadius: 20,
                          fontSize: 13,
                          fontWeight: 500
                        }}>
                          Start
                        </span>
                      )}
                    </div>
                    
                    <div style={{ background: '#e2e8f0', borderRadius: 10, height: 8 }}>
                      <div style={{
                        background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                        height: '100%',
                        width: `${module.progress}%`,
                        borderRadius: 10
                      }} />
                    </div>
                    
                    <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 10 }}>
                      0 of {module.lessons} lessons completed
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: 28,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                marginBottom: 24
              }}>
                <h3 style={{ color: '#14532d', fontSize: 18, marginBottom: 20, fontWeight: 500 }}>
                  Quick Actions
                </h3>
                
                <Link href="/journal/gratitude" style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#f0fdf4',
                    padding: 16,
                    borderRadius: 8,
                    color: '#14532d',
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 12
                  }}>
                    ✨ Three Good Things
                  </div>
                </Link>
                
                <Link href="/journal/checkin" style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#faf5ff',
                    padding: 16,
                    borderRadius: 8,
                    color: '#6b21a8',
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 12
                  }}>
                    📊 Daily Check-in
                  </div>
                </Link>
                
                <Link href="/assessments/strengths" style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#fef3c7',
                    padding: 16,
                    borderRadius: 8,
                    color: '#92400e',
                    fontSize: 15,
                    fontWeight: 500
                  }}>
                    💪 Strengths Assessment
                  </div>
                </Link>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
                borderRadius: 12,
                padding: 28,
                color: '#ffffff'
              }}>
                <h3 style={{ fontSize: 18, marginBottom: 12, fontWeight: 500 }}>
                  AI Coach
                </h3>
                <p style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.6, marginBottom: 20 }}>
                  Get personalized guidance on your wellbeing journey.
                </p>
                <button style={{
                  background: '#86efac',
                  color: '#14532d',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}