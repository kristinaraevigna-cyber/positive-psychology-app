'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Lesson2Page() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf9' }}>
      {/* Navigation */}
      <nav style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '0 40px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)'
              }} />
              <span style={{ color: '#14532d', fontSize: 16, fontWeight: 600 }}>
                Positive Psychology
              </span>
            </div>
          </Link>
          
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { href: '/dashboard', label: 'Dashboard' },
              { href: '/modules', label: 'Modules' },
              { href: '/journal', label: 'Journal' },
              { href: '/assessments', label: 'Assessments' },
              { href: '/coach', label: 'AI Coach' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: item.href === '/modules' ? '#14532d' : '#64748b',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: item.href === '/modules' ? 600 : 500,
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#14532d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600
          }}>
            JB
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ 
        background: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 40px'
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#64748b' }}>
            <Link href="/modules" style={{ color: '#64748b', textDecoration: 'none' }}>Modules</Link>
            <span>/</span>
            <Link href="/modules/1" style={{ color: '#64748b', textDecoration: 'none' }}>The Fundamentals</Link>
            <span>/</span>
            <span style={{ color: '#14532d', fontWeight: 500 }}>Lesson 2</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ 
            display: 'inline-block',
            background: '#f0fdf4', 
            color: '#166534',
            padding: '6px 12px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 16
          }}>
            Lesson 2 of 6
          </div>
          <h1 style={{ 
            fontSize: 36, 
            color: '#111827', 
            fontWeight: 600,
            marginBottom: 12,
            fontFamily: 'Georgia, serif'
          }}>
            Evolution of the Field
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            From the first wave to the third: How positive psychology has grown and matured
          </p>
        </div>

        {/* Video Section */}
        <div style={{
          background: '#1a1a2e',
          borderRadius: 16,
          aspectRatio: '16/9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
            Video coming soon
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 8 }}>
            Dr. Jolanta Burke explores the three waves of positive psychology
          </p>
        </div>

        {/* Content */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 16, 
          padding: 48,
          border: '1px solid #e5e7eb',
          marginBottom: 32
        }}>
          
          {/* Jolanta's Story - PP 2.0 */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Strengths-Based Coaching</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "Career advisors from four universities in Ireland invited me to introduce them to 
              strength-based coaching and figure out how to apply it in their practice. During the day, 
              I asked them to role-play this new approach. The most challenging part of the role play 
              for everyone was the process of shifting clients' attention to their strengths rather than 
              fixing the problems they came to address. It just felt like they were ignoring their clients' 
              needs. The shift from the problem to 'let's discuss your strengths' was unnatural. However, 
              after a full day of practice, they felt more comfortable. A year later, most advisors shared 
              that they enjoyed using strengths in their practice. They no longer felt unnatural."
            </p>
          </div>

          {/* PP 2.0 */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            fontFamily: 'Georgia, serif'
          }}>
            Positive Psychology 2.0: A Balanced Approach
          </h2>
          
          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            The re-shifting of people's perspective from what is wrong to what is right sparked one of 
            the field's early criticisms: the belief that the negatives will disappear if we focus on 
            the positives. To tackle this concern head-on, <strong>Paul Wong</strong>, a prominent figure 
            in the field, introduced the concept of <strong>Positive Psychology 2.0</strong>—an evolution 
            of the field that acknowledges the importance of addressing both the positive and negative 
            aspects of human experience.
          </p>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            Wong proposed a dual-system model that integrates contrasting approaches. While it is important 
            to pursue positive experiences, so is avoiding negative situations. Both the approach (seeking 
            positive experiences) and avoidance (avoiding negative experiences) are essential in our lives 
            and need to be acknowledged.
          </p>

          {/* Second Wave Section */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 48,
            fontFamily: 'Georgia, serif'
          }}>
            The Second Wave: Embracing the Shadow
          </h2>

          {/* Jolanta's Story - Second Wave */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 32,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On the Second Wave</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "When I worked at the University of East London, UK, I had the privilege of sharing my 
              office with Tim Lomas and Itai Ivtzan. One afternoon, Itai and I crossed paths and had 
              an impromptu conversation that has stayed with me since. We talked about being wise in 
              how we use positive psychology research and the importance of expanding our horizons 
              within positive psychology. This was essential with the emergence of the second wave."
            </p>
          </div>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            The concept of "second-wave positive psychology" was introduced in Europe by <strong>Tim Lomas, 
            Itai Ivtzan, Kate Hefferon</strong>, and <strong>Piers Worth</strong>. Interestingly, two of the 
            four authors were trained psychotherapists, and the other two came from research fields that 
            explored the positive impact of negative states.
          </p>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            They drew on <strong>dialectics</strong>—a tension between two opposing forces, such as optimism 
            and pessimism, negative and positive, or light and darkness. They advocated embracing the 
            complexity and dialectical nature of human emotions and experiences in pursuing wellbeing rather 
            than reducing it to a simple "positive equals good" heuristic.
          </p>

          {/* Carl Jung's Shadow Box */}
          <div style={{
            background: '#f8fafc',
            borderRadius: 12,
            padding: 32,
            margin: '32px 0',
            borderLeft: '4px solid #6366f1'
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#4f46e5', marginBottom: 12 }}>
              Carl Jung's "Shadow"
            </h3>
            <p style={{ 
              fontSize: 16, 
              color: '#374151', 
              lineHeight: 1.8,
              margin: 0
            }}>
              The notion of Carl Jung's "shadow"—the dark side of our psyche that we often find challenging 
              to accept—is a fundamental part of the second-wave approach. Integrating "shadow" elements of 
              human experience, such as pain, suffering, and existential angst, into the concepts of wellbeing 
              is essential. Denying this part of ourselves can hinder our personal growth, resilience, and 
              overall wellbeing.
            </p>
          </div>

          {/* Another Jolanta Story */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>At the Amsterdam Conference</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "I remember when I was at an EU conference on positive psychology in Amsterdam, NL, when 
              their ideas were first presented. The room was packed, and as the discussion unfolded, 
              people responded with a resounding 'Finally!' It was ironic how positive psychologists 
              craved talking about the 'dark side' of human experience. But more than irony, it also 
              highlighted how important it is for people to acknowledge life's challenges. It is about 
              accepting ourselves as we are and acknowledging the need for a full range of human 
              experiences."
            </p>
          </div>

          {/* Third Wave Section */}
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 48,
            fontFamily: 'Georgia, serif'
          }}>
            The Third Wave: Systems and Complexity
          </h2>

          {/* Jolanta's Story - Third Wave */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 32,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>On Peter Gabriel's Song</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "Every time I read this article, I'm reminded of Peter Gabriel's song 'Washing the Water'. 
              While the lyrics differ from this article, the sentiment remains the same. It teaches us 
              how to turn dangerous waters into a support system when we simply let go. We travel down 
              the river on its back as it teaches us to float. Similarly, in the article, the waves are 
              described poetically as coming in and out, marking their existence. The third wave of 
              positive psychology is just one of the waves we see coming in and out with the tide."
            </p>
          </div>

          <p style={{ 
            fontSize: 17, 
            color: '#374151', 
            lineHeight: 1.9, 
            marginBottom: 24 
          }}>
            Written mainly by researchers from Australian universities, with Tim Lomas (also a co-author 
            of the second wave), the third wave shifts the focus of positive psychology towards the future 
            while acknowledging that these waves can work in tandem with each other.
          </p>

          {/* Third Wave Tenets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              {
                title: 'Complexity of Wellbeing',
                description: 'We stopped seeing wellbeing as one or two models but explored its nuances associated with factors impacting them—cultural influences, social dynamics, and ecological systems.'
              },
              {
                title: 'Dynamic Systems Approach',
                description: 'Understanding the interconnectedness and continuous interaction between elements within an individual and their environment, acknowledging the non-linear nature of human development.'
              },
              {
                title: 'Multidisciplinary Collaboration',
                description: 'Drawing insights from systems theory, complexity science, sociology, and ecology to enrich our understanding of wellbeing and inform more holistic interventions.'
              }
            ].map((tenet, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: 24,
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                  {tenet.title}
                </h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>

          {/* School Example */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 40,
            borderLeft: '4px solid #22c55e'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#14532d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600
              }}>
                JB
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#14532d', fontSize: 15 }}>Dr. Jolanta Burke</p>
                <p style={{ color: '#64748b', fontSize: 13 }}>A Systems Thinking Example</p>
              </div>
            </div>
            <p style={{ 
              color: '#166534', 
              fontSize: 17, 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "When my little boy started his junior infants, his inexperienced teacher complained that 
              he did not talk to her and asked me to 'tell' him to start conversing with her. I found 
              this request bizarre—he was a chatter-box at home. So, I re-shifted the teacher's focus 
              from him (and what is wrong with him) to what happens in the classroom that does not make 
              him feel safe to talk. Many factors relating to the social environment came out. Once they 
              were addressed, my son had no issues speaking in the class. This is just a small example 
              of how much easier it is to blame an individual, then address a range of other environmental 
              influences."
            </p>
          </div>

          {/* Timeline */}
          <h2 style={{ 
            fontSize: 20, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            marginTop: 40
          }}>
            The Three Waves at a Glance
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 16, 
            marginBottom: 32 
          }}>
            {[
              { wave: 'First Wave', period: '1998-2010', focus: 'Focus on positive traits, emotions, and institutions. Building the evidence base.' },
              { wave: 'Second Wave', period: '2010-2020', focus: 'Dialectical thinking—embracing both positive and negative. Integration of shadow.' },
              { wave: 'Third Wave', period: '2020-Present', focus: 'Systems thinking, complexity, and multidisciplinary collaboration.' }
            ].map((item, i) => (
              <div key={i} style={{
                background: i === 2 ? '#14532d' : '#f8fafc',
                borderRadius: 12,
                padding: 24,
                border: i === 2 ? 'none' : '1px solid #e2e8f0'
              }}>
                <p style={{ 
                  fontSize: 13, 
                  color: i === 2 ? '#86efac' : '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  marginBottom: 8
                }}>
                  {item.period}
                </p>
                <h3 style={{ 
                  fontSize: 18, 
                  fontWeight: 600, 
                  color: i === 2 ? '#ffffff' : '#111827',
                  marginBottom: 12
                }}>
                  {item.wave}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: i === 2 ? 'rgba(255,255,255,0.8)' : '#64748b',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.focus}
                </p>
              </div>
            ))}
          </div>

          {/* Key References */}
          <h2 style={{ 
            fontSize: 20, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 16,
            marginTop: 40
          }}>
            Key References
          </h2>
          
          <div style={{
            background: '#f8fafc',
            borderRadius: 8,
            padding: 20,
            fontSize: 14,
            color: '#64748b',
            lineHeight: 1.8
          }}>
            <p style={{ marginBottom: 12 }}>
              Wong, P. T. P. (2011). Positive psychology 2.0: Towards a balanced interactive model of the good life. 
              <em>Canadian Psychology, 52</em>(2), 69–81.
            </p>
            <p style={{ marginBottom: 12 }}>
              Lomas, T., & Ivtzan, I. (2016). Second wave positive psychology: Exploring the positive-negative 
              dialectics of wellbeing. <em>Journal of Happiness Studies, 17</em>(4), 1753–1768.
            </p>
            <p>
              Lomas, T., Waters, L., Williams, P., Oades, L. G., & Kern, M. L. (2021). Third wave positive psychology: 
              Broadening towards complexity. <em>The Journal of Positive Psychology, 16</em>(5), 660–674.
            </p>
          </div>
        </div>

        {/* Reflection Section */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 16, 
          padding: 48,
          border: '1px solid #e5e7eb',
          marginBottom: 32
        }}>
          <h2 style={{ 
            fontSize: 24, 
            color: '#111827', 
            fontWeight: 600, 
            marginBottom: 20,
            fontFamily: 'Georgia, serif'
          }}>
            Reflection Questions
          </h2>
          <p style={{ color: '#64748b', marginBottom: 24, fontSize: 15 }}>
            Take a moment to reflect on how the field has evolved and what this means for practice.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'How do you personally balance focusing on positives while acknowledging challenges in your life?',
              'Think of a time when a negative experience led to personal growth. How does this relate to second-wave thinking?',
              'Can you identify systems (family, work, community) that influence your wellbeing beyond individual factors?'
            ].map((question, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                borderRadius: 12,
                padding: 20,
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#e0f2fe',
                    color: '#0369a1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                    flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6 }}>
                    {question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0'
        }}>
          <Link href="/modules/1/lessons/1" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#64748b',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 500
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Previous Lesson
          </Link>

          <button
            onClick={() => setIsCompleted(!isCompleted)}
            style={{
              background: isCompleted ? '#22c55e' : '#14532d',
              color: '#ffffff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            {isCompleted ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Completed
              </>
            ) : (
              'Mark as Complete'
            )}
          </button>

          <Link href="/modules/1/lessons/3" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#14532d',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 600
          }}>
            Next Lesson
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
