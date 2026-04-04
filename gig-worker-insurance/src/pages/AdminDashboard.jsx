import React from 'react';
import { Users, ShieldCheck, AlertTriangle, IndianRupee, TrendingUp, TrendingDown, FileText, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const claimsData = [
  { name: 'Jan', approved: 42, rejected: 8 },
  { name: 'Feb', approved: 38, rejected: 12 },
  { name: 'Mar', approved: 55, rejected: 6 },
  { name: 'Apr', approved: 47, rejected: 10 },
  { name: 'May', approved: 60, rejected: 9 },
  { name: 'Jun', approved: 52, rejected: 7 },
];

const riskDistribution = [
  { name: 'Low', value: 45, color: '#22c55e' },
  { name: 'Medium', value: 35, color: '#f59e0b' },
  { name: 'High', value: 15, color: '#ef4444' },
  { name: 'Critical', value: 5, color: '#7c3aed' },
];

const recentClaims = [
  { id: 'CLM-1024', worker: 'Rahul Sharma', type: 'Rain Disruption', amount: '₹1,200', status: 'Approved', date: '2025-06-15' },
  { id: 'CLM-1023', worker: 'Priya Patel', type: 'Accident', amount: '₹8,500', status: 'Pending', date: '2025-06-14' },
  { id: 'CLM-1022', worker: 'Amit Kumar', type: 'Curfew/Bandh', amount: '₹950', status: 'Approved', date: '2025-06-14' },
  { id: 'CLM-1021', worker: 'Neha Singh', type: 'Vehicle Breakdown', amount: '₹3,200', status: 'Rejected', date: '2025-06-13' },
  { id: 'CLM-1020', worker: 'Vikram Joshi', type: 'Rain Disruption', amount: '₹1,100', status: 'Approved', date: '2025-06-13' },
];

const statusColors = {
  Approved: 'bg-green-50 text-green-700 border-green-200',
  Pending: 'bg-amber-50 text-amber-700 border-amber-200',
  Rejected: 'bg-red-50 text-red-700 border-red-200',
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500">Overview of all policies, claims, and risk analytics.</p>
        </div>
        <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
          <Activity className="w-5 h-5 mr-2" />
          <span className="font-semibold text-sm">System: Operational</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Total Workers</span>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900">2,847</div>
          <div className="flex items-center mt-2 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+8.2% this month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Active Policies</span>
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900">2,134</div>
          <div className="flex items-center mt-2 text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>74.9% coverage rate</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Total Payouts</span>
            <IndianRupee className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900">₹4.2L</div>
          <div className="flex items-center mt-2 text-sm text-red-500">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>+15% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Pending Claims</span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-amber-500">23</div>
          <div className="mt-2 text-sm text-slate-500">Requires review</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Claims Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Claims Overview</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimsData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="approved" fill="#3b82f6" radius={[6, 6, 0, 0]} name="Approved" />
                <Bar dataKey="rejected" fill="#f87171" radius={[6, 6, 0, 0]} name="Rejected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Distribution Pie */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Risk Distribution</h2>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={riskDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value">
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {riskDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Claims Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-400" />
            Recent Claims
          </h2>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500">
                <th className="text-left px-6 py-3 font-medium">Claim ID</th>
                <th className="text-left px-6 py-3 font-medium">Worker</th>
                <th className="text-left px-6 py-3 font-medium">Type</th>
                <th className="text-left px-6 py-3 font-medium">Amount</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
                <th className="text-left px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentClaims.map((claim) => (
                <tr key={claim.id} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-slate-700">{claim.id}</td>
                  <td className="px-6 py-4 text-slate-800">{claim.worker}</td>
                  <td className="px-6 py-4 text-slate-600">{claim.type}</td>
                  <td className="px-6 py-4 font-semibold text-slate-800">{claim.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[claim.status]}`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{claim.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
