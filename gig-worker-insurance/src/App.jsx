import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import EventMonitoring from './pages/EventMonitoring';
import Claims from './pages/Claims';
import Payout from './pages/Payout';
import AdminDashboard from './pages/AdminDashboard';

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
          <Route path="/events" element={<EventMonitoring />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/payout" element={<Payout />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
