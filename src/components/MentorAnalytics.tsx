import React from 'react';
import { TrendingDown, AlertTriangle, Users, FileText } from 'lucide-react';

const MentorAnalytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Mentor Analytics Dashboard</h1>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-white">127</p>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">At Risk</p>
              <p className="text-2xl font-bold text-red-400">8</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>

        <div className="bg-slate-800/50 border border-yellow-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Negative Messages</p>
              <p className="text-2xl font-bold text-yellow-400">3</p>
            </div>
            <FileText className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Plagiarism Cases</p>
              <p className="text-2xl font-bold text-purple-400">2</p>
            </div>
            <TrendingDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Engagement Graph - Improved Version */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <TrendingDown className="w-5 h-5" />
          <span>📈 Student Engagement (Last 30 Days)</span>
        </h2>
        
        <div className="h-64 bg-slate-900/50 rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 500 220">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map((val, i) => (
              <text
                key={`y-${i}`}
                x="20"
                y={200 - val * 1.6}
                fill="#94A3B8"
                fontSize="10"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {val}%
              </text>
            ))}
            
            {/* X-axis labels (days) */}
            {[0, 5, 10, 15, 20, 25, 30].map((day, i) => (
              <text
                key={`x-${i}`}
                x={20 + (i * (460 / 6))}
                y="210"
                fill="#94A3B8"
                fontSize="10"
                textAnchor="middle"
              >
                Day {day}
              </text>
            ))}
            
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((val, i) => (
              <line
                key={`grid-${i}`}
                x1="40"
                y1={200 - val * 1.6}
                x2="480"
                y2={200 - val * 1.6}
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            ))}
            
            {/* Area chart */}
            <path
              d="M40,140 C90,138 140,134 190,126 C240,118 290,106 340,90 C390,74 440,54 480,30 L480,200 L40,200 Z"
              fill="url(#areaGradient)"
            />
            
            {/* Trend line */}
            <path
              d="M40,140 C90,138 140,134 190,126 C240,118 290,106 340,90 C390,74 440,54 480,30"
              stroke="#EF4444"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Data points with interactive circles */}
            {[
              [40, 140], [90, 138], [140, 134], [190, 126], [240, 118], 
              [290, 106], [340, 90], [390, 74], [440, 54], [480, 30]
            ].map(([x, y], i) => (
              <g key={`point-${i}`} className="hover:opacity-100 opacity-0 transition-opacity">
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#1E293B"
                  stroke="#EF4444"
                  strokeWidth="2"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#EF4444"
                />
                <text
                  x={x}
                  y={y - 15}
                  fill="#EF4444"
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {Math.round(100 - ((y - 30) / 110 * 100))}%
                </text>
              </g>
            ))}
            
            {/* Critical zone indicator */}
            <rect x="40" y="160" width="440" height="40" fill="#EF4444" fillOpacity="0.1" rx="2" />
            <text x="50" y="180" fill="#EF4444" fontSize="10">Critical Engagement Zone</text>
          </svg>
          
          <div className="absolute top-4 right-4 bg-red-900/50 border border-red-500 rounded-lg px-3 py-1">
            <span className="text-red-300 text-sm font-medium">📉 32% Decline</span>
          </div>
        </div>
      </div>

      {/* Red Flags and At-Risk Students */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Red Flags */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span>🚩 Recent Red Flags</span>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-300 font-medium">Negative Messages Detected</span>
                <span className="text-red-400 font-bold">3</span>
              </div>
              <p className="text-slate-400 text-sm">Charlie: "This is really frustrating..."</p>
            </div>
            
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">Plagiarism Cases</span>
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <p className="text-slate-400 text-sm">Alex: 87% match with GitHub repo</p>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-300 font-medium">Late Submissions</span>
                <span className="text-yellow-400 font-bold">5</span>
              </div>
              <p className="text-slate-400 text-sm">Multiple students behind schedule</p>
            </div>
          </div>
        </div>

        {/* At-Risk Students */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">📝 At-Risk Students</h2>
          
          <div className="space-y-4">
            <div className="border border-slate-600 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Alex Johnson</h3>
                    <p className="text-slate-400 text-sm">Computer Science</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl">😞</span>
                  <p className="text-slate-400 text-xs">Mood: Low</p>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded">3 Late Submissions</span>
                <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Plagiarism Risk</span>
              </div>
            </div>
            
            <div className="border border-slate-600 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Sam Wilson</h3>
                    <p className="text-slate-400 text-sm">Data Science</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl">😐</span>
                  <p className="text-slate-400 text-xs">Mood: Neutral</p>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded">Late Submissions</span>
                <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Low Engagement</span>
              </div>
            </div>
            
            <div className="border border-slate-600 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                    C
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Charlie Brown</h3>
                    <p className="text-slate-400 text-sm">Web Development</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl">😞</span>
                  <p className="text-slate-400 text-xs">Mood: Frustrated</p>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded">Negative Messages</span>
                <span className="bg-orange-900/50 text-orange-300 px-2 py-1 rounded">Needs Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAnalytics;