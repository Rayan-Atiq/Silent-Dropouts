import React from 'react';
import { Shield, BarChart, Bot, ArrowDown } from 'lucide-react';

const Homepage = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 z-[-10]">
        {/* Floating 3D Shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
        <div className="absolute top-3/4 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-float-medium" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float-fast" />
        
        {/* Grid Pattern for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      </div>

      {/* Hero Section with 3D Perspective */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 transform-gpu">
        <div className="max-w-4xl mx-auto text-center perspective-1000">
          {/* 3D Floating Title */}
          <div className="relative transform-gpu translate-z-0 hover:translate-z-10 transition-transform duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform-gpu">
              Stop silent dropouts
              <br />
              <span className="text-blue-400 relative">
                before they happen.
                <span className="absolute inset-0 text-blue-200/30 blur-xl transform translate-z-[-20px]">
                  before they happen.
                </span>
              </span>
            </h1>
            
            {/* 3D Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-50 rounded-full transform translate-z-[-50px]" />
          </div>
          
          <div className="relative transform-gpu">
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto relative z-10">
              AI-powered engagement tracking for schools.
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-xl transform translate-z-[-30px]" />
          </div>
          
          {/* 3D Button with Depth */}
          <div className="relative inline-block perspective-1000">
            <div className="absolute inset-0 bg-blue-500 blur-xl transform translate-z-[-20px] opacity-50 rounded-xl" />
            <button
              onClick={scrollToFeatures}
              className="relative group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu hover:translate-z-5"
              style={{
                boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <span className="relative">Explore Features</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Preview with 3D Cards */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 transform-gpu">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {/* Encrypted Messaging - 3D Card */}
            <div className="relative group transform-gpu hover:translate-z-20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 rounded-2xl blur-xl transform translate-z-[-30px] group-hover:translate-z-[-20px] transition-transform duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 transform-gpu group-hover:rotate-x-2 group-hover:rotate-y-2 overflow-hidden">
                {/* 3D Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full mb-6 group-hover:bg-blue-500/40 transition-all duration-300 transform-gpu group-hover:scale-110">
                  <Shield className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  🔒 Encrypted peer messaging
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu group-hover:translate-z-5 transition-transform duration-300">
                  Secure communication platform with AI-powered abuse detection to maintain a positive learning environment.
                </p>
              </div>
            </div>

            {/* Real-time Analytics - 3D Card */}
            <div className="relative group transform-gpu hover:translate-z-20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/10 rounded-2xl blur-xl transform translate-z-[-30px] group-hover:translate-z-[-20px] transition-transform duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group-hover:scale-105 transform-gpu group-hover:rotate-x-2 group-hover:-rotate-y-2 overflow-hidden">
                {/* 3D Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/50 to-transparent" />
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-full mb-6 group-hover:bg-green-500/40 transition-all duration-300 transform-gpu group-hover:scale-110">
                  <BarChart className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  📊 Real-time mentor analytics
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu group-hover:translate-z-5 transition-transform duration-300">
                  Comprehensive dashboard tracking student engagement, identifying at-risk students before they drop out.
                </p>
              </div>
            </div>

            {/* AI Assistant - 3D Card */}
            <div className="relative group transform-gpu hover:translate-z-20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 rounded-2xl blur-xl transform translate-z-[-30px] group-hover:translate-z-[-20px] transition-transform duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 transform-gpu group-hover:rotate-x-2 group-hover:rotate-y-2 overflow-hidden">
                {/* 3D Edge Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-full mb-6 group-hover:bg-purple-500/40 transition-all duration-300 transform-gpu group-hover:scale-110">
                  <Bot className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  🤖 AI task assistant
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu group-hover:translate-z-5 transition-transform duration-300">
                  Intelligent assistant recommending tools, connecting students with peers, and providing personalized support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add to your global styles or tailwind.config.js for 3D animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-20px) rotate(240deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(-15px) rotate(120deg); }
          66% { transform: translateY(20px) translateX(25px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(20px) rotate(120deg); }
          66% { transform: translateY(25px) translateX(-10px) rotate(240deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .perspective-500 {
          perspective: 500px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        .translate-z-0 {
          transform: translateZ(0);
        }
        
        .translate-z-5 {
          transform: translateZ(5px);
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
        
        .translate-z-20 {
          transform: translateZ(20px);
        }
        
        .translate-z--20 {
          transform: translateZ(-20px);
        }
        
        .translate-z--30 {
          transform: translateZ(-30px);
        }
        
        .translate-z--50 {
          transform: translateZ(-50px);
        }
        
        .rotate-x-2 {
          transform: rotateX(2deg);
        }
        
        .rotate-y-2 {
          transform: rotateY(2deg);
        }
      `}</style>
    </div>
  );
};

export default Homepage;
