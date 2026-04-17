import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="font-body bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      {/* NavigationDrawer Shell */}
      <aside className="hidden md:flex h-screen w-72 left-0 top-0 fixed bg-[#0a1f1f] flex-col py-8 pr-4 z-50">
        {/* Drawer Header */}
        <div className="px-6 mb-10 flex items-center gap-4">
          <img
            alt="Logo"
            className="w-10 h-10 rounded-lg bg-surface-container-high p-2"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMAPoX3fH2SLq1BnM0IgMGcy3_g7iai4qzOLQAL7bEWEnWb2p1j5kLIxJUCf2WX600iWVEqJNvXz0SuRSOxHy2ozVNOyVdwDJ9TGOEds8Atf_7imOFINu1XwF9iOBLql0GXwHrr5ZeElKk0warQiJVdaCqYUdGocZxuo9O5m3JipWnN1ScCgExUcXugdlqI4PPQiW_ovmxgMGp2nllktDeYDz-rx0GuwfmMYcMvJ9kF8T6re4_kQgE4G8vpGuz8237LrDWWfn1XV49"
          />
          <div>
            <h1 className="font-headline text-[#ffb955] text-xl leading-none">Kololo Admin</h1>
            <p className="font-label text-[#d0e7e6] opacity-60 text-[10px] uppercase tracking-widest mt-1">Management Suite</p>
          </div>
        </div>

        {/* Admin Profile */}
        <div className="px-6 mb-8 flex flex-col items-start">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
          <h2 className="font-headline font-bold text-on-surface text-lg">Head Archivist</h2>
          <p className="font-body text-[#d0e7e6] opacity-80 text-xs">Administrator Access</p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1">
          <Link
            to="/home"
            className="flex items-center px-6 py-3 bg-[#ffb955] text-[#021616] rounded-r-full font-bold font-['Work_Sans'] text-sm tracking-wide transition-transform duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3">dashboard</span>
            Bulletin
          </Link>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-[#d0e7e6] hover:bg-[#192d2d] rounded-r-full font-medium font-['Work_Sans'] text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3">auto_stories</span>
            Archive
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-[#d0e7e6] hover:bg-[#192d2d] rounded-r-full font-medium font-['Work_Sans'] text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3">diversity_3</span>
            Staff Room
          </a>
          <Link
            to="/profile"
            className="flex items-center px-6 py-3 text-[#d0e7e6] hover:bg-[#192d2d] rounded-r-full font-medium font-['Work_Sans'] text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3">school</span>
            Student Directory
          </Link>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-[#d0e7e6] hover:bg-[#192d2d] rounded-r-full font-medium font-['Work_Sans'] text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3">admin_panel_settings</span>
            Permissions
          </a>
        </nav>

        {/* Public Board Link */}
        <div className="px-6 mt-auto">
          <Link
            to="/home"
            className="w-full bg-surface-container-high hover:bg-surface-bright text-primary px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            <span className="font-label text-xs uppercase font-bold tracking-widest">Public Board</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-72 min-h-screen">
        {/* TopAppBar */}
        <header className="w-full top-0 sticky z-40 bg-gradient-to-b from-[#0a1f1f] to-transparent shadow-[0_40px_40px_-10px_rgba(0,17,17,0.08)]">
          <div className="flex justify-between items-center px-6 py-4 w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <img
                  alt="Official School Seal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3E8HefgT5q6jRaS9Kc1OA3SUe4DW9E2FQ8lGlNNt7k6DunWxeO_AmfEme-gt6t-ETegRsUsB7XH3Gc7xkKNniAQE8vH4FSOuoMErwQGFoxXpnFdrEb1eFEMT5V96tmMVhQhDBAKudArww8CVnbVXCOURF2kQaKI6eXn2WBnYoDKNylgiD8QXm4aEkS-bnhUuCMF5DrGuC5nYhw63FtqX6UzQUDoze3bk4Pa4dg8O09hMw94pXBRfTeffeP0Xew58kO-mnEM4FuHrZ"
                />
              </div>
              <h2 className="font-headline font-bold text-2xl tracking-tight text-[#ffb955]">The Modern Archivist</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex space-x-6 mr-6">
                <span className="font-label text-[#ffb955] border-b-2 border-[#ffb955] pb-1 cursor-pointer">Bulletin</span>
                <span className="font-label text-[#d0e7e6] opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Drafts</span>
                <span className="font-label text-[#d0e7e6] opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Activity</span>
              </div>
              <button className="p-2 text-[#ffb955] hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="p-6 md:p-10 space-y-10 max-w-7xl mx-auto">
          {/* Welcome Header */}
          <section>
            <h1 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-2">Salutations, Curator.</h1>
            <p className="font-body text-secondary-fixed-dim text-lg">Your repository is current. Three new notices await validation.</p>
          </section>

          {/* Stats Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary-container p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-64 shadow-xl">
              <div className="relative z-10">
                <p className="font-label text-on-primary-fixed uppercase tracking-widest text-sm font-bold mb-1">Total Active Records</p>
                <h3 className="font-headline text-on-primary text-7xl font-extrabold tracking-tighter">1,284</h3>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-on-primary font-medium">
                <span className="material-symbols-outlined">trending_up</span>
                <span>12% increase since last semester</span>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 scale-150 pointer-events-none">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: '"FILL" 1' }}>auto_stories</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-surface-container-high p-6 rounded-xl border-l-[8px] border-secondary h-[calc(50%-0.75rem)] flex flex-col justify-center">
                <p className="font-label text-secondary opacity-80 uppercase tracking-widest text-[10px] font-bold">Upcoming Events</p>
                <h3 className="font-headline text-on-surface text-4xl font-bold">24</h3>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl border-l-[8px] border-primary/40 h-[calc(50%-0.75rem)] flex flex-col justify-center">
                <p className="font-label text-[#d0e7e6] opacity-60 uppercase tracking-widest text-[10px] font-bold">New Signups</p>
                <h3 className="font-headline text-on-surface text-4xl font-bold">156</h3>
              </div>
            </div>
          </section>

          {/* Quick Action Grid & Recent Activity */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-6">
              <h4 className="font-headline text-xl text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                Executive Actions
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-surface-container-low hover:bg-surface-container-highest p-6 rounded-xl flex flex-col items-start gap-4 transition-all group border border-outline-variant/10">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">post_add</span>
                  </div>
                  <div className="text-left">
                    <p className="font-headline font-bold text-lg">Post Notice</p>
                    <p className="font-body text-xs text-on-surface-variant">Circulate a new announcement</p>
                  </div>
                </button>
                <button className="bg-surface-container-low hover:bg-surface-container-highest p-6 rounded-xl flex flex-col items-start gap-4 transition-all group border border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">upload_file</span>
                  </div>
                  <div className="text-left">
                    <p className="font-headline font-bold text-lg">Upload File</p>
                    <p className="font-body text-xs text-on-surface-variant">Archival document storage</p>
                  </div>
                </button>
                <button className="bg-surface-container-low hover:bg-surface-container-highest p-6 rounded-xl flex flex-col items-start gap-4 transition-all group border border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">event_note</span>
                  </div>
                  <div className="text-left">
                    <p className="font-headline font-bold text-lg">Manage Events</p>
                    <p className="font-body text-xs text-on-surface-variant">Curate the school calendar</p>
                  </div>
                </button>
                <Link to="/profile" className="bg-surface-container-low hover:bg-surface-container-highest p-6 rounded-xl flex flex-col items-start gap-4 transition-all group border border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-[#d0e7e6] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div className="text-left">
                    <p className="font-headline font-bold text-lg">User Directory</p>
                    <p className="font-body text-xs text-on-surface-variant">Modify access permissions</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="font-headline text-xl text-on-surface-variant flex items-center gap-3">
                Chronicle of Activity
                <span className="flex-1 h-[1px] bg-outline-variant/20"></span>
              </h4>
              <div className="bg-surface-container-low p-1 rounded-xl">
                <div className="flex items-start gap-4 p-4 hover:bg-surface-container rounded-lg transition-colors">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="font-headline font-bold text-on-surface">Archival Success</p>
                      <span className="font-label text-[10px] opacity-40 uppercase tracking-widest">2m ago</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">"Q3 Financial Bulletin" was successfully published to the main board.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-surface-container rounded-lg transition-colors">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,185,85,0.4)]"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="font-headline font-bold text-on-surface">Record Modified</p>
                      <span className="font-label text-[10px] opacity-40 uppercase tracking-widest">45m ago</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">The "Spring Gala" event was updated with a new location tag.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-surface-container rounded-lg transition-colors">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="font-headline font-bold text-on-surface">Deletions</p>
                      <span className="font-label text-[10px] opacity-40 uppercase tracking-widest">2h ago</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">Archived notice "Lost Keys - Library" was permanently removed.</p>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 border border-outline-variant/30 text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold hover:bg-surface-container transition-all rounded-lg">
                View Complete Ledger
              </button>
            </div>
          </section>

          {/* Editorial Feature Section */}
          <section className="bg-surface-container-highest p-10 rounded-2xl relative overflow-hidden">
            <div className="md:w-1/2 relative z-10">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-label text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">Curator's Spotlight</span>
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface leading-tight mb-4">Integrity in information is the cornerstone of our institution.</h2>
              <p className="font-body text-on-surface-variant mb-6">Review the latest editorial guidelines to ensure every announcement meets our standards of academic prestige.</p>
              <button className="bg-on-surface text-surface px-6 py-3 rounded-full font-bold transition-all hover:bg-primary active:scale-95">Read Guidelines</button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 hidden md:block">
              <img
                className="h-full w-full object-cover mix-blend-luminosity opacity-20"
                alt="Architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP00whII_nOpCKgO_iWlXM1sb5Rt__1NBvU4onR30tc0D5hQd4kOA7b7we-n8twpdYD60QYWKEn2E3ONxtSOQO7SQ8jMxQdwWHoS0iHOXXTm3MRbqUU4rEa-znpf-UBX54ZHplqCU9QaiaefvvWJHDOwtOozTTzhpUDANNlNn2eO_Y1pDNqaprc1TT7ITptY_bTtQrTCLiboil_m1a8aftVcHnPzPjgZHwDMamLd6sA6gE8P7Q9CEbxvHqUs0CUrTDUQhcTzVEv3Zr"
              />
            </div>
          </section>
        </div>

        {/* Bottom Padding for Mobile Nav */}
        <div className="h-24 md:hidden"></div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 md:hidden bg-[#0a1f1f]/70 backdrop-blur-3xl z-50 rounded-t-3xl shadow-[0_-8px_32px_rgba(0,17,17,0.2)]">
        <Link to="/home" className="flex flex-col items-center justify-center text-[#ffb955] space-y-1 after:content-[''] after:w-1.5 after:h-1.5 after:bg-[#ffb955] after:rounded-full">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-widest">Notices</span>
        </Link>
        <a href="#" className="flex flex-col items-center justify-center text-[#d0e7e6]/50 hover:text-[#ffb86b] transition-all active:scale-90">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-widest">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-[#d0e7e6]/50 hover:text-[#ffb86b] transition-all active:scale-90">
          <span className="material-symbols-outlined">edit_note</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-widest">Drafts</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-[#d0e7e6]/50 hover:text-[#ffb86b] transition-all active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-widest">Account</span>
        </a>
      </nav>
    </div>
  );
}
