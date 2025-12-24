import React from 'react';
import { Shield, BarChart, Bot, ArrowDown } from 'lucide-react';

const Homepage = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop silent dropouts
            <br />
            <span className="text-blue-400">before they happen.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            AI-powered engagement tracking for schools.
          </p>
          
          <button
            onClick={scrollToFeatures}
            className="group inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Explore Features</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Encrypted Messaging */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                🔒 Encrypted peer messaging
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Secure communication platform with AI-powered abuse detection to maintain a positive learning environment.
              </p>
            </div>

            {/* Real-time Analytics */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 group-hover:bg-green-500/30 transition-colors">
                <BarChart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                📊 Real-time mentor analytics
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive dashboard tracking student engagement, identifying at-risk students before they drop out.
              </p>
            </div>

            {/* AI Assistant */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Bot className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                🤖 AI task assistant
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Intelligent assistant recommending tools, connecting students with peers, and providing personalized support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;