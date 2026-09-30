import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  demoUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ demoUrl }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
            <span className="w-3 h-3 rounded-full bg-[#00BA77] shadow-[0_0_10px_rgba(0,186,119,0.5)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 font-sans flex items-center">
              hvala<span className="text-[#00BA77]">.tips</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider -mt-1 hidden sm:block">
              bezgotovinski bakšiš
            </span>
          </div>
        </a>

        {/* Center context note */}
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Expo 2027 Beograd
          </span>
          <span className="text-slate-400">·</span>
          <span>Za kafiće i restorane</span>
        </div>

        {/* Primary CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-[#00BA77] hover:bg-[#00c982] active:bg-[#00a86b] rounded-lg transition-all shadow-[0_2px_12px_rgba(0,186,119,0.3)] hover:shadow-[0_4px_16px_rgba(0,186,119,0.45)] active:scale-95"
          >
            <span>Zahtev za demo</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-950" />
          </a>
        </div>
      </div>
    </header>
  );
};
