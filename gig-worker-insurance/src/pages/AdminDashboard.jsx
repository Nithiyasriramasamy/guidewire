import React from 'react';
import { Users, AlertTriangle, ShieldAlert, Activity, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mon', Weather: 400, Outage: 240, Medical: 20 },
  { name: 'Tue', Weather: 300, Outage: 139, Medical: 21 },
  { name: 'Wed', Weather: 200, Outage: 980, Medical: 19 },
  { name: 'Thu', Weather: 2780, Outage: 390, Medical: 20 },
  { name: 'Fri', Weather: 1890, Outage: 480, Medical: 18 },
  { name: 'Sat', Weather: 2390, Outage: 380, Medical: 35 },
  { name: 'Sun', Weather: 3490, Outage: 430, Medical: 42 },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Platform Admin Center</h1>
          <p className="text-slate-500">System metrics and fraud detection overview.</p>
        </div>
        <div className="flex space-x-3">
           <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition">Export Report</button>
           <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition">Manage Rules</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Total Insured Workers</span>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">142,892</div>
          <div className="text-sm text-green-600 flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +2.4% vs last month
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Claims Triggered (Weekly)</span>
            <Activity className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">18,340</div>
          <div className="text-sm text-red-600 flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +14.2% (Due to Monsoon)
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-sm font-medium">Avg Premium Pool / Week</span>
            <IndianRupee className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">₹6.4M</div>
          <div className="text-sm text-slate-500 flex items-center">
            Healthy system capacity
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Claim Triggers Distribution</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="Weather" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Outage" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="Medical" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fraud / Alert List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 flex items-center">
              Fraud & Risk Alerts <ShieldAlert className="w-5 h-5 ml-2 text-red-500" />
            </h2>
          </div>
          <div className="flex-1 p-5 overflow-y-auto space-y-4">
            <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-sm">
              <div className="font-bold flex items-center mb-1"><AlertTriangle className="w-4 h-4 mr-2" /> GPS Spoofing Detected</div>
              High frequency of identical coordinates detected in Zone B (Indiranagar). 44 accounts suspended.
            </div>
            <div className="p-4 bg-amber-50 border border-amber-100 text-amber-700 rounded-xl text-sm">
              <div className="font-bold flex items-center mb-1"><AlertTriangle className="w-4 h-4 mr-2" /> False Medical Claim Spike</div>
              Unusual cluster of medical claims originating from single clinic provider. Under automated review.
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm">
              <div className="font-bold flex items-center mb-1"><AlertTriangle className="w-4 h-4 mr-2" /> API Synchronization Lag</div>
              Zomato API integration experiencing 35s latency. May delay real-time payout processing temporarily.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
