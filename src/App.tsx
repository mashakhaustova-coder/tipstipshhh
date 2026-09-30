import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { SocialProofSection } from './components/SocialProofSection.tsx';
import { FinalCTASection } from './components/FinalCTASection.tsx';
import { Footer } from './components/Footer.tsx';

const DEMO_URL = 'https://hvala.tips/rs#rec1419823601';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-[#00BA77] selection:text-white">
      {/* Light Header */}
      <Navbar demoUrl={DEMO_URL} />

      {/* Main Single-Page Ad Funnel */}
      <main className="flex-1">
        {/* 1. Hero: Pain question + 3D Cube on Cafe Table + Strict CTA */}
        <HeroSection demoUrl={DEMO_URL} />

        {/* 2. Core Pain: 2-3 sentences from brief with high-converting contrast */}
        <ProblemSection demoUrl={DEMO_URL} />

        {/* 3. Solution: Visuals of QR scan on phone, Terminal & Pay with exact fees */}
        <ProductsSection demoUrl={DEMO_URL} />

        {/* 4. Social Proof: 5 partner logos (Raiffeisen, Payspot, syrve, etc.) */}
        <SocialProofSection />

        {/* 5. Final CTA: Ne propusti Expo sezonu. */}
        <FinalCTASection demoUrl={DEMO_URL} />
      </main>

      {/* Light Footer */}
      <Footer demoUrl={DEMO_URL} />

      {/* Sticky Mobile Conversion Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex items-center justify-between gap-3 shadow-xl">
          <div className="flex flex-col">
            <span className="text-xs font-black text-slate-900">hvala.tips</span>
            <span className="text-[10px] text-emerald-700 font-medium">Bakšiš za osoblje</span>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-black text-slate-950 bg-[#00BA77] hover:bg-[#00c982] rounded-lg transition-all shadow-md active:scale-95"
          >
            <span>Zahtev za demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>
      )}
    </div>
  );
}
