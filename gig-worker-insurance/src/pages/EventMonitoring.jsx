import React from 'react';
import { CloudRain, Wind, AlertCircle, MapPin, Radio, AlertOctagon } from 'lucide-react';

const EventMonitoring = () => {
  const events = [
    {
      id: 1,
      type: 'Weather',
      title: 'Heavy Rainfall Warning',
      description: 'Severe waterlogging expected. Delivery times impacted.',
      area: 'Koramangala, Indiranagar',
      status: 'Active',
      icon: CloudRain,
      color: 'blue'
    },
    {
      id: 2,
      type: 'Curfew',
      title: 'Section 144 Imposed',
      description: 'Public gatherings restricted. Delivery apps paused.',
      area: 'Shivajinagar, Central Zone',
      status: 'High Alert',
      icon: AlertOctagon,
      color: 'red'
    },
    {
      id: 3,
      type: 'Pollution',
      title: 'AQI Exceeds 450',
      description: 'Hazardous air quality detected. Outdoor work restricted.',
      area: 'Marathahalli',
      status: 'Monitoring',
      icon: Wind,
      color: 'amber'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center">
            Live Event Monitoring 
            <span className="relative flex h-3 w-3 ml-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </h1>
          <p className="text-slate-500">Real-time alerts tracking potential income disruptions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts List */}
        <div className="lg:col-span-2 space-y-4">
          {events.map((event) => {
            const Icon = event.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-700 border-blue-200',
              red: 'bg-red-50 text-red-700 border-red-200',
              amber: 'bg-amber-50 text-amber-700 border-amber-200',
            }[event.color];

            const iconColorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              red: 'bg-red-100 text-red-600',
              amber: 'bg-amber-100 text-amber-600',
            }[event.color];

            return (
              <div key={event.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex gap-5 transition hover:shadow-md">
                <div className={`p-4 rounded-full h-fit ${iconColorClasses}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClasses}`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{event.description}</p>
                  <div className="flex items-center mt-3 text-sm font-medium text-slate-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    Affected Area: <span className="text-slate-700 ml-1">{event.area}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 flex items-center">
              <Radio className="w-5 h-5 mr-2 text-slate-400" />
              Risk Heatmap
            </h3>
          </div>
          <div className="flex-1 bg-slate-100 relative group cursor-pointer">
            {/* Abstract visual of a map */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-200 to-slate-100 pattern-grid-lg"></div>
            
            {/* Heat zones */}
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse delay-100"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/5">
              <MapPin className="w-12 h-12 text-slate-700 mb-2" />
              <span className="text-slate-700 font-medium font-sm bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">View Interactive Map</span>
            </div>
            
            {/* Pins */}
            <div className="absolute top-[28%] left-[38%]">
              <div className="w-3 h-3 bg-red-600 rounded-full ring-4 ring-red-200"></div>
            </div>
            <div className="absolute bottom-[40%] right-[30%]">
              <div className="w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMonitoring;
