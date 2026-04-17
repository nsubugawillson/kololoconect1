import { useNavigate, Link } from 'react-router-dom';

export default function EnrollmentSuccessful() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col items-center">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 max-w-2xl w-full relative">
        {/* Abstract Background Glow (Editorial Light) */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-surface-container-high/20 rounded-full blur-[120px]"></div>
        </div>

        {/* Success Identity / Icon Section */}
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125 transition-transform duration-700 group-hover:scale-150"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container p-1 shadow-[0_-4px_40px_-10px_rgba(0,17,17,0.08)]">
            <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center relative">
              {/* School Crest Styled Success Overlay */}
              <span className="material-symbols-outlined text-primary text-6xl md:text-7xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                school
              </span>
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center border-4 border-surface-container-lowest">
                <span className="material-symbols-outlined text-on-primary text-2xl md:text-3xl font-bold">
                  check
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Content */}
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label text-xs tracking-widest uppercase mb-2">
            Official Document Registered
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-tight tracking-tight">
            Enrollment Successful
          </h1>
          <div className="max-w-md mx-auto">
            <p className="text-on-surface-variant text-lg leading-relaxed font-light opacity-90">
              Your account has been created and added to the official school archive. You can now securely log in to access the portal.
            </p>
          </div>
        </div>

        {/* Action Card */}
        <div className="mt-12 w-full max-w-sm space-y-8 flex flex-col items-center">
          <button
            onClick={() => navigate('/login')}
            className="group relative w-full h-16 rounded-full bg-primary overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 text-on-primary font-label font-bold text-lg">
              Proceed to Login
            </span>
          </button>
          
          <Link to="#" className="inline-flex items-center gap-2 text-primary font-label text-sm tracking-wide hover:text-secondary-fixed-dim transition-colors group">
            Need help? Contact Registry
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Decorative Asymmetric Detail */}
        <div className="absolute bottom-20 -left-12 opacity-20 pointer-events-none hidden lg:block">
          <img
            className="w-48 h-64 object-cover rounded-xl"
            alt="Vintage ledger"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtou_akgL04Smz5S8BftnA0SYWdQn3wagrKMp439Zkf8K4cvoiqTqTIPsTbfEoiKENNleYHvNm4EwbAQ1lTkzDQuH5V0ZOqUI4geJcD5Y28LQ9w-kAcR6SL38n0gjCNcQyhksUt_1_peGgrBn1JOBfYe2lSgsnxNygBVrqB55lBYScRLbZr2wdRfD_Kp33dPoqesdOFMB4PV-BrJNIdrp-e4agkNjhEoisdtdal0Gkr4t2QpUoDc97qCsdr8IsApC40n_vbh2aIdhD"
          />
          <p className="mt-4 font-label text-[10px] uppercase tracking-[0.3em] rotate-90 origin-left translate-x-4">Archive Section 04-A</p>
        </div>
        <div className="absolute top-40 -right-8 opacity-10 pointer-events-none hidden lg:block">
          <img
            className="w-64 h-48 object-cover rounded-xl grayscale"
            alt="Architectural details"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2whAM7mxd1lwiqX71qWr4aAxWnfADVaQR7VjLpD-9qgVrd1l5iBXNE9hGKkdk1Kt7mS5CHkOybWzY47DBZX1M8AF9ERGVjmNZ32xGZkx3ZWwx1kA806kB9RL9LK4q_IGZktoSYCmEVUwmvrrhN_9w5iTXIKOrp6Qwykm2XZSagkR74GYTQXS6fDBvm_v7r396Q_EgtKDbBQTrbKEs4sy0SwfDz64nkBopCTqrUmlP1nIBkkhTS7OSRYXYPnv3PODLlZJCqYxwkJVh"
          />
        </div>
      </main>

      {/* Footer Identity (Minor) */}
      <footer className="pb-12 pt-6 text-on-surface/30 font-label text-[10px] tracking-widest uppercase">
        Kololo Notice © 2024 Institutional Portal
      </footer>
    </div>
  );
}
