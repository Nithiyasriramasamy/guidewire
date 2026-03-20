import React from 'react';
import { ShieldCheck, ArrowRight, UserCheck, CloudRain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-5 bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">GigSafe App</span>
        </div>
        <div className="flex gap-4">
          <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium px-4 py-2 transition-colors">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-blue-600/20">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
             <CloudRain className="w-4 h-4" /> Comprehensive Income Protection
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Gig Worker <br/> <span className="text-blue-600">Insurance Platform</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Protect your income during disruptions. Whether it's extreme weather, local curfews, or platform outages, your daily earnings are secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/register" className="flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-blue-600/20">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/dashboard" className="flex items-center justify-center bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-colors">
              Login to Dashboard
            </Link>
          </div>
          
          <div className="flex items-center gap-6 pt-10 text-slate-500 font-medium">
             <span className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-green-500" /> 100k+ Workers Insured</span>
             <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-500" /> Auto Payouts</span>
          </div>
        </div>
        
        {/* Right side graphic */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden flex items-center justify-center p-8">
           <div className="absolute inset-0 bg-blue-600/5 pattern-dots-md text-blue-600/10"></div>
           
           <div className="relative grid grid-cols-2 gap-4 w-full z-10">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100/50 transform translate-y-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-slate-200 rounded-md"></div>
                  <div className="h-4 w-32 bg-slate-100 rounded-md"></div>
                </div>
                <div className="mt-8">
                   <div className="text-sm font-bold text-green-600 mb-1">Protected</div>
                   <div className="text-2xl font-bold text-slate-900">₹1,200 <span className="text-sm font-medium text-slate-500">/day</span></div>
                </div>
              </div>
              
              <div className="bg-blue-600 p-6 rounded-2xl shadow-xl text-white transform -translate-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-blue-200 mb-1">Alert: Heavy Rain</div>
                <div className="text-xl font-bold mb-4">Payout Triggered</div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-white/20 rounded-md"></div>
                  <div className="h-3 w-2/3 bg-white/20 rounded-md"></div>
                </div>
              </div>
              
           </div>
           
           {/* Abstract backdrop shapes */}
           <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
           <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
