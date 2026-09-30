import React from 'react';
import { ArrowUpRight, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

interface ProblemSectionProps {
  demoUrl: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ demoUrl }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Core Pain - 2-3 sentences as requested */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>Glavni problem beogradskih ugostitelja</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Turisti sve češće plaćaju karticom ili telefonom — nemaju keš za bakšiš.
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Rezultat: tvoji konobari ostaju bez napojnica baš u sezoni kad ih je najviše.
          </p>
        </div>

        {/* Crisp 2-column contrast card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bez sistema */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-rose-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wide mb-2">
                <TrendingDown className="w-4 h-4 text-rose-600" />
                <span>Bez digitalnog bakšiša</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Gost pita: <em className="text-slate-900 font-semibold">„Can I leave a tip with Apple Pay?”</em> Konobar sleže ramenima: <em className="text-slate-500">„Sorry, only cash.”</em> Turista nema dinare u novčaniku, bakšiš propada.
              </p>
            </div>
            <div className="pt-3 border-t border-rose-200/80 text-xs font-semibold text-rose-700">
              → Gubitak do 50.000 RSD po radniku mesečno
            </div>
          </div>

          {/* Sa hvala.tips */}
          <div className="p-5 sm:p-6 rounded-xl bg-emerald-50/50 border border-emerald-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Uz hvala.tips (NFC i QR)</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Gost samo uperi kameru u QR stonu nalepnicu ili prisloni telefon na zeleni kubik na šanku. Izabere procenat i plati jednim dodirom.
              </p>
            </div>
            <div className="pt-3 border-t border-emerald-200 text-xs font-semibold text-emerald-700">
              → Do +60% veći bakšiš i zadržan tim za Expo sezonu
            </div>
          </div>
        </div>

        {/* Quick link */}
        <div className="mt-6 text-center">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Zaustavi gubitak bakšiša u svom lokalu</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
