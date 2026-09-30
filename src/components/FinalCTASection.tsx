import React from 'react';
import { ArrowUpRight, Zap, Check } from 'lucide-react';

interface FinalCTASectionProps {
  demoUrl: string;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ demoUrl }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden border-b border-slate-200">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Subtle urgency badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 mb-4 tracking-wide uppercase">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Pripreme u Beogradu su u toku</span>
        </div>

        {/* Exact Headline as specified */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Ne propusti Expo sezonu.
        </h2>

        {/* Supporting copy */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Turisti bez keša su već u gradu, a milioni posetilaca stižu. Omogući svojim konobarima napojnicu koju zaslužuju i zaštiti svoj tim od prelaska kod konkurencije.
        </p>

        {/* Reassurance points */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Besplatna prezentacija u lokalu</span>
          </span>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Start za 48 sati</span>
          </span>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Bez ugovorne obaveze</span>
          </span>
        </div>

        {/* Primary CTA button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-4 text-base sm:text-lg font-black text-slate-950 bg-[#00BA77] hover:bg-[#00c982] active:bg-[#00a86b] rounded-xl transition-all shadow-[0_4px_20px_rgba(0,186,119,0.35)] hover:shadow-[0_6px_28px_rgba(0,186,119,0.5)] active:scale-95 text-center w-full sm:w-auto"
          >
            <span>Zahtev za demo</span>
            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-950" />
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Klikom prelazite na zvaničnu prijavu za demo na <span className="text-slate-700 font-mono font-medium">hvala.tips/rs</span>
        </p>

      </div>
    </section>
  );
};
