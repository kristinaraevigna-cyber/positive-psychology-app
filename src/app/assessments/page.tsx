'use client';

import Link from 'next/link';

export default function AssessmentsPage() {
  const assessments = [
    {
      id: 'strengths',
      title: 'VIA Character Strengths',
      description: 'Discover your top character strengths from the 24 strengths identified by Peterson and Seligman.',
      duration: '15 min',
      questions: 24,
      color: '#f59e0b',
      icon: '💪'
    },
    {
      id: 'perma',
      title: 'PERMA Profiler',
      description: 'Measure your wellbeing across the five PERMA dimensions with this validated assessment.',
      duration: '10 min',
      questions: 23,
      color: '#8b5cf6',
      icon: '📊'
    },
    {
      id: 'flourishing',
      title: 'Flourishing Scale',
      description: 'Assess your overall psychological wellbeing and sense of flourishing in life.',
      duration: '5 min',
      questions: 8,
      color: '#22c55e',
      icon: '🌱'
    },
    {
      id: 'gratitude',
      title: 'Gratitude Questionnaire',
      description: 'Measure your dispositional gratitude with McCullough\'s GQ-6 assessment.',
      duration: '3 min',
      questions: 6,
      color: '#ec4899',
      icon: '🙏'
    },
    {
      id: 'resilience',
      title: 'Brief Resilience Scale',
      description: 'Assess your ability to bounce back from stress and adversity.',
      duration: '3 min',
      questions: 6,
      color: '#06b6d4',
      icon: '🛡️'
    },
  ];

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
                color: item.href === '/assessments' ? '#86efac' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '10px 20px',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 6,
                background: item.href === '/assessments' ? 'rgba(255,255,255,0.1)' : 'transparent',
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
              Wellbeing Assessments
            </h1>
            <p style={{ color: '#64748b', fontSize: 17 }}>
              Validated psychological assessments to measure different aspects of your wellbeing.
            </p>
          </div>

          {/* Assessments Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {assessments.map((assessment) => (
              <Link key={assessment.id} href={`/assessments/${assessment.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 24,
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderLeft: `4px solid ${assessment.color}`
                }}>
                  <div style={{
                    width: 70,
                    height: 70,
                    borderRadius: 16,
                    background: `${assessment.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32
                  }}>
                    {assessment.icon}
                  </div>
                  
                  <div>
                    <h3 style={{ color: '#14532d', fontSize: 20, fontWeight: 500, marginBottom: 8 }}>
                      {assessment.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, marginBottom: 12 }}>
                      {assessment.description}
                    </p>
                    <div style={{ display: 'flex', gap: 20, color: '#94a3b8', fontSize: 14 }}>
                      <span>⏱️ {assessment.duration}</span>
                      <span>📝 {assessment.questions} questions</span>
                    </div>
                  </div>
                  
                  <div style={{
                    background: assessment.color,
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 14
                  }}>
                    Start →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Note */}
          <div style={{
            marginTop: 50,
            padding: 24,
            background: '#f0fdf4',
            borderRadius: 12,
            textAlign: 'center'
          }}>
            <p style={{ color: '#166534', fontSize: 15, lineHeight: 1.7 }}>
              <strong>Note:</strong> These assessments are for educational and self-reflection purposes. 
              They are not diagnostic tools. For clinical concerns, please consult a qualified mental health professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}