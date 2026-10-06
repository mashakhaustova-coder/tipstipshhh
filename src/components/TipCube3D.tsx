import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw, Smartphone, CheckCircle2, ArrowUpRight } from 'lucide-react';
import cafeBgImg from '../assets/images/belgrade_danube_cafe_1790775543068.jpg';

interface TipCube3DProps {
  onDemoClick: () => void;
}

export const TipCube3D: React.FC<TipCube3DProps> = ({ onDemoClick }) => {
  // 3D rotation angles
  const [rotateX, setRotateX] = useState<number>(-14);
  const [rotateY, setRotateY] = useState<number>(30);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dropKey, setDropKey] = useState<number>(0);
  const [isSimulatingPhone, setIsSimulatingPhone] = useState<boolean>(false);
  const [tipSuccess, setTipSuccess] = useState<boolean>(false);
  const [selectedTip, setSelectedTip] = useState<number>(300);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDropAgain = () => {
    setDropKey((prev) => prev + 1);
    setRotateX(-14);
    setRotateY(30);
    setTipSuccess(false);
  };

  const handleTriggerSimulation = () => {
    if (isSimulatingPhone) return;
    setIsSimulatingPhone(true);
    setTipSuccess(false);

    setTimeout(() => {
      setTipSuccess(true);
      setTimeout(() => {
        setIsSimulatingPhone(false);
      }, 2400);
    }, 1200);
  };

  // Mouse drag to rotate (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotateY((prev) => (prev + deltaX * 0.7) % 360);
    setRotateX((prev) => Math.max(-55, Math.min(55, prev - deltaY * 0.7)));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  // Touch drag to rotate (mobile), wired as native listeners so touchmove can
  // be registered non-passive. React's onTouchMove prop is passive by default,
  // which silently breaks e.preventDefault() and lets Android scroll the page
  // out from under the drag instead of rotating the cube.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      dragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging || e.touches.length !== 1) return;
      e.preventDefault();
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastX;
      const deltaY = touch.clientY - lastY;
      setRotateY((prev) => (prev + deltaX * 0.7) % 360);
      setRotateX((prev) => Math.max(-55, Math.min(55, prev - deltaY * 0.7)));
      lastX = touch.clientX;
      lastY = touch.clientY;
    };

    const onTouchEnd = () => {
      dragging = false;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  const cubeSize = 142; // px cube width
  const halfSize = cubeSize / 2;

  return (
    <div className="relative w-full max-w-[480px] mx-auto flex flex-col items-center select-none">
      {/* Visual interaction badge */}
      <div className="w-full flex items-center justify-between mb-2 px-1 text-xs text-slate-500 gap-2">
        <span className="flex items-center gap-1.5 font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-[#00BA77] animate-pulse shrink-0" />
          <span>Kubik na stolu za plaćanje telefonom</span>
        </span>
        <span className="flex items-center gap-1 text-emerald-700 text-[11px] font-bold shrink-0 animate-pulse">
          Prevuci prstom <RotateCw className="w-3 h-3" />
        </span>
      </div>

      {/* 3D Scene Viewport: Belgrade Danube Riverside Cafe Terrace */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full h-[340px] sm:h-[410px] flex items-center justify-center cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 touch-none"
        style={{ perspective: '1100px' }}
      >
        {/* Authentic Belgrade Danube Riverside Cafe Terrace Background */}
        <img
          src={cafeBgImg}
          alt="Kafić na obali Dunava u Beogradu sa pogledom na reku"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />

        {/* Soft sunlight vignette and ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/20 pointer-events-none" />

        {/* Riverside Location Tag */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/60 shadow-sm pointer-events-none max-w-[75%]">
          <div className="w-2 h-2 rounded-full bg-[#00BA77] animate-ping shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-tight truncate">
            📍 Terasa na Dunavu, Beograd
          </span>
        </div>

        {/* Realistic Soft Cube Shadow on the Wooden Bar Counter */}
        <motion.div
          key={`shadow-${dropKey}`}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute bottom-20 w-44 h-16 rounded-full bg-stone-900/40 blur-md pointer-events-none"
        />

        {/* Drop Impact Ring Animation */}
        <motion.div
          key={`ring-${dropKey}`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.6, 2.1] }}
          transition={{ duration: 0.85, delay: 0.45 }}
          className="absolute bottom-[88px] w-32 h-10 rounded-full border border-emerald-500/50 pointer-events-none"
        />

        {/* Interactive Phone Tapping/Scanning Screen Simulation */}
        <AnimatePresence>
          {isSimulatingPhone && (
            <motion.div
              initial={{ x: 110, y: -140, rotate: 18, opacity: 0, scale: 0.85 }}
              animate={{ x: 20, y: -30, rotate: -4, opacity: 1, scale: 1 }}
              exit={{ x: 110, y: -140, rotate: 18, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="absolute z-30 flex flex-col items-center"
            >
              {/* Smartphone mockup */}
              <div className="w-40 sm:w-44 bg-white border-4 border-slate-900 rounded-3xl shadow-2xl overflow-hidden text-slate-900 p-2.5">
                {/* Phone Speaker Notch */}
                <div className="w-12 h-1.5 bg-slate-900 rounded-full mx-auto mb-2" />

                {/* hvala.tips Mobile Payment Screen */}
                <div className="text-center">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 border-b border-slate-100 pb-1 mb-1.5">
                    <span className="font-bold text-slate-900">hvala.tips</span>
                    <span className="text-emerald-600 font-semibold">Dorćol Bar</span>
                  </div>

                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Konobar: Marko P.</p>
                  <p className="text-[9px] text-slate-500 mb-2">Izaberi napojnicu:</p>

                  {/* Tip Percentages */}
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    {[
                      { pct: '10%', rsd: 200 },
                      { pct: '15%', rsd: 300 },
                      { pct: '20%', rsd: 400 },
                    ].map((item) => (
                      <button
                        key={item.pct}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTip(item.rsd);
                        }}
                        className={`py-1.5 rounded text-[10px] font-bold border transition-colors ${
                          selectedTip === item.rsd
                            ? 'bg-[#00BA77] text-white border-[#00BA77]'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {item.pct}
                        <span className="block text-[8px] font-normal opacity-85">{item.rsd} RSD</span>
                      </button>
                    ))}
                  </div>

                  {/* Apple Pay Button */}
                  <div className="w-full py-1.5 bg-black text-white rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm">
                    <span className="text-xs">Pay</span>
                    <span>Plati {selectedTip} RSD</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-14 h-1 bg-slate-300 rounded-full mx-auto mt-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tip Success Floating Toast */}
        <AnimatePresence>
          {tipSuccess && (
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              animate={{ y: -70, opacity: 1, scale: 1 }}
              exit={{ y: -90, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute z-40 flex flex-col items-center gap-1.5 max-w-[85%]"
            >
              <div className="px-4 py-2.5 bg-emerald-600 text-white rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-300 font-semibold text-xs tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>+{selectedTip} RSD bakšiš poslat konobaru!</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDemoClick();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-slate-900 rounded-lg shadow-lg text-[11px] font-bold border border-slate-200 active:scale-95 transition-transform"
              >
                <span>Hoću ovo za svoj lokal</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* THE 3D GREEN HVALA.TIPS CUBE WITH PHYSICS */}
        <motion.div
          key={`cube-${dropKey}`}
          initial={{
            y: -360,
            rotateX: -45,
            rotateY: 210,
            rotateZ: 35,
            scale: 0.8,
          }}
          animate={{
            y: 0,
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: 0,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 15,
            mass: 1.1,
          }}
          className="relative preserve-3d"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {/* FACE 1: FRONT (bakšiš + hvala.tips logo) */}
          <div
            className="absolute -inset-px bg-gradient-to-br from-[#00BA77] via-[#00a86b] to-[#008f5a] flex flex-col items-center justify-between p-4 text-white"
            style={{
              transform: `translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.45), inset 0 -3px 6px rgba(0,0,0,0.25)',
            }}
          >
            <div className="w-full flex justify-between items-center text-[10px]">
              <span className="font-display font-bold tracking-wider">hvala.tips</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            <div className="text-center my-auto">
              <span className="font-display text-2xl font-bold tracking-tight drop-shadow-sm block">
                bakšiš
              </span>
              <span className="text-[11px] font-medium tracking-wider text-emerald-100 uppercase block mt-0.5">
                tips
              </span>
            </div>
            <div className="text-[9px] text-emerald-100 font-semibold tracking-wider uppercase">
              NFC BEZGOTOVINSKI
            </div>
          </div>

          {/* FACE 2: BACK (bakšiš) */}
          <div
            className="absolute -inset-px bg-gradient-to-br from-[#008f5a] to-[#007449] flex flex-col items-center justify-center p-4 text-white"
            style={{
              transform: `rotateY(180deg) translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.3)',
            }}
          >
            <span className="font-display text-2xl font-bold tracking-tight drop-shadow-sm">
              bakšiš
            </span>
            <span className="text-[10px] text-emerald-200 mt-2 font-mono">
              hvala.tips/rs
            </span>
          </div>

          {/* FACE 3: RIGHT (tips welcome) */}
          <div
            className="absolute -inset-px bg-gradient-to-br from-[#00a86b] to-[#008c58] flex flex-col items-center justify-center p-4 text-white"
            style={{
              transform: `rotateY(90deg) translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.3)',
            }}
          >
            <span className="font-display text-2xl font-bold tracking-tight drop-shadow-sm">
              tips
            </span>
            <span className="text-[10px] text-emerald-100 mt-1 uppercase font-semibold tracking-wider">
              welcome
            </span>
          </div>

          {/* FACE 4: LEFT (NFC + hvala.tips) */}
          <div
            className="absolute -inset-px bg-gradient-to-br from-[#00a86b] to-[#008c58] flex flex-col items-center justify-center p-4 text-white"
            style={{
              transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.3)',
            }}
          >
            {/* NFC Wave Icon */}
            <svg className="w-9 h-9 text-white mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8.5a6.5 6.5 0 0 1 0 7" />
              <path d="M9.5 6a10 10 0 0 1 0 12" />
              <path d="M13 3.5a13.5 13.5 0 0 1 0 17" />
            </svg>
            <span className="font-display text-sm font-bold tracking-wider">hvala.tips</span>
            <span className="text-[10px] text-emerald-200 mt-1">Tap & Pay</span>
          </div>

          {/* FACE 5: TOP */}
          <div
            className="absolute -inset-px bg-gradient-to-br from-[#00cc83] via-[#00BA77] to-[#00a86b] flex flex-col items-center justify-between py-3 px-2 text-white"
            style={{
              transform: `rotateX(90deg) translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 3px 6px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(0,0,0,0.2)',
            }}
          >
            <span className="font-display text-lg font-bold tracking-tight drop-shadow">
              bakšiš
            </span>

            {/* NFC Oval Badge */}
            <div className="w-16 h-10 border-2 border-white rounded-full flex flex-col items-center justify-center shadow-xs bg-white/10 backdrop-blur-xs my-0.5">
              <svg className="w-5 h-3 text-white" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M8 12a4 4 0 0 1 8 0" />
                <path d="M5 8a8 8 0 0 1 14 0" />
                <path d="M2 4a12 12 0 0 1 20 0" />
              </svg>
              <span className="text-[9px] font-black tracking-widest text-white leading-none mt-0.5">
                NFC
              </span>
            </div>

            <span className="text-xs font-bold tracking-wider drop-shadow text-white/95">
              tips welcome
            </span>
          </div>

          {/* FACE 6: BOTTOM (Silicone Base) */}
          <div
            className="absolute -inset-px bg-[#00603c] flex flex-col items-center justify-center p-3 text-emerald-300"
            style={{
              transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-16 h-16 rounded-full border border-emerald-400/20 flex flex-col items-center justify-center text-center">
              <span className="text-[8px] font-mono opacity-80">hvala.tips cube</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="w-full mt-3 flex items-center justify-between gap-2">
        <button
          onClick={handleTriggerSimulation}
          type="button"
          className={`flex-1 py-2.5 px-2.5 bg-[#00BA77] hover:bg-[#00c982] text-slate-950 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95 ${
            isSimulatingPhone ? '' : 'cta-pulse'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5 text-slate-950 shrink-0" />
          <span>Klikni ovde da probaš</span>
        </button>

        <button
          onClick={handleDropAgain}
          type="button"
          className="py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition-all flex items-center justify-center gap-1 shadow-xs active:scale-95"
          title="Baci kockicu ponovo"
        >
          <RotateCw className="w-3.5 h-3.5 text-slate-600" />
          <span className="hidden sm:inline">Ponovo</span>
        </button>
      </div>

      {/* Real product explanation */}
      <p className="mt-2 text-[11px] text-slate-500 text-center">
        Kompaktan kubik za šank i stolove · Bez kablova · Gost plaća za 3 sekunde
      </p>
    </div>
  );
};
