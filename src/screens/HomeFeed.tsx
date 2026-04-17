import { Link } from 'react-router-dom';

export default function HomeFeed() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#021616] dark:bg-[#021616] fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 h-20 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center">
              <img
                alt="Kololo High School Crest"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6SG1eGsCDUz-FwVhr8UFN08tWysqd-5rSweNj_S-ryShPwy8g4F8gS5jfE04poswhmxVTWo1nX4iIu6-Id1DX6enbyezImtPMnVKFnbHILPLq0bBu5kPoO7Cgz7v01cMxM_uz0moVHkYf4WzdTu0YyGCiZkSNFKxhwuh9FoSibK_kfhyoCB40JE8T-2FW_MNjoNB6mjdTTqgRYF7X5WueU-6Ah5-tXkAiVYjEhZK5PZDpKhrmQ3QJWRoz2DfnsQ8ji0MCHCC8EyC"
              />
            </div>
            <span className="font-headline text-2xl italic font-bold text-[#d0e7e6]">Kololo Notice</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <a href="#" className="font-label text-sm font-semibold tracking-wider text-[#ffb955] border-b-2 border-[#ffb955] pb-1">HOME</a>
              <Link to="/resources" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors duration-300">RESOURCES</Link>
              <Link to="/profile" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors duration-300">PROFILE</Link>
              <Link to="/about" className="font-label text-sm font-semibold tracking-wider text-[#d0e7e6] hover:text-[#ffb86b] transition-colors duration-300">ABOUT</Link>
            </nav>
            <button className="text-[#ffb955] active:scale-95 duration-150">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Tab Navigation (Mobile & Tablet Focus) */}
        <div className="flex gap-8 border-b border-outline-variant/15 mb-10 overflow-x-auto no-scrollbar">
          <button className="pb-4 text-[#ffb955] border-b-2 border-[#ffb955] whitespace-nowrap font-label font-bold tracking-widest text-xs">NEWS FEED</button>
          <Link to="/events" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">EVENTS</Link>
          <Link to="/announcements" className="pb-4 text-on-surface/60 hover:text-on-surface transition-colors whitespace-nowrap font-label font-bold tracking-widest text-xs">ANNOUNCEMENTS</Link>
        </div>

        {/* Featured Story */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7 relative group">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-low">
              <img
                alt="School Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGwnEhxoefvigV8DVjw2ZCQ9VRKxgNvTcJ99hOPEbI8xEpsgmQvmPiuccJyzKk1_LByHDRP0W8_KjvcomPB-xU4ZIDLP2Gs-76d8DbUx9Z4Eb1sDHURK2PVdh49mnau300VzPfxbgIyJ4RHxtIS7m2DMsArLdqAhVgo0s6HilfQvBd6fp7KaAg5YdSUCF3ZTUjNueFh-WrlgjPTAeOBOMrdbkE6GO1AgT3_ZYYxJK6GMJki-NM8puFqaKAKXh5Ne1ITY_gJjUVJ0ki"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:right-10 bg-primary p-6 md:p-8 rounded-xl max-w-[85%] shadow-xl">
              <p className="font-label text-[10px] font-bold tracking-[0.2em] text-on-primary mb-2">FEATURED</p>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-primary leading-tight">Inter-House Sports Finals Scheduled for June</h2>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center pt-10 md:pt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-label text-xs font-bold text-primary tracking-widest">MAY 22, 2024</span>
            </div>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              Preparations are underway for the most anticipated athletic event of the term. House captains are requested to submit final participant lists by Friday afternoon.
            </p>
            <button className="mt-8 self-start flex items-center gap-2 text-primary font-bold font-label text-sm hover:translate-x-2 transition-transform">
              READ FULL STORY <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Bento Grid Notices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-colors group cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary font-label text-[10px] font-bold tracking-widest bg-primary/10 px-3 py-1 rounded-full">ACADEMIC</div>
              <span className="text-on-surface/40 font-label text-[10px] font-bold">MAY 20, 2024</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Mock Exam Timetable Released</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Candidate classes can now access the full mock examination schedule in the student portal or at the administrative block notice board.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-sm">attachment</span>
              <span className="text-xs font-bold font-label">EXAM_SCHEDULE.PDF</span>
            </div>
          </div>

          {/* Card 2 (High Contrast Focus) */}
          <div className="bg-primary p-8 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="text-on-primary font-label text-[10px] font-bold tracking-widest border border-on-primary/20 px-3 py-1 rounded-full">URGENT</div>
                <span className="text-on-primary/60 font-label text-[10px] font-bold">MAY 19, 2024</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-primary mb-4 leading-tight">School Fee Deadline Extension Notice</h3>
              <p className="text-on-primary/80 font-body text-sm leading-relaxed">
                The board has approved a grace period of one week for the completion of Term II dues. Please visit the accounts office for more details.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-on-primary font-bold font-label text-xs">
              VIEW DETAILS <span className="material-symbols-outlined text-base">open_in_new</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-colors group cursor-pointer border-l-4 border-secondary">
            <div className="flex justify-between items-start mb-6">
              <div className="text-secondary font-label text-[10px] font-bold tracking-widest bg-secondary/10 px-3 py-1 rounded-full">COMMUNITY</div>
              <span className="text-on-surface/40 font-label text-[10px] font-bold">MAY 18, 2024</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-secondary transition-colors">PTA Annual General Meeting</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Join us this Saturday in the Main Hall as we discuss campus infrastructure upgrades and the upcoming digital learning initiative.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface-container-low overflow-hidden">
                  <img
                    alt="Attendee"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqeCG7sGODiGXpxNoCYCdvnzAuJlD91qcCrVbzz5ASw37ykZkgl5MUsDiG8TRbTh6IuLMi5Z6JELcGR6Yh7EBT1T8ACXo2Qg-AYBVct3tuDHFAM8b1FsO5KxCP9UPK6uxf2ny8CaAI3csWppd76AqKy4Kg_g1i4QJIORJWDwTeN-AX1683idpciJTbCW89DLivpinDrn7l22ftnGDbpdpHzlj_m8krQAZ0J-nPwoxJGpq6negJfpGJrqy0YHbs4X_CRPDIcQOJHP_9"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface-container-low overflow-hidden">
                  <img
                    alt="Attendee"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAldS__gmCOmPazPMiZOeYDbJrEmRdY8TGK1iLxtXW02G-BUddCmAlcAxaWKhXVon6CW2igGIYmP6TbTlG0jsHWmGQ6wWjV_UtfHFDrYl8qDHULi_pjiEoKQm0T7mo4jEBSTYg6BGgKvsecxoQci5Xhsx77sCA40by0mcEOU-FIIU8KLwh4l6R-AayGknIrHR1H3c6t5xLT7vVM33e1CLIrGSm34zTU8v5gKGPR0mplUx6sIhHsTAtqqvbxfZByE4PY1RFt8nZiGMyx"
                  />
                </div>
              </div>
              <span className="text-xs font-label font-bold text-on-surface/60">+45 ATTENDING</span>
            </div>
          </div>

          {/* Card 4 (Horizontal Span) */}
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center overflow-hidden">
            <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-48 rounded-lg overflow-hidden bg-surface-container-high">
              <img
                alt="Classroom"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZK78iaR09-OE8UVbUrivWDqXv0kO2tLKF7E75IAmBbm2Lt6RiQV-fwy_rIdKKHaEWsOnMLT1GiRV8sem5IPn16PcEhAgyi6kvTyQ8uPubIC-sfZ3g2NgBclLP7infpZs-OzUcBca-3PyBqSIV9MH6ac1eYXPyp9azkC-2bLv9fZczusYcrYaO-GOEzaGGOw_w1411q3Am0_yWeer6a5mdBiVgqkobWglBtL8pXk19x82aVRzcHVanW2G1tu8lMjt-9gcJi8IDap7"
              />
            </div>
            <div className="flex-1">
              <div className="text-primary font-label text-[10px] font-bold tracking-widest mb-4">CLUB NEWS</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Science Club Wins Regional Expo</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                Our student innovators took home the gold for their sustainable water filtration project. The trophy will be presented during Monday's assembly.
              </p>
              <button className="bg-surface-container-high text-primary px-6 py-2 rounded-full font-label font-bold text-xs hover:bg-primary hover:text-on-primary transition-all">VIEW GALLERY</button>
            </div>
          </div>

          {/* Card 5 (Small Accent) */}
          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col items-center justify-center text-center border border-outline-variant/10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">library_books</span>
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Library Hours</h3>
            <p className="text-on-surface-variant font-body text-xs mb-4">Late night study sessions begin next week.</p>
            <div className="text-primary font-label font-black text-sm">MON - FRI | 08:00 - 20:00</div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-[32px] bg-[#0a1f1f]/70 backdrop-blur-xl shadow-[0_-8px_40px_-10px_rgba(0,17,17,0.08)]">
        <div className="flex justify-around items-center px-4 pt-3 pb-6">
          <a href="#" className="flex flex-col items-center justify-center text-[#ffb955] bg-[#192d2d] rounded-2xl px-4 py-2 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">home_storage</span>
            <span className="font-label text-[10px] font-semibold tracking-wider uppercase mt-1">Home</span>
          </a>
          <Link to="/resources" className="flex flex-col items-center justify-center text-[#d0e7e6] opacity-60 px-4 py-2 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">library_books</span>
            <span className="font-label text-[10px] font-semibold tracking-wider uppercase mt-1">Resources</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center justify-center text-[#d0e7e6] opacity-60 px-4 py-2 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="font-label text-[10px] font-semibold tracking-wider uppercase mt-1">Profile</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center justify-center text-[#d0e7e6] opacity-60 px-4 py-2 hover:opacity-100 transition-opacity active:scale-90 transition-transform">
            <span className="material-symbols-outlined">info</span>
            <span className="font-label text-[10px] font-semibold tracking-wider uppercase mt-1">About</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
