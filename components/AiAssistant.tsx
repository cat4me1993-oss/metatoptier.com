import React, { useState, useRef, useEffect } from 'react';
import { generateWeb3Insight } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Button } from './Button';

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the MetaTopTier AI. Ask me why this domain is critical for your Web3 or Metaverse venture.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const response = await generateWeb3Insight(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Connection to the Metaverse disrupted. Please check your API key.', isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 bg-dark-800/80 border border-neon-purple/30 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_0_40px_rgba(188,19,254,0.15)]">
      <div className="bg-gradient-to-r from-dark-900 to-dark-800 p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse"></div>
          <h3 className="text-white font-display font-bold tracking-wide">MetaTopTier Intelligence Hub</h3>
        </div>
        <span className="text-xs text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded uppercase tracking-widest">Powered by Gemini 2.5</span>
      </div>

      <div className="h-80 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-neon-purple/20 text-white border border-neon-purple/30 rounded-tr-none' 
                : 'bg-dark-700 text-gray-200 border border-white/5 rounded-tl-none'
            } ${msg.isError ? 'text-red-400' : ''}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-dark-700 text-neon-cyan text-xs px-4 py-2 rounded-full animate-pulse">
              Analyzing Blockchain Data...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 bg-dark-900/50 border-t border-white/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Web3 trends or why this domain matters..."
          className="flex-1 bg-dark-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
        />
        <button 
          type="submit" 
          disabled={loading || !input.trim()}
          className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
};