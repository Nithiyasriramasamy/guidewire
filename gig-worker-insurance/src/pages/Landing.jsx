import React from 'react';
import { Shield, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="px-6 py-4 flex items-center justify-between border-b bg-white">
        <div className="flex items-center space-x-2 text-blue-600">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold">GigSafe</span>
        </div>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Get Started</Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Gig Worker <span className="text-blue-600">Insurance Platform</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              AI-powered income protection designed exclusively for delivery partners and gig workers. Stay protected against weather disruptions, accidents, and market downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                Protect Your Income <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg"><Activity className="h-6 w-6" /></div>
                <div className="text-sm font-medium text-slate-700">Real-time alerts & tracking</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><TrendingUp className="h-6 w-6" /></div>
                <div className="text-sm font-medium text-slate-700">Dynamic daily premium</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract delivery illustration placeholder */}
            <div className="aspect-square bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-75"></div>
              
              <div className="relative z-10 w-full h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl flex items-center justify-center flex-col space-y-4 p-8">
                <Shield className="h-24 w-24 text-blue-500" />
                 <div className="text-center">
                   <h3 className="text-2xl font-bold text-slate-800">You're Covered</h3>
                   <p className="text-slate-500 mt-2">Weather & Downtime Protection Active</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
