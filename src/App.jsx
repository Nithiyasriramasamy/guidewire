import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import LiveTriggers from './pages/LiveTriggers';
import PolicyHolders from './pages/PolicyHolders';
import RiskModels from './pages/RiskModels';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="live-triggers" element={<LiveTriggers />} />
          <Route path="policy-holders" element={<PolicyHolders />} />
          <Route path="risk-models" element={<RiskModels />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
