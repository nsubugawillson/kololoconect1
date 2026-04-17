import { useNavigate, Link } from 'react-router-dom';

export default function StudentProfile() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#021616]/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
          <div className="flex items-center gap-4">
            <Link to="/home" className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <img
                alt="Kololo Crest"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6SG1eGsCDUz-FwVhr8UFN08tWysqd-5rSweNj_S-ryShPwy8g4F8gS5jfE04poswhmxVTWo1nX4iIu6-Id1DX6enbyezImtPMnVKFnbHILPLq0bBu5kPoO7Cgz7v01cMxM_uz0moVHkYf4WzdTu0YyGCiZkSNFKxhwuh9FoSibK_kfhyoCB40JE8T-2FW_MNjoNB6mjdTTqgRYF7X5WueU-6Ah5-tXkAiVYjEhZK5PZDpKhrmQ3QJWRoz2DfnsQ8ji0MCHCC8EyC"
              />
            </Link>
            <span className="font-headline text-2xl italic font-bold">Kololo Notice</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/home" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">HOME</Link>
            <Link to="/resources" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">RESOURCES</Link>
            <span className="font-label text-sm font-semibold tracking-wider text-[#ffb955] border-b-2 border-[#ffb955] pb-1">PROFILE</span>
            <Link to="/about" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">ABOUT</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Identity Column */}
          <aside className="md:col-span-4 flex flex-col items-center text-center space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110"></div>
              <div className="w-48 h-48 rounded-full border-4 border-surface-container-high overflow-hidden relative z-10 bg-surface-container-highest shadow-2xl">
                <img
                  alt="Student Portrait"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqRInzNn8O51A5z-z1lOIQ1XnXY7C0R57K1hG2B5-2Q30J5Z3Wc5xSCLhT8kQ_QcIQl6R1_6A3A3KzF-qg_4Z-7Dq8XU5S1XmX9Iq-Tqz7Q2bYnC0-1-Gj6YgX1T2qIQZXZ5L7wK_1x-GZ8T9D-5n_wR2e_sJ39D_2Q8L_3z0D0R5Wwz513qQY0X-"
                />
              </div>
              <button 
                onClick={() => navigate('/edit-profile')}
                className="absolute bottom-2 right-2 w-12 h-12 bg-primary text-on-primary-fixed rounded-full flex items-center justify-center shadow-lg border-2 border-background hover:scale-110 transition-transform z-20"
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
            </div>
            
            <div>
              <h1 className="font-headline text-4xl font-bold text-on-surface mb-2">Sarah Nampeera</h1>
              <p className="font-label font-bold text-xs uppercase tracking-widest text-primary mb-1">Senior 5 • Arts</p>
              <p className="font-body text-sm text-on-surface-variant max-w-[250px] mx-auto">
                "Striving for excellence in literature and debate."
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 w-full pt-4">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <p className="font-label text-[10px] uppercase text-on-surface/50 font-bold tracking-widest mb-1">House</p>
                <p className="font-headline font-bold text-lg text-secondary">Muteesa</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <p className="font-label text-[10px] uppercase text-on-surface/50 font-bold tracking-widest mb-1">Index No.</p>
                <p className="font-headline font-bold text-lg text-on-surface">U0024/095</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/edit-profile')}
              className="w-full py-4 border-2 border-outline-variant/20 rounded-full font-label font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high transition-colors"
            >
              Edit Profile
            </button>
          </aside>

          {/* Details Column */}
          <div className="md:col-span-8 space-y-10">
            {/* Academic Information */}
            <section className="bg-surface-container-low p-8 rounded-2xl border-t-[6px] border-primary">
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">school</span>
                Academic Ledger
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-label text-xs uppercase font-bold text-on-surface/50 mb-2 tracking-widest">Main Subjects</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold font-label">LIT</div>
                      <span className="font-body font-medium">Literature in English</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary font-bold font-label">HIS</div>
                      <span className="font-body font-medium">History</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed font-bold font-label">DIV</div>
                      <span className="font-body font-medium">Divinity</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-label text-xs uppercase font-bold text-on-surface/50 mb-2 tracking-widest">Subsidiary</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold font-label">SUB</div>
                      <span className="font-body font-medium">Sub-Maths</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold font-label">GP</div>
                      <span className="font-body font-medium">General Paper</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Extra-Curricular */}
            <section className="bg-surface-container-low p-8 rounded-2xl border-t-[6px] border-secondary">
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">local_activity</span>
                Co-Curricular Archive
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-surface-container-high rounded-xl border border-outline-variant/10">
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-1">Debate Club</h3>
                    <p className="font-label text-[10px] uppercase font-bold text-secondary tracking-widest">Vice President</p>
                  </div>
                  <span className="material-symbols-outlined text-outline">campaign</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-container-high rounded-xl border border-outline-variant/10">
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-1">Writers' Guild</h3>
                    <p className="font-label text-[10px] uppercase font-bold text-on-surface/50 tracking-widest">Active Member</p>
                  </div>
                  <span className="material-symbols-outlined text-outline">edit_note</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-10 bg-[#0a1f1f]/90 backdrop-blur pb-env(safe-area-inset-bottom)">
        <div className="flex justify-around items-center px-4 pt-3 pb-6 border-t border-outline-variant/10">
          <Link to="/home" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
             <span className="material-symbols-outlined text-[24px]">home_storage</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">library_books</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-[#ffb955] active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>account_circle</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">info</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
