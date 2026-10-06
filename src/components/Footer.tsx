import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onDemoClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDemoClick }) => {
  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-200 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#00BA77]" />
          </div>
          <span className="font-display font-bold text-slate-900 text-sm">
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

          <button
            type="button"
            onClick={onDemoClick}
            className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
          >
            <span>Zatraži demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
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

      {/* Legal / company info — mirrors hvala.tips/rs footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4 pt-4 border-t border-slate-200/80 text-[10px] text-slate-400 leading-relaxed">
        <p className="max-w-3xl">
          hvala.tips je finansijska platforma, a ne banka. Bankarske usluge pružaju banke, partneri hvala.tips.
        </p>
        <p className="mt-1.5">
          Hvala.tips doo Beograd · Beograd, Danila Lekića-Španca 1/2 · MB: 21976598, PIB: 114133376
          <br className="sm:hidden" />
          <span className="sm:ml-1">+381 65 5603 250 · hello@hvala.tips</span>
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          <a href="https://business.hvala.tips/uslovi_koriscenja" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Uslovi korišćenja
          </a>
          <a href="https://business.hvala.tips/politika_privatnosti" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Politika privatnosti
          </a>
          <a href="https://business.hvala.tips/kolacici" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Kolačići
          </a>
          <a href="https://business.hvala.tips/ugovor_o_poklonu" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Ugovor o poklonu
          </a>
          <a href="https://client.hvala.tips/odustanak_od_poklona" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Odustanak od poklona
          </a>
          <a href="https://business.hvala.tips/ugovor_korisnik_i_agent" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Ugovor korisnik i agent
          </a>
          <a href="https://business.hvala.tips/ugovor_manager_agent" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline underline-offset-2 decoration-slate-300">
            Ugovor menadžer i agent
          </a>
        </div>
      </div>
    </footer>
  );
};
