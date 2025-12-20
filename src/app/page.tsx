'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      display: 'flex'
    }}>
      {/* Left Side - Login Form */}
      <div style={{
        width: '45%',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px'
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          {/* Logo/Title */}
          <div style={{ marginBottom: 50 }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)',
              marginBottom: 24
            }} />
            <h1 style={{
              fontSize: 28,
              color: '#14532d',
              fontWeight: 600,
              marginBottom: 8,
              fontFamily: 'Georgia, serif'
            }}>
              Positive Psychology
            </h1>
            <p style={{
              color: '#64748b',
              fontSize: 15
            }}>
              Sign in to continue your learning journey
            </p>
          </div>

          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#dc2626',
              padding: '14px 18px',
              borderRadius: 8,
              marginBottom: 24,
              fontSize: 14
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                color: '#374151',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 8
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 8,
                  border: '1px solid #e2e8f0',
                  fontSize: 15,
                  outline: 'none',
                  background: '#f8fafc'
                }}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
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
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 8,
                  border: '1px solid #e2e8f0',
                  fontSize: 15,
                  outline: 'none',
                  background: '#f8fafc'
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
                fontSize: 15,
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{
            marginTop: 32,
            textAlign: 'center'
          }}>
            <p style={{ color: '#64748b', fontSize: 14 }}>
              Don't have an account?{' '}
              <Link href="/signup" style={{
                color: '#16a34a',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Request Access
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: 60,
            paddingTop: 30,
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <p style={{ color: '#94a3b8', fontSize: 13 }}>
              A course by Dr. Jolanta Burke
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image & Content */}
      <div style={{
        flex: 1,
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.85) 0%, rgba(22, 101, 52, 0.75) 100%)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px'
        }}>
          <p style={{
            color: '#86efac',
            fontSize: 13,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 20,
            fontWeight: 600
          }}>
            Online Course
          </p>
          
          <h2 style={{
            color: '#ffffff',
            fontSize: 44,
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: 24,
            fontFamily: 'Georgia, serif',
            maxWidth: 500
          }}>
            The Science of Human Flourishing
          </h2>
          
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 18,
            lineHeight: 1.8,
            maxWidth: 480,
            marginBottom: 50
          }}>
            Explore evidence-based approaches to wellbeing, discover your character strengths, and learn practical interventions for a flourishing life.
          </p>

          {/* Stats */}
          <div style={{ 
            display: 'flex', 
            gap: 50,
            paddingTop: 40,
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
                  fontSize: 36, 
                  fontWeight: 300, 
                  marginBottom: 4 
                }}>
                  {stat.number}
                </p>
                <p style={{ 
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 12, 
                  textTransform: 'uppercase', 
                  letterSpacing: 2 
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
