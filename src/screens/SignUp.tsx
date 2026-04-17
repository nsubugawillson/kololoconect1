import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/enrollment-successful');
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary selection:text-on-primary">
      {/* Background Decorative Elements (Asymmetric Blurs) */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-surface-container-high/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <main className="w-full max-w-md z-10">
        {/* School Crest Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 mb-6 relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <img
              alt="Kololo School Crest"
              className="relative w-full h-full object-contain filter drop-shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1uFWcD45TZdWZd9i0pkT8QGkoDSInOnOfQdoupMbwfsq1eUZQmQBNWIvtLlhHkW7qAkVqZ0uC5aItIXUrgRFUYmm7_hXlT9nTTIA1RmE5DI25B-jeEAgrUpFhBh8h_osx8iY0p8FNIVHZPYT7ub-MdPks3RF4FUwTBQ_TZmfFBDt4YvZPElzsUl6dCBAsRcwN9QpketpKObc_RNQY1lLvwX-xohd8ih0uYGPP70p3N6xf_yaTpZqNq-9TsR_lNt-R72jHWsN-Ih6Y"
            />
          </div>
          <h1 className="font-headline italic font-bold tracking-tight text-5xl text-primary md:text-6xl text-center">Kololo Notice</h1>
          <p className="font-label text-xs uppercase tracking-[0.3em] text-on-surface/60 mt-2">Kololo Notice Portal</p>
        </div>

        {/* Sign Up Form Card */}
        <div className="glass-panel p-8 rounded-xl shadow-2xl relative overflow-hidden">
          {/* Subtle internal glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="mb-8">
            <h2 className="font-headline text-2xl text-on-surface mb-1">Create your account</h2>
            <p className="text-on-surface/60 text-sm">Join the academic community and stay informed.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Full Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors">person</span>
                <input
                  className="w-full bg-surface-container-low text-on-surface border-none rounded-lg py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-primary/50 transition-all text-sm placeholder-on-surface/40"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Email or ID */}
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Email or Student ID</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors">badge</span>
                <input
                  className="w-full bg-surface-container-low text-on-surface border-none rounded-lg py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-primary/50 transition-all text-sm placeholder-on-surface/40"
                  placeholder="e.g. 2023-UG-0123"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* User Role */}
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">User Role</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors">person_pin</span>
                <select className="w-full bg-surface-container-low text-on-surface border-none rounded-lg py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-primary/50 transition-all text-sm appearance-none" required defaultValue="">
                  <option disabled value="">Select your role</option>
                  <option className="bg-surface-container-low" value="student">Student</option>
                  <option className="bg-surface-container-low" value="staff">Staff</option>
                  <option className="bg-surface-container-low" value="parent">Parent</option>
                  <option className="bg-surface-container-low" value="admin">Admin</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface/40 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Password</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors">lock</span>
                <input
                  className="w-full bg-surface-container-low text-on-surface border-none rounded-lg py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-primary/50 transition-all text-sm placeholder-on-surface/40"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Confirm Password</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors">verified_user</span>
                <input
                  className="w-full bg-surface-container-low text-on-surface border-none rounded-lg py-3.5 pl-12 pr-4 focus:ring-1 focus:ring-primary/50 transition-all text-sm placeholder-on-surface/40"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 py-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 rounded bg-surface-container-low border-none text-primary focus:ring-primary/50"
              />
              <label htmlFor="terms" className="text-xs text-on-surface/50 leading-relaxed">
                I agree to the <span className="text-primary hover:underline cursor-pointer">Honor Code</span> and <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-on-primary-fixed font-bold py-4 rounded-full transition-all active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4 group"
            >
              <span className="font-label uppercase tracking-widest text-sm">Enrol into Portal</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          {/* Footer Action */}
          <div className="mt-8 text-center">
            <p className="text-sm text-on-surface/60">
              Already a member of the archive? 
              <Link to="/login" className="text-primary font-bold hover:text-secondary transition-colors ml-1">Sign In</Link>
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-12 flex justify-between items-center opacity-40">
          <div className="h-[1px] flex-grow bg-on-surface/20"></div>
          <div className="px-4 font-label text-[9px] uppercase tracking-[0.4em] whitespace-nowrap">Est. 1954 • Academic Excellence</div>
          <div className="h-[1px] flex-grow bg-on-surface/20"></div>
        </div>
      </main>

      {/* Sticky Visual Flourish */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end pointer-events-none">
        <div className="text-[120px] font-headline font-black text-on-surface/[0.02] leading-none select-none">
          ARCHIVE
        </div>
      </div>
    </div>
  );
}
