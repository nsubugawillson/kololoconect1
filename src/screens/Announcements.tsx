import { Link } from 'react-router-dom';

export default function Announcements() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#021616] fixed top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 h-20 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center">
              <img
                alt="Kololo Crest"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6SG1eGsCDUz-FwVhr8UFN08tWysqd-5rSweNj_S-ryShPwy8g4F8gS5jfE04poswhmxVTWo1nX4iIu6-Id1DX6enbyezImtPMnVKFnbHILPLq0bBu5kPoO7Cgz7v01cMxM_uz0moVHkYf4WzdTu0YyGCiZkSNFKxhwuh9FoSibK_kfhyoCB40JE8T-2FW_MNjoNB6mjdTTqgRYF7X5WueU-6Ah5-tXkAiVYjEhZK5PZDpKhrmQ3QJWRoz2DfnsQ8ji0MCHCC8EyC"
              />
            </div>
            <span className="font-headline text-2xl italic font-bold">Chronicle</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <Link to="/home" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">HOME</Link>
              <Link to="/resources" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">RESOURCES</Link>
              <Link to="/profile" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">PROFILE</Link>
              <Link to="/about" className="font-label text-sm font-semibold tracking-wider text-on-surface/60 hover:text-on-surface transition-colors">ABOUT</Link>
            </nav>
            <button className="text-on-surface/60 hover:text-primary transition-colors active:scale-95">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex gap-8 border-b border-outline-variant/15 mb-10 overflow-x-auto no-scrollbar">
          <Link to="/home" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">NEWS FEED</Link>
          <Link to="/events" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">EVENTS</Link>
          <button className="pb-4 text-[#ffb955] border-b-2 border-[#ffb955] whitespace-nowrap font-label font-bold tracking-widest text-xs">ANNOUNCEMENTS</button>
        </div>

        {/* Content Section */}
        <div className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Official Announcements</h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl">
            Administrative notices, policy updates, and important communications directly from the administration.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          {/* Item 1 */}
          <article className="group bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-label text-[10px] uppercase font-bold tracking-widest">Policy Update</span>
              <span className="text-on-surface/40 font-label text-[10px] uppercase font-bold tracking-widest">May 15, 2024</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Revised Digital Device Policy</h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Following the recent board meeting, the policy regarding student use of smartphones and digital devices on campus has been updated. Devices are strictly prohibited in instructional areas.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-bold font-label text-xs cursor-pointer hover:underline underline-offset-4">
              READ FULL DOCUMENT <span className="material-symbols-outlined text-sm">open_in_new</span>
            </div>
          </article>

          {/* Item 2 */}
          <article className="group bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-label text-[10px] uppercase font-bold tracking-widest">Administrative</span>
              <span className="text-on-surface/40 font-label text-[10px] uppercase font-bold tracking-widest">May 10, 2024</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">Library Renovation Notice</h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              The main reference section of the school library will be closed for renovations starting next week. Temporary study spaces have been designated in the assembly hall annex.
            </p>
            <div className="inline-flex items-center gap-2 text-secondary font-bold font-label text-xs cursor-pointer hover:underline underline-offset-4">
              VIEW TEMPORARY MAP <span className="material-symbols-outlined text-sm">map</span>
            </div>
          </article>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-10 bg-[#0a1f1f]/90 backdrop-blur pb-env(safe-area-inset-bottom)">
        <div className="flex justify-around items-center px-4 pt-3 pb-6 border-t border-outline-variant/10">
          <Link to="/home" className="flex flex-col items-center text-[#ffb955] active:scale-90 pb-1">
             <span className="material-symbols-outlined text-[24px]">home_storage</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">library_books</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1">
            <span className="material-symbols-outlined text-[24px]">info</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
