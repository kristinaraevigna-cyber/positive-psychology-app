'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StrengthsAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const strengths = [
    { name: 'Creativity', virtue: 'Wisdom', description: 'Thinking of new ways to do things' },
    { name: 'Curiosity', virtue: 'Wisdom', description: 'Taking an interest in ongoing experience' },
    { name: 'Judgment', virtue: 'Wisdom', description: 'Thinking things through and examining all sides' },
    { name: 'Love of Learning', virtue: 'Wisdom', description: 'Mastering new skills and topics' },
    { name: 'Perspective', virtue: 'Wisdom', description: 'Being able to provide wise counsel to others' },
    { name: 'Bravery', virtue: 'Courage', description: 'Not shrinking from challenge or difficulty' },
    { name: 'Perseverance', virtue: 'Courage', description: 'Finishing what one starts' },
    { name: 'Honesty', virtue: 'Courage', description: 'Speaking the truth and being genuine' },
    { name: 'Zest', virtue: 'Courage', description: 'Approaching life with excitement and energy' },
    { name: 'Love', virtue: 'Humanity', description: 'Valuing close relations with others' },
    { name: 'Kindness', virtue: 'Humanity', description: 'Doing favors and good deeds for others' },
    { name: 'Social Intelligence', virtue: 'Humanity', description: 'Being aware of motives and feelings' },
    { name: 'Teamwork', virtue: 'Justice', description: 'Working well as a member of a group' },
    { name: 'Fairness', virtue: 'Justice', description: 'Treating all people the same' },
    { name: 'Leadership', virtue: 'Justice', description: 'Organizing group activities and seeing they happen' },
    { name: 'Forgiveness', virtue: 'Temperance', description: 'Forgiving those who have done wrong' },
    { name: 'Humility', virtue: 'Temperance', description: 'Letting accomplishments speak for themselves' },
    { name: 'Prudence', virtue: 'Temperance', description: 'Being careful about choices' },
    { name: 'Self-Regulation', virtue: 'Temperance', description: 'Regulating what one feels and does' },
    { name: 'Appreciation of Beauty', virtue: 'Transcendence', description: 'Noticing beauty and excellence' },
    { name: 'Gratitude', virtue: 'Transcendence', description: 'Being aware of and thankful for good things' },
    { name: 'Hope', virtue: 'Transcendence', description: 'Expecting the best and working to achieve it' },
    { name: 'Humor', virtue: 'Transcendence', description: 'Liking to laugh and bringing smiles to others' },
    { name: 'Spirituality', virtue: 'Transcendence', description: 'Having beliefs about higher purpose and meaning' },
  ];

  const questions = strengths.map((s, i) => ({
    id: i,
    strength: s.name,
    text: `I regularly express ${s.name.toLowerCase()} in my daily life.`,
    description: s.description
  }));

  const handleAnswer = (rating: number) => {
    const newAnswers = [...answers, rating];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopStrengths = () => {
    const strengthScores = answers.map((score, index) => ({
      ...strengths[index],
      score
    }));
    return strengthScores.sort((a, b) => b.score - a.score).slice(0, 5);
  };

  const virtueColors: { [key: string]: string } = {
    'Wisdom': '#3b82f6',
    'Courage': '#ef4444',
    'Humanity': '#ec4899',
    'Justice': '#f59e0b',
    'Temperance': '#8b5cf6',
    'Transcendence': '#22c55e'
  };

  if (showResults) {
    const topStrengths = getTopStrengths();
    
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

        {/* Results */}
        <div style={{ padding: '50px 40px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🏆</div>
              <h1 style={{ fontSize: 36, color: '#14532d', fontWeight: 400, marginBottom: 12 }}>
                Your Signature Strengths
              </h1>
              <p style={{ color: '#64748b', fontSize: 17 }}>
                Based on your responses, here are your top 5 character strengths.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {topStrengths.map((strength, index) => (
                <div key={strength.name} style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: 28,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20
                }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: index === 0 ? '#fef3c7' : index === 1 ? '#e5e7eb' : index === 2 ? '#fed7aa' : '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 700,
                    color: index === 0 ? '#f59e0b' : index === 1 ? '#6b7280' : index === 2 ? '#ea580c' : '#9ca3af'
                  }}>
                    {index + 1}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                      <h3 style={{ color: '#14532d', fontSize: 22, fontWeight: 500, margin: 0 }}>
                        {strength.name}
                      </h3>
                      <span style={{
                        background: virtueColors[strength.virtue],
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600
                      }}>
                        {strength.virtue}
                      </span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: 15 }}>{strength.description}</p>
                  </div>
                  
                  <div style={{
                    background: '#f0fdf4',
                    color: '#16a34a',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 18
                  }}>
                    {strength.score}/5
                  </div>
                </div>
              ))}
            </div>

            {/* Action Steps */}
            <div style={{
              marginTop: 50,
              background: '#f0fdf4',
              borderRadius: 16,
              padding: 32
            }}>
              <h3 style={{ color: '#14532d', fontSize: 20, marginBottom: 16, fontWeight: 500 }}>
                Using Your Signature Strengths
              </h3>
              <p style={{ color: '#166534', lineHeight: 1.8, marginBottom: 16 }}>
                Research shows that using your signature strengths in new ways each day increases 
                happiness and decreases depression. Try these exercises:
              </p>
              <ul style={{ color: '#166534', lineHeight: 2, paddingLeft: 20 }}>
                <li>Use your #1 strength ({topStrengths[0]?.name}) in a new way tomorrow</li>
                <li>Look for opportunities to apply your strengths at work</li>
                <li>Share your strengths with others and help them identify theirs</li>
                <li>Journal about moments when you used your strengths today</li>
              </ul>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <Link href="/assessments" style={{
                background: '#f1f5f9',
                color: '#14532d',
                textDecoration: 'none',
                padding: '16px 32px',
                borderRadius: 8,
                fontWeight: 600
              }}>
                ← Back to Assessments
              </Link>
              <Link href="/journal/strengths" style={{
                background: '#14532d',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '16px 32px',
                borderRadius: 8,
                fontWeight: 600
              }}>
                Start Strengths Journal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Assessment */}
      <div style={{ padding: '50px 40px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          
          {/* Progress */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: '#64748b', fontSize: 14 }}>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div style={{ background: '#e2e8f0', borderRadius: 10, height: 8 }}>
              <div style={{
                background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                height: '100%',
                width: `${((currentQuestion) / questions.length) * 100}%`,
                borderRadius: 10,
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Question Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: 48,
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{
              background: '#f0fdf4',
              color: '#16a34a',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: 24
            }}>
              {strengths[currentQuestion].virtue}
            </div>
            
            <h2 style={{ 
              color: '#14532d', 
              fontSize: 26, 
              fontWeight: 500, 
              marginBottom: 12,
              lineHeight: 1.4
            }}>
              {questions[currentQuestion].text}
            </h2>
            
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 40 }}>
              {questions[currentQuestion].description}
            </p>

            {/* Rating Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleAnswer(rating)}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 12,
                    border: '2px solid #e2e8f0',
                    background: '#ffffff',
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#14532d',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e';
                    e.currentTarget.style.background = '#f0fdf4';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  {rating}
                </button>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: 16,
              color: '#94a3b8',
              fontSize: 13
            }}>
              <span>Not like me</span>
              <span>Very much like me</span>
            </div>
          </div>

          {/* Cancel Link */}
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <Link href="/assessments" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }}>
              Cancel Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}