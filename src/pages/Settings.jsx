import React, { useState } from 'react';

export default function Settings() {
  const [killSwitch, setKillSwitch] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [slackAlerts, setSlackAlerts] = useState(true);

  return (
    <div className="px-12 pb-12 max-w-7xl">
      <header className="mb-12">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-secondary mb-2 block">System Configuration</span>
        <h2 className="text-[3.5rem] font-black tracking-tight leading-none mb-4">Settings</h2>
        <p className="text-on-surface-variant max-w-2xl">Manage your parametric infrastructure, security protocols, and operational thresholds.</p>
      </header>

      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Left Column: Navigation/Categories */}
        <div className="col-span-12 lg:col-span-3 space-y-1 sticky top-28">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-surface-container-high text-primary font-bold text-sm transition-colors">General</button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors">API Configuration</button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors">Payout Limits</button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors">User Roles</button>
          <button className="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors">Notifications</button>
        </div>

        {/* Right Column: Settings Sections */}
        <div className="col-span-12 lg:col-span-9 space-y-12">
          {/* Kill Switch High Visibility Section */}
          <section className={`p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.1)] border-2 transition-colors duration-500 ${killSwitch ? 'bg-red-900/90 border-red-500 shadow-red-500/20' : 'bg-tertiary-container border-tertiary-fixed-dim/20'}`}>
            <div className="flex items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`material-symbols-outlined ${killSwitch ? 'text-red-400' : 'text-tertiary-fixed'}`}>report</span>
                  <h3 className={`${killSwitch ? 'text-red-400' : 'text-tertiary-fixed'} font-bold text-lg uppercase tracking-tight`}>Emergency Protocol</h3>
                </div>
                <h4 className="text-white text-2xl font-bold mb-2">Automated Payout Kill Switch</h4>
                <p className={`${killSwitch ? 'text-red-200' : 'text-tertiary-fixed-dim/80'} text-sm`}>Immediately suspend all algorithmic claim processing across all active triggers. Use only in event of oracle compromise or market instability.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={killSwitch}
                  onChange={(e) => setKillSwitch(e.target.checked)}
                />
                <div className={`w-14 h-8 bg-black/40 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all ${killSwitch ? 'peer-checked:bg-error after:border-white' : ''}`}></div>
              </label>
            </div>
          </section>

          {/* API Configuration Section */}
          <section className="space-y-6" id="api">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">API Configuration</h3>
              <p className="text-on-surface-variant text-sm">Integrate weather oracles and external data triggers.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Production Endpoint</label>
                  <input className="w-full bg-surface-container-lowest ghost-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-surface-tint focus:outline-none transition-all" type="text" defaultValue="https://api.parametric.v3/v1/trigger" />
                  <p className="text-[11px] text-on-surface-variant/60">The primary gateway for live parametric events.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Webhook Secret</label>
                  <input className="w-full bg-surface-container-lowest ghost-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-surface-tint focus:outline-none transition-all" type="password" defaultValue="••••••••••••••••" />
                  <p className="text-[11px] text-on-surface-variant/60">Used to sign payload delivery to client endpoints.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Active API Keys</label>
                  <button className="text-surface-tint text-xs font-bold hover:underline">Generate New Key</button>
                </div>
                <div className="space-y-3">
                  <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between ghost-border">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant">key</span>
                      <div>
                        <p className="text-sm font-bold">Main Infrastructure Key</p>
                        <code className="text-xs text-on-surface-variant">pk_live_••••••••••••••••••••89A2</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                      <button className="p-2 hover:bg-error-container hover:text-error rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payout Limits Section */}
          <section className="space-y-6" id="payouts">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Payout Limits</h3>
              <p className="text-on-surface-variant text-sm">Define fiscal boundaries for automated claim settlements.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Max Per-Event Liability</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">$</span>
                  <input className="w-full bg-surface-container-lowest ghost-border rounded-lg pl-8 pr-4 py-3 text-lg font-black focus:ring-2 focus:ring-surface-tint focus:outline-none" type="text" defaultValue="2,500,000" />
                </div>
                <p className="text-[11px] text-on-surface-variant/70 italic">Triggers exceeding this amount require manual underwriting approval.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Daily Aggregate Cap</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">$</span>
                  <input className="w-full bg-surface-container-lowest ghost-border rounded-lg pl-8 pr-4 py-3 text-lg font-black focus:ring-2 focus:ring-surface-tint focus:outline-none" type="text" defaultValue="10,000,000" />
                </div>
                <p className="text-[11px] text-on-surface-variant/70 italic">Global daily settlement limit across all active policies.</p>
              </div>
            </div>
          </section>

          {/* Notifications Grid Section */}
          <section className="space-y-6" id="notifications">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Alert Protocols</h3>
              <p className="text-on-surface-variant text-sm">Configure how the system communicates critical events.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm mb-1">Trigger Execution Alerts</p>
                  <p className="text-xs text-on-surface-variant">Real-time notification when a parametric threshold is breached.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] font-bold uppercase">SMS</span>
                    <input type="checkbox" checked={smsAlerts} onChange={(e) => setSmsAlerts(e.target.checked)} className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] font-bold uppercase">Email</span>
                    <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[9px] font-bold uppercase">Slack</span>
                    <input type="checkbox" checked={slackAlerts} onChange={(e) => setSlackAlerts(e.target.checked)} className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
                <span className="material-symbols-outlined text-on-surface-variant mb-4">history</span>
                <div>
                  <p className="font-bold text-sm mb-1">Weekly Audit</p>
                  <p className="text-[10px] text-on-surface-variant leading-tight">Summary of all settlements delivered every Monday 08:00 UTC.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <footer className="pt-8 mt-12 border-t border-outline-variant/10 flex justify-end gap-4">
            <button className="px-6 py-3 rounded-lg text-on-surface-variant font-bold text-sm hover:underline transition-all">Discard Changes</button>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all">Update Infrastructure</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
