import React from 'react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5">
          Licencirani bankarski i tehnološki partneri u Srbiji
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-center">
          {/* Raiffeisen */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="w-5 h-5 bg-[#fee600] rounded font-black text-black text-xs flex items-center justify-center font-mono">X</span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">Raiffeisen</span>
          </div>

          {/* Payspot */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="font-black text-slate-900 text-xs sm:text-sm">PAY<span className="text-rose-500">SPOT</span></span>
          </div>

          {/* Syrve */}
          <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center px-3 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="font-black text-emerald-600 text-sm sm:text-base">syrve</span>
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
        </div>
      </div>
    </section>
  );
};
