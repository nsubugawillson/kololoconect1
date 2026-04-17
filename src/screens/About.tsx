import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#021616]/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
          <div className="flex items-center gap-4">
            <Link to="/home" className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <img
                alt="School Crest"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6SG1eGsCDUz-FwVhr8UFN08tWysqd-5rSweNj_S-ryShPwy8g4F8gS5jfE04poswhmxVTWo1nX4iIu6-Id1DX6enbyezImtPMnVKFnbHILPLq0bBu5kPoO7Cgz7v01cMxM_uz0moVHkYf4WzdTu0YyGCiZkSNFKxhwuh9FoSibK_kfhyoCB40JE8T-2FW_MNjoNB6mjdTTqgRYF7X5WueU-6Ah5-tXkAiVYjEhZK5PZDpKhrmQ3QJWRoz2DfnsQ8ji0MCHCC8EyC"
              />
            </Link>
            <span className="font-headline text-2xl italic font-bold">Kololo Notice</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/home" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">HOME</Link>
            <Link to="/resources" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">RESOURCES</Link>
            <Link to="/profile" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors">PROFILE</Link>
            <span className="font-label text-sm font-semibold tracking-wider text-[#ffb955] border-b-2 border-[#ffb955] pb-1">ABOUT</span>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-32">
        {/* Editorial Hero */}
        <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 -z-10 bg-surface-container-low/50">
             <img 
               className="w-full h-full object-cover mix-blend-overlay opacity-10"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGYw6q8HntA59G28oM4R23W_mH2e1Z91c3dI2mX8lZ8mR2ZtNnK6x1P5H-r7A33x-97r3lWv7Z46cRn9D2_0wE69g281V2D9ZcR6_1X1Qy5tZ9v0R8G8wN8wI16uJv0A-lO2y77K66_P7g2C1y9I51n3v2K9b9Z70l8276pZ21nO0bY_"
               alt="Historic Campus Building"
             />
          </div>
          
          <p className="font-label text-primary text-xs uppercase font-bold tracking-[0.3em] mb-4 text-shadow-sm">Est. 1954</p>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface max-w-4xl leading-tight mb-8">
            Kololo Senior Secondary School
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light italic">
            "Struggle for Success"
          </p>
        </section>

        {/* Content Rest */}
        <div className="max-w-4xl mx-auto px-6 mt-16 space-y-24">
          
          {/* Intro */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6">Our Legacy</h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed text-justify hyphens-auto">
                Founded in 1954, Kololo Senior Secondary School has stood as a beacon of academic excellence and character development in Kampala. We are committed to nurturing holistic individuals capable of leading with integrity and innovation.
              </p>
            </div>
            <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden relative border border-outline-variant/10 p-2">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
              <img 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP00whII_nOpCKgO_iWlXM1sb5Rt__1NBvU4onR30tc0D5hQd4kOA7b7we-n8twpdYD60QYWKEn2E3ONxtSOQO7SQ8jMxQdwWHoS0iHOXXTm3MRbqUU4rEa-znpf-UBX54ZHplqCU9QaiaefvvWJHDOwtOozTTzhpUDANNlNn2eO_Y1pDNqaprc1TT7ITptY_bTtQrTCLiboil_m1a8aftVcHnPzPjgZHwDMamLd6sA6gE8P7Q9CEbxvHqUs0CUrTDUQhcTzVEv3Zr" 
                alt="School Archway"
              />
            </div>
          </section>

          {/* Value Prop / Pillars */}
          <section>
            <h2 className="font-headline text-3xl font-bold mb-10 text-center">Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-surface-container-low p-8 rounded-2xl border-t-2 border-primary border-x border-b border-outline-variant/10 text-center">
                 <span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
                 <h3 className="font-headline font-bold text-xl mb-3">Academic Rigor</h3>
                 <p className="font-body text-sm text-on-surface-variant">A curriculum designed to challenge boundaries and foster critical thinking.</p>
               </div>
               <div className="bg-surface-container-low p-8 rounded-2xl border-t-2 border-secondary border-x border-b border-outline-variant/10 text-center">
                 <span className="material-symbols-outlined text-secondary text-4xl mb-4">gavel</span>
                 <h3 className="font-headline font-bold text-xl mb-3">Discipline</h3>
                 <p className="font-body text-sm text-on-surface-variant">Cultivating a culture of responsibility, respect, and self-governance.</p>
               </div>
               <div className="bg-surface-container-low p-8 rounded-2xl border-t-2 border-tertiary border-x border-b border-outline-variant/10 text-center">
                 <span className="material-symbols-outlined text-tertiary text-4xl mb-4">sports_handball</span>
                 <h3 className="font-headline font-bold text-xl mb-3">Co-Curricular</h3>
                 <p className="font-body text-sm text-on-surface-variant">Developing leadership and teamwork through sports, arts, and clubs.</p>
               </div>
            </div>
          </section>

          {/* Tech Stack / App Info */}
          <section className="bg-surface-container-highest p-10 rounded-3xl border border-outline-variant/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <span className="material-symbols-outlined text-[120px]">code</span>
             </div>
             <div className="relative z-10 max-w-2xl">
               <p className="font-label text-[10px] text-primary uppercase font-bold tracking-widest mb-2">Notice Portal Info</p>
               <h2 className="font-headline text-2xl font-bold mb-4">The Modern Archivist Platform</h2>
               <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                 This digital portal was developed to modernize communication between administration, students, and parents. It serves as the definitive, real-time chronicle of Kololo High School.
               </p>
               <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-on-surface/50 font-bold">
                 <span>v 1.2.0</span>
                 <span>•</span>
                 <span>Maintained by IT Dept</span>
               </div>
             </div>
          </section>

        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-10 bg-[#0a1f1f]/90 backdrop-blur pb-env(safe-area-inset-bottom)">
        <div className="flex justify-around items-center px-4 pt-3 pb-6 border-t border-outline-variant/10">
          <Link to="/home" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
             <span className="material-symbols-outlined text-[24px]">home_storage</span>
          </Link>
          <Link to="/resources" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
            <span className="material-symbols-outlined text-[24px]">library_books</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-on-surface/60 hover:text-primary active:scale-90 pb-1 w-16">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-[#ffb955] active:scale-90 pb-1 w-16 relative">
            <div className="absolute -top-1 w-1 h-1 bg-[#ffb955] rounded-full"></div>
            <span className="material-symbols-outlined text-[24px]">info</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
