import React, { useState } from 'react';

export default function PolicyHolders() {
  const [regionFilter, setRegionFilter] = useState('Chennai');
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);

  return (
    <div className="px-8 py-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-[3.5rem] leading-none font-black tracking-tight text-on-surface mb-2">Policy Holders</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Manage parametric risk profiles and active coverage for the mobile workforce ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-secondary text-on-secondary rounded-md font-bold text-sm flex items-center gap-2 active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Bulk Onboarding
          </button>
          <button className="px-6 py-2.5 bg-primary text-on-primary rounded-md font-bold text-sm active:scale-95 transition-transform shadow-sm">
            Export Records
          </button>
        </div>
      </header>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">Total Insured Workers</span>
            <h3 className="text-5xl font-black mt-2 tracking-tighter">142,892</h3>
          </div>
          <div className="mt-6 flex items-center gap-2 text-secondary font-bold text-xs">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+12.4% vs last month</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">Average Premium</span>
            <h3 className="text-5xl font-black mt-2 tracking-tighter">₹842.00</h3>
          </div>
          <div className="mt-6 flex items-center gap-2 text-on-surface-variant font-bold text-xs">
            <span className="material-symbols-outlined text-sm">equalizer</span>
            <span>Stable daily volatility</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border-l-4 border-secondary">
          <div>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">Customer Satisfaction</span>
            <h3 className="text-5xl font-black mt-2 tracking-tighter">98.4%</h3>
          </div>
          <div className="mt-6 flex items-center gap-2 text-secondary font-bold text-xs">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>Tier 1 Trust Score</span>
          </div>
        </div>
      </div>

      {/* Filters & Data Surface */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)] overflow-hidden">
        <div className="p-6 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            
            <div className="relative">
              <div 
                className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => setShowRegionDropdown(!showRegionDropdown)}
              >
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-xs font-bold">Region: {regionFilter}</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              {showRegionDropdown && (
                <div className="absolute top-10 w-48 bg-white border border-slate-100 shadow-xl rounded-lg py-2 z-20">
                  {['Chennai', 'Bangalore', 'Mumbai'].map(loc => (
                    <div 
                      key={loc}
                      className="px-4 py-2 hover:bg-slate-50 text-sm font-medium cursor-pointer"
                      onClick={() => { setRegionFilter(loc); setShowRegionDropdown(false); }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span className="text-xs font-bold">Status: Active Only</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-[10px] uppercase tracking-widest font-black">
            Displaying 2,401 records
          </div>
        </div>

        {/* Policy Holders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Name</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Worker ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Policy Type</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Premium Paid</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Total Payouts</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Account Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">AS</div>
                    <div>
                      <p className="font-bold text-sm">Arjun Sharma</p>
                      <p className="text-[10px] text-on-surface-variant">Chennai South</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <code className="text-xs font-mono bg-surface-container px-2 py-1 rounded">WKR-90234</code>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary-container text-on-primary-fixed">Rainfall Parametric</span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-sm">₹1,240.00</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex flex-col items-end">
                    <p className="font-bold text-sm">₹4,500.00</p>
                    <p className="text-[9px] text-secondary font-bold uppercase tracking-tighter">3 Claims</p>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1.5 text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-[10px] font-black uppercase">Active</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
