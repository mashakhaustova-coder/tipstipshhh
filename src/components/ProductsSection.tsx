import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Nfc, Sparkles } from 'lucide-react';
import markoPhoto from '../assets/staff/marko.jpg';
import anaPhoto from '../assets/staff/ana.jpg';
import stefanPhoto from '../assets/staff/stefan.jpg';

interface ProductsSectionProps {
  onDemoClick: () => void;
}

const STAFF = [
  { name: 'Marko', photo: markoPhoto, selected: true },
  { name: 'Ana', photo: anaPhoto, selected: false },
  { name: 'Stefan', photo: stefanPhoto, selected: false },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onDemoClick }) => {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Retko ko na tržištu ovo ima</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Gost bira <em className="italic text-emerald-700">konobara po liku</em> — ne po broju stola
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dodirne lice na terminalu i bakšiš ide pravo tom čoveku. Bez deljenja, bez pogrešne osobe.
          </p>
        </motion.div>

        {/* Terminal visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="w-[280px] sm:w-[300px] rounded-[32px] bg-slate-900 p-2.5 shadow-xl">
            <div className="rounded-[22px] bg-white overflow-hidden">

              {/* Screen top bar */}
              <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <span className="font-display text-xs font-bold text-slate-900">
                  hvala<span className="text-[#00BA77]">.tips</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  <Nfc className="w-3 h-3" />
                  <span>NFC</span>
                </span>
              </div>

              <div className="px-4 pb-4">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2.5">
                  Kome ide bakšiš?
                </p>

                {/* Staff faces */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {STAFF.map((person) => (
                    <div
                      key={person.name}
                      className={`relative flex flex-col items-center gap-1 py-2 rounded-xl border ${
                        person.selected ? 'border-emerald-400 bg-emerald-50/60' : 'border-slate-200'
                      }`}
                    >
                      {person.selected && (
                        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#00BA77] flex items-center justify-center shadow-sm">
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="text-[10px] font-semibold text-slate-700">{person.name}</span>
                    </div>
                  ))}
                </div>

                {/* Percent selector */}
                <div className="flex items-center gap-1.5 mb-3">
                  {['10%', '15%', '20%'].map((pct, i) => (
                    <span
                      key={pct}
                      className={`flex-1 text-center text-[11px] font-bold py-1.5 rounded-lg border ${
                        i === 1
                          ? 'bg-[#00BA77] text-slate-950 border-[#00BA77]'
                          : 'text-slate-600 border-slate-200'
                      }`}
                    >
                      {pct}
                    </span>
                  ))}
                </div>

                {/* Pay button */}
                <div className="w-full rounded-xl bg-slate-900 text-white text-center text-xs font-bold py-2.5">
                  Plati · 450 RSD
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onDemoClick}
            className="cta-pulse inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00BA77] hover:bg-[#00c982] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_16px_rgba(0,186,119,0.3)] active:scale-95"
          >
            <span>Zatraži demo</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
