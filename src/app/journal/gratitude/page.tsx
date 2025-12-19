'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GratitudePage() {
  const [entries, setEntries] = useState([
    { thing: '', why: '' },
    { thing: '', why: '' },
    { thing: '', why: '' },
  ]);
  const [saved, setSaved] = useState(false);

  const updateEntry = (index: number, field: 'thing' | 'why', value: string) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
          
          <Link href="/journal" style={{ color: '#16a34a', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            ← Back to Journal
          </Link>
          
          <div style={{ marginTop: 24, marginBottom: 40 }}>
            <div style={{
              width: 70,
              height: 70,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              marginBottom: 20
            }}>
              ✨
            </div>
            <h1 style={{ fontSize: 36, color: '#14532d', fontWeight: 400, marginBottom: 8 }}>
              Three Good Things
            </h1>
            <p style={{ color: '#64748b', fontSize: 17 }}>{today}</p>
          </div>

          <div style={{
            background: '#f0fdf4',
            borderRadius: 12,
            padding: 24,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <h3 style={{ color: '#14532d', fontSize: 16, marginBottom: 8, fontWeight: 600 }}>
              How This Works
            </h3>
            <p style={{ color: '#166534', lineHeight: 1.7, fontSize: 15 }}>
              Each day, write down three things that went well and explain why each happened. 
              Research by Seligman et al. (2005) found this exercise significantly increases 
              happiness and decreases depressive symptoms for up to six months.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {entries.map((entry, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 32,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#fef3c7',
                    color: '#92400e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{ color: '#14532d', fontSize: 18, fontWeight: 500 }}>
                    Good Thing #{index + 1}
                  </h3>
                </div>
                
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', color: '#475569', fontSize: 14, marginBottom: 8, fontWeight: 500 }}>
                    What went well today?
                  </label>
                  <input
                    type="text"
                    value={entry.thing}
                    onChange={(e) => updateEntry(index, 'thing', e.target.value)}
                    placeholder="Describe something positive that happened..."
                    style={{
                      width: '100%',
                      padding: 16,
                      borderRadius: 8,
                      border: '1px solid #d1d5db',
                      fontSize: 16,
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', color: '#475569', fontSize: 14, marginBottom: 8, fontWeight: 500 }}>
                    Why did this happen?
                  </label>
                  <textarea
                    value={entry.why}
                    onChange={(e) => updateEntry(index, 'why', e.target.value)}
                    placeholder="Reflect on why this good thing occurred..."
                    style={{
                      width: '100%',
                      padding: 16,
                      borderRadius: 8,
                      border: '1px solid #d1d5db',
                      fontSize: 16,
                      minHeight: 100,
                      resize: 'vertical',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

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
              {saved ? '✓ Saved!' : 'Save Entry'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
