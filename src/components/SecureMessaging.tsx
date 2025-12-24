import React, { useState } from 'react';
import { Send, AlertTriangle } from 'lucide-react';

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState('Alice');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [chats, setChats] = useState({
    Alice: [
      { sender: 'Alice', message: 'Hey! How\'s the coding assignment going?', time: '10:30 AM', type: 'received' },
      { sender: 'You', message: 'Going well! Need any help with Project X?', time: '10:32 AM', type: 'sent' },
      { sender: 'Alice', message: 'Actually yes, I\'m stuck on the database connection part', time: '10:35 AM', type: 'received' },
      { sender: 'You', message: 'I can share my solution! Let me send you the code', time: '10:36 AM', type: 'sent' },
      { sender: 'Alice', message: 'Thanks for the help!', time: '10:45 AM', type: 'received' },
    ],
    Bob: [
      { sender: 'Bob', message: 'Working on the project...', time: '9:45 AM', type: 'received' },
      { sender: 'You', message: 'How\'s it going? Need any assistance?', time: '9:47 AM', type: 'sent' },
      { sender: 'Bob', message: 'It\'s challenging but I\'m making progress', time: '9:50 AM', type: 'received' },
    ],
    Charlie: [
      { sender: 'Charlie', message: 'This is really frustrating...', time: '8:30 AM', type: 'received', flagged: true },
      { sender: 'You', message: 'What\'s wrong? I\'m here to help', time: '8:32 AM', type: 'sent' },
      { sender: 'Charlie', message: 'I can\'t figure out this stupid algorithm', time: '8:35 AM', type: 'received', flagged: true },
      { sender: 'Charlie', message: 'See you tomorrow', time: '8:40 AM', type: 'received' },
    ],
  });

  const students = [
    { name: 'Alice', status: 'online', lastMessage: 'Thanks for the help!', time: '2m ago', mood: '😊' },
    { name: 'Bob', status: 'away', lastMessage: 'Working on the project...', time: '15m ago', mood: '😐' },
    { name: 'Charlie', status: 'offline', lastMessage: 'See you tomorrow', time: '1h ago', mood: '😞' },
  ];

  // List of words that should trigger the red highlighting
  const negativeWords = ['frustrating', 'stupid', 'idiot', 'hate', 'bully', 'worthless', 'useless'];

  const checkForNegativeWords = (text: string) => {
    return negativeWords.some(word => text.toLowerCase().includes(word));
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: 'You',
        message: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent',
        flagged: checkForNegativeWords(message)
      };

      setChats(prev => ({
        ...prev,
        [selectedChat]: [...prev[selectedChat as keyof typeof prev], newMessage]
      }));

      if (newMessage.flagged) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }

      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex">
      {/* Sidebar */}
      <div className="w-80 bg-slate-800/50 border-r border-slate-700 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Messages</h2>
          <div className="text-sm text-slate-400">Chat with your peers</div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {students.map((student) => (
            <div
              key={student.name}
              onClick={() => setSelectedChat(student.name)}
              className={`p-4 border-b border-slate-700/50 cursor-pointer transition-all duration-200 hover:bg-slate-700/50 ${
                selectedChat === student.name ? 'bg-blue-600/20 border-blue-500/50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {student.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-white">{student.name}</div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        student.status === 'online' ? 'bg-green-400' :
                        student.status === 'away' ? 'bg-yellow-400' : 'bg-slate-500'
                      }`} />
                      <span className="text-xs text-slate-400 capitalize">{student.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1">{student.mood}</div>
                  <div className="text-xs text-slate-400">{student.time}</div>
                </div>
              </div>
              <div className="text-sm text-slate-300 truncate">{student.lastMessage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-700 bg-slate-800/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {selectedChat[0]}
              </div>
              <div>
                <h3 className="font-semibold text-white">{selectedChat}</h3>
                <div className="text-sm text-slate-400">Active now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chats[selectedChat as keyof typeof chats]?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.type === 'sent'
                    ? msg.flagged 
                      ? 'bg-red-900/50 border border-red-500 text-red-100'
                      : 'bg-blue-600 text-white'
                    : msg.flagged
                    ? 'bg-red-900/50 border border-red-500 text-red-100'
                    : 'bg-slate-700 text-white'
                }`}
              >
                <div className="text-sm">{msg.message}</div>
                <div className={`text-xs mt-1 ${
                  msg.type === 'sent' ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-red-500 rounded-xl p-6 max-w-md mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Negative Content Detected</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Your message contains potentially negative language. Please consider revising.
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messaging;