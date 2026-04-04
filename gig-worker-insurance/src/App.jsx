import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import EventMonitoring from './pages/EventMonitoring';
import Claims from './pages/Claims';
import Payout from './pages/Payout';
import AdminDashboard from './pages/AdminDashboard';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useApp();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function AppRoutes() {
  const { isLoggedIn } = useApp();

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Landing />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />} />
      
      {/* Protected App Routes with Sidebar */}
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/events" element={<EventMonitoring />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
