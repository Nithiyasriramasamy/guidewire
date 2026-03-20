import React from 'react';
import { IndianRupee, ShieldCheck, MapPin, AlertTriangle, TrendingUp, Info } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', income: 850, amt: 2400 },
  { name: 'Tue', income: 920, amt: 2210 },
  { name: 'Wed', income: 780, amt: 2290 },
  { name: 'Thu', income: 0, amt: 2000 }, // Curfew/Rain day 
  { name: 'Fri', income: 1100, amt: 2181 },
  { name: 'Sat', income: 1400, amt: 2500 },
  { name: 'Sun', income: 1550, amt: 2100 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Worker Dashboard</h1>
          <p className="text-slate-500">Welcome back, Rahul. Here is your coverage overview.</p>
        </div>
        <div className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <span className="font-semibold text-sm">Status: Protected</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Weekly Income</span>
            <IndianRupee className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">₹6,600</div>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12% from last week</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-10"></div>
          <div className="flex items-center justify-between text-slate-500 mb-4 tracking-tight">
            <span className="text-sm font-medium flex items-center">
              Insurance Premium <Info className="w-4 h-4 ml-1 text-slate-400" />
            </span>
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">₹45<span className="text-sm font-normal text-slate-500">/week</span></div>
            <div className="mt-2 text-sm text-slate-500">Auto-deducted valid till Sun</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Risk Level</span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-500">Medium</div>
            <div className="mt-2 text-sm text-slate-500">Rain forecast in next 48h</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Location Tier</span>
            <MapPin className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">Tier-1</div>
            <div className="mt-2 text-sm text-slate-500">Koramangala, Bangalore</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-slate-800">Income Trends</h2>
          <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area 
                type="monotone" 
                dataKey="income" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorIncome)" 
                activeDot={{ r: 6, strokeWidth: 0, fill: '#2563eb' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
