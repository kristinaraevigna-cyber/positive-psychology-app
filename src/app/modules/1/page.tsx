'use client';

import { useState } from 'react';
import Layout from '@/components/NavLayout';
import Link from 'next/link';

export default function Module1Page() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const moduleInfo = {
    id: 1,
    title: 'The Fundamentals',
    subtitle: 'Origins, Evolution & Critical Perspectives',
    description: 'Explore the birth and evolution of positive psychology, from Seligman and Csikszentmihalyi\'s foundational work to contemporary developments and critical perspectives.',
    duration: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80'
  };

  const lessons = [
    {
      id: 1,
      title: 'The Birth of Positive Psychology',
      duration: '25 min',
      description: 'Discover how positive psychology emerged from Seligman and Csikszentmihalyi\'s historic meeting in Hawaii and the 2000 manifesto that launched the field.',
      topics: ['The Hawaii Meeting (1997)', 'Seligman\'s APA Presidential Address', 'The 2000 Manifesto Paper', 'Shifting from Pathology to Flourishing']
    },
    {
      id: 2,
      title: 'Evolution of the Field',
      duration: '30 min',
      description: 'Trace the development from First Wave positive psychology through the dialectical Second Wave to the systems-focused Third Wave.',
      topics: ['First Wave: The Positive Focus', 'Second Wave: Embracing Dialectics', 'Third Wave: Systems & Complexity', 'Future Directions']
    },
    {
      id: 3,
      title: 'Critical Perspectives',
      duration: '25 min',
      description: 'Examine the 117 criticisms identified in van Zyl\'s systematic review and understand the field\'s limitations and blind spots.',
      topics: ['Van Zyl\'s Systematic Review', '6 Themes of Criticism', 'Methodological Concerns', 'Responding to Critics']
    },
    {
      id: 4,
      title: 'Cultural Considerations',
      duration: '25 min',
      description: 'Explore how wellbeing differs across cultures and why the WEIRD population bias matters for positive psychology research.',
      topics: ['The WEIRD Problem', 'Hendriks\' Cross-Cultural Research', 'Collectivist vs Individualist Wellbeing', 'Indigenous Perspectives']
    },
    {
      id: 5,
      title: 'Global Applications',
      duration: '20 min',
      description: 'See how positive psychology is being applied to contemporary global challenges including climate change, bullying, and supporting marginalized communities.',
      topics: ['Climate Anxiety & Eco-Wellbeing', 'Anti-Bullying Interventions', 'Refugee & Immigrant Wellbeing', 'LGBTQ+ Affirmative Approaches']
    },
    {
      id: 6,
      title: 'Module 1 Integration',
      duration: '25 min',
      description: 'Synthesize your learning with reflective activities and prepare your foundation for the deeper explorations ahead.',
      topics: ['Personal Origin Story Activity', 'Critical Analysis Exercise', 'Cultural Wellbeing Mapping', 'Goal Setting for Your Journey'],
      isActivity: true
    },
  ];

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <Layout>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: 400,
        backgroundImage: `url(${moduleInfo.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.9) 0%, rgba(22, 101, 52, 0.8) 100%)'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 40px',
          color: '#ffffff'
        }}>
          <Link href="/modules" style={{ 
            color: '#86efac', 
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500
          }}>
            ← Back to Modules
          </Link>
          
          <div style={{ marginTop: 30 }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600
            }}>
              MODULE 1
            </span>
            
            <h1 style={{
              fontSize: 48,
              fontWeight: 400,
              marginTop: 16,
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              {moduleInfo.title}
            </h1>
            
            <p style={{
              fontSize: 20,
              opacity: 0.9,
              marginTop: 12,
              maxWidth: 600
            }}>
              {moduleInfo.subtitle}
            </p>
            
            <div style={{
              display: 'flex',
              gap: 30,
              marginTop: 24,
              fontSize: 15
            }}>
              <span>📚 {lessons.length} Lessons</span>
              <span>⏱️ {moduleInfo.duration}</span>
              <span>📊 {progress}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 50 }}>
            
            {/* Lessons List */}
            <div>
              <h2 style={{
                fontSize: 24,
                color: '#14532d',
                marginBottom: 30,
                fontWeight: 500
              }}>
                Lessons
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isLocked = index > 0 && !completedLessons.includes(lessons[index - 1].id);
                  
                  return (
                    <Link 
                      key={lesson.id}
                      href={isLocked ? '#' : `/modules/1/lessons/${lesson.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{
                        background: '#ffffff',
                        borderRadius: 12,
                        padding: 28,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        opacity: isLocked ? 0.5 : 1,
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s',
                        borderLeft: isCompleted ? '4px solid #22c55e' : lesson.isActivity ? '4px solid #f59e0b' : '4px solid transparent'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: 12
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div style={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: isCompleted ? '#22c55e' : lesson.isActivity ? '#f59e0b' : '#e2e8f0',
                              color: isCompleted || lesson.isActivity ? '#ffffff' : '#64748b',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 600,
                              fontSize: 14
                            }}>
                              {isCompleted ? '✓' : lesson.id}
                            </div>
                            <div>
                              <h3 style={{
                                color: '#14532d',
                                fontSize: 18,
                                fontWeight: 500,
                                margin: 0
                              }}>
                                {lesson.title}
                              </h3>
                              <span style={{
                                color: '#94a3b8',
                                fontSize: 13
                              }}>
                                {lesson.duration}
                                {lesson.isActivity && ' • Activity'}
                              </span>
                            </div>
                          </div>
                          
                          {isLocked && <span style={{ fontSize: 20 }}>🔒</span>}
                        </div>
                        
                        <p style={{
                          color: '#64748b',
                          fontSize: 15,
                          lineHeight: 1.6,
                          marginBottom: 16,
                          marginLeft: 56
                        }}>
                          {lesson.description}
                        </p>
                        
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 8,
                          marginLeft: 56
                        }}>
                          {lesson.topics.map((topic, i) => (
                            <span key={i} style={{
                              background: '#f0fdf4',
                              color: '#16a34a',
                              padding: '4px 12px',
                              borderRadius: 20,
                              fontSize: 12,
                              fontWeight: 500
                            }}>
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Progress Card */}
              <div style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: 28,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                marginBottom: 24,
                position: 'sticky',
                top: 100
              }}>
                <h3 style={{
                  color: '#14532d',
                  fontSize: 18,
                  marginBottom: 20,
                  fontWeight: 500
                }}>
                  Your Progress
                </h3>
                
                {/* Circular Progress */}
                <div style={{
                  width: 150,
                  height: 150,
                  margin: '0 auto 24px auto',
                  position: 'relative'
                }}>
                  <svg width="150" height="150" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="75"
                      cy="75"
                      r="65"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="12"
                    />
                    <circle
                      cx="75"
                      cy="75"
                      r="65"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="12"
                      strokeDasharray={`${progress * 4.08} 408`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <span style={{
                      fontSize: 36,
                      fontWeight: 600,
                      color: '#14532d'
                    }}>
                      {progress}%
                    </span>
                    <span style={{ color: '#94a3b8', fontSize: 13 }}>
                      Complete
                    </span>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#64748b',
                  fontSize: 14,
                  paddingTop: 16,
                  borderTop: '1px solid #e2e8f0'
                }}>
                  <span>Lessons</span>
                  <span style={{ fontWeight: 600, color: '#14532d' }}>
                    {completedLessons.length} / {lessons.length}
                  </span>
                </div>
              </div>

              {/* Module Overview */}
              <div style={{
                background: '#f0fdf4',
                borderRadius: 12,
                padding: 28
              }}>
                <h3 style={{
                  color: '#14532d',
                  fontSize: 16,
                  marginBottom: 12,
                  fontWeight: 500
                }}>
                  About This Module
                </h3>
                <p style={{
                  color: '#475569',
                  fontSize: 14,
                  lineHeight: 1.7
                }}>
                  {moduleInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}