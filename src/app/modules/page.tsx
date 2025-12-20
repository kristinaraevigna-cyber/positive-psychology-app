'use client';

import Link from 'next/link';

export default function ModulesPage() {
  const modules = [
    {
      id: 1,
      title: 'The Fundamentals',
      subtitle: 'Origins, Evolution & Critical Perspectives',
      description: 'Explore the birth and evolution of positive psychology, from Seligman and Csikszentmihalyi\'s foundational work to contemporary developments.',
      lessons: 6,
      duration: '2.5 hours',
      completed: 4,
      unlocked: true
    },
    {
      id: 2,
      title: 'The Primer to Wellbeing',
      subtitle: 'PERMA, Character Strengths & Flow',
      description: 'Understand the main wellbeing models, positive affect, optimism, meaning, relationships, and the science of character strengths.',
      lessons: 8,
      duration: '3.5 hours',
      completed: 0,
      unlocked: false
    },
    {
      id: 3,
      title: 'Interventions & Applications',
      subtitle: 'Evidence-Based Practices',
      description: 'Learn practical positive psychology interventions including gratitude, savoring, kindness, forgiveness, and strengths-based approaches.',
      lessons: 9,
      duration: '4 hours',
      completed: 0,
      unlocked: false
    },
    {
      id: 4,
      title: 'Maximizing Impact',
      subtitle: 'Person-Activity Fit & Change',
      description: 'Discover how to tailor interventions for maximum effectiveness using the Person-Activity Fit model and change theories.',
      lessons: 6,
      duration: '2.5 hours',
      completed: 0,
      unlocked: false
    },
    {
      id: 5,
      title: 'Multidisciplinary Applications',
      subtitle: 'Health, Education, Work & Arts',
      description: 'Apply positive psychology across domains including positive health, coaching, education, workplace wellbeing, and the arts.',
      lessons: 6,
      duration: '3 hours',
      completed: 0,
      unlocked: false
    }
  ];

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);
  const completedLessons = modules.reduce((acc, m) => acc + m.completed, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Green Navigation */}
      <nav style={{ 
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
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
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  background: '#86efac'
                }} />
              </div>
              <span style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>
                Positive Psychology
              </span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { href: '/dashboard', label: 'Dashboard', active: false },
              { href: '/modules', label: 'Modules', active: true },
              { href: '/journal', label: 'Journal', active: false },
              { href: '/assessments', label: 'Assessments', active: false },
              { href: '/coach', label: 'AI Coach', active: false },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.active ? '#ffffff' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: 8,
                background: item.active ? 'rgba(255,255,255,0.15)' : 'transparent',
                transition: 'all 0.2s'
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600
          }}>
            JB
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 40px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{
            color: '#16a34a',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 16
          }}>
            Course Curriculum
          </p>
          <h1 style={{ 
            fontSize: 42, 
            color: '#111827', 
            fontWeight: 600,
            marginBottom: 16,
            fontFamily: 'Georgia, serif'
          }}>
            Learning Modules
          </h1>
          <p style={{ 
            color: '#64748b', 
            fontSize: 18,
            maxWidth: 600,
            margin: '0 auto'
          }}>
            A comprehensive journey through the science of human flourishing
          </p>

          {/* Progress Summary */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 24,
            background: '#ffffff',
            padding: '16px 32px',
            borderRadius: 12,
            border: '1px solid #e5e7eb',
            marginTop: 32
          }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: 24, fontWeight: 600, color: '#14532d' }}>
                {completedLessons} / {totalLessons}
              </p>
              <p style={{ fontSize: 13, color: '#64748b' }}>Lessons completed</p>
            </div>
            <div style={{ width: 1, height: 40, background: '#e5e7eb' }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: 24, fontWeight: 600, color: '#14532d' }}>
                18.5
              </p>
              <p style={{ fontSize: 13, color: '#64748b' }}>Total hours</p>
            </div>
            <div style={{ width: 1, height: 40, background: '#e5e7eb' }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: 24, fontWeight: 600, color: '#14532d' }}>
                {Math.round((completedLessons / totalLessons) * 100)}%
              </p>
              <p style={{ fontSize: 13, color: '#64748b' }}>Progress</p>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {modules.map((module) => (
            <Link 
              key={module.id} 
              href={module.unlocked ? `/modules/${module.id}` : '#'}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 32,
                border: '1px solid #e5e7eb',
                opacity: module.unlocked ? 1 : 0.6,
                cursor: module.unlocked ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                display: 'flex',
                gap: 28
              }}>
                {/* Module Number */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
                  background: module.unlocked 
                    ? 'linear-gradient(135deg, #14532d 0%, #166534 100%)' 
                    : '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: module.unlocked ? '#ffffff' : '#94a3b8',
                  fontSize: 24,
                  fontWeight: 600,
                  flexShrink: 0
                }}>
                  {module.id}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: 8
                  }}>
                    <div>
                      <h2 style={{ 
                        fontSize: 22, 
                        fontWeight: 600, 
                        color: module.unlocked ? '#111827' : '#9ca3af',
                        marginBottom: 4,
                        fontFamily: 'Georgia, serif'
                      }}>
                        {module.title}
                      </h2>
                      <p style={{ 
                        fontSize: 15, 
                        color: module.unlocked ? '#16a34a' : '#9ca3af',
                        fontWeight: 500
                      }}>
                        {module.subtitle}
                      </p>
                    </div>

                    {!module.unlocked && (
                      <div style={{
                        background: '#f3f4f6',
                        padding: '8px 12px',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>Locked</span>
                      </div>
                    )}
                  </div>

                  <p style={{ 
                    fontSize: 15, 
                    color: '#64748b',
                    lineHeight: 1.7,
                    marginBottom: 20
                  }}>
                    {module.description}
                  </p>

                  {/* Stats Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                      <span style={{ fontSize: 14, color: '#64748b' }}>{module.lessons} lessons</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span style={{ fontSize: 14, color: '#64748b' }}>{module.duration}</span>
                    </div>
                    
                    {module.unlocked && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 8,
                        marginLeft: 'auto'
                      }}>
                        <div style={{
                          width: 120,
                          height: 6,
                          background: '#e5e7eb',
                          borderRadius: 3,
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(module.completed / module.lessons) * 100}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #14532d 0%, #22c55e 100%)',
                            borderRadius: 3
                          }} />
                        </div>
                        <span style={{ fontSize: 13, color: '#14532d', fontWeight: 600 }}>
                          {module.completed}/{module.lessons}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
