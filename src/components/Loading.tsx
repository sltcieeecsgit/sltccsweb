import { useEffect, useState } from 'react';

export default function Loading({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-[#050505] z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-goldcs/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-goldcs/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Content */}
        <div className="text-center space-y-8 animate-fade-in delay-200">
          <div className="flex flex-col items-center gap-6">
            <span className="text-gray-400 font-medium tracking-[0.2em] uppercase text-sm">
              Page initialising the environment
            </span>
            
            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-goldcs/50 via-goldcs to-goldcs/50 transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-goldcs rounded-full blur-md opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
