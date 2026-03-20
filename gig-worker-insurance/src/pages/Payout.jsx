import React from 'react';
import { IndianRupee, ArrowDownToLine, ArrowRightLeft, ShieldCheck, Download } from 'lucide-react';

const Payout = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payout Details</h1>
          <p className="text-slate-500">View your protected income and recent disbursements.</p>
        </div>
        <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium flex items-center transition">
          <Download className="w-4 h-4 mr-2" />
          Download Statement
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header Block */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
          <h2 className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-2">Total Amount Protected (This Week)</h2>
          <div className="text-5xl font-extrabold flex items-center justify-center">
            <IndianRupee className="w-10 h-10 mr-1" />
            7,500
          </div>
        </div>

        {/* Content Block */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <div className="text-slate-500 text-sm mb-1">Expected Income</div>
              <div className="text-2xl font-bold text-slate-800 flex items-center"><IndianRupee className="w-5 h-5 mr-1" /> 7,500</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <div className="text-slate-500 text-sm mb-1">Loss Detected (Weather)</div>
              <div className="text-2xl font-bold text-red-500 flex items-center"><IndianRupee className="w-5 h-5 mr-1" /> 1,200</div>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-green-700 text-sm mb-1">Payout Amount</div>
              <div className="text-2xl font-bold text-green-700 flex items-center"><IndianRupee className="w-5 h-5 mr-1" /> 1,200</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-900">Successfully Disbursed</h3>
                <p className="text-green-700 text-sm flex items-center mt-1">
                 Paid via UPI to <span className="font-semibold ml-1"> rsharma@okicici</span>
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-center sm:items-end w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-green-200">
              <span className="text-sm text-green-800 font-medium">Transaction ID</span>
              <span className="text-green-900 font-mono text-sm">TXN-UPI-9842100</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Payout History</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><ArrowDownToLine className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-800">Weather Disruption Payout</div>
                    <div className="text-xs text-slate-500">Oct 12, 2024 • Sent to standard bank account</div>
                  </div>
                </div>
                <div className="font-bold text-slate-900 flex items-center"><IndianRupee className="w-4 h-4 mr-0.5"/> 1,200</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><ArrowDownToLine className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-slate-800">Platform Outage Protection</div>
                    <div className="text-xs text-slate-500">Nov 05, 2024 • Sent to standard bank account</div>
                  </div>
                </div>
                <div className="font-bold text-slate-900 flex items-center"><IndianRupee className="w-4 h-4 mr-0.5"/> 850</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
