import React, { useState, useRef, useEffect } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, AlertCircle, FileText, IndianRupee, Menu, X, Settings, Bell, LogOut, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, notifications, logout, markNotificationRead, markAllNotificationsRead } = useApp();
  const notifRef = useRef(null);
  const userMenuRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Policy', href: '/policy', icon: ShieldCheck },
    { name: 'Live Alerts', href: '/events', icon: AlertCircle },
    { name: 'Claims', href: '/claims', icon: FileText },
    { name: 'Payouts', href: '/payout', icon: IndianRupee },
    { name: 'Admin', href: '/admin', icon: Settings },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={closeMenu} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:static lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-600">GigSafe</span>
          </div>
          <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        
        {/* User info in sidebar */}
        <div className="px-4 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.platform} • {user.locationTier}</p>
            </div>
          </div>
        </div>

        <nav className="p-3 space-y-1 flex-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.name} 
                to={item.href}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`
                }
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout button at bottom */}
        <div className="p-3 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-all duration-200"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200">
          <button 
            className="text-slate-500 hover:text-slate-700 lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="hidden lg:block">
            <h2 className="text-lg font-semibold text-slate-800">
              {navigation.find(n => n.href === location.pathname)?.name || 'GigSafe'}
            </h2>
          </div>

          <span className="text-lg font-bold text-blue-600 lg:hidden">GigSafe</span>

          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <div className="relative" ref={notifRef}>
              <button 
                onClick={() => { setShowNotifications(!showNotifications); setShowUserMenu(false); }}
                className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
              >
                <Bell size={22} />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                    <h3 className="font-semibold text-slate-800 text-sm">Notifications</h3>
                    <button 
                      onClick={markAllNotificationsRead}
                      className="text-xs text-blue-600 font-medium hover:text-blue-700"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
                    {notifications.map(n => (
                      <button
                        key={n.id}
                        onClick={() => markNotificationRead(n.id)}
                        className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition ${!n.read ? 'bg-blue-50/40' : ''}`}
                      >
                        <p className={`text-sm ${!n.read ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>{n.text}</p>
                        <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User avatar */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
                className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm hover:ring-2 ring-blue-200 transition"
              >
                {user.name?.charAt(0)}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.phone}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
