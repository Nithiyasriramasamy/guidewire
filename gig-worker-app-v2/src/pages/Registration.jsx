import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Briefcase, MapPin, IndianRupee, ShieldCheck } from 'lucide-react';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    platform: 'Swiggy',
    location: '',
    income: ''
  });
  const [isLocating, setIsLocating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    // Simulating API call/submission and saving data to local storage for the dashboard
    localStorage.setItem('gigworker_income', formData.income);
    localStorage.setItem('gigworker_platform', formData.platform);
    localStorage.setItem('gigworker_location', formData.location || 'Bangalore, Tier-1');
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const autoDetectLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setFormData(prev => ({ ...prev, location: 'Indiranagar, Bangalore (Tier-1)' }));
      setIsLocating(false);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Registration Successful!</h2>
        <p className="text-slate-600 text-lg">Your profile has been created. Redirecting to your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-blue-600 mb-4">
           <ShieldCheck className="w-10 h-10" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Create Worker Profile
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Enter your details to calculate your insurance premium.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-2.5 bg-slate-50 border transition-colors outline-none"
                  placeholder="Rahul Sharma"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
               <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Mobile Number</label>
               <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Phone className="h-5 w-5 text-slate-400" />
                 </div>
                 <input
                   type="tel"
                   id="phone"
                   className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-2.5 bg-slate-50 border transition-colors outline-none"
                   placeholder="+91 98765 43210"
                   required
                 />
               </div>
            </div>

            {/* Platform */}
            <div>
               <label htmlFor="platform" className="block text-sm font-medium text-slate-700">Delivery Platform</label>
               <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Briefcase className="h-5 w-5 text-slate-400" />
                 </div>
                 <select
                   id="platform"
                   className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 sm:text-sm border-slate-300 rounded-lg py-2.5 bg-slate-50 border transition-colors outline-none appearance-none"
                   value={formData.platform}
                   onChange={(e) => setFormData({...formData, platform: e.target.value})}
                 >
                   <option>Swiggy</option>
                   <option>Zomato</option>
                   <option>Amazon</option>
                   <option>Zepto</option>
                   <option>Blinkit</option>
                 </select>
               </div>
            </div>

            {/* Location */}
            <div>
               <label htmlFor="location" className="block text-sm font-medium text-slate-700">Location</label>
               <div className="mt-1 relative rounded-md shadow-sm flex">
                 <div className="relative flex-grow focus-within:z-10">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <MapPin className="h-5 w-5 text-slate-400" />
                   </div>
                   <input
                     type="text"
                     id="location"
                     className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-l-lg py-2.5 bg-slate-50 border transition-colors outline-none"
                     placeholder="Enter your location"
                     value={formData.location}
                     onChange={(e) => setFormData({...formData, location: e.target.value})}
                     required
                   />
                 </div>
                 <button
                   type="button"
                   onClick={autoDetectLocation}
                   className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-slate-300 text-sm font-medium rounded-r-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                 >
                   <span>{isLocating ? 'Detecting...' : 'Auto-detect'}</span>
                 </button>
               </div>
            </div>

            {/* Avg Income */}
            <div>
               <label htmlFor="income" className="block text-sm font-medium text-slate-700">Average Weekly Income (₹)</label>
               <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <IndianRupee className="h-5 w-5 text-slate-400" />
                 </div>
                 <input
                   type="number"
                   id="income"
                   className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-2.5 bg-slate-50 border transition-colors outline-none"
                   placeholder="e.g. 5000"
                   value={formData.income}
                   onChange={(e) => setFormData({...formData, income: e.target.value})}
                   required
                 />
               </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Continue to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
