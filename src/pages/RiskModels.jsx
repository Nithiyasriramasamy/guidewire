import React, { useState } from 'react';

export default function RiskModels() {
  const [activeTab, setActiveTab] = useState('90D Period');
  
  return (
    <div className="px-12 pb-12">
      {/* Hero Section: Editorial Depth */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-secondary mb-2 block">Neural Network Status: Active</span>
            <h2 className="text-[3.5rem] leading-none font-black tracking-tighter text-on-background">Risk Models (AI)</h2>
          </div>
          <div className="text-right pb-2">
            <p className="text-on-surface-variant text-sm max-w-xs">Autonomous climate risk assessment using multi-layered synthetic aperture radar data.</p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Visualization: Accuracy Chart */}
          <div className="col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)]">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold tracking-tight">Historical Accuracy</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setActiveTab('90D Period')}
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${activeTab === '90D Period' ? 'bg-primary text-white' : 'bg-surface-container-high'}`}
                >
                  90D Period
                </button>
                <button 
                  onClick={() => setActiveTab('YTD')}
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${activeTab === 'YTD' ? 'bg-primary text-white' : 'bg-surface-container-high'}`}
                >
                  YTD
                </button>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface rounded text-[10px] font-bold uppercase tracking-wider ml-2">98.4% Precision</span>
              </div>
            </div>

            <div className="relative h-64 w-full flex items-end justify-between space-x-1">
              {/* Abstract Chart Visualization */}
              <div className="w-full h-full absolute inset-0 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 800 200">
                  <path d="M0,150 Q50,140 100,160 T200,130 T300,100 T400,110 T500,80 T600,90 T700,40 T800,60" fill="none" stroke="#0053db" strokeWidth="3"></path>
                  <path d="M0,150 Q50,140 100,160 T200,130 T300,100 T400,110 T500,80 T600,90 T700,40 T800,60 L800,200 L0,200 Z" fill="url(#grad1)" opacity="0.1"></path>
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#0053db', stopOpacity: 1 }}></stop>
                      <stop offset="100%" style={{ stopColor: '#0053db', stopOpacity: 0 }}></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="z-10 w-full flex justify-between px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-4">
                <span>Aug 01</span><span>Aug 15</span><span>Sep 01</span><span>Sep 15</span><span>Oct 01</span><span>Oct 15</span><span>Nov 01</span>
              </div>
            </div>
          </div>

          {/* Secondary Data: Disruption Frequency */}
          <div className="col-span-4 flex flex-col space-y-6">
            <div className="flex-1 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6">Predicted Disruption</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-black">12.4%</span>
                  <span className="text-xs opacity-60 italic">Next 7 Days</span>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span>Wind Speed Delta</span>
                    <span className="font-bold">+4.2 kn</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed h-full w-[42%]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-surface-tint opacity-20 rounded-full blur-3xl"></div>
            </div>

            <div className="flex-1 bg-tertiary-container text-tertiary-fixed p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Active Threshold Alert</span>
                </div>
                <h4 className="text-lg font-bold leading-tight">Precipitation Spike Detected</h4>
              </div>
              <p className="text-xs opacity-80">Model predicts 40mm exceeding the 32mm parametric baseline in Cluster A4.</p>
            </div>
          </div>

          {/* Parameter Tuning Section */}
          <div className="col-span-7 bg-surface-container-low p-8 rounded-xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Tune Model Parameters</h3>
                <p className="text-xs text-on-surface-variant">Adjust neural weights and trigger sensitivities</p>
              </div>
              <button className="bg-primary text-white px-6 py-2.5 rounded-md text-xs font-bold flex items-center transition-transform active:scale-95">
                <span className="material-symbols-outlined text-sm mr-2">save</span>
                Apply Weights
              </button>
            </div>

            <div className="space-y-8">
              {/* Custom Sliders */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-background">Rainfall Threshold (mm)</label>
                  <span className="text-sm font-mono font-bold">32.00</span>
                </div>
                <div className="relative w-full h-2 bg-primary-fixed rounded-full">
                  <div className="absolute top-1/2 left-[65%] -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg cursor-pointer"></div>
                  <div className="h-full bg-primary rounded-full w-[65%]"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-background">Model Sensitivity (%)</label>
                  <span className="text-sm font-mono font-bold">88.50</span>
                </div>
                <div className="relative w-full h-2 bg-primary-fixed rounded-full">
                  <div className="absolute top-1/2 left-[88%] -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg cursor-pointer"></div>
                  <div className="h-full bg-primary rounded-full w-[88%]"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-2">Confidence Interval</p>
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <span className="font-bold">± 1.2%</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-2">Latency Buffer</p>
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-on-primary-container">timer</span>
                    <span className="font-bold">420ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Log */}
          <div className="col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)]">
            <h3 className="text-xl font-bold tracking-tight mb-8">Model Training Updates</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                <div>
                  <p className="text-xs font-bold">Gradient Optimization Complete</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">Stochastic gradient descent applied to North-Eastern datasets. Loss reduced by 0.04.</p>
                  <p className="text-[9px] font-mono mt-2 text-primary uppercase">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-outline-variant shrink-0"></div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Dataset Expansion</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">Injected 4.2TB of NOAA historical radar imagery for model fine-tuning.</p>
                  <p className="text-[9px] font-mono mt-2 text-primary uppercase">Yesterday, 14:20</p>
                </div>
              </div>

              <button className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary border-t border-outline-variant/10 mt-4 transition-colors">
                View Full Audit Log
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Visualization: The Condition Glow */}
      <section className="mt-12">
        <h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Active Parametric Monitoring</h4>
        <div className="grid grid-cols-4 gap-6">
          <div className="glass-panel bg-white/50 p-6 rounded-xl border border-white/40 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="material-symbols-outlined text-on-primary-container">waves</span>
              <span className="text-[9px] font-bold bg-white px-2 py-0.5 rounded-full shadow-sm">FLORIDA CLUSTER</span>
            </div>
            <div className="relative inline-block z-10">
              <div className="absolute inset-0 bg-tertiary-fixed-dim blur-xl opacity-40 scale-150"></div>
              <span className="relative text-3xl font-black">28.4 <span className="text-sm font-normal text-on-surface-variant">mm</span></span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-tighter mt-4 text-on-surface-variant relative z-10">Precipitation Variance</p>
          </div>

          <div className="glass-panel bg-white/50 p-6 rounded-xl border border-white/40 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="material-symbols-outlined text-secondary">air</span>
              <span className="text-[9px] font-bold bg-white px-2 py-0.5 rounded-full shadow-sm">TEXAS GRID</span>
            </div>
            <span className="text-3xl font-black relative z-10">14.2 <span className="text-sm font-normal text-on-surface-variant">kn</span></span>
            <p className="text-[10px] font-bold uppercase tracking-tighter mt-4 text-on-secondary-container relative z-10">Normal Air Velocity</p>
          </div>
          
          <div className="glass-panel bg-white/50 p-6 rounded-xl border border-white/40 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="material-symbols-outlined text-on-tertiary-container">device_thermostat</span>
              <span className="text-[9px] font-bold bg-white px-2 py-0.5 rounded-full shadow-sm">ARIZONA HUB</span>
            </div>
            <span className="text-3xl font-black relative z-10">104 <span className="text-sm font-normal text-on-surface-variant">°F</span></span>
            <p className="text-[10px] font-bold uppercase tracking-tighter mt-4 text-on-tertiary-container relative z-10">Critical Heat Index</p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500 blur-[40px] opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
