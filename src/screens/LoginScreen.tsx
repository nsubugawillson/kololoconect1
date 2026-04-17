import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary selection:text-on-primary relative">
      {/* Hero Background Element (Subtle Abstract) */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-surface-container-high/20 blur-[100px]"></div>
      </div>

      <main className="w-full max-w-md">
        {/* Brand Identity Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-125"></div>
            <img
              alt="Kololo High School Crest"
              className="w-24 h-24 rounded-full relative z-10 object-cover border-2 border-primary/30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYdkPYd3f699dtZPPW7YyW_ajrwbA_18JXvVf2ge8Y0FwZ1d-g4CCK5hTEszrY1HNu_aoLRsG85W6lMRZN7ub0NcvmGdAbPncjl8xvGi4stLT9J18cebHxsjHjB4-FrLpj98PfyrCu8xXuAXp_jZPQXYfrExusBIPmAPdnIlK_rvJqY6_Iu60A-Q1JsWDe_fegMsjBzJxty28ngAcn3UwF6B6NtSvAYIV33LqKOEc-VRdIMt0q_pnanK3jzJSln96bO77c1NBZM7zq"
            />
          </div>
          <h1 className="font-headline italic font-bold text-4xl text-on-surface tracking-tight mb-2">Kololo Notice</h1>
          <p className="font-label text-sm uppercase tracking-[0.2em] text-primary/80 font-semibold">The Modern Archivist</p>
        </div>

        {/* Login Container */}
        <div className="glass-panel p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
          {/* Asymmetrical Accent Decor */}
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          
          <header className="mb-8">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant text-sm">Access the Kololo High School portal.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection Dropdown */}
            <div className="space-y-2">
              <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant block ml-1" htmlFor="role">Select Role</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">badge</span>
                <select
                  id="role"
                  name="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-surface-container-low border-none text-on-surface rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 appearance-none transition-all font-body cursor-pointer"
                >
                  <option disabled value="">Choose your role</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none group-focus-within:text-primary transition-colors">expand_more</span>
              </div>
              <p className="mt-2 px-1 text-[10px] text-on-surface-variant/70 italic">* Admins will be directed to the curator's ledger, others to the public archives.</p>
            </div>

            {/* Username/Email Field */}
            <div className="space-y-2">
              <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant block ml-1" htmlFor="identity">Username or Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
                <input
                  id="identity"
                  name="identity"
                  placeholder="e.g. k.smith@kololo.edu"
                  required
                  type="text"
                  className="w-full bg-surface-container-low border-none text-on-surface rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 placeholder:text-outline/50 transition-all font-body"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant block" htmlFor="password">Password</label>
                <a className="text-[10px] font-bold text-primary hover:text-secondary uppercase tracking-tighter transition-colors" href="#">Forgot?</a>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                <input
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  className="w-full bg-surface-container-low border-none text-on-surface rounded-xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-primary/50 placeholder:text-outline/50 transition-all font-body"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-2 px-1 text-[10px] text-primary/60 font-medium uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">info</span>
              <span>Redirecting based on credentials</span>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:brightness-110 text-on-secondary-fixed font-label font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 mt-4 group"
            >
              <span>Log In to Portal</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          {/* Secondary Links */}
          <div className="mt-10 pt-8 border-t border-outline-variant/20 text-center">
            <p className="text-on-surface-variant text-sm font-body">
              Don't have an account?
              <Link to="/signup" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">Sign up</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a className="text-outline hover:text-on-surface transition-colors" href="#">
              <span className="material-symbols-outlined">help_center</span>
            </a>
            <a className="text-outline hover:text-on-surface transition-colors" href="#">
              <span className="material-symbols-outlined">policy</span>
            </a>
            <a className="text-outline hover:text-on-surface transition-colors" href="#">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
          <p className="font-label text-[10px] uppercase tracking-widest text-outline/40">© 2024 Kololo High School Academic Archive</p>
        </footer>
      </main>

      {/* Decorative Corner Element */}
      <div className="fixed bottom-0 right-0 p-8 opacity-10 hidden md:block select-none pointer-events-none">
        <span className="font-headline text-[180px] leading-none italic font-bold text-on-surface">K</span>
      </div>
    </div>
  );
}
