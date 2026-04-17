import { Link } from 'react-router-dom';

export default function AcademicResources() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-tertiary selection:text-on-tertiary min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#021616]/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
          <div className="flex items-center gap-4">
            <Link to="/home" className="w-10 h-10 rounded-xl bg-surface-container-highest overflow-hidden flex items-center justify-center border border-outline-variant/20 hover:border-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[#d0e7e6] text-[20px]">auto_stories</span>
            </Link>
            <span className="font-headline text-2xl italic font-bold">Kololo Notice</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/home" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">HOME</Link>
              <span className="font-label text-sm font-semibold tracking-wider text-[#ffb955] border-b-2 border-[#ffb955] pb-1">RESOURCES</span>
              <Link to="/profile" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">PROFILE</Link>
              <Link to="/about" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">ABOUT</Link>
            </nav>
            <button className="text-on-surface/60 hover:text-primary transition-colors active:scale-95">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-7xl mx-auto">
        <div className="mb-12 border-l-[6px] border-tertiary pl-6 py-2">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-2">Digital Library</h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl">
            Access study materials, past papers, and official syllabus documents curated by the academic department.
          </p>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
          <button className="px-5 py-2 rounded-full border border-tertiary bg-tertiary/10 text-tertiary font-label text-xs font-bold tracking-widest uppercase whitespace-nowrap">All Material</button>
          <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container whitespace-nowrap transition-colors">Past Papers</button>
          <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container whitespace-nowrap transition-colors">Study Guides</button>
          <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container whitespace-nowrap transition-colors">O-Level</button>
          <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container whitespace-nowrap transition-colors">A-Level</button>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-[100px] -z-10 group-hover:bg-tertiary/10 transition-colors"></div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>
              </div>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">S.4 • Chem</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-tertiary transition-colors line-clamp-2">2023 UNEB Chemistry Paper 2 (Theory)</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Complete past paper with officially documented marking guide.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-label text-[10px] text-on-surface/40 font-bold uppercase tracking-widest">Added 2 days ago</span>
              <button className="text-tertiary hover:text-tertiary-fixed transition-colors">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/5 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">menu_book</span>
              </div>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">S.6 • Lit</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">Study Notes: African Poetry (Okot p'Bitek)</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Comprehensive thematic analysis compiled by Mr. Ssozi.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-label text-[10px] text-on-surface/40 font-bold uppercase tracking-widest">Added last week</span>
              <button className="text-primary hover:text-primary-fixed transition-colors">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/5 relative overflow-hidden border-b-4 border-b-secondary">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label text-[10px] font-bold uppercase tracking-widest">Mandatory</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-2">Term 2 Master Syllabus</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Official curriculum breakdown for all classes, outlining essential topics.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-label text-[10px] text-on-surface/40 font-bold uppercase tracking-widest">Added 1 month ago</span>
              <button className="bg-surface-container-high text-secondary px-4 py-1.5 rounded-full font-label text-[10px] font-bold uppercase disabled opacity-50">
                View Only
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/5 relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[28px]">data_object</span>
              </div>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">S.4 • Comp</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-tertiary transition-colors line-clamp-2">Practical Lab Exercises: HTML Basics</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Starter templates and instruction manual for the Term 1 computer studies project.</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-label text-[10px] text-on-surface/40 font-bold uppercase tracking-widest">Added May 2, 2024</span>
              <button className="text-tertiary hover:text-tertiary-fixed transition-colors">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-10 bg-[#0a1f1f]/90 backdrop-blur pb-env(safe-area-inset-bottom)">
        <div className="flex justify-around items-center px-4 pt-3 pb-6 border-t border-outline-variant/10">
          <Link to="/home" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
             <span className="material-symbols-outlined text-[24px]">home_storage</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center text-[#ffb955] active:scale-90 pb-1 w-16 relative">
            <div className="absolute -top-1 w-1 h-1 bg-[#ffb955] rounded-full"></div>
            <span className="material-symbols-outlined text-[24px]">library_books</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
            <span className="material-symbols-outlined text-[24px]">info</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
