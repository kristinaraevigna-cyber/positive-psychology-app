'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log('Access request:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
        padding: 40
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '60px 80px',
          textAlign: 'center',
          maxWidth: 500
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: '#f0fdf4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
            fontSize: 36
          }}>
            ✓
          </div>
          <h2 style={{ color: '#14532d', fontSize: 28, marginBottom: 16 }}>
            Request Submitted
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 30 }}>
            Thank you for your interest! We'll review your request and get back to you 
            within 2-3 business days with access instructions.
          </p>
          <Link href="/login" style={{
            color: '#16a34a',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            ← Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80)',
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
          maxWidth: 450,
          marginBottom: 40
        }}>
          Join thousands of learners exploring the science of human flourishing.
        </p>
        
        <div style={{ marginBottom: 30 }}>
          <h3 style={{ fontSize: 16, marginBottom: 16, fontWeight: 500 }}>What You'll Get:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              '5 comprehensive learning modules',
              'Evidence-based wellbeing assessments',
              'Personal reflection journal',
              'AI-powered coaching support',
              'Certificate upon completion'
            ].map((item, i) => (
              <li key={i} style={{ 
                fontSize: 15, 
                opacity: 0.9, 
                marginBottom: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <span style={{ color: '#86efac' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{
        width: 520,
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
          Request Access
        </h2>
        <p style={{
          color: '#64748b',
          marginBottom: 40,
          fontSize: 15
        }}>
          Fill out the form below to request course access
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block',
              color: '#374151',
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 8
            }}>
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your name"
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

          <div style={{ marginBottom: 20 }}>
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block',
              color: '#374151',
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 8
            }}>
              Organization (optional)
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="University, company, etc."
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
            <label style={{
              display: 'block',
              color: '#374151',
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 8
            }}>
              Why are you interested?
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              placeholder="Tell us about your interest in positive psychology..."
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 16,
                outline: 'none',
                minHeight: 100,
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: '#14532d',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 24
            }}
          >
            Submit Request
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: 14 }}>
            Already have access?{' '}
            <Link href="/login" style={{
              color: '#16a34a',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
