import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { TipCube3D } from './TipCube3D.tsx';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDemoClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
      {/* Background soft emerald highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Core Copy & Strict CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col text-left"
          >

            {/* Top context line */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-3 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00BA77]" />
              <span>Priprema za Expo 2027 · Beograd</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Turisti bez <em className="italic text-emerald-700">keša</em> — konobari bez <em className="italic text-emerald-700">bakšiša</em>?
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Expo 2027 dovodi milione turista bez gotovine u Beograd. Svaki put kad plate karticom, tvoj konobar ostaje bez napojnice.
            </p>

            {/* Primary Action Button (Single strict CTA) */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onDemoClick}
                className="cta-pulse group inline-flex items-center justify-center px-8 py-3.5 text-base font-extrabold text-slate-950 bg-[#00BA77] hover:bg-[#00c982] active:bg-[#00a86b] rounded-xl transition-all shadow-[0_4px_16px_rgba(0,186,119,0.3)] hover:shadow-[0_6px_22px_rgba(0,186,119,0.45)] active:scale-95 text-center"
              >
                <span>Zatraži demo</span>
                <ArrowUpRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-950" />
              </button>

              <span className="text-xs text-slate-500 text-center sm:text-left">
                Besplatna proba u tvom lokalu za 48h
              </span>
            </div>

            {/* Fast reassurance list */}
            <div className="mt-5 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bez menjanja kase</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direktno na račun radnika</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kartica ili telefon</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual — 3D Tip Cube on the Cafe Bar Table */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <TipCube3D onDemoClick={onDemoClick} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
