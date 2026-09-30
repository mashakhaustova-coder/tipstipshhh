import React from 'react';
import { Terminal, QrCode, CreditCard, Check, ArrowUpRight, Smartphone, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  demoUrl: string;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ demoUrl }) => {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Jasna rešenja bez skrivenih troškova</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kako gosti ostavljaju bakšiš telefonom
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Fokus isključivo na novac za osoblje. Bez promene fiskalne kase i bez komplikacija sa knjigovodstvom.
          </p>
        </div>

        {/* 3 Core Products from the brief with rich visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. hvala.QR (Highlighted with Phone Visual) */}
          <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/80 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#00BA77] text-slate-950 text-[10px] font-black rounded-bl-lg uppercase tracking-wider">
              0€ za restoran
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3">
                <QrCode className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-black text-slate-900 font-sans">
                hvala<span className="text-[#00BA77]">.QR</span>
              </h3>

              <div className="mt-1 mb-3 pb-2 border-b border-slate-100">
                <span className="text-lg font-black text-slate-900 font-mono">0€</span>
                <span className="text-xs text-slate-500 font-medium"> trošak restorana</span>
                <div className="text-xs font-bold text-emerald-700 mt-0.5">
                  15% naknade pokriva gost
                </div>
              </div>

              {/* Realistic Visual Mockup of QR Scan on Phone */}
              <div className="my-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium mb-2">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kamera telefona skenira sto:</span>
                </div>
                
                {/* Simulated Phone Card */}
                <div className="bg-white rounded-lg p-2.5 shadow-xs border border-slate-200 text-left">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-100 pb-1 mb-1.5">
                    <span className="font-bold text-slate-800">hvala.tips/sto-12</span>
                    <span className="text-[9px] text-emerald-700 font-bold bg-emerald-50 px-1 rounded">Bez app-a</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900">Konobar: Jovan D.</p>
                  <div className="grid grid-cols-3 gap-1 my-1.5 text-[9px] text-center font-bold">
                    <div className="p-1 rounded bg-slate-100 text-slate-700 border border-slate-200">10%</div>
                    <div className="p-1 rounded bg-[#00BA77] text-white">15% · 300 RSD</div>
                    <div className="p-1 rounded bg-slate-100 text-slate-700 border border-slate-200">20%</div>
                  </div>
                  <div className="py-1 bg-black text-white rounded text-[9px] font-bold text-center flex items-center justify-center gap-1">
                    <span>Pay</span>
                    <span>Plati bakšiš</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                QR kod na stolu ili nalepnici. Gost kamerom telefona skenira kod i plaća karticom ili Apple/Google Pay novčanikom.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Besplatan dizajn i štampa</strong> nalepnica</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gost ne instalira aplikaciju</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#00BA77] hover:bg-[#00c982] text-slate-950 font-black text-xs rounded-lg transition-colors shadow-xs"
              >
                <span>Zahtev za demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
              </a>
            </div>
          </div>

          {/* 2. hvala.terminal */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3">
                <Terminal className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-black text-slate-900 font-sans">
                hvala<span className="text-[#00BA77]">.terminal</span>
              </h3>

              <div className="mt-1 mb-3 pb-2 border-b border-slate-100">
                <span className="text-lg font-black text-slate-900 font-mono">15€</span>
                <span className="text-xs text-slate-500 font-medium"> / mesečni najam</span>
                <div className="text-xs font-bold text-emerald-700 mt-0.5">
                  8,7% naknade
                </div>
              </div>

              {/* Terminal Visual Mini Mockup */}
              <div className="my-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-500 font-medium mb-1">
                  PAX pametni terminal samo za bakšiš:
                </div>
                <div className="bg-white rounded-lg p-2 border border-slate-200 text-left">
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono mb-1">
                    <span>hvala.tips</span>
                    <span className="text-emerald-700 font-bold">NFC spreman</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 mb-1.5">Izaberi konobara:</div>
                  <div className="grid grid-cols-2 gap-1 text-[10px]">
                    <div className="p-1 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 truncate">
                      ✓ Nikola M.
                    </div>
                    <div className="p-1 rounded bg-slate-100 text-slate-600 truncate">
                      Stefan D.
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Samostalni bežični terminal posvećen samo napojnicama. Konobar donosi terminal, gost prisloni karticu ili telefon.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Brzo plaćanje bez PIN-a za male iznose</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Baterija za celodnevni rad na terasi</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors"
              >
                <span>Zahtev za demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* 3. hvala.pay */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3">
                <CreditCard className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-black text-slate-900 font-sans">
                hvala<span className="text-[#00BA77]">.pay</span>
              </h3>

              <div className="mt-1 mb-3 pb-2 border-b border-slate-100">
                <span className="text-lg font-black text-slate-900 font-mono">Direktno</span>
                <span className="text-xs text-slate-500 font-medium"> na račun radnika</span>
                <div className="text-xs font-bold text-emerald-700 mt-0.5">
                  Automatski prenos novca
                </div>
              </div>

              {/* Pay Visual Mini Mockup */}
              <div className="my-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-500 font-medium mb-1">
                  Izveštaj za vlasnika / menadžera:
                </div>
                <div className="bg-white rounded-lg p-2 border border-slate-200 text-left">
                  <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                    <span>Nedeljni zbir</span>
                    <span className="text-emerald-700 font-bold font-mono">Isplaćeno</span>
                  </div>
                  <div className="text-sm font-black text-slate-900 font-mono">
                    78.450 RSD
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5">
                    Prebačeno na tekuće račune 6 zaposlenih
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Bakšiš stiže direktno na račun zaposlenog u bilo kojoj banci. Novac ne ulazi u pazar lokala.
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nedeljni izveštaj</strong> na email menadžera</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Nema poreza na dobit niti pravnih rizika</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors"
              >
                <span>Zahtev za demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          </div>

        </div>

        {/* Dedicated POS Materials Showcase (Based on official hvala.tips materials) */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left 6 cols: Actual image of acrylic stands, table tents, stickers */}
            <div className="lg:col-span-6 bg-slate-100 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="relative rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                <img
                  src="/src/assets/images/hvala_pos_materials_1790774825995.jpg"
                  alt="Besplatni štampani POS materijali za stolove: akrilni stalci, nalepnice i kartice sa QR kodom"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold rounded">
                  Besplatno za vaš lokal
                </div>
              </div>
            </div>

            {/* Right 6 cols: Copy and explanation for restaurant owners */}
            <div className="lg:col-span-6 p-6 sm:p-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mb-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Uključeno u hvala.tips paket</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Besplatan dizajn i štampa materijala za stolove
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Ne morate sami praviti natpise ili tražiti štampariju. Donosimo gotove, brendirane materijale sa vašim logotipom spremne za goste:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Akrilni stajaći stalci za stolove</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Trouglasti stoni kartoni</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Vodootporne nalepnice za šank</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Stikeri za držače za escajg</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#00BA77] hover:bg-[#00c982] text-slate-950 font-black text-xs sm:text-sm rounded-lg transition-all shadow-xs active:scale-95 text-center"
                >
                  <span>Naruči besplatne uzorke i demo</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
