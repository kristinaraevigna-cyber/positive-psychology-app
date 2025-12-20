'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Invalid email or password');
        setLoading(false);
        return;
      }

      router.push('/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      {/* Hero/Image Section */}
      <div style={{
        flex: isMobile ? 'none' : 1,
        height: isMobile ? '280px' : 'auto',
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.9) 0%, rgba(22, 101, 52, 0.8) 100%)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '40px 24px' : '60px 80px'
        }}>
          {!isMobile && (
            <p style={{
              color: '#86efac',
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
              fontWeight: 600
            }}>
              Online Course
            </p>
          )}
          
          <h1 style={{
            color: '#ffffff',
            fontSize: isMobile ? 28 : 42,
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: isMobile ? 12 : 20,
            fontFamily: 'Georgia, serif'
          }}>
            Foundations of{' '}
            <span style={{ fontWeight: 600 }}>Positive Psychology</span>
          </h1>
          
          {!isMobile && (
            <>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 450,
                marginBottom: 40
              }}>
                Explore the science of human flourishing and discover evidence-based approaches to wellbeing.
              </p>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                gap: 40,
                paddingTop: 30,
                borderTop: '1px solid rgba(255,255,255,0.2)'
              }}>
                {[
                  { number: '5', label: 'Modules' },
                  { number: '35', label: 'Lessons' },
                  { number: '18.5', label: 'Hours' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p style={{ 
                      color: '#ffffff',
                      fontSize: 32, 
                      fontWeight: 300, 
                      marginBottom: 4 
                    }}>
                      {stat.number}
                    </p>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: 11, 
                      textTransform: 'uppercase', 
                      letterSpacing: 2 
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {isMobile && (
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 15
            }}>
              with Dr. Jolanta Burke
            </p>
          )}
        </div>
      </div>

      {/* Login Form Section */}
      <div style={{
        width: isMobile ? '100%' : '480px',
        minWidth: isMobile ? 'auto' : '480px',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '40px 24px' : '60px'
      }}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              fontSize: isMobile ? 24 : 28,
              color: '#14532d',
              fontWeight: 600,
              marginBottom: 8
            }}>
              Welcome Back
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: 15
            }}>
              Sign in to access your course
            </p>
          </div>

          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#dc2626',
              padding: '12px 16px',
              borderRadius: 8,
              marginBottom: 20,
              fontSize: 14
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 18 }}>
              <label style={{
                display: 'block',
                color: '#374151',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 6
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 8,
                  border: '1px solid #e2e8f0',
                  fontSize: 16,
                  outline: 'none',
                  background: '#f8fafc',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{
                  color: '#374151',
                  fontSize: 14,
                  fontWeight: 500
                }}>
                  Password
                </label>
                <Link href="/forgot-password" style={{
                  color: '#16a34a',
                  fontSize: 13,
                  textDecoration: 'none'
                }}>
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 8,
                  border: '1px solid #e2e8f0',
                  fontSize: 16,
                  outline: 'none',
                  background: '#f8fafc',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: '#14532d',
                color: '#ffffff',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{
            marginTop: 28,
            textAlign: 'center'
          }}>
            <p style={{ color: '#64748b', fontSize: 14 }}>
              Need access?{' '}
              <Link href="/signup" style={{
                color: '#16a34a',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Request Here
              </Link>
            </p>
          </div>

          {/* Mobile Stats */}
          {isMobile && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 32,
              marginTop: 40,
              paddingTop: 28,
              borderTop: '1px solid #e2e8f0'
            }}>
              {[
                { number: '5', label: 'Modules' },
                { number: '35', label: 'Lessons' },
                { number: '18.5', label: 'Hours' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ 
                    color: '#14532d',
                    fontSize: 22, 
                    fontWeight: 600, 
                    marginBottom: 2 
                  }}>
                    {stat.number}
                  </p>
                  <p style={{ 
                    color: '#94a3b8',
                    fontSize: 10, 
                    textTransform: 'uppercase', 
                    letterSpacing: 1 
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div style={{
            marginTop: isMobile ? 32 : 50,
            textAlign: 'center'
          }}>
            <p style={{ color: '#94a3b8', fontSize: 12 }}>
              {isMobile ? '© Dr. Jolanta Burke' : 'A course by Dr. Jolanta Burke'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
