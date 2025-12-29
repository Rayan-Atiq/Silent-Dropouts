import React, { useEffect, useRef } from 'react';
import { Shield, BarChart, Bot, ArrowDown } from 'lucide-react';

const Homepage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Hero section 3D effect
      if (heroRef.current) {
        const heroElements = heroRef.current.querySelectorAll('[data-3d]');
        const heroScrollProgress = Math.min(scrollY / viewportHeight, 1);
        
        heroElements.forEach((el, index) => {
          const depth = el.getAttribute('data-depth') || '0';
          const depthValue = parseInt(depth);
          
          // 3D translate based on scroll
          const translateZ = 50 - (heroScrollProgress * 100);
          const rotateX = heroScrollProgress * 5;
          
          el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
          el.style.opacity = `${1 - heroScrollProgress * 0.3}`;
        });
      }
      
      // Features section 3D effect
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll('[data-feature-card]');
        const featuresRect = featuresRef.current.getBoundingClientRect();
        const featuresScrollProgress = 1 - Math.min(Math.max(featuresRect.top / viewportHeight, 0), 1);
        
        features.forEach((card, index) => {
          const delay = index * 0.1;
          const progress = Math.max(0, Math.min(1, featuresScrollProgress - delay));
          
          // 3D card flip-in effect
          const rotateY = (1 - progress) * 20;
          const translateZ = (1 - progress) * 100;
          const scale = 0.8 + (progress * 0.2);
          
          card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
          card.style.opacity = `${progress}`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* 3D Background Elements */}
      <div className="fixed inset-0 z-[-10]">
        {/* Floating 3D Shapes with scroll parallax */}
        <div 
          className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <div 
          className="absolute top-3/4 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>

      {/* Hero Section with 3D Perspective */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title with 3D Scroll Effect */}
          <div 
            data-3d 
            data-depth="50"
            className="relative mb-6 transform-gpu transition-transform duration-100"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stop silent dropouts
              <br />
              <span className="text-blue-400 relative inline-block">
                before they happen.
                <span className="absolute inset-0 text-blue-200/30 blur-xl" 
                      style={{ transform: 'translateZ(-20px)' }}>
                  before they happen.
                </span>
              </span>
            </h1>
          </div>
          
          {/* Subtitle with 3D Effect */}
          <div 
            data-3d 
            data-depth="30"
            className="relative mb-12 transform-gpu transition-transform duration-100"
          >
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              AI-powered engagement tracking for schools.
            </p>
          </div>
          
          {/* CTA Button with 3D Effect */}
          <div 
            data-3d 
            data-depth="20"
            className="relative inline-block transform-gpu transition-transform duration-100"
          >
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-xl" 
                 style={{ transform: 'translateZ(-20px)' }} />
            <button
              onClick={scrollToFeatures}
              className="relative group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <span className="relative">Explore Features</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          
          {/* Scroll Indicator with 3D Bounce */}
          <div 
            data-3d 
            data-depth="10"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transform-gpu transition-transform duration-100"
          >
           />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview with 3D Cards */}
      <section 
        id="features" 
        ref={featuresRef}
        className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Encrypted Messaging - 3D Card */}
            <div 
              data-feature-card
              className="relative group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 transform-gpu"
              style={{
                opacity: 0,
                transform: 'perspective(1000px) rotateY(20deg) translateZ(100px) scale(0.8)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/10 rounded-2xl blur-xl" 
                   style={{ transform: 'translateZ(-30px)' }} />
              
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full mb-6 group-hover:bg-blue-500/40 transition-all duration-300 transform-gpu group-hover:scale-110"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <Shield className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  🔒 Encrypted peer messaging
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu transition-transform duration-300">
                  Secure communication platform with AI-powered abuse detection to maintain a positive learning environment.
                </p>
              </div>
            </div>

            {/* Real-time Analytics - 3D Card */}
            <div 
              data-feature-card
              className="relative group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 transform-gpu"
              style={{
                opacity: 0,
                transform: 'perspective(1000px) rotateY(20deg) translateZ(100px) scale(0.8)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/10 rounded-2xl blur-xl" 
                   style={{ transform: 'translateZ(-30px)' }} />
              
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-full mb-6 group-hover:bg-green-500/40 transition-all duration-300 transform-gpu group-hover:scale-110"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <BarChart className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  📊 Real-time mentor analytics
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu transition-transform duration-300">
                  Comprehensive dashboard tracking student engagement, identifying at-risk students before they drop out.
                </p>
              </div>
            </div>

            {/* AI Assistant - 3D Card */}
            <div 
              data-feature-card
              className="relative group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 transform-gpu"
              style={{
                opacity: 0,
                transform: 'perspective(1000px) rotateY(20deg) translateZ(100px) scale(0.8)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 rounded-2xl blur-xl" 
                   style={{ transform: 'translateZ(-30px)' }} />
              
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-full mb-6 group-hover:bg-purple-500/40 transition-all duration-300 transform-gpu group-hover:scale-110"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <Bot className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  🤖 AI task assistant
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500" />
                </h3>
                <p className="text-slate-300 leading-relaxed transform-gpu transition-transform duration-300">
                  Intelligent assistant recommending tools, connecting students with peers, and providing personalized support.
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll to top indicator */}
          <div className="mt-20 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowDown className="w-5 h-5 rotate-180 group-hover:-translate-y-1 transition-transform" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Add to your global styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(5px);
          }
          60% {
            transform: translateY(3px);
          }
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
