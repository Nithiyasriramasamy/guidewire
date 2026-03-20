import React from 'react';
import { Shield, ShieldCheck, CheckCircle, IndianRupee, Clock, Zap } from 'lucide-react';

const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Insurance Policy</h1>
          <p className="text-slate-500">Manage your coverage and premium details.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center shadow-md shadow-blue-500/20 transition">
          <Zap className="w-5 h-5 mr-2" />
          Activate Insurance
        </button>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/3 -z-10"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          <div className="flex gap-6 items-center">
            <div className="bg-green-100 p-4 rounded-full text-green-600">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Gig Worker Comprehensive Plan</h2>
              <div className="flex items-center mt-2 text-green-600 font-medium">
                <span className="flex items-center bg-green-50 px-3 py-1 rounded-full text-sm border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  Active Policy
                </span>
                <span className="text-slate-400 text-sm ml-4 flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> Renews in 3 days
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center min-w-[200px]">
            <p className="text-sm font-medium text-slate-500 mb-1">Weekly Premium</p>
            <div className="text-3xl font-bold text-slate-900 flex items-center justify-center">
              <IndianRupee className="w-6 h-6 mr-1 text-slate-400" />
              45.00
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Coverage Percentage</p>
            <p className="text-xl font-bold text-slate-900">100% Core Income</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Max Payout / Week</p>
            <p className="text-xl font-bold text-slate-900 flex items-center"><IndianRupee className="w-5 h-5 mr-1" /> 7,500</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Deductible</p>
            <p className="text-xl font-bold text-slate-900 flex items-center"><IndianRupee className="w-5 h-5 mr-1" /> 0 (Zero)</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">What's Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm">Extreme weather conditions (Heavy rain, heatwaves)</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm">Zone curfew & localized lockdowns preventing work</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm">Accidental injury resulting in temporary disability</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm">Platform nationwide outage lasting &gt; 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
