'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Module4Page() {
  const [completedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      title: 'Wellbeing Online',
      duration: '28 min',
      description: 'Learn how to design and deliver effective online positive psychology interventions with attention to user engagement, dosage, and choice.',
      topics: ['Online PPIs', 'User Engagement', 'Dosage', 'User Choice'],
      unlocked: true
    },
    {
      id: 2,
      title: 'Person-Activity Fit',
      duration: '32 min',
      description: 'Understand why certain interventions work for some people but not others, and how to match activities to individual needs.',
      topics: ['Activity Features', 'Person Features', 'Motivation', 'Baseline Affect'],
      unlocked: true
    },
    {
      id: 3,
      title: 'Mechanisms of Change',
      duration: '30 min',
      description: 'Explore the underlying mechanisms that make positive psychology interventions effective, including the five domains framework.',
      topics: ['Five Domains', 'Sustained Emotions', 'The Will & The Way', 'Adaptive Mechanisms'],
      unlocked: true
    },
    {
      id: 4,
      title: 'The Dark Side of Happiness',
      duration: '28 min',
      description: 'Examine the potential downsides of pursuing happiness and learn to approach wellbeing with nuance and balance.',
      topics: ['Optimal Happiness', 'Timing Matters', 'Wrong Pursuit', 'Wrong Types'],
      unlocked: true
    },
    {
      id: 5,
      title: 'Synergistic Change Model',
      duration: '30 min',
      description: 'Discover how changes in one life domain can trigger cascading effects across other domains for lasting transformation.',
      topics: ['Five Domains', 'Relapse', 'Spill-over', 'Synergy'],
      unlocked: true
    },
    {
      id: 6,
      title: 'Self-Determination Theory',
      duration: '32 min',
      description: 'Master the science of intrinsic motivation and learn how autonomy, competence, and relatedness drive lasting change.',
      topics: ['Intrinsic Motivation', 'Autonomy', 'Competence', 'Relatedness'],
      unlocked: true
    },
    {
      id: 7,
      title: 'Models for Lasting Change',
      duration: '28 min',
      description: 'Learn the transtheoretical model of change and meta-theories for designing effective positive psychology interventions.',
      topics: ['Stages of Change', 'Ego Depletion', 'Meta Theory', 'Sustainable Practice'],
      unlocked: true
    }
  ];

  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      <nav style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: '#86efac' }} />
              </div>
              <span style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>Positive Psychology</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {[{ href: '/dashboard', label: 'Dashboard' }, { href: '/modules', label: 'Modules', active: true }, { href: '/journal', label: 'Journal' }, { href: '/assessments', label: 'Assessments' }, { href: '/coach', label: 'AI Coach' }].map((item) => (
              <Link key={item.href} href={item.href} style={{ color: item.active ? '#ffffff' : 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 8, background: item.active ? 'rgba(255,255,255,0.15)' : 'transparent' }}>{item.label}</Link>
            ))}
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: 14, fontWeight: 600 }}>JB</div>
        </div>
      </nav>

      <div style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)', padding: '60px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', opacity: 0.1, backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: 24 }}>
            <Link href="/modules" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Modules
            </Link>
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, color: '#86efac', marginBottom: 20, letterSpacing: 1, textTransform: 'uppercase' }}>Module 4 of 5</div>
          <h1 style={{ fontSize: 48, fontWeight: 600, color: '#ffffff', marginBottom: 16, fontFamily: 'Georgia, serif' }}>Maximising Impact</h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 600 }}>Mechanisms, Models & Sustainable Change</p>
          <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span style={{ color: '#ffffff', fontSize: 15 }}>7 Lessons</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style={{ color: '#ffffff', fontSize: 15 }}>3.5 Hours</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span style={{ color: '#ffffff', fontSize: 15 }}>{progressPercent}% Complete</span></div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#111827', marginBottom: 24, fontFamily: 'Georgia, serif' }}>Lessons</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {lessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <Link key={lesson.id} href={`/modules/4/lessons/${lesson.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#ffffff', borderRadius: 12, padding: 28, border: '1px solid #e5e7eb', position: 'relative' }}>
                      <div style={{ display: 'flex', gap: 20 }}>
                        <div style={{ width: 48, height: 48, borderRadius: '50%', background: isCompleted ? '#22c55e' : '#f0fdf4', border: isCompleted ? 'none' : '2px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {isCompleted ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> : <span style={{ color: '#14532d', fontSize: 18, fontWeight: 600 }}>{lesson.id}</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 8, fontFamily: 'Georgia, serif' }}>{lesson.title}</h3>
                          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>{lesson.duration}</p>
                          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginBottom: 16 }}>{lesson.description}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {lesson.topics.map((topic, i) => (<span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{topic}</span>))}
                          </div>
                        </div>
                      </div>
                      {index < lessons.length - 1 && <div style={{ position: 'absolute', left: 51, bottom: -16, width: 2, height: 16, background: '#e5e7eb' }} />}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 12, padding: 28, border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 24 }}>Your Progress</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <div style={{ position: 'relative', width: 140, height: 140 }}>
                  <svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="none" stroke="#e5e7eb" strokeWidth="10" /><circle cx="70" cy="70" r="60" fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${progressPercent * 3.77} 377`} transform="rotate(-90 70 70)" /></svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}><p style={{ fontSize: 36, fontWeight: 600, color: '#14532d' }}>{progressPercent}%</p><p style={{ fontSize: 13, color: '#64748b' }}>Complete</p></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid #e5e7eb' }}><span style={{ color: '#64748b', fontSize: 14 }}>Lessons</span><span style={{ color: '#111827', fontSize: 14, fontWeight: 600 }}>{completedCount} / {totalLessons}</span></div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 12, padding: 28, border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 16 }}>About This Module</h3>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginBottom: 20 }}>Go beyond learning interventions to understanding WHY they work. Master the science of sustainable change and learn to tailor practices for maximum personal impact.</p>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Key Theories</h4>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                <p style={{ marginBottom: 8 }}>Person-Activity Fit (Lyubomirsky)</p>
                <p style={{ marginBottom: 8 }}>Self-Determination Theory (Deci & Ryan)</p>
                <p style={{ marginBottom: 8 }}>Synergistic Change Model (Rusk)</p>
                <p style={{ marginBottom: 8 }}>Dark Side of Happiness (Mauss)</p>
                <p>Transtheoretical Model (Prochaska)</p>
              </div>
            </div>

            <Link href="/modules/4/lessons/1" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '16px 24px', background: '#14532d', color: '#ffffff', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                {completedCount === 0 ? 'Start Module' : 'Continue Learning'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
