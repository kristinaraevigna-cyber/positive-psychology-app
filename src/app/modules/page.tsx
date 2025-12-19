'use client';

import Layout from '@/components/NavLayout';
import Link from 'next/link';

export default function ModulesPage() {
  const modules = [
    { 
      id: 1, 
      title: 'The Fundamentals', 
      subtitle: 'Origins, Evolution & Critical Perspectives',
      lessons: 6,
      duration: '2.5 hours',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
      available: true
    },
    { 
      id: 2, 
      title: 'The Primer to Wellbeing', 
      subtitle: 'PERMA, Psychological Wellbeing & Character Strengths',
      lessons: 8,
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      available: false
    },
    { 
      id: 3, 
      title: 'Interventions & Applications', 
      subtitle: 'Evidence-Based Practices for Flourishing',
      lessons: 9,
      duration: '5 hours',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      available: false
    },
    { 
      id: 4, 
      title: 'Maximizing Impact', 
      subtitle: 'Person-Activity Fit & Optimization Strategies',
      lessons: 6,
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      available: false
    },
    { 
      id: 5, 
      title: 'Multidisciplinary Applications', 
      subtitle: 'Health, Education, Workplace & Technology',
      lessons: 6,
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      available: false
    },
  ];

  return (
    <Layout>
      <div style={{ padding: '50px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ marginBottom: 50, textAlign: 'center' }}>
            <p style={{
              color: '#16a34a',
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 12,
              fontWeight: 600
            }}>
              Course Curriculum
            </p>
            <h1 style={{
              fontSize: 42,
              color: '#14532d',
              fontWeight: 400,
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              Learning Modules
            </h1>
          </div>

          {/* Modules Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {modules.map((module) => (
              <Link 
                key={module.id}
                href={module.available ? `/modules/${module.id}` : '#'}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '350px 1fr',
                  background: '#ffffff',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  opacity: module.available ? 1 : 0.6,
                  cursor: module.available ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s'
                }}>
                  {/* Image */}
                  <div style={{
                    height: 240,
                    backgroundImage: `url(${module.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: module.available ? '#14532d' : '#64748b',
                      color: '#ffffff',
                      padding: '8px 16px',
                      fontSize: 13,
                      fontWeight: 600,
                      borderRadius: 4
                    }}>
                      Module {module.id}
                    </div>
                    {!module.available && (
                      <div style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontSize: 24
                      }}>
                        🔒
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div style={{ padding: 40 }}>
                    <h3 style={{
                      color: '#14532d',
                      fontSize: 26,
                      fontWeight: 400,
                      marginBottom: 10,
                      fontFamily: "'Playfair Display', Georgia, serif"
                    }}>
                      {module.title}
                    </h3>
                    <p style={{
                      color: '#64748b',
                      fontSize: 16,
                      lineHeight: 1.6,
                      marginBottom: 24
                    }}>
                      {module.subtitle}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: 30,
                      color: '#16a34a',
                      fontSize: 14,
                      fontWeight: 500
                    }}>
                      <span>{module.lessons} Lessons</span>
                      <span>{module.duration}</span>
                    </div>
                    
                    {module.available && (
                      <div style={{
                        marginTop: 24,
                        background: '#14532d',
                        color: '#ffffff',
                        padding: '12px 28px',
                        borderRadius: 6,
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: 500
                      }}>
                        Start Module →
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}