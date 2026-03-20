import React from 'react';
import { CloudRain, Wind, ShieldAlert, AlertCircle, MapPin, Activity } from 'lucide-react';

const Alerts = () => {
  const alertsList = [
    {
      id: 1,
      type: 'Heavy Rain Alert',
      location: 'Koramangala, Indiranagar',
      impact: 'Deliveries Reduced (High Risk)',
      status: 'Active',
      icon: CloudRain,
      color: 'red' // red = Risk
    },
    {
      id: 2,
      type: 'Curfew / Strike Alert',
      location: 'Shivajinagar, Central Area',
      impact: 'Deliveries Stopped',
      status: 'Warning',
      icon: ShieldAlert,
      color: 'yellow' // yellow = Warning
    },
    {
      id: 3,
      type: 'High Pollution Alert',
      location: 'Marathahalli',
      impact: 'Normal operations with masks advisable',
      status: 'Safe',
      icon: Wind,
      color: 'green' // green = Safe
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Risk & Alerts</h1>
        <p className="text-slate-500 mt-1">Real-time tracking of disruptions in your city.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {alertsList.map((alert) => {
          const Icon = alert.icon;
          
          let colorClasses = '';
          let iconBgClasses = '';
          if (alert.color === 'red') {
            colorClasses = 'border-red-200 bg-red-50';
            iconBgClasses = 'bg-red-100 text-red-600';
          } else if (alert.color === 'yellow') {
            colorClasses = 'border-yellow-200 bg-yellow-50';
            iconBgClasses = 'bg-yellow-100 text-yellow-600';
          } else if (alert.color === 'green') {
            colorClasses = 'border-green-200 bg-green-50';
            iconBgClasses = 'bg-green-100 text-green-600';
          }

          return (
            <div key={alert.id} className={`p-6 rounded-2xl border ${colorClasses} flex flex-col md:flex-row gap-6 md:items-center`}>
              <div className={`p-4 rounded-xl ${iconBgClasses} shrink-0`}>
                <Icon className="w-8 h-8" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-slate-900">{alert.type}</h2>
                  {alert.color === 'red' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                      High Risk
                    </span>
                  )}
                  {alert.color === 'yellow' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">
                      Warning
                    </span>
                  )}
                  {alert.color === 'green' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                      Safe
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-slate-700 font-medium">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                  {alert.location}
                </div>
                
                <div className="flex items-center text-slate-700 font-medium">
                  <Activity className="w-4 h-4 mr-2 text-slate-400" />
                  Impact: <span className={`ml-1 font-bold ${alert.color === 'red' ? 'text-red-700' : 'text-slate-800'}`}>{alert.impact}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alerts;
