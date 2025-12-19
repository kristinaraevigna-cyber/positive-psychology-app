// =============================================
// AI COACH CHAT COMPONENT
// File: components/AICoach/AICoachChat.jsx
// =============================================

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  Sparkles, 
  X, 
  Minimize2, 
  Maximize2,
  RefreshCw,
  Bot,
  User,
  Loader2,
  AlertCircle,
  Settings,
  Zap,
} from 'lucide-react';
import { useAICoach } from '@/hooks/useAICoach';
import { CONVERSATION_STARTERS } from '@/lib/ai-prompts';

// =============================================
// MAIN CHAT COMPONENT
// =============================================

export const AICoachChat = ({ 
  isOpen, 
  onClose,
  promptType = 'core',
  context = {},
  title = 'Flourish Coach',
  placeholder = 'Ask me anything about wellbeing...',
  showProviderToggle = true,
  initialMessage = null,
  conversationStarters = CONVERSATION_STARTERS.general,
}) => {
  const {
    messages,
    isLoading,
    isStreaming,
    error,
    provider,
    sendMessageStreaming,
    resetSession,
    setProvider,
    clearError,
  } = useAICoach({ promptType, context, defaultProvider: 'claude' });

  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Send initial message if provided
  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      handleSend(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = async (content = inputValue) => {
    if (!content.trim() || isLoading || isStreaming) return;
    
    setInputValue('');
    clearError();
    
    try {
      await sendMessageStreaming(content);
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleStarterClick = (starter) => {
    handleSend(starter);
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={{
        ...styles.container,
        ...(isMinimized ? styles.containerMinimized : {}),
      }}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.avatarContainer}>
              <Sparkles size={20} style={styles.avatarIcon} />
            </div>
            <div>
              <h3 style={styles.title}>{title}</h3>
              <span style={styles.subtitle}>
                Powered by {provider === 'claude' ? 'Claude' : 'GPT-4'}
              </span>
            </div>
          </div>
          
          <div style={styles.headerActions}>
            {showProviderToggle && (
              <button 
                onClick={() => setShowSettings(!showSettings)}
                style={styles.headerButton}
                title="Settings"
              >
                <Settings size={18} />
              </button>
            )}
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              style={styles.headerButton}
              title={isMinimized ? 'Expand' : 'Minimize'}
            >
              {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
            </button>
            <button 
              onClick={onClose}
              style={styles.headerButton}
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && !isMinimized && (
          <div style={styles.settingsPanel}>
            <label style={styles.settingsLabel}>AI Provider:</label>
            <div style={styles.providerToggle}>
              <button
                onClick={() => setProvider('claude')}
                style={{
                  ...styles.providerButton,
                  ...(provider === 'claude' ? styles.providerButtonActive : {}),
                }}
              >
                <Sparkles size={14} />
                Claude
              </button>
              <button
                onClick={() => setProvider('openai')}
                style={{
                  ...styles.providerButton,
                  ...(provider === 'openai' ? styles.providerButtonActive : {}),
                }}
              >
                <Zap size={14} />
                GPT-4
              </button>
            </div>
            <button 
              onClick={() => {
                resetSession();
                setShowSettings(false);
              }}
              style={styles.resetButton}
            >
              <RefreshCw size={14} />
              New Conversation
            </button>
          </div>
        )}

        {/* Messages */}
        {!isMinimized && (
          <>
            <div style={styles.messagesContainer}>
              {messages.length === 0 ? (
                <div style={styles.emptyState}>
                  <div style={styles.emptyIcon}>
                    <MessageCircle size={32} />
                  </div>
                  <h4 style={styles.emptyTitle}>How can I help you flourish today?</h4>
                  <p style={styles.emptyText}>
                    Ask me about wellbeing, strengths, gratitude, or any topic from your lessons.
                  </p>
                  
                  {conversationStarters.length > 0 && (
                    <div style={styles.starters}>
                      <p style={styles.startersLabel}>Try asking:</p>
                      {conversationStarters.slice(0, 3).map((starter, i) => (
                        <button
                          key={i}
                          onClick={() => handleStarterClick(starter)}
                          style={styles.starterButton}
                        >
                          {starter}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                messages.map((message, index) => (
                  <MessageBubble 
                    key={index} 
                    message={message}
                    isLast={index === messages.length - 1}
                  />
                ))
              )}
              
              {error && (
                <div style={styles.errorMessage}>
                  <AlertCircle size={16} />
                  <span>{error}</span>
                  <button onClick={clearError} style={styles.errorDismiss}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={styles.inputContainer}>
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                style={styles.input}
                rows={1}
                disabled={isLoading || isStreaming}
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isLoading || isStreaming}
                style={{
                  ...styles.sendButton,
                  ...(!inputValue.trim() || isLoading || isStreaming 
                    ? styles.sendButtonDisabled 
                    : {}),
                }}
              >
                {isLoading || isStreaming ? (
                  <Loader2 size={18} style={styles.spinner} />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// =============================================
// MESSAGE BUBBLE COMPONENT
// =============================================

const MessageBubble = ({ message, isLast }) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div style={{
      ...styles.messageBubble,
      ...(isAssistant ? styles.assistantBubble : styles.userBubble),
    }}>
      <div style={{
        ...styles.messageAvatar,
        ...(isAssistant ? styles.assistantAvatar : styles.userAvatar),
      }}>
        {isAssistant ? <Bot size={16} /> : <User size={16} />}
      </div>
      
      <div style={{
        ...styles.messageContent,
        ...(isAssistant ? styles.assistantContent : styles.userContent),
      }}>
        <div style={styles.messageText}>
          {message.content}
          {message.isStreaming && isLast && (
            <span style={styles.cursor}>▊</span>
          )}
        </div>
        
        {isAssistant && message.model && !message.isStreaming && (
          <div style={styles.messageModel}>
            {message.provider === 'anthropic' ? '✨ Claude' : '⚡ GPT-4'}
          </div>
        )}
      </div>
    </div>
  );
};

// =============================================
// FLOATING CHAT BUTTON
// =============================================

export const AICoachButton = ({ onClick, hasUnread = false }) => {
  return (
    <button onClick={onClick} style={styles.floatingButton}>
      <Sparkles size={24} />
      {hasUnread && <span style={styles.unreadBadge} />}
    </button>
  );
};

// =============================================
// QUICK REFLECTION COMPONENT (for gratitude, check-ins, etc.)
// =============================================

export const AIReflection = ({ 
  type, 
  data, 
  onReflectionReceived,
  autoFetch = true,
}) => {
  const { getReflection, isLoading, error } = useAICoach();
  const [reflection, setReflection] = useState(null);

  useEffect(() => {
    if (autoFetch && data) {
      fetchReflection();
    }
  }, [data, autoFetch]);

  const fetchReflection = async () => {
    try {
      const result = await getReflection(type, data);
      setReflection(result);
      onReflectionReceived?.(result);
    } catch (err) {
      console.error('Failed to get reflection:', err);
    }
  };

  if (isLoading) {
    return (
      <div style={styles.reflectionCard}>
        <div style={styles.reflectionLoading}>
          <Loader2 size={20} style={styles.spinner} />
          <span>Getting your personalized insight...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.reflectionCard}>
        <div style={styles.reflectionError}>
          <AlertCircle size={16} />
          <span>Couldn't get insight. <button onClick={fetchReflection}>Try again</button></span>
        </div>
      </div>
    );
  }

  if (!reflection) return null;

  return (
    <div style={styles.reflectionCard}>
      <div style={styles.reflectionHeader}>
        <Sparkles size={16} style={{ color: '#f6ad55' }} />
        <span>AI Insight</span>
      </div>
      <p style={styles.reflectionText}>{reflection}</p>
    </div>
  );
};

// =============================================
// STYLES
// =============================================

const styles = {
  // Overlay
  overlay: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 1000,
  },

  // Container
  container: {
    width: 400,
    maxHeight: 600,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  containerMinimized: {
    maxHeight: 64,
  },

  // Header
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid #f0f0f0',
    background: 'linear-gradient(135deg, #234e52 0%, #2d6a4f 100%)',
    color: '#ffffff',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: {
    color: '#f6ad55',
  },
  title: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 11,
    opacity: 0.8,
  },
  headerActions: {
    display: 'flex',
    gap: 4,
  },
  headerButton: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: 6,
    padding: 6,
    cursor: 'pointer',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  },

  // Settings panel
  settingsPanel: {
    padding: 12,
    borderBottom: '1px solid #f0f0f0',
    backgroundColor: '#fafafa',
  },
  settingsLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: '#666',
    marginBottom: 8,
    display: 'block',
  },
  providerToggle: {
    display: 'flex',
    gap: 8,
    marginBottom: 12,
  },
  providerButton: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    background: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontSize: 13,
    color: '#666',
    transition: 'all 0.2s',
  },
  providerButtonActive: {
    background: '#234e52',
    color: '#ffffff',
    borderColor: '#234e52',
  },
  resetButton: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    background: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontSize: 13,
    color: '#666',
  },

  // Messages
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minHeight: 300,
    maxHeight: 400,
  },

  // Empty state
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 24,
    height: '100%',
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #faf5f0 0%, #fff7ed 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    color: '#f6ad55',
  },
  emptyTitle: {
    margin: '0 0 8px 0',
    fontSize: 16,
    fontWeight: 600,
    color: '#234e52',
  },
  emptyText: {
    margin: 0,
    fontSize: 14,
    color: '#666',
    lineHeight: 1.5,
  },
  starters: {
    marginTop: 20,
    width: '100%',
  },
  startersLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  starterButton: {
    display: 'block',
    width: '100%',
    padding: '10px 14px',
    marginBottom: 8,
    background: '#f8f8f8',
    border: '1px solid #e8e8e8',
    borderRadius: 8,
    textAlign: 'left',
    fontSize: 13,
    color: '#444',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  // Message bubbles
  messageBubble: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  userBubble: {
    flexDirection: 'row-reverse',
  },
  assistantBubble: {
    flexDirection: 'row',
  },
  messageAvatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  userAvatar: {
    background: '#234e52',
    color: '#ffffff',
  },
  assistantAvatar: {
    background: 'linear-gradient(135deg, #faf5f0 0%, #fff7ed 100%)',
    color: '#f6ad55',
  },
  messageContent: {
    maxWidth: '80%',
    padding: '10px 14px',
    borderRadius: 12,
  },
  userContent: {
    background: '#234e52',
    color: '#ffffff',
    borderBottomRightRadius: 4,
  },
  assistantContent: {
    background: '#f5f5f5',
    color: '#333',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
  messageModel: {
    marginTop: 6,
    fontSize: 10,
    opacity: 0.6,
  },
  cursor: {
    animation: 'blink 1s infinite',
    opacity: 0.7,
  },

  // Error
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    background: '#fef2f2',
    border: '1px solid #fee2e2',
    borderRadius: 8,
    color: '#dc2626',
    fontSize: 13,
  },
  errorDismiss: {
    marginLeft: 'auto',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#dc2626',
    padding: 2,
  },

  // Input
  inputContainer: {
    display: 'flex',
    gap: 8,
    padding: 12,
    borderTop: '1px solid #f0f0f0',
    background: '#fafafa',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    fontSize: 14,
    resize: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    lineHeight: 1.4,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    border: 'none',
    background: '#234e52',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  sendButtonDisabled: {
    background: '#ccc',
    cursor: 'not-allowed',
  },

  // Floating button
  floatingButton: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(135deg, #234e52 0%, #2d6a4f 100%)',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(35, 78, 82, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    zIndex: 999,
  },
  unreadBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: '#f6ad55',
    border: '2px solid #ffffff',
  },

  // Reflection card
  reflectionCard: {
    background: 'linear-gradient(135deg, #faf5f0 0%, #fff7ed 100%)',
    border: '1px solid #fed7aa',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  reflectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 600,
    color: '#92400e',
  },
  reflectionText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: '#78350f',
  },
  reflectionLoading: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#92400e',
    fontSize: 14,
  },
  reflectionError: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#dc2626',
    fontSize: 13,
  },

  // Spinner animation
  spinner: {
    animation: 'spin 1s linear infinite',
  },
};

// Add keyframe animations
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default AICoachChat;
