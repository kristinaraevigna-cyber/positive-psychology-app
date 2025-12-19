'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckinPage() {
  const [ratings, setRatings] = useState({
    positive: 5,
    engagement: 5,
    relationships: 5,
    meaning: 5,
    accomplishment: 5,
  });
  const [saved, setSaved] = useState(false);

  const permaItems = [
    { key: 'positive', label: 'Positive Emotions', question: 'How much positive emotion did you experience today?', color: '#f59e0b' },
    { key: 'engagement', label: 'Engagement', question: 'How engaged and absorbed were you in your activities?', color: '#8b5cf6' },
    { key: 'relationships', label: 'Relationships', question: 'How connected did you feel to others today?', color: '#ec4899' },
    { key: 'meaning', label: 'Meaning', question: 'How meaningful did your activities feel today?', color: '#06b6d4' },
    { key: 'accomplishment', label: 'Accomplishment', question: 'How much did you achieve or progress toward goals?', color: '#22c55e' },
  ];

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const average = Object.values(ratings).reduce((a, b) => a + b, 0) / 5;

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Navigation */}
      <nav style={{ background: '#14532d', padding: '0 40px' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ color: '#ffffff', fontSize: 18, fontWeight: 500 }}>
              Foundations of <span style={{ color: '#86efac' }}>Positive Psychology</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/modules', label: 'Modules' },
              { href: '/journal', label: 'Journal' },
              { href: '/assessments', label: 'Assessments' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.href === '/journal' ? '#86efac' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '10px 20px',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 6,
                background: item.href === '/journal' ? 'rgba(255,255,255,0.1)' : 'transparent',
              }}>
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#14532d', fontWeight: 600
          }}>S</div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ padding: '50px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          
          {/* Header */}
          <Link href="/journal" style={{ color: '#16a34a', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            ← Back to Journal
          </Link>
          
          <div style={{ marginTop: 24, marginBottom: 40 }}>
            <div style={{
              width: 70,
              height: 70,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              marginBottom: 20
            }}>
              📊
            </div>
            <h1 style={{ fontSize: 36, color: '#14532d', fontWeight: 400, marginBottom: 8 }}>
              Daily PERMA Check-in
            </h1>
            <p style={{ color: '#64748b', fontSize: 17 }}>{today}</p>
          </div>

          {/* PERMA Explanation */}
          <div style={{
            background: '#f0fdf4',
            borderRadius: 12,
            padding: 24,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <h3 style={{ color: '#14532d', fontSize: 16, marginBottom: 8, fontWeight: 600 }}>
              About PERMA
            </h3>
            <p style={{ color: '#166534', lineHeight: 1.7, fontSize: 15 }}>
              PERMA is Seligman's model of wellbeing, consisting of five measurable elements: 
              Positive emotions, Engagement, Relationships, Meaning, and Accomplishment. 
              Rate each dimension from 1-10 based on your experience today.
            </p>
          </div>

          {/* Rating Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {permaItems.map((item) => (
              <div key={item.key} style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 28,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, marginBottom: 6 }}>
                      {item.label}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: 15 }}>{item.question}</p>
                  </div>
                  <div style={{
                    background: item.color,
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: 20,
                    fontWeight: 700,
                    fontSize: 20
                  }}>
                    {ratings[item.key as keyof typeof ratings]}
                  </div>
                </div>
                
                {/* Slider */}
                <div style={{ padding: '10px 0' }}>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={ratings[item.key as keyof typeof ratings]}
                    onChange={(e) => setRatings({ ...ratings, [item.key]: parseInt(e.target.value) })}
                    style={{
                      width: '100%',
                      height: 8,
                      borderRadius: 4,
                      cursor: 'pointer',
                      accentColor: item.color
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                    <span style={{ color: '#94a3b8', fontSize: 12 }}>Low (1)</span>
                    <span style={{ color: '#94a3b8', fontSize: 12 }}>High (10)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Score */}
          <div style={{
            marginTop: 40,
            background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
            borderRadius: 16,
            padding: 32,
            textAlign: 'center',
            color: '#ffffff'
          }}>
            <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
              Today's Wellbeing Score
            </p>
            <p style={{ fontSize: 56, fontWeight: 300 }}>
              {average.toFixed(1)}
            </p>
            <p style={{ fontSize: 14, opacity: 0.7 }}>out of 10</p>
          </div>

          {/* Save Button */}
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleSave}
              style={{
                background: saved ? '#22c55e' : '#14532d',
                color: '#ffffff',
                border: 'none',
                padding: '18px 48px',
                borderRadius: 8,
                fontSize: 17,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {saved ? '✓ Saved!' : 'Save Check-in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}