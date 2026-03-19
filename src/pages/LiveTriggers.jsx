import React, { useState } from 'react';

export default function LiveTriggers() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStatus, setSimulationStatus] = useState('Normal');

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationStatus('Severe Rainfall Alert');
    }, 2000);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header Editorial Section */}
      <section className="flex justify-between items-end">
        <div>
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-secondary">Global Live Environment</span>
          <h2 className="text-[3.5rem] leading-[1] font-black tracking-tight text-on-surface mt-2">Live Triggers.</h2>
        </div>
        <div className="flex gap-3 items-center">
          <button 
            onClick={handleSimulate}
            className={`px-6 py-2.5 text-on-surface text-sm font-bold rounded-md transition-all active:scale-[0.98] flex items-center gap-2 ${isSimulating ? 'bg-amber-100 text-amber-800' : simulationStatus === 'Normal' ? 'bg-surface-container-low hover:bg-surface-container' : 'bg-error text-white'}`}
            disabled={isSimulating}
          >
            {isSimulating ? (
              <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined text-sm">{simulationStatus === 'Normal' ? 'storm' : 'warning'}</span>
            )}
            {isSimulating ? 'Simulating...' : simulationStatus === 'Normal' ? 'Simulate Weather Event' : simulationStatus}
          </button>
          <button className="px-6 py-2.5 bg-primary text-on-primary text-sm font-bold rounded-md hover:opacity-90 transition-all active:scale-[0.98] flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Parameter
          </button>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Live Map Section (Large) */}
        <div className="col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative min-h-[500px] border border-outline-variant/10">
          <img alt="Satellite imagery of ocean storm patterns" className={`absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-all duration-1000 ${simulationStatus !== 'Normal' ? 'grayscale-0 contrast-125 hue-rotate-15' : 'grayscale'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rQ5VgP4WKY3ycWUv31B3EGZTjH5GEL7do_8CvXCNjAPyPXPP9BXbWQheS5fD7tzKj4b3WTs_sV7A7bKEkJJPquy0T5zCV_FVfW36PzBOjp5lUcbdqE1xyg3YWxXhkUM4_Qmv6feZGMQwchtNvx9rszvWF5XDGyg_7wCFfRbQxI_rxacG3Xvoe4NBUvsnZSABjRrifHwU9hL9Jt1Wgu59S1O_yDS50qfZBm3XLUyS5TCNLrYp7R_Ar8YOrJq9mntp7HieXOCN43nK" />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute top-6 left-6 flex gap-2">
            <div className={`glass-overlay px-4 py-2 rounded-lg editorial-shadow flex items-center gap-3 transition-colors ${simulationStatus !== 'Normal' ? 'bg-red-500/20 shadow-red-500/10' : ''}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${simulationStatus !== 'Normal' ? 'bg-red-500' : 'bg-error'}`}></span>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Live Feed</span>
            </div>
            <div className="bg-white/90 px-4 py-2 rounded-lg editorial-shadow flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">layers</span>
              <span className="text-xs font-bold text-on-surface">Precipitation Layer</span>
            </div>
          </div>

          {/* Map Markers */}
          <div className="absolute top-[40%] left-[30%] group">
            <div className="relative">
              <div className={`absolute -inset-4 rounded-full bg-error/20 animate-ping ${simulationStatus !== 'Normal' ? 'bg-red-500/40 animate-pulse' : ''}`}></div>
              <div className={`w-6 h-6 rounded-full border-4 border-white editorial-shadow relative z-10 ${simulationStatus !== 'Normal' ? 'bg-red-500' : 'bg-error'}`}></div>
              <div className="absolute top-8 left-0 glass-overlay p-4 rounded-xl editorial-shadow w-48 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Trigger ID: #TR-992</p>
                <p className="text-sm font-bold text-on-surface mb-2">North Sea Wind Spike</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Current:</span>
                  <span className="text-error font-bold">114 km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: High Alert Metrics */}
        <div className="col-span-4 space-y-6">
          <div className={`p-6 rounded-xl relative overflow-hidden transition-colors duration-1000 ${simulationStatus !== 'Normal' ? 'bg-red-900 border border-red-500' : 'bg-tertiary-container'}`}>
            <div className="relative z-10">
              <span className={`text-[0.6875rem] font-bold uppercase tracking-[0.1em] ${simulationStatus !== 'Normal' ? 'text-red-200' : 'text-tertiary-fixed-dim'}`}>Critical Event Detected</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white tracking-tighter">72.4</span>
                <span className={`${simulationStatus !== 'Normal' ? 'text-red-300' : 'text-tertiary-fixed'} text-lg font-bold`}>mm/h</span>
              </div>
              <p className={`text-sm mt-2 leading-relaxed ${simulationStatus !== 'Normal' ? 'text-red-100' : 'text-tertiary-fixed/80'}`}>Rainfall in Southeast Hub zone has exceeded the primary threshold (65mm/h).</p>
              
              <div className="mt-6 flex items-center gap-4">
                <div className={`px-3 py-1 rounded text-[10px] font-black uppercase ${simulationStatus !== 'Normal' ? 'bg-red-500/40 text-red-100' : 'bg-tertiary-fixed-dim/20 text-tertiary-fixed'}`}>Payout Imminent</div>
                <div className="text-white text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  14m since breach
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">thunderstorm</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow border border-outline-variant/10">
            <h4 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">Probability Ledger</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">water_drop</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold">Flood Risk Alpha</span>
                    <span className={`text-xs font-black ${simulationStatus !== 'Normal' ? 'text-error' : 'text-secondary'}`}>{simulationStatus !== 'Normal' ? '98%' : '92%'}</span>
                  </div>
                  <div className="w-full bg-surface-container h-1 rounded-full">
                    <div className={`${simulationStatus !== 'Normal' ? 'bg-error' : 'bg-secondary'} h-full transition-all duration-1000`} style={{ width: simulationStatus !== 'Normal' ? '98%' : '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
