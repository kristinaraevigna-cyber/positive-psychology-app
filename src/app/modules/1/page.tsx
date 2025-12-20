'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module1Page() {
  const [completedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      title: 'The Birth of Positive Psychology',
      duration: '25 min',
      description: 'Discover how a chance meeting in Hawaii between Seligman and Csikszentmihalyi sparked a revolution in psychology and led to the 2000 manifesto.',
      topics: ['The Hawaii Meeting', 'The 2000 Manifesto', 'Three Pillars of PP', 'Seligman\'s APA Address'],
      unlocked: true
    },
    {
      id: 2,
      title: 'Evolution of the Field',
      duration: '30 min',
      description: 'Trace the development from First Wave positive psychology through the dialectical Second Wave to the systems-focused Third Wave.',
      topics: ['PP 2.0: Paul Wong', 'Second Wave: Dialectics', 'Third Wave: Complexity', 'Systems Thinking'],
      unlocked: true
    },
    {
      id: 3,
      title: 'Critical Perspectives',
      duration: '28 min',
      description: 'Understand the important critiques that have shaped and strengthened the field, from Lazarus to Held.',
      topics: ['Walk Before You Run', 'Tyranny of Positivity', 'Toxic Positivity', 'Research Limitations'],
      unlocked: true
    },
    {
      id: 4,
      title: 'Cultural Considerations',
      duration: '25 min',
      description: 'Explore how culture shapes our understanding of wellbeing and why we must move beyond WEIRD populations.',
      topics: ['The WEIRD Problem', 'Individualism vs Collectivism', 'Ethnocentrism', 'Cultural Adaptation'],
      unlocked: true
    },
    {
      id: 5,
      title: 'Big Issues in Positive Psychology',
      duration: '30 min',
      description: 'Examine how positive psychology addresses major global challenges including climate, bullying, refugees, and LGBTQ+ wellbeing.',
      topics: ['Climate & Eco-Wellbeing', 'Bullying Prevention', 'Refugee Wellbeing', 'LGBTQ+ Flourishing'],
      unlocked: true
    },
    {
      id: 6,
      title: 'Research Methods & Ethics',
      duration: '25 min',
      description: 'Learn about the science behind positive psychology, ethical guidelines, and frameworks for evaluating interventions.',
      topics: ['Ethics in Practice', 'Research Methods', 'The RE-AIM Framework', 'Evidence Standards'],
      unlocked: true
    }
  ];

  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
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
                background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)'
              }} />
              <span style={{ color: '#14532d', fontSize: 16, fontWeight: 600 }}>
                Positive Psychology
              </span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/modules', label: 'Modules' },
              { href: '/journal', label: 'Journal' },
              { href: '/assessments', label: 'Assessments' },
              { href: '/coach', label: 'AI Coach' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.href === '/modules' ? '#14532d' : '#64748b',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: item.href === '/modules' ? 600 : 500,
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#14532d',
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

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
        padding: '60px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: 24 }}>
            <Link href="/modules" style={{ 
              color: 'rgba(255,255,255,0.7)', 
              textDecoration: 'none',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Modules
            </Link>
          </div>

          {/* Module Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)',
            padding: '8px 16px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            color: '#86efac',
            marginBottom: 20,
            letterSpacing: 1,
            textTransform: 'uppercase'
          }}>
            Module 1 of 5
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 48,
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: 16,
            fontFamily: 'Georgia, serif'
          }}>
            The Fundamentals
          </h1>

          <p style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 32,
            maxWidth: 600
          }}>
            Origins, Evolution & Critical Perspectives
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span style={{ color: '#ffffff', fontSize: 15 }}>6 Lessons</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{ color: '#ffffff', fontSize: 15 }}>2.5 Hours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span style={{ color: '#ffffff', fontSize: 15 }}>{progressPercent}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
          
          {/* Lessons List */}
          <div>
            <h2 style={{ 
              fontSize: 24, 
              fontWeight: 600, 
              color: '#111827',
              marginBottom: 24,
              fontFamily: 'Georgia, serif'
            }}>
              Lessons
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {lessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(lesson.id);
                
                return (
                  <Link 
                    key={lesson.id} 
                    href={lesson.unlocked ? `/modules/1/lessons/${lesson.id}` : '#'}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      background: '#ffffff',
                      borderRadius: 12,
                      padding: 28,
                      border: '1px solid #e5e7eb',
                      opacity: lesson.unlocked ? 1 : 0.6,
                      cursor: lesson.unlocked ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s',
                      position: 'relative'
                    }}>
                      {/* Lesson Number & Content */}
                      <div style={{ display: 'flex', gap: 20 }}>
                        {/* Number Circle */}
                        <div style={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: isCompleted ? '#22c55e' : lesson.unlocked ? '#f0fdf4' : '#f3f4f6',
                          border: isCompleted ? 'none' : '2px solid #e5e7eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {isCompleted ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          ) : (
                            <span style={{ 
                              color: lesson.unlocked ? '#14532d' : '#9ca3af',
                              fontSize: 18,
                              fontWeight: 600
                            }}>
                              {lesson.id}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'flex-start',
                            marginBottom: 8
                          }}>
                            <h3 style={{ 
                              fontSize: 18, 
                              fontWeight: 600, 
                              color: lesson.unlocked ? '#111827' : '#9ca3af',
                              fontFamily: 'Georgia, serif'
                            }}>
                              {lesson.title}
                            </h3>
                            {!lesson.unlocked && (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                              </svg>
                            )}
                          </div>

                          <p style={{ 
                            fontSize: 13, 
                            color: '#64748b',
                            marginBottom: 12
                          }}>
                            {lesson.duration}
                          </p>

                          <p style={{ 
                            fontSize: 15, 
                            color: '#64748b',
                            lineHeight: 1.7,
                            marginBottom: 16
                          }}>
                            {lesson.description}
                          </p>

                          {/* Topics */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {lesson.topics.map((topic, i) => (
                              <span key={i} style={{
                                background: '#f0fdf4',
                                color: '#166534',
                                padding: '6px 12px',
                                borderRadius: 20,
                                fontSize: 12,
                                fontWeight: 500
                              }}>
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress line connector */}
                      {index < lessons.length - 1 && (
                        <div style={{
                          position: 'absolute',
                          left: 51,
                          bottom: -16,
                          width: 2,
                          height: 16,
                          background: '#e5e7eb'
                        }} />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Progress Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 28,
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 600, 
                color: '#111827',
                marginBottom: 24
              }}>
                Your Progress
              </h3>

              {/* Circular Progress */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                marginBottom: 24
              }}>
                <div style={{ position: 'relative', width: 140, height: 140 }}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    {/* Background circle */}
                    <circle
                      cx="70"
                      cy="70"
                      r="60"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="70"
                      cy="70"
                      r="60"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${progressPercent * 3.77} 377`}
                      transform="rotate(-90 70 70)"
                    />
                  </svg>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: 36, fontWeight: 600, color: '#14532d' }}>
                      {progressPercent}%
                    </p>
                    <p style={{ fontSize: 13, color: '#64748b' }}>Complete</p>
                  </div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid #e5e7eb'
              }}>
                <span style={{ color: '#64748b', fontSize: 14 }}>Lessons</span>
                <span style={{ color: '#111827', fontSize: 14, fontWeight: 600 }}>
                  {completedCount} / {totalLessons}
                </span>
              </div>
            </div>

            {/* About Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 28,
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 600, 
                color: '#111827',
                marginBottom: 16
              }}>
                About This Module
              </h3>
              <p style={{ 
                fontSize: 15, 
                color: '#64748b',
                lineHeight: 1.7,
                marginBottom: 20
              }}>
                Explore the birth and evolution of positive psychology, from Seligman and 
                Csikszentmihalyi's foundational work to contemporary developments and critical 
                perspectives that have shaped the field.
              </p>

              <h4 style={{ 
                fontSize: 14, 
                fontWeight: 600, 
                color: '#111827',
                marginBottom: 12,
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}>
                Key References
              </h4>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                <p style={{ marginBottom: 8 }}>
                  Seligman & Csikszentmihalyi (2000)
                </p>
                <p style={{ marginBottom: 8 }}>
                  Lomas & Ivtzan (2016)
                </p>
                <p>
                  Wong (2011)
                </p>
              </div>
            </div>

            {/* Start Button */}
            <Link href="/modules/1/lessons/1" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '16px 24px',
                background: '#14532d',
                color: '#ffffff',
                border: 'none',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
              }}>
                {completedCount === 0 ? 'Start Module' : 'Continue Learning'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
