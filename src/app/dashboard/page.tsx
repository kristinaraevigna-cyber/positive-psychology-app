'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [chatMessage, setChatMessage] = useState('');

  const stats = [
    { label: 'Lessons Completed', value: '4', total: '35', percentage: 11 },
    { label: 'Current Module', value: '1', total: '5', percentage: 20 },
    { label: 'Journal Entries', value: '7', total: null, percentage: null },
    { label: 'Day Streak', value: '3', total: null, percentage: null },
  ];

  const modules = [
    { id: 1, title: 'The Fundamentals', subtitle: 'Origins, Evolution & Critical Perspectives', lessons: 6, completed: 4, unlocked: true },
    { id: 2, title: 'The Primer to Wellbeing', subtitle: 'PERMA & Character Strengths', lessons: 8, completed: 0, unlocked: false },
    { id: 3, title: 'Interventions & Applications', subtitle: 'Evidence-Based Practices', lessons: 9, completed: 0, unlocked: false },
    { id: 4, title: 'Maximizing Impact', subtitle: 'Person-Activity Fit', lessons: 6, completed: 0, unlocked: false },
    { id: 5, title: 'Multidisciplinary Applications', subtitle: 'Health, Education & Work', lessons: 6, completed: 0, unlocked: false },
  ];

  const suggestedQuestions = [
    'What is the PERMA model?',
    'How can I use character strengths?',
    'What are the three waves of positive psychology?',
  ];

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
              { href: '/dashboard', label: 'Dashboard', active: true },
              { href: '/modules', label: 'Modules', active: false },
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
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ 
            fontSize: 32, 
            color: '#111827', 
            fontWeight: 600,
            marginBottom: 8,
            fontFamily: 'Georgia, serif'
          }}>
            Welcome back
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Continue your journey into the science of human flourishing
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: 24,
          marginBottom: 40
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 24,
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ 
                color: '#64748b', 
                fontSize: 12, 
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                marginBottom: 12
              }}>
                {stat.label}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ 
                  fontSize: 36, 
                  fontWeight: 600, 
                  color: '#14532d' 
                }}>
                  {stat.value}
                </span>
                {stat.total && (
                  <span style={{ color: '#94a3b8', fontSize: 16 }}>
                    / {stat.total}
                  </span>
                )}
              </div>
              {stat.percentage !== null && (
                <div style={{ marginTop: 12 }}>
                  <div style={{
                    height: 4,
                    background: '#e5e7eb',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${stat.percentage}%`,
                      background: 'linear-gradient(90deg, #14532d 0%, #22c55e 100%)',
                      borderRadius: 2
                    }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 32 }}>
          
          {/* Left Column - Modules */}
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: 20
            }}>
              <h2 style={{ 
                fontSize: 20, 
                fontWeight: 600, 
                color: '#111827',
                fontFamily: 'Georgia, serif'
              }}>
                Course Modules
              </h2>
              <Link href="/modules" style={{
                color: '#16a34a',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none'
              }}>
                View all
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {modules.map((module) => (
                <Link 
                  key={module.id} 
                  href={module.unlocked ? `/modules/${module.id}` : '#'}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    padding: 20,
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: module.unlocked ? 1 : 0.5,
                    cursor: module.unlocked ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s'
                  }}>
                    {/* Module Number */}
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: module.unlocked ? '#14532d' : '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: module.unlocked ? '#ffffff' : '#94a3b8',
                      fontSize: 18,
                      fontWeight: 600,
                      flexShrink: 0
                    }}>
                      {module.id}
                    </div>

                    {/* Module Info */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: 16, 
                        fontWeight: 600, 
                        color: '#111827',
                        marginBottom: 4
                      }}>
                        {module.title}
                      </h3>
                      <p style={{ 
                        fontSize: 13, 
                        color: '#64748b'
                      }}>
                        {module.subtitle}
                      </p>
                    </div>

                    {/* Progress */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      {module.unlocked ? (
                        <>
                          <p style={{ 
                            fontSize: 14, 
                            fontWeight: 600, 
                            color: '#14532d',
                            marginBottom: 4
                          }}>
                            {module.completed} / {module.lessons}
                          </p>
                          <p style={{ fontSize: 12, color: '#94a3b8' }}>
                            lessons
                          </p>
                        </>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* AI Coach Card */}
            <div style={{
              background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
              borderRadius: 16,
              padding: 28,
              color: '#ffffff'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12,
                marginBottom: 16
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>AI Coach</h3>
                  <p style={{ fontSize: 13, opacity: 0.8 }}>Dr. Flourish is here to help</p>
                </div>
              </div>

              <p style={{ 
                fontSize: 14, 
                opacity: 0.9,
                lineHeight: 1.6,
                marginBottom: 20
              }}>
                Ask questions about positive psychology concepts, get guidance on interventions, 
                or explore your character strengths.
              </p>

              {/* Quick Questions */}
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>Try asking:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {suggestedQuestions.map((q, i) => (
                    <Link key={i} href={`/coach?q=${encodeURIComponent(q)}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '10px 14px',
                        borderRadius: 8,
                        fontSize: 13,
                        color: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        {q}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/coach" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  padding: '14px',
                  background: '#ffffff',
                  color: '#14532d',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8
                }}>
                  Start a Conversation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </Link>
            </div>

            {/* Quick Actions */}
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 24,
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 600, 
                color: '#111827',
                marginBottom: 16
              }}>
                Quick Actions
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link href="/modules/1/lessons/5" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 16px',
                    background: '#f0fdf4',
                    borderRadius: 10,
                    border: '1px solid #bbf7d0',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: '#14532d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#14532d' }}>
                        Continue Learning
                      </p>
                      <p style={{ fontSize: 12, color: '#64748b' }}>
                        Lesson 5: Big Issues
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/journal/gratitude" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 16px',
                    background: '#fefce8',
                    borderRadius: 10,
                    border: '1px solid #fef08a',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: '#a16207',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                        <path d="M12 20h9"/>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#a16207' }}>
                        Daily Journal
                      </p>
                      <p style={{ fontSize: 12, color: '#64748b' }}>
                        Three Good Things
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/assessments/strengths" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 16px',
                    background: '#f5f3ff',
                    borderRadius: 10,
                    border: '1px solid #ddd6fe',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: '#7c3aed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#7c3aed' }}>
                        Character Strengths
                      </p>
                      <p style={{ fontSize: 12, color: '#64748b' }}>
                        Discover your top strengths
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 24,
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 600, 
                color: '#111827',
                marginBottom: 16
              }}>
                Recent Activity
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { type: 'lesson', title: 'Completed: Cultural Considerations', time: '2 hours ago' },
                  { type: 'journal', title: 'Journal: Three Good Things', time: 'Yesterday' },
                  { type: 'assessment', title: 'Assessment: Character Strengths', time: '3 days ago' },
                ].map((activity, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: activity.type === 'lesson' ? '#14532d' : 
                                  activity.type === 'journal' ? '#a16207' : '#7c3aed'
                    }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, color: '#374151' }}>
                        {activity.title}
                      </p>
                    </div>
                    <p style={{ fontSize: 12, color: '#94a3b8' }}>
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
