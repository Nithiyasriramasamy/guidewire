import React from 'react';
import { Shield, ArrowRight, Activity, TrendingUp, CloudRain, Zap, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const features = [
    { icon: Activity, title: 'Real-time Alerts', desc: 'Get instant weather, flood & curfew alerts for your area', color: 'green' },
    { icon: TrendingUp, title: 'Smart Premiums', desc: 'AI-driven dynamic pricing — pay less when risk is low', color: 'blue' },
    { icon: CloudRain, title: 'Auto Claims', desc: 'Claims triggered automatically when disruptions happen', color: 'purple' },
    { icon: Zap, title: 'Instant Payouts', desc: 'Get paid within hours directly to your UPI account', color: 'amber' },
  ];

  const stats = [
    { value: '50,000+', label: 'Workers Protected' },
    { value: '₹2.5Cr', label: 'Payouts Processed' },
    { value: '< 2 hrs', label: 'Avg. Claim Time' },
    { value: '99.8%', label: 'Uptime' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">GigSafe</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/login" className="text-slate-600 hover:text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">Get Started</Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Income Protection
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Secure Your <span className="text-blue-600">Gig Life,</span> One Shift at a Time.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              AI-powered income protection designed for delivery partners. Stay covered against rain, floods, strikes, and accidents — automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0">
                Protect Your Income <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/login" className="flex items-center justify-center border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-slate-300 hover:bg-slate-50 transition">
                I have an account
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl flex flex-col items-center justify-center space-y-6 p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800">You're Covered</h3>
                  <p className="text-slate-500 mt-2">Weather & Downtime Protection Active</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                  <div className="bg-slate-50 p-3 rounded-xl text-center">
                    <p className="text-2xl font-bold text-slate-900">₹45</p>
                    <p className="text-xs text-slate-500">Weekly Premium</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-xl text-center">
                    <p className="text-2xl font-bold text-green-700">70%</p>
                    <p className="text-xs text-green-600">Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-slate-900 py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900">How GigSafe Protects You</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Designed specifically for gig workers — simple, fast, and automatic.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              const colorMap = {
                green: 'bg-green-100 text-green-600',
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                amber: 'bg-amber-100 text-amber-600',
              };
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-12 h-12 ${colorMap[f.color]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Works With Your Platform</h2>
            <p className="text-slate-500 mb-10">We support all major delivery platforms in India</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Swiggy', 'Zomato', 'Amazon Flex', 'Zepto', 'Blinkit', 'Dunzo'].map((platform) => (
                <div key={platform} className="bg-white px-8 py-4 rounded-2xl border border-slate-200 text-slate-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition cursor-default shadow-sm">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-extrabold mb-4 relative z-10">Start Protecting Your Income Today</h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">Join thousands of delivery workers who never worry about losing income due to weather or disruptions.</p>
            <Link to="/register" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition relative z-10 shadow-lg">
              Get Started — It's Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="text-white font-bold">GigSafe</span>
          </div>
          <p className="text-sm">© 2026 GigSafe Insurance. Protecting gig workers across India.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
