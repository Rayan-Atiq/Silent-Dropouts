import React, { useState } from 'react';
import { MessageSquare, BarChart3, Bot, Activity, Heart, Calendar, Home, ChevronDown, Lock } from 'lucide-react';
import Homepage from './components/Homepage';
import SecureMessaging from './components/SecureMessaging';
import MentorAnalytics from './components/MentorAnalytics';
import AIChatbot from './components/AIChatbot';
import WorkActivity from './components/WorkActivity';
import MoodTracker from './components/MoodTracker';
import Timetable from './components/Timetable';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [userRole, setUserRole] = useState('student');
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [password, setPassword] = useState('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, component: Homepage, studentOnly: true },
    { id: 'messaging', label: 'Messaging', icon: MessageSquare, component: SecureMessaging, studentOnly: true },
    { id: 'analytics', label: 'Mentor Analytics', icon: BarChart3, component: MentorAnalytics, mentorOnly: true },
    { id: 'chatbot', label: 'AI Chatbot', icon: Bot, component: AIChatbot, studentOnly: true },
    { id: 'activity', label: 'Work Activity', icon: Activity, component: WorkActivity, mentorOnly: true },
    { id: 'mood', label: 'Mood Tracker', icon: Heart, component: MoodTracker, studentOnly: true },
    { id: 'timetable', label: 'Timetable', icon: Calendar, component: Timetable, studentOnly: true },
  ];

  const visibleTabs = tabs.filter(tab => 
    (userRole === 'mentor' && tab.mentorOnly) || 
    (userRole === 'student' && tab.studentOnly)
  );

  const handleRoleChange = (role: string) => {
    if (role === 'mentor') {
      setShowRoleModal(true);
    } else {
      setUserRole('student');
      if (activeTab === 'analytics' || activeTab === 'activity') {
        const firstStudentTab = tabs.find(tab => tab.studentOnly);
        setActiveTab(firstStudentTab?.id || 'home');
      }
    }
    setShowRoleDropdown(false);
  };

  const handlePasswordSubmit = () => {
    if (password === 'mentor123') {
      setUserRole('mentor');
      setShowRoleModal(false);
      setPassword('');
      const firstMentorTab = tabs.find(tab => tab.mentorOnly);
      setActiveTab(firstMentorTab?.id || 'activity');
    } else {
      alert('Incorrect password. Try "mentor123"');
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const ActiveComponent = activeTabData && 
    ((userRole === 'mentor' && activeTabData.mentorOnly) || 
     (userRole === 'student' && activeTabData.studentOnly))
    ? activeTabData.component 
    : Homepage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center font-mono font-bold text-white">
                4O<span className="transform scale-x-[-1]">4</span> {/* Mirrored first 4 */}
              </div>
              <h1 className="text-4xl font-bold text-white"></h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Role Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <span>{userRole === 'mentor' ? 'Mentor View' : 'Student View'}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showRoleDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 min-w-[140px]">
                    <button
                      onClick={() => handleRoleChange('student')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition-colors ${
                        userRole === 'student' ? 'text-blue-400' : 'text-white'
                      }`}
                    >
                      Student View
                    </button>
                    <button
                      onClick={() => handleRoleChange('mentor')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition-colors flex items-center space-x-2 ${
                        userRole === 'mentor' ? 'text-blue-400' : 'text-white'
                      }`}
                    >
                      <Lock className="w-3 h-3" />
                      <span>Mentor View</span>
                    </button>
                  </div>
                )}
              </div>

              <nav className="hidden md:flex space-x-1">
                {visibleTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="hidden lg:block">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="bg-slate-800 text-white border border-slate-600 rounded-lg px-3 py-1 text-sm"
              >
                {visibleTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-8rem)]">
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-slate-400">Built by Team</span>
            <span className="font-mono font-bold text-blue-400">40<span className="transform scale-x-[-1]">4</span> {/* Mirrored first 4 */}</span>
            <span className="text-slate-400">• Preventing silent dropouts with AI</span>
          </div>
        </div>
      </footer>

      {/* Role Change Modal - Updated Version */}
      {showRoleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Restricted Access</h2>
              <p className="text-red-400 font-semibold">Mentor Access Only</p>
              <p className="text-slate-400 text-sm mt-2">This dashboard contains sensitive student data</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="Enter mentor password..."
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowRoleModal(false);
                    setPassword('');
                  }}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Access
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              Demo: Use password "mentor123"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;