import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { to: '/', icon: 'dashboard', label: 'Overview' },
    { to: '/live-triggers', icon: 'thunderstorm', label: 'Live Triggers' },
    { to: '/policy-holders', icon: 'groups', label: 'Policy Holders' },
    { to: '/risk-models', icon: 'psychology', label: 'Risk Models (AI)' },
    { to: '/settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <div className="bg-background text-on-surface font-body antialiased min-h-screen flex overflow-hidden">
      {/* SideNavBar */}
      <aside className="h-full w-64 fixed left-0 top-0 z-40 flex flex-col border-r border-slate-200/20 bg-slate-50 shadow-[0_12px_32px_-4px_rgba(19,27,46,0.06)]">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">shield</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-slate-900">Parametric</h1>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Precision Coverage</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 mt-4 px-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-slate-900 font-bold border-r-2 border-slate-900 bg-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 bg-slate-100 m-3 rounded-xl mb-4">
          <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-2">System Capacity</p>
          <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
            <div className="bg-secondary h-full w-[84%]"></div>
          </div>
          <p className="text-[10px] mt-2 text-slate-500">84% Precision Threshold</p>
        </div>
        <div className="p-4 border-t border-slate-200 flex items-center gap-3">
          <img alt="Admin Avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubcRriR-Ic56HXhZvp9kHgAhDW0AwALo9h9hf1aL7uMtFOuzpTbl3vRXq34NyHkWXBQMy0VT632WVjs2kAQkI748qOQEfjD8R6S6VW2xlobzXU9Qj-zLsgihwipFKGpbp3t1qeXpZQLcEBv87AwqJ2wPvsjbVVhwiDEeOsIXFFDaGKuriH1Sk12FJktXAWnMz7_jbGozq1doRHCU0rDnpOohgQHF5BVoB6HwJEX6aaUOXh8MRIy6t9ooQtuHe0Smx6krahNhaU8Ik" />
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">Admin Profile</p>
            <p className="text-[10px] text-on-surface-variant cursor-pointer hover:underline" onClick={() => setShowProfile(!showProfile)}>Super Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-64 h-16 z-30 flex justify-between items-center px-8 bg-white/80 backdrop-blur-md border-b border-slate-200/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <span className="material-symbols-outlined text-sm text-on-surface-variant">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 font-medium outline-none" placeholder="Search parameters..." type="text" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.05em] text-emerald-600">System API Status: All Systems Operational</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 relative">
              <button 
                className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-opacity relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
              </button>
              {showNotifications && (
                <div className="absolute top-12 right-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100 p-4 z-50">
                  <p className="text-xs font-bold text-slate-900 mb-2">Notifications</p>
                  <div className="text-xs text-slate-500">No new alerts at this time.</div>
                </div>
              )}
              <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-opacity">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
          </div>
        </header>

        <div className="pt-16 flex-1 overflow-y-auto w-full">
            <Outlet />
        </div>
      </main>
    </div>
  );
}
