// =============================================
// AI COACHING REACT HOOK
// File: hooks/useAICoach.js
// =============================================

import { useState, useCallback, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useAICoach = (options = {}) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [provider, setProvider] = useState(options.defaultProvider || 'claude');
  const sessionIdRef = useRef(uuidv4());
  const abortControllerRef = useRef(null);

  const resetSession = useCallback(() => {
    setMessages([]);
    setError(null);
    sessionIdRef.current = uuidv4();
  }, []);

  // Send a message (non-streaming)
  const sendMessage = useCallback(async (content, messageOptions = {}) => {
    setIsLoading(true);
    setError(null);

    const userMessage = { role: 'user', content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          provider: messageOptions.provider || provider,
          promptType: messageOptions.promptType || options.promptType || 'core',
          context: messageOptions.context || options.context || {},
          sessionId: sessionIdRef.current,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage = { 
        role: 'assistant', 
        content: data.content,
        model: data.model,
        provider: data.provider,
      };
      
      setMessages([...newMessages, assistantMessage]);
      return assistantMessage;

    } catch (err) {
      setError(err.message);
      // Remove the user message if there was an error
      setMessages(messages);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [messages, provider, options]);

  // Send a message (streaming)
  const sendMessageStreaming = useCallback(async (content, messageOptions = {}) => {
    setIsStreaming(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    const userMessage = { role: 'user', content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Add placeholder for assistant message
    const assistantMessage = { role: 'assistant', content: '', isStreaming: true };
    setMessages([...newMessages, assistantMessage]);

    try {
      const response = await fetch('/api/ai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          provider: messageOptions.provider || provider,
          promptType: messageOptions.promptType || options.promptType || 'core',
          context: messageOptions.context || options.context || {},
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error('Failed to start stream');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          try {
            const data = JSON.parse(line);
            
            if (data.type === 'text') {
              fullContent += data.content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: fullContent,
                };
                return updated;
              });
            } else if (data.type === 'error') {
              throw new Error(data.error);
            }
          } catch (e) {
            // Skip malformed JSON
          }
        }
      }

      // Mark streaming as complete
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          isStreaming: false,
        };
        return updated;
      });

      return { role: 'assistant', content: fullContent };

    } catch (err) {
      if (err.name === 'AbortError') {
        // User cancelled
        setMessages(messages);
      } else {
        setError(err.message);
        setMessages(messages);
      }
      throw err;
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  }, [messages, provider, options]);

  // Cancel streaming
  const cancelStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  // Get quick reflection (gratitude, check-in, etc.)
  const getReflection = useCallback(async (type, data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/reflect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          data,
          provider,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get reflection');
      }

      const result = await response.json();
      return result.reflection;

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [provider]);

  // Get lesson help
  const getLessonHelp = useCallback(async (lessonInfo, question) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/lesson-help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonInfo,
          question,
          provider,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get help');
      }

      const result = await response.json();
      return result.answer;

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [provider]);

  // Get strengths coaching
  const getStrengthsHelp = useCallback(async (question, strengths = null) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/strengths', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          strengths,
          question,
          provider,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get strengths help');
      }

      const result = await response.json();
      return result;

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [provider]);

  return {
    // State
    messages,
    isLoading,
    isStreaming,
    error,
    provider,
    sessionId: sessionIdRef.current,
    
    // Actions
    sendMessage,
    sendMessageStreaming,
    cancelStream,
    resetSession,
    setProvider,
    setMessages,
    clearError: () => setError(null),
    
    // Quick helpers
    getReflection,
    getLessonHelp,
    getStrengthsHelp,
  };
};

// =============================================
// CONVENIENCE HOOKS FOR SPECIFIC USE CASES
// =============================================

// Hook for lesson support
export const useLessonCoach = (lessonInfo) => {
  return useAICoach({
    promptType: 'lessonSupport',
    context: { currentLesson: lessonInfo },
  });
};

// Hook for strengths coaching
export const useStrengthsCoach = (userStrengths) => {
  return useAICoach({
    promptType: 'strengthsCoaching',
    context: { userStrengths },
  });
};

// Hook for goal setting
export const useGoalCoach = () => {
  return useAICoach({
    promptType: 'goalSetting',
  });
};

// Hook for resilience support
export const useResilienceCoach = () => {
  return useAICoach({
    promptType: 'resilienceSupport',
  });
};

export default useAICoach;
