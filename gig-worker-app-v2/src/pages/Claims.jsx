import React, { useState, useEffect } from 'react';
import { IndianRupee, CloudRain, Clock, CheckCircle } from 'lucide-react';

const Claims = () => {
  const [smartData, setSmartData] = useState({
    income: 5000,
    loss: 1000,
    payout: 700 
  });

  useEffect(() => {
    // Smart feature: Auto calculation
    const inc = parseInt(localStorage.getItem('gigworker_income')) || 5000;
    const estDaily = Math.round(inc / 7);
    const simulatedLoss = estDaily * 2; // Assuming 2 days of loss
    const calcPayout = Math.round(simulatedLoss * 0.7); // 70% coverage

    setSmartData({
      income: inc,
      loss: simulatedLoss,
      payout: calcPayout
    });
  }, []);

  const claimsHistory = [
    {
      id: 1,
      event: 'Heavy Rain / Flood',
      date: 'Aug 14, 2024',
      status: 'Paid',
      amount: smartData.payout,
      icon: CloudRain
    },
    {
      id: 2,
      event: 'City Curfew',
      date: 'Sep 02, 2024',
      status: 'Processing',
      amount: Math.round((smartData.income/7)*0.7), // 1 day loss
      icon: Clock
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Claims & Payouts</h1>
        <p className="text-slate-500 mt-1">Track your recent disruptions and insurance payouts.</p>
      </div>

      {/* Latest Smart Overview */}
      <h2 className="text-lg font-bold text-slate-800">Latest Disruption Summary</h2>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-sm font-medium text-slate-500 mb-1">Weekly Income Avg</p>
              <p className="text-2xl font-bold text-slate-900 flex items-center">
                <IndianRupee className="w-5 h-5 mr-1 text-slate-400" />{smartData.income}
              </p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <p className="text-sm font-medium text-red-700 mb-1">Loss Detected (2 Days)</p>
              <p className="text-2xl font-bold text-red-700 flex items-center">
                <IndianRupee className="w-5 h-5 mr-1" />{smartData.loss}
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-5 border border-green-200 shadow-inner">
              <p className="text-sm font-bold text-green-800 mb-1">Payout Amount (70%)</p>
              <p className="text-3xl font-extrabold text-green-700 flex items-center">
                <IndianRupee className="w-6 h-6 mr-1" />{smartData.payout}
              </p>
              <p className="text-xs text-green-600 mt-1 font-medium">Payment Method: UPI</p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between bg-green-100 border border-green-200 px-4 py-3 rounded-xl">
             <div className="flex items-center space-x-2 text-green-800 font-bold">
               <CheckCircle className="w-5 h-5" />
               <span>Payment Successful</span>
             </div>
             <span className="text-green-700 text-sm mt-1 sm:mt-0 font-medium">Credited to registered UPI ID</span>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold text-slate-800 pt-4">Claim History</h2>
      <div className="space-y-4">
        {claimsHistory.map(claim => {
          const Icon = claim.icon;
          return (
            <div key={claim.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
               <div className="flex items-center gap-4">
                 <div className="bg-blue-50 text-blue-600 p-3 rounded-xl border border-blue-100">
                    <Icon className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900">{claim.event}</h3>
                    <p className="text-sm text-slate-500 border-l-2 border-slate-200 pl-2 mt-1 py-0.5">Date of disruption: {claim.date}</p>
                 </div>
               </div>
               
               <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t border-slate-100 sm:border-0 pt-4 sm:pt-0">
                  <span className="font-extrabold text-slate-900 text-xl flex items-center">
                    <IndianRupee className="w-5 h-5 mr-0.5 text-slate-400" />{claim.amount}
                  </span>
                  {claim.status === 'Paid' ? (
                     <span className="text-sm font-bold text-green-600">Payment Successful</span>
                  ) : (
                     <span className="text-sm font-bold text-yellow-600">Processing</span>
                  )}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Claims;
