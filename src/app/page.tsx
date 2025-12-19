'use client';

import { useState } from 'react';

export default function Home() {
  const [showCoach, setShowCoach] = useState(false);

  const modules = [
    { 
      id: 1, 
      title: 'The Fundamentals', 
      subtitle: 'Origins, Evolution & Critical Perspectives',
      lessons: 6,
      duration: '2.5 hours',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80'
    },
    { 
      id: 2, 
      title: 'The Primer to Wellbeing', 
      subtitle: 'PERMA, Psychological Wellbeing & Character Strengths',
      lessons: 8,
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    },
    { 
      id: 3, 
      title: 'Interventions & Applications', 
      subtitle: 'Evidence-Based Practices for Flourishing',
      lessons: 9,
      duration: '5 hours',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
    },
    { 
      id: 4, 
      title: 'Maximizing Impact', 
      subtitle: 'Person-Activity Fit & Optimization Strategies',
      lessons: 6,
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    { 
      id: 5, 
      title: 'Multidisciplinary Applications', 
      subtitle: 'Health, Education, Workplace & Technology',
      lessons: 6,
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
  ];

  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8faf8',
      fontFamily: "'Source Sans Pro', -apple-system, sans-serif"
    }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '85vh',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }} />
        
        {/* Green Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.85) 0%, rgba(6, 78, 59, 0.75) 100%)'
        }} />
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 900,
          padding: '0 40px'
        }}>
          <p style={{
            color: '#86efac',
            fontSize: 14,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 20,
            fontWeight: 500
          }}>
            Masters Level Programme
          </p>
          
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300,
            lineHeight: 1.2,
            marginBottom: 24,
            fontFamily: "'Playfair Display', Georgia, serif"
          }}>
            The Foundations of<br />
            <span style={{ fontWeight: 600 }}>Positive Psychology</span>
          </h1>
          
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 20,
            maxWidth: 600,
            margin: '0 auto 40px auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            A comprehensive exploration of the science of wellbeing, 
            based on the work of Dr. Jolanta Burke and 200+ seminal studies.
          </p>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                background: '#ffffff',
                color: '#14532d',
                border: 'none',
                padding: '16px 40px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#dcfce7';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Begin Your Journey
            </button>
            
            <button
              onClick={() => setShowCoach(true)}
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.5)',
                padding: '16px 40px',
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Speak with AI Coach
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.6)',
          fontSize: 13,
          letterSpacing: 2,
          textTransform: 'uppercase'
        }}>
          Scroll to explore
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: '#14532d',
        padding: '60px 40px'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          textAlign: 'center'
        }}>
          {[
            { number: '5', label: 'Comprehensive Modules' },
            { number: '40+', label: 'In-Depth Lessons' },
            { number: '200+', label: 'Research Studies' },
            { number: '18.5', label: 'Hours of Content' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ 
                color: '#86efac', 
                fontSize: 48, 
                fontWeight: 300,
                fontFamily: "'Playfair Display', Georgia, serif"
              }}>
                {stat.number}
              </div>
              <div style={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: 14,
                letterSpacing: 1,
                textTransform: 'uppercase',
                marginTop: 8
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p style={{
              color: '#16a34a',
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Curriculum Overview
            </p>
            <h2 style={{
              color: '#14532d',
              fontSize: 42,
              fontWeight: 300,
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              Your Learning Pathway
            </h2>
          </div>
          
          {/* Module Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {modules.map((module, index) => (
              <div
                key={module.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                  background: '#ffffff',
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(20, 83, 45, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{
                  order: index % 2 === 0 ? 0 : 1,
                  height: 280,
                  backgroundImage: `url(${module.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    background: '#14532d',
                    color: '#ffffff',
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 4
                  }}>
                    Module {module.id}
                  </div>
                </div>
                
                {/* Content */}
                <div style={{
                  padding: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{
                    color: '#14532d',
                    fontSize: 28,
                    fontWeight: 400,
                    marginBottom: 12,
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        padding: '100px 40px'
      }}>
        <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: 60,
          alignItems: 'center'
        }}>
          <div style={{
            width: 300,
            height: 380,
            backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 8,
            boxShadow: '0 20px 50px rgba(20, 83, 45, 0.2)'
          }} />
          
          <div>
            <p style={{
              color: '#16a34a',
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
              fontWeight: 600
            }}>
              About the Author
            </p>
            <h2 style={{
              color: '#14532d',
              fontSize: 36,
              fontWeight: 400,
              marginBottom: 24,
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              Dr. Jolanta Burke
            </h2>
            <p style={{
              color: '#475569',
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 20
            }}>
              Dr. Jolanta Burke is a leading researcher in positive psychology, 
              specializing in wellbeing interventions, character strengths, and 
              the application of positive psychology across diverse populations.
            </p>
            <p style={{
              color: '#475569',
              fontSize: 17,
              lineHeight: 1.8
            }}>
              Her work bridges rigorous academic research with practical applications, 
              making the science of flourishing accessible to practitioners and students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#14532d',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: 36,
          fontWeight: 300,
          marginBottom: 20,
          fontFamily: "'Playfair Display', Georgia, serif"
        }}>
          Ready to Begin?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: 18,
          marginBottom: 40,
          maxWidth: 500,
          margin: '0 auto 40px auto'
        }}>
          Start your journey into the science of human flourishing today.
        </p>
        <button
          style={{
            background: '#86efac',
            color: '#14532d',
            border: 'none',
            padding: '18px 50px',
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 4,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#86efac';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Enrol Now
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f3d1f',
        padding: '40px',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 14
      }}>
        <p>© 2024 The Foundations of Positive Psychology. Based on the work of Dr. Jolanta Burke.</p>
      </footer>

      {/* AI Coach Modal */}
      {showCoach && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            width: '90%',
            maxWidth: 500,
            background: '#ffffff',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
              color: 'white',
              padding: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 500 }}>AI Wellbeing Coach</h3>
                <p style={{ margin: '4px 0 0 0', fontSize: 13, opacity: 0.8 }}>Powered by Claude</p>
              </div>
              <button 
                onClick={() => setShowCoach(false)}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: 'none', 
                  color: 'white',
                  borderRadius: 6,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: 14
                }}
              >
                Close
              </button>
            </div>
            
            <div style={{ padding: 30, minHeight: 300 }}>
              <div style={{
                background: '#f0fdf4',
                borderRadius: 12,
                padding: 20,
                marginBottom: 20,
                borderLeft: '4px solid #16a34a'
              }}>
                <p style={{ margin: 0, fontSize: 15, color: '#14532d', lineHeight: 1.6 }}>
                  Welcome! I'm your personal positive psychology coach, trained on 
                  evidence-based research. I can help you explore wellbeing concepts, 
                  develop interventions, and apply the science of flourishing to your life.
                </p>
              </div>
              
              <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>
                Try asking about:
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['PERMA Model', 'Character Strengths', 'Gratitude Practices', 'Resilience Building'].map((topic) => (
                  <span 
                    key={topic}
                    style={{
                      background: '#f1f5f9',
                      color: '#475569',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontSize: 13,
                      cursor: 'pointer'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ 
              padding: 20, 
              borderTop: '1px solid #e2e8f0', 
              display: 'flex', 
              gap: 12 
            }}>
              <input 
                type="text"
                placeholder="Ask me anything about positive psychology..."
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  fontSize: 15,
                  outline: 'none'
                }}
              />
              <button style={{
                background: '#14532d',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '14px 24px',
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 500
              }}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}