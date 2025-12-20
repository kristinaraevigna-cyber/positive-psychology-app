'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Hero Section with Background Image */}
      <div style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.92) 0%, rgba(22, 101, 52, 0.88) 100%)'
        }} />
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#ffffff',
          padding: '40px',
          maxWidth: 900
        }}>
          <h1 style={{ 
            fontSize: 56, 
            fontWeight: 300, 
            marginBottom: 24,
            lineHeight: 1.2,
            fontFamily: 'Georgia, serif'
          }}>
            Foundations of<br />
            <span style={{ fontWeight: 500 }}>Positive Psychology</span>
          </h1>
          <p style={{ 
            fontSize: 22, 
            opacity: 0.9, 
            maxWidth: 600, 
            margin: '0 auto 20px auto',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Discover the science of human flourishing and transform your understanding of wellbeing
          </p>
          <p style={{ 
            fontSize: 16, 
            opacity: 0.7, 
            marginBottom: 40
          }}>
            with Dr. Jolanta Burke
          </p>
          
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/login" style={{
              background: '#ffffff',
              color: '#14532d',
              padding: '18px 40px',
              borderRadius: 4,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: 0.5
            }}>
              Sign In
            </Link>
            <Link href="/signup" style={{
              background: 'transparent',
              color: '#ffffff',
              padding: '18px 40px',
              borderRadius: 4,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
              letterSpacing: 0.5
            }}>
              Request Access
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14,
          letterSpacing: 2
        }}>
          EXPLORE
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '100px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ 
              color: '#16a34a', 
              fontSize: 13, 
              letterSpacing: 3, 
              textTransform: 'uppercase',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Your Learning Experience
            </p>
            <h2 style={{ 
              color: '#14532d', 
              fontSize: 40, 
              fontWeight: 300,
              fontFamily: 'Georgia, serif'
            }}>
              Everything You Need to Flourish
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 30 
          }}>
            <Link href="/modules" style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative',
                height: 320,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s',
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 83, 45, 0.95) 0%, rgba(20, 83, 45, 0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 28,
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8, fontWeight: 500 }}>Course Modules</h3>
                  <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
                    5 comprehensive modules on the science of wellbeing
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/journal" style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative',
                height: 320,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 83, 45, 0.95) 0%, rgba(20, 83, 45, 0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 28,
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8, fontWeight: 500 }}>Reflective Journal</h3>
                  <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
                    Practice gratitude and track your growth
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/assessments" style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative',
                height: 320,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 83, 45, 0.95) 0%, rgba(20, 83, 45, 0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 28,
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8, fontWeight: 500 }}>Assessments</h3>
                  <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
                    Discover your strengths and measure wellbeing
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/coach" style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative',
                height: 320,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 83, 45, 0.95) 0%, rgba(20, 83, 45, 0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 28,
                  color: '#ffffff'
                }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8, fontWeight: 500 }}>AI Coach</h3>
                  <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
                    Get personalized guidance on your journey
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        minHeight: 500
      }}>
        <div style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div style={{
          background: '#14532d',
          padding: '80px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <p style={{ 
            color: '#86efac', 
            fontSize: 13, 
            letterSpacing: 3, 
            textTransform: 'uppercase',
            marginBottom: 20,
            fontWeight: 600
          }}>
            About This Course
          </p>
          <h2 style={{ 
            fontSize: 36, 
            fontWeight: 300, 
            marginBottom: 24,
            lineHeight: 1.3,
            fontFamily: 'Georgia, serif'
          }}>
            The Science of Living Well
          </h2>
          <p style={{ 
            fontSize: 17, 
            lineHeight: 1.8, 
            opacity: 0.9,
            marginBottom: 30
          }}>
            This comprehensive course takes you on a journey through the foundations of positive 
            psychology—from its origins with Seligman and Csikszentmihalyi to cutting-edge 
            applications in health, education, and the workplace. You'll explore evidence-based 
            interventions, discover your character strengths, and learn to apply the science 
            of flourishing in your own life.
          </p>
          <Link href="/signup" style={{
            color: '#86efac',
            fontSize: 16,
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }}>
            Request Access to Begin →
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ 
          maxWidth: 1000, 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 40,
          textAlign: 'center'
        }}>
          {[
            { number: '5', label: 'Modules' },
            { number: '35', label: 'Lessons' },
            { number: '18.5', label: 'Hours of Content' },
            { number: '200+', label: 'Research Studies' },
          ].map((stat, i) => (
            <div key={i}>
              <p style={{ 
                fontSize: 48, 
                fontWeight: 300, 
                color: '#14532d',
                marginBottom: 8,
                fontFamily: 'Georgia, serif'
              }}>
                {stat.number}
              </p>
              <p style={{ 
                color: '#64748b', 
                fontSize: 14, 
                textTransform: 'uppercase',
                letterSpacing: 2
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        position: 'relative',
        padding: '120px 40px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(20, 83, 45, 0.9)'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 700,
          margin: '0 auto',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h2 style={{ 
            fontSize: 40, 
            fontWeight: 300, 
            marginBottom: 24,
            fontFamily: 'Georgia, serif'
          }}>
            Ready to Begin?
          </h2>
          <p style={{ 
            fontSize: 18, 
            opacity: 0.9, 
            marginBottom: 40,
            lineHeight: 1.7
          }}>
            Start your journey into the science of human flourishing today
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/login" style={{
              background: '#ffffff',
              color: '#14532d',
              padding: '20px 50px',
              borderRadius: 4,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              letterSpacing: 0.5
            }}>
              Sign In
            </Link>
            <Link href="/signup" style={{
              background: 'transparent',
              color: '#ffffff',
              padding: '20px 50px',
              borderRadius: 4,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
              letterSpacing: 0.5
            }}>
              Request Access
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '50px 40px', 
        background: '#0a2818', 
        textAlign: 'center',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14
      }}>
        <p style={{ marginBottom: 8 }}>Foundations of Positive Psychology</p>
        <p>Created by Dr. Jolanta Burke</p>
      </div>
    </div>
  );
}
