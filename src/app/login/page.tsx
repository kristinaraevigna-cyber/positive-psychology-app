'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
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
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      // Redirect to dashboard on success
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
          fontSize: 42,
          fontWeight: 300,
          marginBottom: 24,
          lineHeight: 1.3,
          fontFamily: 'Georgia, serif'
        }}>
          Foundations of<br />
          <span style={{ fontWeight: 500 }}>Positive Psychology</span>
        </h1>
        <p style={{
          fontSize: 18,
          opacity: 0.9,
          lineHeight: 1.8,
          maxWidth: 450
        }}>
          Welcome back. Continue your journey into the science of human flourishing.
        </p>
        
        <div style={{ marginTop: 60 }}>
          <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 8 }}>Created by</p>
          <p style={{ fontSize: 18, fontWeight: 500 }}>Dr. Jolanta Burke</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        width: 500,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px'
      }}>
        <h2 style={{
          fontSize: 28,
          color: '#14532d',
          marginBottom: 8,
          fontWeight: 500
        }}>
          Welcome Back
        </h2>
        <p style={{
          color: '#64748b',
          marginBottom: 40,
          fontSize: 15
        }}>
          Sign in to access your course
        </p>

        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '12px 16px',
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
                padding: '14px 16px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
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
                padding: '14px 16px',
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
              padding: '16px',
              background: loading ? '#86efac' : '#14532d',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: 24
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
          <p style={{ color: '#64748b', fontSize: 14 }}>
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
          background: '#f0fdf4',
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <p style={{ color: '#166534', fontSize: 13, lineHeight: 1.6 }}>
            Access is granted through course purchase or institutional subscription.
          </p>
        </div>
      </div>
    </div>
  );
}
