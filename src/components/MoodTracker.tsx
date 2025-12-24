import React, { useState } from 'react';
import { Heart, Send, TrendingUp, Calendar } from 'lucide-react';

const MoodTracker = () => {
  const [mood, setMood] = useState(3);
  const [peerInteraction, setPeerInteraction] = useState('');
  const [needsHelp, setNeedsHelp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const moods = [
    { value: 1, emoji: '😞', label: 'Struggling', color: 'text-red-400' },
    { value: 2, emoji: '😕', label: 'Difficult', color: 'text-orange-400' },
    { value: 3, emoji: '😐', label: 'Okay', color: 'text-yellow-400' },
    { value: 4, emoji: '🙂', label: 'Good', color: 'text-green-400' },
    { value: 5, emoji: '😊', label: 'Great!', color: 'text-blue-400' },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    }, 1500);
  };

  const moodHistory = [
    { date: '2024-01-20', mood: 4, peer: 'good', help: 'no' },
    { date: '2024-01-19', mood: 3, peer: 'neutral', help: 'no' },
    { date: '2024-01-18', mood: 2, peer: 'bad', help: 'yes' },
    { date: '2024-01-17', mood: 5, peer: 'good', help: 'no' },
    { date: '2024-01-16', mood: 3, peer: 'good', help: 'no' },
    { date: '2024-01-15', mood: 1, peer: 'bad', help: 'yes' },
    { date: '2024-01-14', mood: 4, peer: 'good', help: 'no' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Daily Mood Tracker</h1>
        <p className="text-slate-400">Help us understand how you're feeling and provide better support</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mood Input */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Heart className="w-6 h-6 text-pink-400" />
            <span>How was your day?</span>
          </h2>

          {/* Mood Slider */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4">{moods[mood - 1].emoji}</div>
              <div className={`text-xl font-semibold ${moods[mood - 1].color}`}>
                {moods[mood - 1].label}
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="5"
                value={mood}
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #f97316 25%, #eab308 50%, #22c55e 75%, #3b82f6 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-slate-400">
                {moods.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setMood(m.value)}
                    className={`p-2 rounded-lg transition-all ${
                      mood === m.value ? 'bg-slate-600 scale-110' : 'hover:bg-slate-700'
                    }`}
                  >
                    <div className="text-2xl">{m.emoji}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Peer Interactions */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-white">Peer interactions today:</h3>
            <div className="space-y-2">
              {[
                { value: 'good', label: '✅ Good - Positive interactions', color: 'border-green-500/50 hover:bg-green-900/20' },
                { value: 'bad', label: '❌ Bad - Negative or difficult', color: 'border-red-500/50 hover:bg-red-900/20' },
                { value: 'neutral', label: '~ Neutral - Normal interactions', color: 'border-yellow-500/50 hover:bg-yellow-900/20' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    peerInteraction === option.value 
                      ? 'border-blue-500 bg-blue-900/20' 
                      : `border-slate-600 ${option.color}`
                  }`}
                >
                  <input
                    type="radio"
                    name="peer"
                    value={option.value}
                    checked={peerInteraction === option.value}
                    onChange={(e) => setPeerInteraction(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-white">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Need Help */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-white">Do you need help with anything?</h3>
            <div className="space-y-2">
              {[
                { value: 'yes', label: '🆘 Yes - I could use some support', color: 'border-red-500/50 hover:bg-red-900/20' },
                { value: 'no', label: '👍 No - I\'m doing fine', color: 'border-green-500/50 hover:bg-green-900/20' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    needsHelp === option.value 
                      ? 'border-blue-500 bg-blue-900/20' 
                      : `border-slate-600 ${option.color}`
                  }`}
                >
                  <input
                    type="radio"
                    name="help"
                    value={option.value}
                    checked={needsHelp === option.value}
                    onChange={(e) => setNeedsHelp(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-white">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !peerInteraction || !needsHelp}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Today's Check-in</span>
              </>
            )}
          </button>
        </div>

        {/* Mood History & Analytics */}
        <div className="space-y-6">
          {/* Weekly Overview */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>This Week's Overview</span>
            </h2>

            <div className="grid grid-cols-7 gap-2">
              {moodHistory.slice(0, 7).map((day, index) => {
                const dayMood = moods[day.mood - 1];
                return (
                  <div key={index} className="text-center">
                    <div className="text-xs text-slate-400 mb-1">
                      {new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}
                    </div>
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                      <span className="text-2xl">{dayMood.emoji}</span>
                    </div>
                    <div className={`text-xs ${dayMood.color}`}>
                      {dayMood.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">4.2</div>
                <div className="text-xs text-slate-400">Avg Mood</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-xs text-slate-400">Good Days</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">2</div>
                <div className="text-xs text-slate-400">Help Requests</div>
              </div>
            </div>
          </div>

          {/* Mood Calendar */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Mood History</span>
            </h2>

            <div className="space-y-3">
              {moodHistory.map((day, index) => {
                const dayMood = moods[day.mood - 1];
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{dayMood.emoji}</span>
                      <div>
                        <div className="text-white font-medium">
                          {new Date(day.date).toLocaleDateString('en', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className={`text-sm ${dayMood.color}`}>
                          {dayMood.label}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        day.peer === 'good' ? 'bg-green-900/50 text-green-300' :
                        day.peer === 'bad' ? 'bg-red-900/50 text-red-300' :
                        'bg-yellow-900/50 text-yellow-300'
                      }`}>
                        Peers: {day.peer}
                      </span>
                      
                      {day.help === 'yes' && (
                        <span className="text-xs px-2 py-1 rounded bg-orange-900/50 text-orange-300">
                          Needed help
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-green-500 rounded-2xl p-8 max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-4">Thank you!</h3>
            <p className="text-slate-300 mb-4">
              Your check-in has been recorded. Your mentor will be notified if you need support.
            </p>
            <div className="text-sm text-slate-400">
              Remember: We're here to help you succeed! 💙
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;