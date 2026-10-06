import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { SocialProofSection } from './components/SocialProofSection.tsx';
import { FinalCTASection } from './components/FinalCTASection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openDemo = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-[#00BA77] selection:text-white">
      {/* Light Header */}
      <Navbar onDemoClick={openDemo} />

      {/* Main Single-Page Ad Funnel */}
      <main className="flex-1">
        {/* 1. Hero: Pain question + 3D Cube on Cafe Table + Strict CTA */}
        <HeroSection onDemoClick={openDemo} />

        {/* 2. Core Pain: 2-3 sentences from brief with high-converting contrast */}
        <ProblemSection onDemoClick={openDemo} />

        {/* 3. Solution: terminal recognizing staff by face, NFC/card tap to pay */}
        <ProductsSection onDemoClick={openDemo} />

        {/* 4. Social Proof: partner logos */}
        <SocialProofSection />

        {/* 5. Final CTA: Ne propusti Expo sezonu. */}
        <FinalCTASection onDemoClick={openDemo} />
      </main>

      {/* Light Footer */}
      <Footer onDemoClick={openDemo} />

      {/* Sticky Mobile Conversion Bar */}
      {showStickyBar && !isModalOpen && (
        <div
          className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex items-center justify-between gap-3 shadow-xl"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="flex flex-col">
            <span className="text-xs font-black text-slate-900">hvala.tips</span>
            <span className="text-[10px] text-emerald-700 font-medium">Bakšiš za osoblje</span>
          </div>
          <button
            type="button"
            onClick={openDemo}
            className="cta-pulse inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-black text-slate-950 bg-[#00BA77] hover:bg-[#00c982] rounded-lg transition-all shadow-md active:scale-95"
          >
            <span>Zatraži demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      )}

      <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
