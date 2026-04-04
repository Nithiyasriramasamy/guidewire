import React from 'react';
import { Shield, ShieldCheck, ShieldOff, CheckCircle, IndianRupee, Clock, Zap, ZapOff, AlertTriangle, Umbrella, Stethoscope, Wifi } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Policy = () => {
  const { user, togglePolicy } = useApp();

  const coverageItems = [
    { icon: Umbrella, text: 'Extreme weather conditions (Heavy rain, heatwaves, floods)', color: 'text-blue-500' },
    { icon: AlertTriangle, text: 'Zone curfew, bandh & localized lockdowns preventing work', color: 'text-amber-500' },
    { icon: Stethoscope, text: 'Accidental injury resulting in temporary disability', color: 'text-red-500' },
    { icon: Wifi, text: 'Platform nationwide outage lasting > 4 hours', color: 'text-purple-500' },
  ];

  const premiumBreakdown = [
    { label: 'Base Premium', value: `₹${Math.round(user.premium * 0.6)}` },
    { label: 'Risk Surcharge', value: `₹${Math.round(user.premium * 0.25)}` },
    { label: 'Location Factor', value: `₹${Math.round(user.premium * 0.15)}` },
    { label: 'Total Weekly', value: `₹${user.premium}`, bold: true },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Insurance Policy</h1>
          <p className="text-slate-500">Manage your coverage, premium, and policy status.</p>
        </div>
        <button 
          onClick={togglePolicy}
          className={`px-5 py-2.5 rounded-xl font-medium flex items-center shadow-md transition ${
            user.policyActive 
              ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/20' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
          }`}
        >
          {user.policyActive ? (
            <><ZapOff className="w-5 h-5 mr-2" /> Deactivate Insurance</>
          ) : (
            <><Zap className="w-5 h-5 mr-2" /> Activate Insurance</>
          )}
        </button>
      </div>

      {/* Status Banner */}
      <div className={`rounded-2xl p-6 border-2 ${user.policyActive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-full ${user.policyActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {user.policyActive ? <ShieldCheck className="w-10 h-10" /> : <ShieldOff className="w-10 h-10" />}
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${user.policyActive ? 'text-green-800' : 'text-red-800'}`}>
              {user.policyActive ? 'You are Protected' : 'You are Not Protected'}
            </h2>
            <p className={`text-sm mt-1 ${user.policyActive ? 'text-green-600' : 'text-red-600'}`}>
              {user.policyActive 
                ? 'Your income is covered against weather disruptions, accidents, and more.' 
                : 'Activate your policy to protect your income from disruptions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Policy Details Card */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Gig Worker Comprehensive Plan</h2>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className={`flex items-center px-3 py-1 rounded-full text-sm border font-medium ${user.policyActive ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${user.policyActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                {user.policyActive ? 'Active Policy' : 'Inactive'}
              </span>
              <span className="text-slate-400 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" /> Renews in 3 days
              </span>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center min-w-[200px]">
            <p className="text-sm font-medium text-slate-500 mb-1">Weekly Premium</p>
            <div className="text-3xl font-bold text-slate-900 flex items-center justify-center">
              <IndianRupee className="w-6 h-6 mr-1 text-slate-400" />
              {user.premium}.00
            </div>
            <p className="text-xs text-slate-400 mt-1">Auto-deducted every Monday</p>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Coverage Percentage</p>
            <p className="text-2xl font-bold text-blue-600">{user.coveragePercent}% <span className="text-sm font-normal text-slate-500">of income</span></p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Max Payout / Week</p>
            <p className="text-2xl font-bold text-slate-900 flex items-center">
              ₹{Math.round(user.weeklyIncome * user.coveragePercent / 100).toLocaleString('en-IN')}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">Deductible</p>
            <p className="text-2xl font-bold text-green-600">₹0 (Zero)</p>
          </div>
        </div>

        {/* Premium Breakdown */}
        <div className="mt-8 pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Premium Breakdown</h3>
          <div className="bg-slate-50 rounded-xl overflow-hidden">
            {premiumBreakdown.map((item, i) => (
              <div key={i} className={`flex items-center justify-between px-5 py-3 ${item.bold ? 'border-t-2 border-slate-200 bg-blue-50' : 'border-b border-slate-100'}`}>
                <span className={`text-sm ${item.bold ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{item.label}</span>
                <span className={`${item.bold ? 'font-bold text-blue-700 text-lg' : 'font-semibold text-slate-800'}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Covered */}
        <div className="mt-8 pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">What's Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Icon className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
                  <p className="text-slate-700 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
