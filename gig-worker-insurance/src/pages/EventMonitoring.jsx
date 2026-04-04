import React, { useState } from 'react';
import { CloudRain, Droplets, Wind, AlertCircle, MapPin, Radio, AlertOctagon, AlertTriangle, Ban, Thermometer } from 'lucide-react';
import { useApp } from '../context/AppContext';

const iconMap = {
  Weather: CloudRain,
  Flood: Droplets,
  Pollution: Wind,
  Curfew: Ban,
};

const EventMonitoring = () => {
  const { alerts, user } = useApp();
  const [filter, setFilter] = useState('All');

  const filteredAlerts = filter === 'All' ? alerts : alerts.filter(a => a.type === filter);
  const types = ['All', ...new Set(alerts.map(a => a.type))];

  const riskConfig = {
    low: { color: 'text-green-600', bg: 'bg-green-500', label: 'Low Risk', percent: 25 },
    medium: { color: 'text-amber-600', bg: 'bg-amber-500', label: 'Medium Risk', percent: 55 },
    high: { color: 'text-red-600', bg: 'bg-red-500', label: 'High Risk', percent: 85 },
  };
  const risk = riskConfig[user.riskLevel] || riskConfig.medium;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center">
            Real-Time Alerts
            <span className="relative flex h-3 w-3 ml-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </h1>
          <p className="text-slate-500">Live alerts tracking disruptions that impact your deliveries.</p>
        </div>
      </div>

      {/* Risk Level Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${risk.bg} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
              <AlertTriangle className={`w-7 h-7 ${risk.color}`} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Current Risk Level for {user.location.split(',')[0]}</p>
              <p className={`text-2xl font-bold ${risk.color}`}>{risk.label}</p>
            </div>
          </div>
          <div className="w-full sm:w-56">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>Low</span><span>Medium</span><span>High</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div className={`h-3 rounded-full ${risk.bg} transition-all duration-700`} style={{ width: `${risk.percent}%` }}></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{user.riskReason}</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === type ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredAlerts.map((event) => {
            const Icon = iconMap[event.type] || AlertCircle;
            const severityColors = {
              high: { card: 'border-l-4 border-l-red-500', badge: 'bg-red-50 text-red-700 border-red-200', iconBg: 'bg-red-100 text-red-600' },
              medium: { card: 'border-l-4 border-l-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', iconBg: 'bg-amber-100 text-amber-600' },
              low: { card: 'border-l-4 border-l-green-500', badge: 'bg-green-50 text-green-700 border-green-200', iconBg: 'bg-green-100 text-green-600' },
            };
            const sc = severityColors[event.severity] || severityColors.medium;

            return (
              <div key={event.id} className={`bg-white rounded-xl p-5 border border-slate-200 shadow-sm ${sc.card} transition hover:shadow-md`}>
                <div className="flex gap-4">
                  <div className={`p-3 rounded-xl h-fit ${sc.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${sc.badge}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mt-1">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-3">
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin className="w-4 h-4 mr-1 shrink-0" />
                        <span className="text-slate-700 font-medium">{event.area}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <AlertCircle className="w-4 h-4 mr-1 shrink-0" />
                        <span>{event.impact}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-2">{event.time}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredAlerts.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No alerts for this category</p>
            </div>
          )}
        </div>

        {/* Risk Heatmap Sidebar */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 flex items-center">
              <Radio className="w-5 h-5 mr-2 text-slate-400" />
              Risk Heatmap
            </h3>
          </div>
          <div className="flex-1 bg-slate-100 relative group cursor-pointer min-h-[350px]">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-300 to-slate-100"></div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Heat zones */}
            <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-[25%] right-[20%] w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute top-[55%] left-[15%] w-28 h-28 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
            
            {/* Pins */}
            <div className="absolute top-[22%] left-[35%]">
              <div className="w-3 h-3 bg-red-600 rounded-full ring-4 ring-red-200 animate-ping"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full absolute top-0"></div>
            </div>
            <div className="absolute bottom-[30%] right-[25%]">
              <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-200"></div>
            </div>
            <div className="absolute top-[58%] left-[18%]">
              <div className="w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-200"></div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> High</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Medium</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMonitoring;
