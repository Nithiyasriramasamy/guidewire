import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, IndianRupee, Phone, User, CheckCircle } from 'lucide-react';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    platform: 'swiggy',
    location: '',
    income: ''
  });
  const [isLocating, setIsLocating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const autoDetectLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setFormData(prev => ({ ...prev, location: 'Koramangala, Bangalore (Tier-1)' }));
      setIsLocating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join GigSafe</h2>
          <p className="text-blue-100 mt-2">Secure your gig income against unpredictability.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  required
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Rahul Sharma"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input 
                  type="tel" 
                  required
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Platform</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <select 
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                  value={formData.platform}
                  onChange={e => setFormData({...formData, platform: e.target.value})}
                >
                  <option value="swiggy">Swiggy</option>
                  <option value="zomato">Zomato</option>
                  <option value="amazon">Amazon Flex</option>
                  <option value="zepto">Zepto</option>
                  <option value="blinkit">Blinkit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Primary Work Location</label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter city or area"
                  />
                </div>
                <button 
                  type="button"
                  onClick={autoDetectLocation}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition"
                >
                  {isLocating ? 'Locating...' : 'Auto-detect'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Average Weekly Income (₹)</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input 
                  type="number" 
                  required
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="4500"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">Your premium and payout amounts are calculated based on this.</p>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account & Get Insured
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
