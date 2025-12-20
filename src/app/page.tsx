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
      display: 'flex',
      backgroundImage: 'url(https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Left Side - Branding */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.95) 0%, rgba(22, 101, 52, 0.9) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px',
        color: '#ffffff'
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 300,
          marginBottom: 24,
          lineHeight: 1.2,
          fontFamily: 'Georgia, serif'
        }}>
          Foundations of<br />
          <span style={{ fontWeight: 500 }}>Positive Psychology</span>
        </h1>
        <p style={{
          fontSize: 20,
          opacity: 0.9,
          lineHeight: 1.8,
          maxWidth: 500,
          marginBottom: 40
        }}>
          Discover the science of human flourishing and transform your understanding of wellbeing.
        </p>
        
        <div style={{ marginBottom: 50 }}>
          <div style={{ display: 'flex', gap: 40 }}>
            {[
              { number: '5', label: 'Modules' },
              { number: '35', label: 'Lessons' },
              { number: '18.5', label: 'Hours' },
            ].map((stat, i) => (
              <div key={i}>
                <p style={{ fontSize: 32, fontWeight: 300, marginBottom: 4 }}>{stat.number}</p>
                <p style={{ fontSize: 13, opacity: 0.7, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          paddingTop: 40 
        }}>
          <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>Created by</p>
          <p style={{ fontSize: 20, fontWeight: 500 }}>Dr. Jolanta Burke</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        width: 520,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px'
      }}>
        <h2 style={{
          fontSize: 30,
          color: '#14532d',
          marginBottom: 8,
          fontWeight: 500,
          fontFamily: 'Georgia, serif'
        }}>
          Welcome
        </h2>
        <p style={{
          color: '#64748b',
          marginBottom: 40,
          fontSize: 16,
          lineHeight: 1.6
        }}>
          Sign in to access your course materials
        </p>

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
          <div style={{ marginBottom: 24 }}>
            <label style={{
              display: 'block',
              color: '#374151',
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 8
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '16px 18px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 16,
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div style={{ marginBottom: 32 }}>
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
                fontSize: 14,
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
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '16px 18px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '18px',
              background: loading ? '#86efac' : '#14532d',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: 24,
              transition: 'background 0.2s'
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          paddingTop: 24,
          borderTop: '1px solid #e5e7eb'
        }}>
          <p style={{ color: '#64748b', fontSize: 15 }}>
            Don't have access?{' '}
            <Link href="/signup" style={{
              color: '#16a34a',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Request Access
            </Link>
          </p>
        </div>

        <div style={{
          marginTop: 40,
          padding: 20,
          background: '#f8faf8',
          borderRadius: 8,
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, textAlign: 'center' }}>
            Access is granted through course purchase or institutional subscription. 
            Contact us for group licensing options.
          </p>
        </div>
      </div>
    </div>
  );
}
