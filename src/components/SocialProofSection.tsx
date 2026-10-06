import React from 'react';
import { motion } from 'motion/react';
import raiffeisenLogo from '../assets/logos/raiffeisen.svg';
import syrveLogo from '../assets/logos/syrve-dark.svg';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5">
          Licencirani bankarski i tehnološki partneri u Srbiji
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-center">
          {/* Raiffeisen — official logo */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <img src={raiffeisenLogo} alt="Raiffeisen Bank" className="h-5 w-auto" />
          </div>

          {/* Payspot */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="font-black text-slate-900 text-xs sm:text-sm">PAY<span className="text-rose-500">SPOT</span></span>
          </div>

          {/* Syrve — official logo */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <img src={syrveLogo} alt="Syrve" className="h-4 w-auto" />
          </div>

          {/* Djokic Partners */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-center px-2 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="font-serif font-bold text-slate-800 text-[11px] tracking-wider uppercase">Đokić Partners</span>
          </div>

          {/* HoReCa shop */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-1 px-3 col-span-2 sm:col-span-1 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="text-[10px] font-bold text-amber-600">HoReCa</span>
            <span className="font-extrabold text-slate-900 text-xs">SHOP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
