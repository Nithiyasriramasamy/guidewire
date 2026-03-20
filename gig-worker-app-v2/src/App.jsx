import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, AlertCircle, FileText, IndianRupee, Menu, X } from 'lucide-react';

import Landing from './pages/Landing';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Policy from './pages/Policy';
import Claims from './pages/Claims';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Policy', href: '/policy', icon: ShieldCheck },
    { name: 'Risk Alerts', href: '/alerts', icon: AlertCircle },
    { name: 'Claims & Payouts', href: '/claims', icon: FileText },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:static lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
          <span className="text-xl font-bold flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex justify-center items-center"><ShieldCheck size={20}/></div>GigWorker App</span>
          <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <NavLink 
                key={item.name} 
                to={item.href}
                onClick={closeMenu}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 lg:hidden">
          <button 
            className="text-slate-500 hover:text-slate-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <span className="text-lg font-bold flex items-center gap-2"><ShieldCheck className="text-blue-600" size={20}/> GigWorker</span>
          <div className="w-6" /> {/* Spacer */}
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        
        {/* Protected/App Routes with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/claims" element={<Claims />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
