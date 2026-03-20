import React, { useState, useEffect } from 'react';
import { IndianRupee, ShieldCheck, MapPin, AlertTriangle, HelpCircle } from 'lucide-react';

const Dashboard = () => {
  const [data, setData] = useState({
    income: 5000,
    dailyIncome: 714,
    premium: 50,
    coverage: 70,
    location: 'Bangalore',
    tier: 'Tier-1'
  });

  useEffect(() => {
    // Smart feature: Auto calculation based on income input from registration
    const storedIncome = localStorage.getItem('gigworker_income');
    const storedLocation = localStorage.getItem('gigworker_location');
    
    if (storedIncome) {
      const inc = parseInt(storedIncome);
      const estDaily = Math.round(inc / 7);
      const calcPremium = Math.round(inc * 0.01); // 1% of income
      
      let tierStr = 'Tier-1';
      let locStr = storedLocation || 'Bangalore';
      if (storedLocation && storedLocation.includes('Tier')) {
         const parts = storedLocation.split('(');
         locStr = parts[0].trim();
         if(parts[1]) tierStr = parts[1].replace(')', '').trim();
      }

      setData({
        income: inc,
        dailyIncome: estDaily,
        premium: calcPremium,
        coverage: 70, // fixed coverage %
        location: locStr,
        tier: tierStr
      });
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header and Smart Policy Badge */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Worker Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time overview of your earnings and coverage.</p>
        </div>
        <div className="flex items-center bg-green-50 px-4 py-2 rounded-xl border border-green-200">
          <ShieldCheck className="w-6 h-6 text-green-600 mr-2" />
          <div className="flex flex-col">
            <span className="font-bold text-green-800 text-sm">You are Protected</span>
            <span className="text-xs text-green-600">Policy is Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Income Details Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <IndianRupee className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Income Details</h2>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-500">Weekly Income (Average)</p>
                <p className="text-3xl font-extrabold text-slate-900 flex items-center mt-1">
                  <IndianRupee className="w-6 h-6 mr-1 text-slate-400" />{data.income}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-500">Estimated Daily Income</p>
                <p className="text-xl font-bold text-slate-700 flex items-center mt-1">
                  <IndianRupee className="w-4 h-4 mr-1 text-slate-400" />{data.dailyIncome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Details Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 -z-10"></div>
          <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">Insurance Details</h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-500 flex items-center">Weekly Premium <HelpCircle className="w-4 h-4 ml-1 text-slate-300" /></p>
                <p className="text-3xl font-extrabold text-indigo-600 flex items-center mt-1">
                  <IndianRupee className="w-6 h-6 mr-1 opacity-70" />{data.premium}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <p className="text-sm font-medium text-slate-500">Coverage</p>
                 <p className="text-lg font-bold text-slate-700 mt-1">{data.coverage}% Income</p>
               </div>
               <div>
                 <p className="text-sm font-medium text-slate-500">Policy Status</p>
                 <p className="text-sm font-bold text-green-600 mt-1 px-2 py-1 bg-green-50 rounded-md inline-block">Active</p>
               </div>
            </div>
          </div>
        </div>

        {/* Location Info Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Location Info</h2>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
            <div>
               <p className="text-sm font-medium text-slate-500 mb-1">City Name</p>
               <p className="font-bold text-slate-900">{data.location}</p>
            </div>
            <div className="text-right">
               <p className="text-sm font-medium text-slate-500 mb-1">Tier Level</p>
               <span className="font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full text-sm">{data.tier}</span>
            </div>
          </div>
        </div>

        {/* Risk Level Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Overall Risk Level</h2>
          </div>
          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 flex items-center justify-between">
            <div>
               <p className="font-bold text-yellow-800 text-lg">Medium Risk</p>
               <p className="text-yellow-700 text-sm mt-1">High probability of rain this evening.</p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center bg-yellow-400 rounded-full shadow-inner">
               <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-yellow-400 opacity-40"></span>
               <div className="h-4 w-4 bg-yellow-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
