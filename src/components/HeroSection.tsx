import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, QrCode, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { TipCube3D } from './TipCube3D.tsx';

interface HeroSectionProps {
  demoUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ demoUrl }) => {
  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
      {/* Background soft emerald highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Core Copy & Strict CTA */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Top context line */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-3 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00BA77]" />
              <span>Priprema za Expo 2027 · Beograd</span>
            </div>

            {/* Exact Headline as specified */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Tvoji konobari spremni za bakšiš bez keša od turista?
            </h1>

            {/* Exact Subtitle as specified */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Expo 2027 dovodi milione turista u Beograd. Oni ne nose keš — a tvoji konobari gube bakšiš svaki put kad turist plati karticom.
            </p>

            {/* Visual explanation pill: how phone payment actually works */}
            <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-700 leading-snug">
                <strong className="text-slate-900 block font-bold">Kako funkcioniše za gosta:</strong>
                Skenira <strong className="text-emerald-700">QR kod</strong> na stolu ili samo <strong className="text-emerald-700">prisloni telefon</strong> na šanku → Plaćanje za 3 sekunde putem Apple Pay / kartice.
              </div>
            </div>

            {/* Primary Action Button (Single strict CTA) */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-extrabold text-slate-950 bg-[#00BA77] hover:bg-[#00c982] active:bg-[#00a86b] rounded-xl transition-all shadow-[0_4px_16px_rgba(0,186,119,0.3)] hover:shadow-[0_6px_22px_rgba(0,186,119,0.45)] active:scale-95 text-center"
              >
                <span>Zahtev za demo</span>
                <ArrowUpRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-950" />
              </a>

              <span className="text-xs text-slate-500 text-center sm:text-left">
                Besplatna proba u tvom lokalu za 48h
              </span>
            </div>

            {/* Fast reassurance list */}
            <div className="mt-5 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bez promene kase</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direktno na račun radnika</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Besplatna štampa QR oznaka</span>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual — 3D Tip Cube on the Cafe Bar Table */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <TipCube3D onDemoClick={() => window.open(demoUrl, '_blank')} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
