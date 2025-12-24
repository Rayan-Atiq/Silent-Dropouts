import React, { useState } from 'react';
import { Bot, Send, Lightbulb, ExternalLink } from 'lucide-react';

const AIChatbot = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your AI task assistant. I can help you find the right tools, connect with peers, and guide you through your tasks. What do you need help with today?',
      time: '10:00 AM'
    }
  ]);

  // Updated with actual website URLs
  const sampleResponses = {
    'notes': {
      content: 'For taking notes, I recommend **NotebookLM** by Google. It\'s perfect for organizing research and creating study guides from your materials.',
      tools: [
        { name: 'NotebookLM', url: 'https://notebooklm.google.com' },
        { name: 'Obsidian', url: 'https://obsidian.md' },
        { name: 'Notion', url: 'https://notion.so' }
      ]
    },
    'coding': {
      content: 'For coding assistance, **Codeium** is excellent! It provides AI-powered code completion and suggestions across multiple languages.',
      tools: [
        { name: 'Codeium', url: 'https://codeium.com' },
        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
        { name: 'Replit', url: 'https://replit.com' }
      ]
    },
    'peer': {
      content: 'Need a study buddy? **Alice** just completed a similar task and she\'s available to help! I can connect you with her.',
      peers: ['Alice - Just completed React project', 'Bob - Expert in algorithms', 'Diana - Great with databases']
    },
    'presentation': {
      content: 'For presentations, try **Gamma**! It creates beautiful slides with AI and has great templates for academic presentations.',
      tools: [
        { name: 'Gamma', url: 'https://gamma.app' },
        { name: 'Canva', url: 'https://canva.com' },
        { name: 'Beautiful.ai', url: 'https://beautiful.ai' }
      ]
    },
    'essay': {
      content: 'For essay writing, **Grammarly** is fantastic for grammar and style checking. For research, try **Perplexity** for AI-powered search.',
      tools: [
        { name: 'Grammarly', url: 'https://grammarly.com' },
        { name: 'Perplexity', url: 'https://perplexity.ai' },
        { name: 'Hemingway Editor', url: 'https://hemingwayapp.com' }
      ]
    }
  };

  const quickActions = [
    { label: 'Help with notes', icon: '📝', query: 'notes' },
    { label: 'Coding assistance', icon: '💻', query: 'coding' },
    { label: 'Find a peer helper', icon: '👥', query: 'peer' },
    { label: 'Presentation tools', icon: '🎨', query: 'presentation' },
    { label: 'Essay writing help', icon: '✍️', query: 'essay' },
  ];

  const handleSendMessage = async (query = message) => {
    if (!query.trim()) return;

    const newMessage = {
      type: 'user',
      content: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let response = sampleResponses['notes']; // default
      
      const queryLower = query.toLowerCase();
      if (queryLower.includes('note')) response = sampleResponses['notes'];
      else if (queryLower.includes('cod')) response = sampleResponses['coding'];
      else if (queryLower.includes('peer') || queryLower.includes('help')) response = sampleResponses['peer'];
      else if (queryLower.includes('present')) response = sampleResponses['presentation'];
      else if (queryLower.includes('essay') || queryLower.includes('writ')) response = sampleResponses['essay'];

      const botResponse = {
        type: 'bot',
        content: response.content,
        tools: response.tools,
        peers: response.peers,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">AI Task Assistant</h2>
            <p className="text-sm text-slate-400">Your intelligent study companion</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-2xl ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
              {msg.type === 'bot' && (
                <div className="flex items-center space-x-2 mb-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-slate-400">AI Assistant</span>
                </div>
              )}
              
              <div className={`rounded-2xl px-4 py-3 ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 text-white border border-slate-600'
              }`}>
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                
                {/* Tools */}
                {msg.tools && (
                  <div className="mt-3 space-y-2">
                    <div className="text-xs text-slate-300 mb-2">Recommended tools:</div>
                    {msg.tools.map((tool, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{tool.name}</span>
                        </div>
                        <ExternalLink 
                          className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" 
                          onClick={() => openExternalLink(tool.url)}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Peers */}
                {msg.peers && (
                  <div className="mt-3 space-y-2">
                    <div className="text-xs text-slate-300 mb-2">Available peers:</div>
                    {msg.peers.map((peer, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-2">
                        <span className="text-sm">{peer}</span>
                        <button className="text-xs bg-green-600 hover:bg-green-500 px-2 py-1 rounded text-white transition-colors">
                          Connect
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`text-xs mt-2 ${
                  msg.type === 'user' ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  {msg.time}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-2xl px-4 py-3 border border-slate-600">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-purple-400" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
                <span className="text-slate-400 text-sm">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="border-t border-slate-700 p-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-slate-300 mb-2">Quick Actions:</h3>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action.query)}
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
              >
                <span>{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex space-x-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="What task do you need help with?"
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isTyping}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}; 

export default AIChatbot;  