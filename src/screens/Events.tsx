import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary selection:text-surface min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#0a1f1f]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 h-20 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/home" className="w-10 h-10 rounded-xl bg-surface-container-high overflow-hidden flex items-center justify-center border border-outline-variant/20 hover:border-secondary/50 transition-colors">
              <img
                alt="Kololo Crest"
                className="w-8 h-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6SG1eGsCDUz-FwVhr8UFN08tWysqd-5rSweNj_S-ryShPwy8g4F8gS5jfE04poswhmxVTWo1nX4iIu6-Id1DX6enbyezImtPMnVKFnbHILPLq0bBu5kPoO7Cgz7v01cMxM_uz0moVHkYf4WzdTu0YyGCiZkSNFKxhwuh9FoSibK_kfhyoCB40JE8T-2FW_MNjoNB6mjdTTqgRYF7X5WueU-6Ah5-tXkAiVYjEhZK5PZDpKhrmQ3QJWRoz2DfnsQ8ji0MCHCC8EyC"
              />
            </Link>
            <span className="font-headline text-2xl italic font-bold">Chronicle</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <Link to="/home" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">HOME</Link>
              <Link to="/resources" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">RESOURCES</Link>
              <Link to="/profile" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">PROFILE</Link>
              <Link to="/about" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">ABOUT</Link>
            </nav>
            <button className="text-on-surface/60 hover:text-secondary active:scale-95 transition-all">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-4">
            School Calendar
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl">
            Official timeline of academic, co-curricular, and administrative events for the current academic session.
          </p>
        </div>

        {/* Tab Navigation (Mobile Focus) */}
        <div className="flex gap-8 border-b border-outline-variant/15 mb-12 overflow-x-auto no-scrollbar">
          <Link to="/home" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">NEWS FEED</Link>
          <button className="pb-4 text-secondary border-b-2 border-secondary whitespace-nowrap font-label font-bold tracking-widest text-xs">EVENTS</button>
          <Link to="/announcements" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">ANNOUNCEMENTS</Link>
        </div>

        {/* Month Divider */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline text-2xl font-bold">May 2024</h2>
          <div className="flex-1 h-[1px] bg-secondary/20"></div>
        </div>

        {/* Event List (Editorial Style Layout) */}
        <div className="space-y-6 mb-16">
          {/* Event Item 1 */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high p-6 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-10 transition-all border border-transparent hover:border-secondary/20 cursor-pointer overflow-hidden">
            {/* Visual Indicator Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
            
            <div className="flex justify-between md:flex-col md:justify-start md:w-32 flex-shrink-0">
              <div>
                <p className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-1">Sat</p>
                <p className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter">18</p>
              </div>
              <div className="text-right md:text-left mt-2">
                <span className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded font-label text-[10px] font-bold tracking-widest">09:00 AM</span>
              </div>
            </div>
            
            <div className="flex-1 border-t border-outline-variant/10 md:border-t-0 pt-4 md:pt-0">
              <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">PTA Annual General Meeting</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4 max-w-3xl">
                The general assembly for all parents and teachers to discuss term progression, infrastructural developments, and the upcoming budget approval.
              </p>
              <div className="flex items-center gap-4 opacity-60">
                <div className="flex items-center gap-1 font-label text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Main Hall
                </div>
                <div className="flex items-center gap-1 font-label text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">group</span>
                  Open to Parents
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Event Item 2 */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high p-6 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-10 transition-all border border-transparent hover:border-primary/20 cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
            
            <div className="flex justify-between md:flex-col md:justify-start md:w-32 flex-shrink-0">
              <div>
                <p className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-1">Mon</p>
                <p className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter">20</p>
              </div>
              <div className="text-right md:text-left mt-2">
                <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded font-label text-[10px] font-bold tracking-widest">All Day</span>
              </div>
            </div>
            
            <div className="flex-1 border-t border-outline-variant/10 md:border-t-0 pt-4 md:pt-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">Mock Examinations Begin</h3>
                <span className="material-symbols-outlined text-primary/40">edit_document</span>
              </div>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4 max-w-3xl">
                S.4 and S.6 candidates commence their termly mock examinations. Standard timetable applies. Other classes continue with normal scheduling.
              </p>
              <div className="flex items-center gap-4 opacity-60">
                <div className="flex items-center gap-1 font-label text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">business</span>
                  Examination Centre
                </div>
                <div className="flex items-center gap-1 font-label text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  Candidate Classes
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          {/* Event Item 3 */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high p-6 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-10 transition-all border border-transparent hover:border-on-surface/20 cursor-pointer overflow-hidden opacity-50 hover:opacity-100">
            <div className="flex justify-between md:flex-col md:justify-start md:w-32 flex-shrink-0">
              <div>
                <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-bold mb-1">Fri</p>
                <p className="font-headline text-4xl md:text-5xl font-black text-on-surface-variant tracking-tighter">24</p>
              </div>
              <div className="text-right md:text-left mt-2">
                <span className="inline-block bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded font-label text-[10px] font-bold tracking-widest">14:00 PM</span>
              </div>
            </div>
            
            <div className="flex-1 border-t border-outline-variant/10 md:border-t-0 pt-4 md:pt-0">
              <h3 className="font-headline text-2xl font-bold mb-2">Inter-House Debate Finals</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4 max-w-3xl">
                The culmination of the inter-house debate tournament. Muteesa house faces off against Lumumba house.
              </p>
              <div className="flex items-center gap-4 opacity-60">
                <div className="flex items-center gap-1 font-label text-[10px] uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Main Hall
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* June Preview (Compact) */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline text-2xl font-bold text-on-surface/40">June 2024</h2>
          <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 flex items-center gap-4 hover:border-outline-variant/30 transition-colors cursor-pointer">
            <div className="bg-surface-container-high rounded-lg p-2 text-center min-w-[60px]">
              <span className="block font-label text-[10px] font-bold uppercase text-on-surface-variant">Jun</span>
              <span className="block font-headline text-xl font-bold text-on-surface line-clamp-1">05</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg mb-1">World Environment Day Tree Planting</h4>
              <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface/40">10:00 AM • School Farm</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 flex items-center gap-4 hover:border-outline-variant/30 transition-colors cursor-pointer">
            <div className="bg-surface-container-high rounded-lg p-2 text-center min-w-[60px]">
              <span className="block font-label text-[10px] font-bold uppercase text-on-surface-variant">Jun</span>
              <span className="block font-headline text-xl font-bold text-on-surface line-clamp-1">12</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg mb-1">Mid-Term Break Commences</h4>
              <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface/40">All Day • Campus Wide</p>
            </div>
          </div>
        </div>

      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-[32px] bg-[#0a1f1f]/70 backdrop-blur-xl border-t border-outline-variant/10 pb-env(safe-area-inset-bottom)">
        <div className="flex justify-around items-center px-4 pt-3 pb-6">
          <Link to="/home" className="flex flex-col items-center justify-center text-on-surface/60 hover:text-primary transition-colors active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">home_storage</span>
          </Link>
          <div className="flex flex-col items-center justify-center text-secondary relative">
            <div className="absolute -top-1 w-1 h-1 bg-secondary rounded-full"></div>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>event</span>
          </div>
          <Link to="/profile" className="flex flex-col items-center justify-center text-on-surface/60 hover:text-primary transition-colors active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center justify-center text-on-surface/60 hover:text-primary transition-colors active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">info</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
