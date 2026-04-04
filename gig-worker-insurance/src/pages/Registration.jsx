import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Briefcase, IndianRupee, Phone, User, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Registration = () => {
  const navigate = useNavigate();
  const { register } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    platform: 'Swiggy',
    location: '',
    income: ''
  });
  const [isLocating, setIsLocating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const platforms = [
    { name: 'Swiggy', color: 'bg-orange-50 border-orange-200 text-orange-700' },
    { name: 'Zomato', color: 'bg-red-50 border-red-200 text-red-700' },
    { name: 'Amazon Flex', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { name: 'Zepto', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { name: 'Blinkit', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
    { name: 'Dunzo', color: 'bg-green-50 border-green-200 text-green-700' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      register(formData);
      navigate('/dashboard');
    }, 2000);
  };

  const autoDetectLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setTimeout(() => {
            setFormData(prev => ({ ...prev, location: 'Koramangala, Bangalore' }));
            setIsLocating(false);
          }, 1000);
        },
        () => {
          setTimeout(() => {
            setFormData(prev => ({ ...prev, location: 'Koramangala, Bangalore' }));
            setIsLocating(false);
          }, 1000);
        }
      );
    } else {
      setTimeout(() => {
        setFormData(prev => ({ ...prev, location: 'Koramangala, Bangalore' }));
        setIsLocating(false);
      }, 1000);
    }
  };

  const estimatedPremium = formData.income ? `₹${Math.round(Number(formData.income) * 0.007)}` : '₹--';
  const estimatedCoverage = formData.income ? `₹${Math.round(Number(formData.income) * 0.7).toLocaleString('en-IN')}` : '₹--';

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Registration Successful!</h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Welcome to GigSafe, <span className="font-semibold text-slate-700">{formData.name}</span>! 
            Your income protection is being set up...
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-medium">Redirecting to dashboard...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Shield className="h-7 w-7 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900">Join GigSafe</h1>
          <p className="text-slate-500 mt-2">Secure your gig income in under 2 minutes</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-200 text-slate-500'}`}>
                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              {s < 2 && <div className={`w-12 h-1 rounded-full transition-all ${step > 1 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Personal Details</h3>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <input 
                      type="text" required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <div className="absolute left-12 top-3 text-slate-500 font-medium">+91</div>
                    <input 
                      type="tel" required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-20 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="98765 43210"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Delivery Platform</label>
                  <div className="grid grid-cols-3 gap-2">
                    {platforms.map(p => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setFormData({...formData, platform: p.name})}
                        className={`px-3 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${formData.platform === p.name ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => { if (formData.name && formData.phone) setStep(2); }}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Work Details</h3>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Work Location</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                      <input 
                        type="text" required
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter city or area"
                      />
                    </div>
                    <button 
                      type="button"
                      onClick={autoDetectLocation}
                      disabled={isLocating}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition whitespace-nowrap disabled:opacity-50"
                    >
                      {isLocating ? (
                        <div className="w-5 h-5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        '📍 Auto-detect'
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Average Weekly Income (₹)</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <input 
                      type="number" required
                      value={formData.income}
                      onChange={e => setFormData({...formData, income: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="e.g. 6000"
                    />
                  </div>
                </div>

                {/* Preview Card */}
                {formData.income && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      <p className="text-sm font-bold text-blue-800">Your Estimated Plan</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500">Weekly Premium</p>
                        <p className="text-xl font-bold text-slate-900">{estimatedPremium}<span className="text-sm font-normal text-slate-500">/week</span></p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Coverage Amount</p>
                        <p className="text-xl font-bold text-green-700">{estimatedCoverage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 flex items-center justify-center bg-blue-600 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                  >
                    Create Account & Get Insured
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
