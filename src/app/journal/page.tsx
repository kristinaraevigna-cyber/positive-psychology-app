'use client';

import Link from 'next/link';

export default function JournalPage() {
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
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          
          <div style={{ marginBottom: 50 }}>
            <h1 style={{ fontSize: 36, color: '#14532d', fontWeight: 400, marginBottom: 12 }}>
              Wellbeing Journal
            </h1>
            <p style={{ color: '#64748b', fontSize: 17 }}>
              Track your journey with evidence-based journaling practices.
            </p>
          </div>

          {/* Journal Types */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            
            {/* Three Good Things */}
            <Link href="/journal/gratitude" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 36,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                height: '100%'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20
                }}>
                  ✨
                </div>
                <h3 style={{ color: '#14532d', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                  Three Good Things
                </h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  The most researched gratitude intervention. Record three positive things from your day 
                  and reflect on why they happened.
                </p>
                <div style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                  Start Entry →
                </div>
              </div>
            </Link>

            {/* Daily Check-in */}
            <Link href="/journal/checkin" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 36,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                height: '100%'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20
                }}>
                  📊
                </div>
                <h3 style={{ color: '#14532d', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                  Daily PERMA Check-in
                </h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Track your wellbeing across the five PERMA dimensions: Positive emotions, Engagement, 
                  Relationships, Meaning, and Accomplishment.
                </p>
                <div style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                  Start Check-in →
                </div>
              </div>
            </Link>

            {/* Reflection Journal */}
            <Link href="/journal/reflection" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 36,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                height: '100%'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20
                }}>
                  📝
                </div>
                <h3 style={{ color: '#14532d', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                  Reflection Journal
                </h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Free-form journaling space for deeper reflection on your learning, experiences, 
                  and personal growth journey.
                </p>
                <div style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                  Write Entry →
                </div>
              </div>
            </Link>

            {/* Strengths Spotting */}
            <Link href="/journal/strengths" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: 36,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                height: '100%'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20
                }}>
                  💪
                </div>
                <h3 style={{ color: '#14532d', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                  Strengths Spotting
                </h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Notice and record moments when you used your character strengths. Build awareness 
                  of your unique strengths in action.
                </p>
                <div style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                  Spot Strengths →
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Entries */}
          <div style={{ marginTop: 60 }}>
            <h2 style={{ fontSize: 22, color: '#14532d', marginBottom: 24, fontWeight: 500 }}>
              Recent Entries
            </h2>
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 40,
              textAlign: 'center',
              color: '#94a3b8'
            }}>
              <p style={{ fontSize: 48, marginBottom: 16 }}>📔</p>
              <p style={{ fontSize: 16 }}>No journal entries yet.</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>Start your first entry above!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}