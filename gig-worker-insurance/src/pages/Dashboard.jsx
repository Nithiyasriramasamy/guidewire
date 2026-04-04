import React from 'react';
import { IndianRupee, ShieldCheck, ShieldOff, MapPin, AlertTriangle, TrendingUp, TrendingDown, Info, Brain, BarChart3, Sparkles, CalendarDays, CloudRain, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useApp } from '../context/AppContext';

const incomeData = [
  { name: 'Mon', income: 850 },
  { name: 'Tue', income: 920 },
  { name: 'Wed', income: 780 },
  { name: 'Thu', income: 0 },
  { name: 'Fri', income: 1100 },
  { name: 'Sat', income: 1400 },
  { name: 'Sun', income: 1550 },
];

const Dashboard = () => {
  const { user, aiInsights, weeklySummary, alerts } = useApp();

  const riskConfig = {
    low: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', dot: 'bg-green-500', label: '🟢 Low Risk', barWidth: 'w-1/4' },
    medium: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', dot: 'bg-amber-500', label: '🟡 Medium Risk', barWidth: 'w-2/4' },
    high: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', dot: 'bg-red-500', label: '🔴 High Risk', barWidth: 'w-3/4' },
  };
  const risk = riskConfig[user.riskLevel] || riskConfig.medium;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hi {user.name.split(' ')[0]}, Your Income is Protected 👋</h1>
          <p className="text-slate-500">Here's your coverage overview for this week.</p>
        </div>
        <div className={`flex items-center px-4 py-2 rounded-full border ${user.policyActive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
          {user.policyActive ? <ShieldCheck className="w-5 h-5 mr-2" /> : <ShieldOff className="w-5 h-5 mr-2" />}
          <span className="font-semibold text-sm">{user.policyActive ? 'You are Protected' : 'You are Not Protected'}</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Weekly Income</span>
            <IndianRupee className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">₹{user.weeklyIncome.toLocaleString('en-IN')}</div>
          <div className="flex items-center mt-1.5 text-xs text-green-600">
            <TrendingUp className="w-3.5 h-3.5 mr-1" />+12% vs last week
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Daily Income</span>
            <IndianRupee className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">₹{user.dailyIncome.toLocaleString('en-IN')}</div>
          <div className="text-xs text-slate-500 mt-1.5">Today's estimate</div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Premium</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">₹{user.premium}<span className="text-sm font-normal text-slate-500">/week</span></div>
          <div className="text-xs text-slate-500 mt-1.5">Auto-deducted</div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Coverage</span>
            <BarChart3 className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-blue-600">{user.coveragePercent}%</div>
          <div className="text-xs text-slate-500 mt-1.5">Of weekly income</div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Policy Status</span>
            <Zap className="w-4 h-4 text-green-500" />
          </div>
          <div className={`text-xl font-bold ${user.policyActive ? 'text-green-600' : 'text-red-500'}`}>
            {user.policyActive ? 'Active' : 'Inactive'}
          </div>
          <div className="text-xs text-slate-500 mt-1.5">Renews in 3 days</div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Location</span>
            <MapPin className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-lg font-bold text-slate-900 truncate">{user.location.split(',')[0]}</div>
          <div className="text-xs text-slate-500 mt-1.5">{user.locationTier}</div>
        </div>
      </div>

      {/* Risk Level Indicator */}
      <div className={`${risk.bg} rounded-2xl p-5 border ${risk.border}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className={`w-6 h-6 ${risk.color}`} />
            <div>
              <p className={`font-bold text-lg ${risk.color}`}>{risk.label}</p>
              <p className="text-sm text-slate-600 mt-0.5">{user.riskReason}</p>
            </div>
          </div>
          <div className="w-full sm:w-48">
            <div className="w-full bg-white/60 rounded-full h-3">
              <div className={`h-3 rounded-full ${risk.dot} ${risk.barWidth} transition-all duration-500`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Income Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Income Trends</h2>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-1.5">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={incomeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" activeDot={{ r: 6, strokeWidth: 0, fill: '#2563eb' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-blue-50">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Insights
            </h2>
            <p className="text-xs text-slate-500 mt-1">Smart suggestions powered by AI</p>
          </div>
          <div className="divide-y divide-slate-50">
            {aiInsights.map(insight => {
              const typeColors = {
                warning: 'border-l-amber-400 bg-amber-50/30',
                positive: 'border-l-green-400 bg-green-50/30',
                tip: 'border-l-blue-400 bg-blue-50/30',
              };
              return (
                <div key={insight.id} className={`p-4 border-l-4 ${typeColors[insight.type] || 'border-l-slate-200'}`}>
                  <p className="text-sm text-slate-700">
                    <span className="mr-2">{insight.icon}</span>
                    {insight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-800">Weekly Summary Report</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-slate-100">
          {[
            { label: 'Total Earnings', value: `₹${weeklySummary.totalEarnings.toLocaleString('en-IN')}`, color: 'text-slate-900' },
            { label: 'Premium Paid', value: `₹${weeklySummary.premiumPaid}`, color: 'text-blue-600' },
            { label: 'Amount Protected', value: `₹${weeklySummary.amountProtected.toLocaleString('en-IN')}`, color: 'text-green-600' },
            { label: 'Claims Received', value: `₹${weeklySummary.claimsReceived.toLocaleString('en-IN')}`, color: 'text-purple-600' },
            { label: 'Days Worked', value: weeklySummary.daysWorked, color: 'text-slate-900' },
            { label: 'Avg Daily Income', value: `₹${weeklySummary.avgDailyIncome.toLocaleString('en-IN')}`, color: 'text-slate-900' },
            { label: 'Risk Days', value: weeklySummary.riskDays, color: 'text-red-500' },
          ].map((item, i) => (
            <div key={i} className="p-5 text-center">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">{item.label}</p>
              <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Alerts Preview */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-800">Active Alerts</h2>
            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
          </div>
          <a href="/events" className="text-sm text-blue-600 font-medium hover:text-blue-700">View All →</a>
        </div>
        <div className="divide-y divide-slate-50">
          {alerts.slice(0, 3).map(alert => {
            const severityColors = {
              high: 'bg-red-100 text-red-700',
              medium: 'bg-amber-100 text-amber-700',
              low: 'bg-green-100 text-green-700',
            };
            return (
              <div key={alert.id} className="p-4 flex items-start gap-4 hover:bg-slate-50/50 transition">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${severityColors[alert.severity]} whitespace-nowrap mt-0.5`}>
                  {alert.type}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm">{alert.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{alert.impact}</p>
                </div>
                <span className="text-xs text-slate-400 whitespace-nowrap">{alert.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
