'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Dr. Flourish, your AI coach for positive psychology. I'm here to help you explore concepts from the course, reflect on your wellbeing journey, or discuss how to apply what you're learning. What would you like to explore today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await response.json();
      
      if (data.message) {
        setMessages([...newMessages, { role: 'assistant', content: data.message }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I had trouble responding. Please try again.' }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, there was an error. Please check your connection and try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What is the PERMA model?",
    "How can I practice gratitude?",
    "Explain character strengths",
    "What are the three waves?",
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8', display: 'flex', flexDirection: 'column' }}>
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
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '10px 20px',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 6,
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

      {/* Chat Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: 900, margin: '0 auto', width: '100%', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ padding: '30px 0 20px 0', textAlign: 'center' }}>
          <div style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            fontSize: 32
          }}>
            🧠
          </div>
          <h1 style={{ color: '#14532d', fontSize: 28, fontWeight: 500, marginBottom: 8 }}>
            Dr. Flourish
          </h1>
          <p style={{ color: '#64748b', fontSize: 15 }}>
            Your AI Positive Psychology Coach
          </p>
        </div>

        {/* Messages */}
        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div style={{
                maxWidth: '80%',
                padding: '16px 20px',
                borderRadius: message.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                background: message.role === 'user' ? '#14532d' : '#ffffff',
                color: message.role === 'user' ? '#ffffff' : '#334155',
                boxShadow: message.role === 'user' ? 'none' : '0 2px 12px rgba(0,0,0,0.06)',
                lineHeight: 1.7,
                fontSize: 15
              }}>
                {message.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '16px 20px',
                borderRadius: '20px 20px 20px 4px',
                background: '#ffffff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                color: '#64748b'
              }}>
                Thinking...
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div style={{ padding: '0 0 20px 0' }}>
            <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 12, textAlign: 'center' }}>
              Try asking:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {suggestedQuestions.map((question, i) => (
                <button
                  key={i}
                  onClick={() => setInput(question)}
                  style={{
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: 20,
                    padding: '8px 16px',
                    color: '#166534',
                    fontSize: 13,
                    cursor: 'pointer'
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div style={{ 
          padding: '20px 0 30px 0',
          borderTop: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            gap: 12,
            background: '#ffffff',
            borderRadius: 16,
            padding: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about positive psychology..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '12px 16px',
                fontSize: 15,
                background: 'transparent'
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                background: isLoading || !input.trim() ? '#e2e8f0' : '#14532d',
                color: isLoading || !input.trim() ? '#94a3b8' : '#ffffff',
                border: 'none',
                borderRadius: 12,
                padding: '12px 24px',
                fontSize: 15,
                fontWeight: 600,
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
              }}
            >
              Send
            </button>
          </div>
          <p style={{ color: '#94a3b8', fontSize: 12, textAlign: 'center', marginTop: 12 }}>
            Dr. Flourish is an AI assistant. For personal mental health support, please consult a qualified professional.
          </p>
        </div>
      </div>
    </div>
  );
}
