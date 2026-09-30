import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  demoUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ demoUrl }) => {
  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-200 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#00BA77]" />
          </div>
          <span className="font-extrabold text-slate-900 text-sm">
            hvala<span className="text-[#00BA77]">.tips</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-500 hidden sm:inline text-[11px]">
            Bezgotovinski bakšiš za restorane i kafiće u Srbiji
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://hvala.tips/rs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1 font-medium"
          >
            <span>hvala.tips/rs</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="/hvala-tips-project.zip"
            download="hvala-tips-project.zip"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1 font-medium bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
            title="Preuzmi kompletan izvorni kod projekta (.zip)"
          >
            <span>Preuzmi kod (.zip)</span>
          </a>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
          >
            <span>Zahtev za demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-slate-400">
        <div>
          © {new Date().getFullYear()} hvala.tips. Sva prava zadržana.
        </div>
        <div>
          Pripremljeno za restoratere u Beogradu pred Expo 2027.
        </div>
      </div>
    </footer>
  );
};
