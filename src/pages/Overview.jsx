import React from 'react';

export default function Overview() {
  return (
    <section className="p-8 flex-1 overflow-y-auto no-scrollbar space-y-8">
      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPI 1 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)] relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Total Active Policies (This Week)</p>
          <div className="flex items-end justify-between relative z-10">
            <h2 className="text-4xl font-black text-on-surface tracking-tighter">12,482</h2>
            <div className="flex items-center text-secondary text-xs font-bold space-x-1 mb-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+8.4%</span>
            </div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)] relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Total Premium Collected</p>
          <div className="flex items-end justify-between relative z-10">
            <h2 className="text-4xl font-black text-on-surface tracking-tighter">₹4.2Cr</h2>
            <div className="flex items-center text-secondary text-xs font-bold space-x-1 mb-1">
              <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
              <span>INR</span>
            </div>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)] relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Automated Payouts (Last 24hrs)</p>
          <div className="flex items-end justify-between relative z-10">
            <h2 className="text-4xl font-black text-on-surface tracking-tighter">154</h2>
            <div className="px-3 py-1 bg-secondary-container rounded text-on-secondary-container text-[10px] font-bold uppercase">Processing</div>
          </div>
        </div>
      </div>

      {/* Main Section: Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Content (60%) */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
              Live Disruption Map
              <span className="inline-block w-2 h-2 bg-error rounded-full animate-ping"></span>
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 text-xs font-bold border border-outline-variant/20 rounded-lg hover:bg-white transition-colors">Satellite</button>
              <button className="px-3 py-1.5 text-xs font-bold bg-primary text-on-primary rounded-lg">Trigger Zones</button>
            </div>
          </div>

          <div className="relative bg-surface-container rounded-xl overflow-hidden min-h-[480px] shadow-sm">
            <img alt="Topographic map visualization" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrNl2Xaq0HmdjywBZ_BVbqJ5u_m68gzUm6gXBpn_ZYRO9hypdsA_p4EWZsYKzay_RCwuo06YG6wfmw3iPyxSvXqgbPLAMCwaOKCASYNeFoNwLCc92H6U5h7Mr6OtYnHzZHC9_Fgs6skzpBDXW-V1E53_D2kbzBkl8GoG06i_XfwBGKtA6ELtN_RF32_IwNMKV9Gcw-qDluofuLpDhnDLQcycs1N88V_d1q0afWgpWiI_A1MaSyea04VcsopToJC-sIhLPH_fHSTru2" />
            
            {/* Pulse Points */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-error/20 rounded-full animate-ping"></div>
                <div className="relative w-4 h-4 bg-error rounded-full border-2 border-white"></div>
              </div>
              <div className="mt-4 bg-tertiary-container text-tertiary-fixed p-3 rounded-lg backdrop-blur-md shadow-xl border border-white/10 w-64">
                <p className="text-[10px] font-black uppercase tracking-widest mb-1">Chennai - Tier 1</p>
                <p className="text-sm font-bold">Severe Rainfall Warning</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs opacity-80">Threshold: 150mm</span>
                  <span className="text-xs font-black">Current: 142mm</span>
                </div>
                <div className="mt-2 w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary-fixed-dim h-full w-[94%]"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 right-1/4">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 bg-tertiary-fixed-dim/30 rounded-full animate-pulse"></div>
                <div className="relative w-3 h-3 bg-tertiary-fixed-dim rounded-full border-2 border-white"></div>
              </div>
              <div className="mt-3 bg-white/90 p-2 rounded shadow-lg text-[10px] font-bold">Mumbai - Normal</div>
            </div>

            {/* Data Overlay Table */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-outline-variant/10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] uppercase font-black text-on-surface-variant border-b border-outline-variant/10">
                    <th className="pb-2">Region</th>
                    <th className="pb-2">Metric Type</th>
                    <th className="pb-2">Live Value</th>
                    <th className="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-medium">
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-3">Bangalore South</td>
                    <td className="py-3">Wind Speed</td>
                    <td className="py-3">42 km/h</td>
                    <td className="py-3 text-right text-secondary font-bold">STABLE</td>
                  </tr>
                  <tr>
                    <td className="py-3">Chennai Central</td>
                    <td className="py-3">Precipitation</td>
                    <td className="py-3 text-error">142 mm</td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded text-[9px] font-black uppercase tracking-tighter">ALERT ACTIVE</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Content (40%) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black tracking-tight">Recent Payouts</h3>
            <a className="text-xs font-bold text-surface-tint hover:underline" href="#">View All Ledger</a>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)] overflow-hidden">
            <div className="divide-y divide-slate-100">
              {/* Payout Items */}
              <div className="p-5 flex items-start space-x-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">payments</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-on-surface">₹2,100 sent to Rahul K.</p>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">Flood trigger activated in Chennai Zone 4. Verified via IoT Grid 12.</p>
                    </div>
                    <p className="text-[10px] font-black text-secondary whitespace-nowrap">SUCCESS</p>
                  </div>
                  <div className="mt-3 flex items-center space-x-4">
                    <div className="flex items-center text-[10px] font-bold text-slate-400">
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                      2m ago
                    </div>
                    <div className="flex items-center text-[10px] font-bold text-slate-400">
                      <span className="material-symbols-outlined text-sm mr-1">receipt_long</span>
                      TXN-49201
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 flex items-start space-x-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">pending</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-on-surface">₹1,800 Verification in Progress</p>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">Heatwave threshold triggered in Jaipur. Confirming 3rd party sensor data.</p>
                    </div>
                    <p className="text-[10px] font-black text-on-tertiary-container whitespace-nowrap">PENDING</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:bg-slate-50 border-t border-slate-100 transition-colors">
              Load 50 More Transactions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
