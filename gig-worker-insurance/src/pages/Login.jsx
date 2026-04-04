import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Phone, Lock, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useApp();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
    }, 1000);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login({ phone: `+91 ${phone}` });
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Shield className="h-7 w-7 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Login to your GigSafe account</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8">
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <div className="absolute left-12 top-3 text-slate-500 font-medium">+91</div>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full pl-20 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-lg"
                      placeholder="98765 43210"
                      maxLength={10}
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Send OTP <ArrowRight className="ml-2 h-5 w-5" /></>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify} className="space-y-5">
                <div className="text-center mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-7 w-7 text-green-600" />
                  </div>
                  <p className="text-sm text-slate-600">OTP sent to <span className="font-semibold">+91 {phone}</span></p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Enter OTP</label>
                  <input 
                    type="text" 
                    required
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    className="w-full text-center text-2xl tracking-[0.5em] py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-mono"
                    placeholder="• • • •"
                    maxLength={4}
                  />
                  <p className="text-xs text-slate-400 mt-2 text-center">Enter any 4-digit code to login (demo)</p>
                </div>
                <button 
                  type="submit"
                  disabled={loading || otp.length < 4}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Verify & Login</>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => { setOtpSent(false); setOtp(''); }}
                  className="w-full text-sm text-slate-500 hover:text-slate-700 transition"
                >
                  ← Change phone number
                </button>
              </form>
            )}
          </div>

          <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-700">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
