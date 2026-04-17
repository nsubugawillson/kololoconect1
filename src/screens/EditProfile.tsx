import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic would go here
    navigate('/profile');
  };

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen pb-20 md:pb-0">
      {/* TopAppBar - Contextual Back Navigation */}
      <header className="bg-[#021616] sticky top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-4 h-16">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/profile')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface active:scale-95"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <span className="font-headline text-xl font-bold">Edit Profile</span>
          </div>
          <button 
            onClick={handleSave}
            className="font-label text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary-fixed transition-colors px-4 py-2"
          >
            Save
          </button>
        </div>
      </header>

      <main className="pt-8 px-6 max-w-3xl mx-auto space-y-12">
        {/* Profile Picture Update */}
        <section className="flex flex-col items-center">
          <div className="relative group cursor-pointer mb-4">
            <div className="w-32 h-32 rounded-full border-2 border-outline-variant/20 overflow-hidden relative z-10 group-hover:border-primary/50 transition-colors">
              <img
                alt="Student Portrait"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqRInzNn8O51A5z-z1lOIQ1XnXY7C0R57K1hG2B5-2Q30J5Z3Wc5xSCLhT8kQ_QcIQl6R1_6A3A3KzF-qg_4Z-7Dq8XU5S1XmX9Iq-Tqz7Q2bYnC0-1-Gj6YgX1T2qIQZXZ5L7wK_1x-GZ8T9D-5n_wR2e_sJ39D_2Q8L_3z0D0R5Wwz513qQY0X-"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                 <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
              </div>
            </div>
          </div>
          <p className="font-label text-xs uppercase font-bold tracking-widest text-on-surface/50">Update Portrait</p>
        </section>

        {/* Form Fields */}
        <form onSubmit={handleSave} className="space-y-8">
          
          <div className="space-y-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/5">
            <h3 className="font-headline text-lg font-bold text-primary mb-4 border-b border-outline-variant/10 pb-2">Personal Information</h3>
            
            {/* Bio */}
            <div className="space-y-2 relative">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Personal Quote / Bio</label>
              <textarea 
                className="w-full bg-surface-container text-on-surface border border-outline-variant/10 rounded-xl p-4 focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm font-body resize-none min-h-[100px]"
                defaultValue='"Striving for excellence in literature and debate."'
              ></textarea>
              <span className="absolute bottom-3 right-3 text-[10px] text-on-surface-variant/50 font-label">54 / 150</span>
            </div>

            {/* Email (Read Only Visual) */}
            <div className="space-y-2">
               <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block ml-1">Institutional Email</label>
               <div className="w-full bg-surface-container-highest/30 text-on-surface/40 border border-outline-variant/5 rounded-xl p-4 text-sm font-body cursor-not-allowed flex items-center justify-between">
                 <span>s.nampeera@kololo.edu</span>
                 <span className="material-symbols-outlined text-sm">lock</span>
               </div>
               <p className="text-[10px] text-on-surface-variant/50 ml-1 italic">Contact administration to update locked records.</p>
            </div>
          </div>

          <div className="space-y-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/5">
            <h3 className="font-headline text-lg font-bold text-secondary mb-4 border-b border-outline-variant/10 pb-2">Settings</h3>
            
             {/* Notifications Toggle */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-headline font-bold text-base">Push Notifications</p>
                <p className="font-body text-xs text-on-surface-variant">Receive alerts for new announcements.</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer flex items-center p-1">
                <div className="w-4 h-4 bg-on-primary-fixed rounded-full absolute right-1 shadow-sm"></div>
              </div>
            </div>

            {/* Visibility Toggle */}
            <div className="flex items-center justify-between py-2 border-t border-outline-variant/10">
              <div>
                <p className="font-headline font-bold text-base">Profile Visibility</p>
                <p className="font-body text-xs text-on-surface-variant">Allow other students to see your profile.</p>
              </div>
              <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer flex items-center p-1">
                <div className="w-4 h-4 bg-outline rounded-full absolute left-1 shadow-sm"></div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between gap-4">
             <button 
               type="button"
               onClick={() => navigate('/profile')}
               className="flex-1 py-4 rounded-full border border-error/50 text-error font-label font-bold text-xs uppercase tracking-widest hover:bg-error/10 transition-colors"
             >
               Discard Changes
             </button>
             <button 
               type="submit"
               className="flex-1 py-4 rounded-full bg-primary text-on-primary-fixed font-label font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-primary/20 transition-all active:scale-95"
             >
               Save Profile
             </button>
          </div>

        </form>
      </main>
    </div>
  );
}
