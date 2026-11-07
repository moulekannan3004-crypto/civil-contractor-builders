import React, { useState } from 'react';
import { 
  Building, 
  Lock, 
  Mail, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  FileText,
  KeyRound,
  CheckCircle2
} from 'lucide-react';

export default function AuthPage({ setCurrentPage }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('client'); // 'client' or 'subcontractor'
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [companyName, setCompanyName] = useState('');

  const fillDemoCredentials = () => {
    setEmail('client.demo@apexbuildcivil.com');
    setPassword('ApexBuild2026!');
    setProjectCode('PRJ-98402');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      alert(`Welcome back, ${email}! Redirecting to your active project dashboard...`);
    } else {
      alert(`Registration submitted for ${fullName}! Your project portal account has been provisioned.`);
    }
    setCurrentPage('home');
  };

  return (
    <div className="relative min-h-screen w-full bg-navy-950 flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000&q=80"
          alt="Civil project superintendent managing digital inspection portal on site"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/65" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-md w-full mx-4">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center gap-2.5 group focus:outline-none mb-3"
          >
            <div className="w-10 h-10 rounded-lg bg-construction-500 flex items-center justify-center text-navy-950 font-black shadow">
              <Building className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <span className="text-xl font-black font-heading text-white tracking-wider">
                APEX<span className="text-construction-500">BUILD</span>
              </span>
              <p className="text-[9px] tracking-widest uppercase font-bold text-slate-300">
                Client & Trade Portal
              </p>
            </div>
          </button>
          <h1 className="text-2xl font-black font-heading text-charcoal-900">
            {authMode === 'login' ? 'Project Portal Login' : 'Create Portal Account'}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Access 24/7 job-site cameras, daily inspection logs, and billing statements.
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          
          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
            <button
              type="button"
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                authMode === 'login'
                  ? 'bg-white text-charcoal-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('register')}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                authMode === 'register'
                  ? 'bg-white text-charcoal-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Register Portal
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Role Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Portal Access Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    role === 'client'
                      ? 'border-construction-500 bg-construction-50 text-construction-700'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Project Client</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('subcontractor')}
                  className={`p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    role === 'subcontractor'
                      ? 'border-construction-500 bg-construction-50 text-construction-700'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Trade Subcontractor</span>
                </button>
              </div>
            </div>

            {/* Registration specific fields */}
            {authMode === 'register' && (
              <>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Legal Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z\s'-]/g, ''))}
                      pattern="[a-zA-Z\s'-]+"
                      title="Letters and spaces only (numbers not accepted)"
                      placeholder="e.g. Rachel Adams"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Entity Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Metro Heights Capital LLC"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                  />
                </div>
              </>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Authorized Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@company.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to your registered email.')}
                    className="text-[10px] text-construction-600 hover:underline font-bold"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Optional Project Reference Code */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Ref ID <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={projectCode}
                  onChange={(e) => setProjectCode(e.target.value)}
                  placeholder="e.g. PRJ-98402"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-solid-orange transition-all mt-2"
            >
              {authMode === 'login' ? 'Sign In to Portal' : 'Complete Registration'}
            </button>
          </form>

          {/* Quick Demo Fill Helper */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Need quick testing?</span>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-construction-600 font-bold hover:underline"
            >
              Autofill Demo Credentials
            </button>
          </div>
        </div>

        {/* Security badge note */}
        <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted &bull; ISO 27001 Certified Construction Cloud</span>
        </div>

      </div>
    </div>
  );
}
