import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

interface ProblemSectionProps {
  onDemoClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onDemoClick }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Core Pain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Glavni problem beogradskih ugostitelja</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
            Bez keša nema bakšiša — a turisti danas retko nose gotovinu.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Konobari ostaju bez napojnica baš u sezoni kad ih ima najviše.
          </p>
        </motion.div>

        {/* Crisp 2-column contrast card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bez sistema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-rose-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wide mb-2">
                <TrendingDown className="w-4 h-4 text-rose-600" />
                <span>Bez digitalnog bakšiša</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Gost pita: <em className="text-slate-900 font-semibold">„Mogu da ostavim bakšiš karticom?”</em> Konobar sleže ramenima: <em className="text-slate-500">„Samo keš.”</em> Bakšiš propada.
              </p>
            </div>
            <div className="pt-3 border-t border-rose-200/80 text-xs font-semibold text-rose-700">
              → Gubitak do 50.000 RSD po radniku mesečno
            </div>
          </motion.div>

          {/* Sa hvala.tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-5 sm:p-6 rounded-xl bg-emerald-50/50 border border-emerald-300 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Uz hvala.tips (NFC i kartica)</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Gost prisloni telefon ili karticu na kubik na šanku. Bira procenat i plaća jednim dodirom.
              </p>
            </div>
            <div className="pt-3 border-t border-emerald-200 text-xs font-semibold text-emerald-700">
              → Do +60% veći bakšiš, zadržan tim za Expo sezonu
            </div>
          </motion.div>
        </div>

        {/* Quick link */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onDemoClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>Zaustavi gubitak bakšiša u svom lokalu</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
