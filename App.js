import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Cpu, Zap, Shield, Users, TrendingUp, MessageCircle, ChevronRight, Moon, Sun, Phone, Mail, CheckCircle, AlertCircle, Clock, Target, DollarSign, Sparkles } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const painPoints = [
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Missed Leads',
      problem: 'Losing potential clients because you can\'t respond fast enough',
      solution: 'REVA responds to inquiries instantly, 24/7, capturing every lead'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Wasted',
      problem: 'Spending hours on repetitive questions and unqualified leads',
      solution: 'REVA qualifies leads automatically and books appointments for you'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Inconsistent Follow-ups',
      problem: 'Forgetting to follow up with prospects and losing deals',
      solution: 'REVA follows up automatically via chat, email, and text'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'CRM Chaos',
      problem: 'Manually updating client info and missing important details',
      solution: 'REVA keeps your CRM updated automatically with every interaction'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: '24/7 Lead Capture',
      description: 'Never miss a lead again. REVA responds instantly to inquiries anytime, anywhere'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Smart Qualification',
      description: 'Automatically qualify leads based on your criteria, saving you hours daily'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Multi-Channel Follow-up',
      description: 'Follow up via chat, email, and SMS automatically - never let a prospect go cold'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'CRM Integration',
      description: 'Seamlessly sync all interactions with your existing CRM system'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Property Details On-Demand',
      description: 'Send property information, photos, and virtual tours automatically'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'FAQ Handling',
      description: 'Answer common questions instantly, freeing you to focus on closing deals'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual agents',
      features: [
        'Up to 100 leads/month',
        'Basic lead qualification',
        'Email follow-ups',
        'CRM integration',
        'FAQ bot',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'For growing agents & small teams',
      features: [
        'Up to 500 leads/month',
        'Advanced lead qualification',
        'Multi-channel follow-ups (Email + SMS)',
        'Full CRM integration',
        'Property detail automation',
        'Appointment booking',
        'Priority support',
        'Custom workflows'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For brokerages & large teams',
      features: [
        'Unlimited leads',
        'AI-powered insights & analytics',
        'White-label solution',
        'Multi-agent management',
        'Advanced automation',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      highlighted: false
    }
  ];

  const stats = [
    { number: '24/7', label: 'Lead Response' },
    { number: '10x', label: 'Faster Follow-up' },
    { number: '85%', label: 'Time Saved' },
    { number: '3x', label: 'More Conversions' }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/10 backdrop-blur-md border-b border-white/20'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 flex-shrink-0">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Outer circle */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke={scrolled ? "#6366f1" : "#ffffff"} strokeWidth="4"/>
                    
                    {/* Chat bubble with circuit lines */}
                    <path d="M 45 70 Q 45 50, 65 50 L 110 50 Q 130 50, 130 70 L 130 95 Q 130 115, 110 115 L 75 115 L 55 130 L 60 115 Q 45 115, 45 95 Z" fill={scrolled ? "#6366f1" : "#ffffff"}/>
                    
                    {/* Circuit lines on chat bubble */}
                    <line x1="50" y1="65" x2="70" y2="65" stroke={scrolled ? "#a5b4fc" : "#e0e7ff"} strokeWidth="2"/>
                    <line x1="50" y1="75" x2="80" y2="75" stroke={scrolled ? "#a5b4fc" : "#e0e7ff"} strokeWidth="2"/>
                    <line x1="50" y1="85" x2="75" y2="85" stroke={scrolled ? "#a5b4fc" : "#e0e7ff"} strokeWidth="2"/>
                    <circle cx="72" cy="65" r="2.5" fill={scrolled ? "#a5b4fc" : "#e0e7ff"}/>
                    <circle cx="82" cy="75" r="2.5" fill={scrolled ? "#a5b4fc" : "#e0e7ff"}/>
                    <circle cx="77" cy="85" r="2.5" fill={scrolled ? "#a5b4fc" : "#e0e7ff"}/>
                    
                    {/* House outline (golden) */}
                    <path d="M 120 80 L 155 100 L 155 140 L 120 140 L 85 140 L 85 100 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5"/>
                    <path d="M 80 100 L 120 70 L 160 100" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    {/* House window */}
                    <rect x="105" y="110" width="12" height="12" fill={scrolled ? "#6366f1" : "#ffffff"} stroke="#f59e0b" strokeWidth="1.5"/>
                    <line x1="111" y1="110" x2="111" y2="122" stroke="#f59e0b" strokeWidth="1.5"/>
                    <line x1="105" y1="116" x2="117" y2="116" stroke="#f59e0b" strokeWidth="1.5"/>
                    
                    {/* House door */}
                    <rect x="125" y="120" width="10" height="20" fill={scrolled ? "#6366f1" : "#ffffff"} stroke="#f59e0b" strokeWidth="1.5"/>
                    
                    {/* Star accent */}
                    <path d="M 155 75 L 157 80 L 162 80 L 158 83 L 160 88 L 155 85 L 150 88 L 152 83 L 148 80 L 153 80 Z" fill="#f59e0b"/>
                  </svg>
                </div>
                <div>
                  <span className={`text-2xl font-bold transition-all duration-300 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' 
                      : 'text-white drop-shadow-lg'
                  }`}>
                    REVA.ai
                  </span>
                  <p className={`text-xs transition-colors duration-300 ${
                    scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white/90 drop-shadow'
                  }`}>Real Estate Virtual Assistant</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className={`transition font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600' 
                    : 'text-white hover:text-indigo-200 drop-shadow'
                }`}>Features</a>
                <a href="#solutions" className={`transition font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600' 
                    : 'text-white hover:text-indigo-200 drop-shadow'
                }`}>Solutions</a>
                <a href="#pricing" className={`transition font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600' 
                    : 'text-white hover:text-indigo-200 drop-shadow'
                }`}>Pricing</a>
                <a href="#contact" className={`transition font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600' 
                    : 'text-white hover:text-indigo-200 drop-shadow'
                }`}>Contact</a>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-lg transition ${
                    scrolled 
                      ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a 
                  href="https://wa.me/923132189052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                      : 'bg-white text-indigo-600 shadow-lg'
                  }`}
                >
                  Get Started
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition ${
                  scrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg">
              <div className="px-4 py-4 space-y-3">
                <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition font-medium">Features</a>
                <a href="#solutions" className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition font-medium">Solutions</a>
                <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition font-medium">Pricing</a>
                <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition font-medium">Contact</a>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{isDark ? 'Light' : 'Dark'} Mode</span>
                </button>
                <a 
                  href="https://wa.me/923132189052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-center font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <span className="text-sm font-semibold">🚀 AI-Powered Real Estate Automation</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Revolutionizing Real Estate
                  <span className="block mt-2 bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                    with AI & Autonomous Agents
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-indigo-100 font-semibold">
                  Your AI Agent That Never Sleeps, Never Misses, Always Closes
                </p>
                <p className="text-lg mb-8 text-indigo-100/90">
                  Empowering real estate professionals with intelligent automation, predictive insights, and cutting-edge AI technology. Stop losing leads and start closing more deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/923132189052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#pricing"
                    className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                    alt="Tech Meets Real Estate - AI Innovation" 
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/50 backdrop-blur-sm rounded-xl">
                    <div className="text-center">
                      <Cpu className="w-20 h-20 text-amber-300 mx-auto mb-4 animate-pulse drop-shadow-lg" />
                      <p className="text-white text-xl font-bold drop-shadow">Tech Meets Real Estate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section id="solutions" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                REAL PROBLEMS. REAL SOLUTIONS.
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                We Understand Your Challenges
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Real estate agents face critical challenges every day. REVA provides intelligent solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 dark:text-white">{point.title}</h3>
                      <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-red-600 dark:text-red-400 font-semibold mb-2 flex items-center">
                          <span className="mr-2">❌</span> The Problem:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">{point.problem}</p>
                      </div>
                      <div>
                        <p className="text-green-600 dark:text-green-400 font-semibold mb-2 flex items-center">
                          <span className="mr-2">✅</span> REVA's Solution:
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{point.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                POWERFUL AI FEATURES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Capture, qualify, and convert more leads with cutting-edge AI automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SIMPLE, TRANSPARENT PRICING
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                Choose Your Perfect Plan
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Flexible pricing that scales with your business
              </p>
              
              {/* Setup Fee Promotion Banner */}
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl shadow-xl mb-8">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Sparkles className="w-6 h-6" />
                  <p className="text-xl font-bold">🎉 LIMITED TIME OFFER 🎉</p>
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-lg">
                  <span className="line-through opacity-75">$149 Setup Fee</span> → <span className="font-bold text-2xl">FREE</span> for first 50 clients!
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-8 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl transform scale-105 border-4 border-amber-400' 
                      : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700'
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  {plan.highlighted && (
                    <div className="mb-4">
                      <span className="bg-amber-400 text-indigo-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        ⭐ MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlighted ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className={`text-xl ${plan.highlighted ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-amber-300' : 'text-green-500'
                        }`} />
                        <span className={plan.highlighted ? 'text-indigo-50' : 'text-gray-700 dark:text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/923132189052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 rounded-full text-center font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-white text-indigo-600 hover:bg-amber-50 shadow-lg'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    Get Started Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              🌎 TRUSTED WORLDWIDE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join agents in the US, Canada, UK, and Australia who are already closing more deals with REVA.ai
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="https://wa.me/923132189052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span className="text-lg font-semibold">(+92) 313-2189052</span>
              </a>
              <a 
                href="mailto:reva.aiagents@gmail.com"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 shadow-lg"
              >
                <Mail className="w-6 h-6" />
                <span className="text-lg font-semibold">reva.aiagents@gmail.com</span>
              </a>
            </div>
            <a 
              href="https://wa.me/923132189052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule a Free Demo
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-12 h-12">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Outer circle */}
                      <circle cx="100" cy="100" r="90" fill="none" stroke="#6366f1" strokeWidth="4"/>
                      
                      {/* Chat bubble with circuit lines */}
                      <path d="M 45 70 Q 45 50, 65 50 L 110 50 Q 130 50, 130 70 L 130 95 Q 130 115, 110 115 L 75 115 L 55 130 L 60 115 Q 45 115, 45 95 Z" fill="#6366f1"/>
                      
                      {/* Circuit lines on chat bubble */}
                      <line x1="50" y1="65" x2="70" y2="65" stroke="#a5b4fc" strokeWidth="2"/>
                      <line x1="50" y1="75" x2="80" y2="75" stroke="#a5b4fc" strokeWidth="2"/>
                      <line x1="50" y1="85" x2="75" y2="85" stroke="#a5b4fc" strokeWidth="2"/>
                      <circle cx="72" cy="65" r="2.5" fill="#a5b4fc"/>
                      <circle cx="82" cy="75" r="2.5" fill="#a5b4fc"/>
                      <circle cx="77" cy="85" r="2.5" fill="#a5b4fc"/>
                      
                      {/* House outline (golden) */}
                      <path d="M 120 80 L 155 100 L 155 140 L 120 140 L 85 140 L 85 100 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5"/>
                      <path d="M 80 100 L 120 70 L 160 100" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                      
                      {/* House window */}
                      <rect x="105" y="110" width="12" height="12" fill="#6366f1" stroke="#f59e0b" strokeWidth="1.5"/>
                      <line x1="111" y1="110" x2="111" y2="122" stroke="#f59e0b" strokeWidth="1.5"/>
                      <line x1="105" y1="116" x2="117" y2="116" stroke="#f59e0b" strokeWidth="1.5"/>
                      
                      {/* House door */}
                      <rect x="125" y="120" width="10" height="20" fill="#6366f1" stroke="#f59e0b" strokeWidth="1.5"/>
                      
                      {/* Star accent */}
                      <path d="M 155 75 L 157 80 L 162 80 L 158 83 L 160 88 L 155 85 L 150 88 L 152 83 L 148 80 L 153 80 Z" fill="#f59e0b"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">REVA.ai</span>
                </div>
                <p className="text-gray-400 mb-2 font-medium">Real Estate Virtual Assistant</p>
                <p className="text-gray-400 italic mb-2 text-sm">Your AI Agent That Never Sleeps, Never Misses, Always Closes</p>
                <p className="text-gray-500 text-sm">AI-powered assistant for real estate professionals</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-indigo-400">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition">Features</a></li>
                  <li><a href="#solutions" className="hover:text-white transition">Solutions</a></li>
                  <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-indigo-400">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-indigo-400">Contact</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">(+92) 313-2189052</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">reva.aiagents@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p className="text-sm">© 2024 REVA.ai. All rights reserved. Serving agents in US, Canada, UK, and Australia.</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923132189052"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform z-50 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default App;