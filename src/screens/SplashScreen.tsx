import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Splash Screen Container */}
      <main
        className="relative w-full max-w-md mx-auto h-screen flex flex-col items-center justify-center px-8 cursor-pointer"
        onClick={() => navigate('/login')}
      >
        {/* Subtle Ambient Light Background (No Shadows Rule Applied) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-container-high/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        {/* Central Identity Section */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* School Crest Container (Asymmetric Layout subtle hint via stacking) */}
          <div className="relative mb-10 group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[64px] rounded-full"></div>
            {/* Crest Placeholder Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center p-4">
              <img
                alt="Kololo Senior Secondary School Crest"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,185,85,0.2)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9H0BKf0bi2TDxZvGLG8tKMbM8b7lgBnDK-8H51pFOz0DqreDIdEVX_awvp8Rr4yG2Ye7ZyDv1kuuQKwaVLve6dxKkR-9rKsCeY7xEhhdVi_Gg3kVHI8F8JXb-0HUshccjZm7kKUsQ1_0gdLKrl-QSLFFf9fygFXbUKFg1UdkWPkZikinv17kqJSNQW3GYxm9qdpB6UIIFSgb9vFTGH04aOKDFlkDL28kC94JNeHCpfyvMGDxg1T5mESsUj5ssH8Y1Ur3rF73SSFP8"
              />
            </div>
          </div>
          {/* Brand Typography */}
          <div className="space-y-2">
            <h1 className="font-headline italic font-bold tracking-tight text-5xl text-primary md:text-6xl" style={{ fontFeatureSettings: '"swsh" 1, "kern" 1' }}>
              Kololo Notice
            </h1>
            <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/70 font-semibold">
              The Modern Archivist
            </p>
          </div>
        </div>

        {/* Loading / Progress Indicator (Minimal & High-End) */}
        <div className="mt-24 w-48 h-[2px] bg-surface-container-highest rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
        </div>

        {/* Footer / Slogan */}
        <div className="absolute bottom-16 text-center">
          <p className="font-body text-sm text-outline italic">
            "Struggle for Success"
          </p>
        </div>
      </main>
    </div>
  );
}
