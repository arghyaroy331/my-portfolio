"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  // Phase 0: Pure dark canvas with soft ambient glow starting to sweep (0 - 500ms)
  // Phase 1: Glowing light sweeps across, revealing "PORTFOLIO" (500ms - 2200ms)
  // Phase 2: Majestic hold with iridescent chromatic shimmer (2200ms - 2900ms)
  // Phase 3: Subtle zoom-in & cinematic fade transition into hero (2900ms - 3500ms)
  const [phase, setPhase] = useState<number>(0);

  const finish = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("intro-complete"));
    }
    onComplete();
  };

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(() => {
      setPhase(3);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("intro-complete"));
      }
    }, 2900);
    const t4 = setTimeout(() => finish(), 3600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        finish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          key="cinematic-opening"
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === 3 ? 0 : 1,
            scale: phase === 3 ? 1.06 : 1,
            filter: phase === 3 ? "blur(8px)" : "blur(0px)",
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={finish}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070709] overflow-hidden select-none cursor-pointer"
        >
          {/* Slow traveling blue-purple luminous ambient light */}
          <motion.div
            initial={{ x: "-60vw", y: "-20vh", opacity: 0 }}
            animate={{
              x: phase >= 1 ? "40vw" : "-30vw",
              y: phase >= 1 ? "15vh" : "-10vh",
              opacity: phase === 3 ? 0 : 0.85,
            }}
            transition={{
              duration: 3.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(128, 60, 255, 0.35) 0%, rgba(56, 189, 248, 0.2) 45%, rgba(99, 102, 241, 0.08) 70%, transparent 90%)",
              filter: "blur(60px)",
            }}
          />

          {/* Secondary counter-light for depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: phase >= 1 && phase < 3 ? 0.45 : 0,
              scale: phase >= 1 ? 1.15 : 0.8,
            }}
            transition={{ duration: 2.8, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)",
              filter: "blur(80px)",
            }}
          />

          {/* Central Reveal Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6">
            
            {/* Subtle top indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: phase >= 1 && phase < 3 ? 0.75 : 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#803CFF] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300">
                Arghya Roy • Cloud Engineer
              </span>
            </motion.div>

            {/* Bold Elegant "PORTFOLIO" Typography */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.25em", scale: 0.95 }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                letterSpacing: phase >= 2 ? "0.45em" : "0.35em",
                scale: phase >= 2 ? 1.02 : 1,
              }}
              transition={{
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-mono tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/70 select-none drop-shadow-[0_0_40px_rgba(128,60,255,0.3)]">
                PORTFOLIO
              </h1>

              {/* Shimmer light pass over text */}
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: phase >= 1 ? "200%" : "-100%" }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Subtle subtitle transition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 && phase < 3 ? 0.8 : 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex items-center gap-3 text-xs font-mono text-slate-400 tracking-widest uppercase"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#803CFF]" />
              <span>Infrastructure • DevOps • Cloud</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#38BDF8]" />
            </motion.div>
          </div>

          {/* Minimal Skip Hint at bottom right */}
          <div className="absolute bottom-6 right-6 z-20">
            <span className="text-[10px] font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest">
              [Click or ESC to skip]
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
