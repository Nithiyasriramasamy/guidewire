import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const defaultUser = {
  name: 'Rahul Sharma',
  phone: '+91 98765 43210',
  platform: 'Swiggy',
  location: 'Koramangala, Bangalore',
  locationTier: 'Tier-1',
  weeklyIncome: 6600,
  dailyIncome: 943,
  premium: 45,
  coveragePercent: 70,
  policyActive: true,
  riskLevel: 'medium',
  riskReason: 'Rain forecast in your area for next 48 hours',
  joinDate: '2024-08-15',
};

const defaultNotifications = [
  { id: 1, text: '🌧️ Heavy rain detected in Koramangala', time: '2 min ago', read: false, type: 'weather' },
  { id: 2, text: '✅ Insurance policy activated successfully', time: '1 hour ago', read: false, type: 'policy' },
  { id: 3, text: '💰 ₹1,200 payout credited to your account', time: '3 hours ago', read: false, type: 'payout' },
  { id: 4, text: '⚠️ Flood warning issued for your zone', time: '5 hours ago', read: true, type: 'weather' },
  { id: 5, text: '📊 Weekly summary report is ready', time: '1 day ago', read: true, type: 'report' },
];

const defaultAlerts = [
  {
    id: 1, type: 'Weather', title: 'Heavy Rainfall Warning',
    description: 'IMD has issued a red alert. Severe waterlogging expected. Deliveries may stop in affected zones.',
    area: 'Koramangala, Indiranagar', status: 'Active', severity: 'high',
    impact: 'Deliveries may stop for 4-6 hours', time: '10 min ago',
  },
  {
    id: 2, type: 'Flood', title: 'Flood Advisory',
    description: 'Water levels rising in low-lying areas. Avoid routes through ORR underpass.',
    area: 'Silk Board, BTM Layout', status: 'Warning', severity: 'high',
    impact: 'Route diversions expected, longer delivery times', time: '25 min ago',
  },
  {
    id: 3, type: 'Pollution', title: 'AQI Exceeds 350',
    description: 'Hazardous air quality. Outdoor work may be restricted by authorities.',
    area: 'Marathahalli, Whitefield', status: 'Monitoring', severity: 'medium',
    impact: 'Reduced delivery slots possible', time: '1 hour ago',
  },
  {
    id: 4, type: 'Curfew', title: 'Bandh / Strike Alert',
    description: 'Transport union strike called for tomorrow. All delivery platforms may pause operations.',
    area: 'City-wide, Bangalore', status: 'Upcoming', severity: 'medium',
    impact: 'Deliveries will stop for the entire day', time: '2 hours ago',
  },
];

const defaultClaims = [
  {
    id: 'CLM-2048', event: 'Heavy Rainfall', date: 'Apr 02, 2026', time: '14:30',
    amount: 1200, status: 'Paid', type: 'Auto-Triggered',
    details: 'Rain disruption detected via weather API. Automatic claim generated.',
  },
  {
    id: 'CLM-2035', event: 'Platform Outage (>4h)', date: 'Mar 28, 2026', time: '09:15',
    amount: 850, status: 'Approved', type: 'Auto-Triggered',
    details: 'Swiggy experienced nationwide outage for 6 hours.',
  },
  {
    id: 'CLM-2021', event: 'Flood Disruption', date: 'Mar 20, 2026', time: '16:45',
    amount: 1500, status: 'Pending', type: 'Auto-Triggered',
    details: 'Flooding in BTM Layout area prevented deliveries for 2 days.',
  },
  {
    id: 'CLM-1998', event: 'Curfew / Bandh', date: 'Mar 12, 2026', time: '00:00',
    amount: 940, status: 'Paid', type: 'Auto-Triggered',
    details: 'City-wide transport strike. All delivery platforms paused.',
  },
  {
    id: 'CLM-1975', event: 'Medical Emergency', date: 'Feb 28, 2026', time: '11:20',
    amount: 5000, status: 'Paid', type: 'Manual',
    details: 'Road accident resulting in temporary inability to work.',
  },
];

const defaultPayouts = [
  { id: 'TXN-UPI-30421', claimId: 'CLM-2048', event: 'Heavy Rainfall', date: 'Apr 03, 2026', amount: 1200, method: 'UPI', upiId: 'rsharma@okicici' },
  { id: 'TXN-UPI-30198', claimId: 'CLM-1998', event: 'Curfew / Bandh', date: 'Mar 14, 2026', amount: 940, method: 'UPI', upiId: 'rsharma@okicici' },
  { id: 'TXN-UPI-29845', claimId: 'CLM-1975', event: 'Medical Emergency', date: 'Mar 02, 2026', amount: 5000, method: 'Bank Transfer', upiId: 'HDFC ****1234' },
];

const defaultAIInsights = [
  { id: 1, text: 'Your income may drop by 50% today due to heavy rain in your area', type: 'warning', icon: '🌧️' },
  { id: 2, text: 'This week has low risk — your premium is reduced to ₹38', type: 'positive', icon: '💡' },
  { id: 3, text: 'Best earning hours today: 6 PM – 10 PM (rain expected to stop)', type: 'tip', icon: '⏰' },
  { id: 4, text: 'Workers in Tier-1 cities earned 15% more last week. You\'re on track!', type: 'positive', icon: '📈' },
];

const defaultWeeklySummary = {
  totalEarnings: 6600,
  premiumPaid: 45,
  amountProtected: 7500,
  claimsReceived: 1200,
  daysWorked: 6,
  avgDailyIncome: 1100,
  riskDays: 1,
};

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('gigSafe_loggedIn') === 'true';
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('gigSafe_user');
    return saved ? JSON.parse(saved) : defaultUser;
  });
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [alerts] = useState(defaultAlerts);
  const [claims] = useState(defaultClaims);
  const [payouts] = useState(defaultPayouts);
  const [aiInsights] = useState(defaultAIInsights);
  const [weeklySummary] = useState(defaultWeeklySummary);

  useEffect(() => {
    localStorage.setItem('gigSafe_loggedIn', isLoggedIn);
    localStorage.setItem('gigSafe_user', JSON.stringify(user));
  }, [isLoggedIn, user]);

  const login = (userData) => {
    setUser({ ...defaultUser, ...userData });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('gigSafe_loggedIn');
  };

  const register = (formData) => {
    const tierMap = {
      'bangalore': 'Tier-1', 'mumbai': 'Tier-1', 'delhi': 'Tier-1', 'chennai': 'Tier-1', 'hyderabad': 'Tier-1', 'pune': 'Tier-1',
      'jaipur': 'Tier-2', 'lucknow': 'Tier-2', 'kochi': 'Tier-2', 'chandigarh': 'Tier-2', 'indore': 'Tier-2',
    };
    const locLower = (formData.location || '').toLowerCase();
    const tier = Object.entries(tierMap).find(([city]) => locLower.includes(city))?.[1] || 'Tier-3';
    const weekly = Number(formData.income) || 6600;
    const newUser = {
      ...defaultUser,
      name: formData.name,
      phone: formData.phone,
      platform: formData.platform,
      location: formData.location,
      locationTier: tier,
      weeklyIncome: weekly,
      dailyIncome: Math.round(weekly / 7),
      premium: Math.round(weekly * 0.007),
      coveragePercent: 70,
    };
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const togglePolicy = () => {
    setUser(prev => ({ ...prev, policyActive: !prev.policyActive }));
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <AppContext.Provider value={{
      isLoggedIn, user, notifications, alerts, claims, payouts, aiInsights, weeklySummary,
      login, logout, register, togglePolicy, markNotificationRead, markAllNotificationsRead,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
