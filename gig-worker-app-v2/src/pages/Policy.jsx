import React, { useState, useEffect } from 'react';
import { ShieldCheck, IndianRupee, ShieldAlert, XCircle, Zap } from 'lucide-react';

const Policy = () => {
  const [isActive, setIsActive] = useState(true);
  const [data, setData] = useState({
    premium: 50,
  });

  useEffect(() => {
    const storedIncome = localStorage.getItem('gigworker_income');
    if (storedIncome) {
      setData({ premium: Math.round(parseInt(storedIncome) * 0.01) });
    }
  }, []);

  const togglePolicy = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Manage Insurance Policy</h1>
        <p className="text-slate-500 mt-1">Review coverage details and manage active policies.</p>
      </div>

      {isActive ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 text-white p-3 rounded-full">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
               <h2 className="text-xl font-bold text-green-900">You are Protected</h2>
               <p className="text-green-700 font-medium">Income protection is currently active.</p>
            </div>
          </div>
          <span className="px-4 py-1.5 bg-green-200 text-green-800 font-bold rounded-full text-sm">Active</span>
        </div>
      ) : (
        <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
               <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
               <h2 className="text-xl font-bold text-red-900">At Risk</h2>
               <p className="text-red-700 font-medium">Your income is currently totally unprotected.</p>
            </div>
          </div>
          <span className="px-4 py-1.5 bg-red-200 text-red-800 font-bold rounded-full text-sm">Inactive</span>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Policy Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-500">Weekly Premium</p>
                <div className="text-3xl font-bold text-slate-900 flex items-center mt-1">
                  <IndianRupee className="w-6 h-6 mr-1" /> {data.premium}
                </div>
                <p className="text-xs text-slate-500 mt-1">Calculated automatically as 1% of your average weekly income.</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-500">Coverage Level</p>
                <div className="text-2xl font-bold text-slate-900 mt-1">
                  70% Income Protection
                </div>
                <p className="text-xs text-slate-500 mt-1">You will receive 70% of your average daily income for every disrupted day.</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-center gap-4">
              {isActive ? (
                <>
                  <p className="text-slate-600 font-medium text-center">Your policy will automatically renew at the end of the week.</p>
                  <button 
                    onClick={togglePolicy}
                    className="w-full py-3 bg-white border border-red-300 text-red-600 rounded-lg font-bold hover:bg-red-50 transition flex items-center justify-center"
                  >
                    <XCircle className="w-5 h-5 mr-2" /> Cancel Policy
                  </button>
                </>
              ) : (
                <>
                  <p className="text-slate-600 font-medium text-center">Activate now to ensure you don't lose money on rainy days.</p>
                  <button 
                    onClick={togglePolicy}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center shadow-md shadow-blue-500/20"
                  >
                    <Zap className="w-5 h-5 mr-2" /> Activate Insurance
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
