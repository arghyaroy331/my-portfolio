"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  AwsIcon,
  TerraformIcon,
  DockerIcon,
  LinuxIcon,
  Github,
  KubernetesIcon,
  PythonIcon,
  Cloud,
  CheckCircle,
} from "./Icons";

const subtitles = [
  "Cloud Infrastructure",
  "AWS & Terraform",
  "DevOps & Automation",
  "Linux & CI/CD",
];

const techBadges = [
  {
    name: "AWS",
    icon: AwsIcon,
    color:
      "text-amber-700 dark:text-[#FFA116] border-amber-500/30 dark:border-[#FFA116]/30 bg-amber-500/10",
  },
  {
    name: "Terraform",
    icon: TerraformIcon,
    color:
      "text-purple-700 dark:text-[#C084FC] border-purple-500/30 dark:border-[#803CFF]/30 bg-purple-500/10",
  },
  {
    name: "Docker",
    icon: DockerIcon,
    color:
      "text-sky-700 dark:text-[#38BDF8] border-sky-500/30 dark:border-[#38BDF8]/30 bg-sky-500/10",
  },
  {
    name: "Linux",
    icon: LinuxIcon,
    color:
      "text-amber-800 dark:text-amber-400 border-amber-600/30 dark:border-amber-400/30 bg-amber-500/10",
  },
  {
    name: "GitHub",
    icon: Github,
    color:
      "text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-400/30 bg-black/[0.04] dark:bg-white/10",
  },
  {
    name: "Kubernetes",
    icon: KubernetesIcon,
    color:
      "text-blue-700 dark:text-[#60A5FA] border-blue-500/30 dark:border-[#60A5FA]/30 bg-blue-500/10",
  },
  {
    name: "Python",
    icon: PythonIcon,
    color:
      "text-sky-700 dark:text-[#38BDF8] border-sky-500/30 dark:border-[#38BDF8]/30 bg-sky-500/10",
  },
];

export default function CinematicHero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isColorActive, setIsColorActive] = useState(false);

  const toggleColor = () => setIsColorActive((prev) => !prev);

  // Cycling animated subtitle every 2.6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#projects");
    } else {
      window.location.hash = "#projects";
    }
  };

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#contact");
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 overflow-hidden scroll-mt-24">
      
      {/* Background Volumetric Lighting (Purple & Blue Aura) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Left Side Violet Aura */}
        <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#803CFF]/20 via-[#6366F1]/15 to-transparent blur-[120px]" />
        {/* Right Side Electric Blue & Purple Aura behind Portrait */}
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#38BDF8]/18 via-[#803CFF]/25 to-transparent blur-[130px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ========================================================
            LEFT COLUMN: INTRO TEXT, TYPOGRAPHY, ROTATOR, CTAS, BADGES
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Introductory Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#803CFF] shadow-[0_0_8px_#803CFF] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.28em] uppercase text-[#6D28D9] dark:text-[#C084FC]">
              HELLO, I&apos;M
            </span>
          </div>

          {/* Name Heading: ARGHYA ROY */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-950 dark:text-white mb-2 leading-[1.08] select-none">
            ARGHYA{" "}
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              ROY
            </span>
          </h1>

          {/* Professional Title: Cloud Engineer */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D28D9] via-[#803CFF] to-[#0284C7] dark:from-[#803CFF] dark:via-[#A855F7] dark:to-[#38BDF8] bg-clip-text text-transparent">
              Cloud Engineer
            </h2>
          </div>

          {/* Animated Cycling Subtitle */}
          <div className="h-8 sm:h-9 flex items-center mb-6">
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
              <span className="text-[#6D28D9] dark:text-[#C084FC] font-bold">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={subtitles[currentSubtitle]}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-bold text-[#0369A1] dark:text-sky-300"
                >
                  {subtitles[currentSubtitle]}
                </motion.span>
              </AnimatePresence>
              <span className="w-1.5 h-4 bg-slate-800 dark:bg-slate-400 animate-pulse ml-0.5 inline-block" />
            </div>
          </div>

          {/* Short Professional Introduction */}
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-sans font-normal">
            Passionate about architecting resilient cloud infrastructure, automating deployments with declarative Terraform configurations, orchestrating containerized workloads, and implementing real-time observability across Amazon Web Services.
          </p>

          {/* CTA Buttons: Explore My Work, Contact Me & Download Resume */}
          <div className="relative flex flex-wrap items-center gap-3.5 mb-10 pt-6">
            {/* Transparent Floating Animated Black Arrow pointing directly to Explore My Work */}
            <motion.div
              onClick={scrollToProjects}
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute -top-12 left-7 sm:left-9 cursor-pointer select-none z-20 group"
              role="button"
              tabIndex={0}
              aria-label="Explore My Work arrow pointer"
            >
              <svg
                width="54"
                height="48"
                viewBox="0 0 60 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black dark:text-white filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform"
              >
                {/* Looping Curved Doodle Stroke */}
                <path
                  d="M6 10 C18 4, 32 6, 36 16 C39 26, 28 32, 22 26 C16 19, 25 10, 38 18 C47 24, 49 34, 50 46"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead pointing down directly into Explore My Work */}
                <path
                  d="M40 40 L50 47 L54 37"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Primary CTA: Explore My Work */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#4F46E5] shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CTA: Contact Me */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:text-[#6D28D9] dark:hover:text-white bg-white/90 dark:bg-white/[0.05] border border-slate-300 dark:border-white/15 hover:border-[#803CFF] dark:hover:border-[#803CFF]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Mail size={16} className="text-[#6D28D9] dark:text-[#C084FC]" />
              <span>Contact Me</span>
            </a>

            {/* Tertiary Action: Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Arghya_Roy_Resume.pdf"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white/70 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 hover:border-[#803CFF] hover:bg-black/[0.03] dark:hover:bg-white/[0.08] transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Download size={14} className="text-[#803CFF] dark:text-[#C084FC]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Technology Badges Row */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold mb-3 block">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-2.5">
              {techBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-default ${badge.color}`}
                  >
                    <Icon size={14} />
                    <span>{badge.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN: PROFESSIONAL PORTRAIT WITH GLASS-EFFECT FRAME
            & FLOATING TECHNOLOGY ELEMENTS
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Main Visual Frame Container with Interactive Color Transition */}
          <div
            onClick={toggleColor}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleColor();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Arghya Roy portrait - Click or tap to toggle natural color"
            aria-pressed={isColorActive}
            className="group relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#803CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-2xl active:scale-[0.98] transition-transform duration-200"
          >
            {/* Ambient Lighting Ring behind Portrait (Subtle purple-blue glow that blooms on hover/click) */}
            <div
              className={`absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#803CFF]/40 via-[#6366F1]/25 to-[#38BDF8]/35 blur-2xl transition-all duration-700 pointer-events-none motion-reduce:transition-none ${
                isColorActive
                  ? "opacity-100 scale-105"
                  : "opacity-60 group-hover:opacity-100 group-hover:scale-105"
              }`}
              aria-hidden="true"
            />

            {/* Premium Glass-Effect Outer Frame */}
            <div
              className={`relative w-full h-full rounded-2xl p-2.5 bg-white/80 dark:bg-white/[0.03] border transition-all duration-700 ease-in-out shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden ${
                isColorActive
                  ? "border-[#803CFF]/60 shadow-[0_0_35px_rgba(128,60,255,0.35)]"
                  : "border-slate-300 dark:border-white/15 group-hover:border-[#803CFF]/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
              }`}
            >
              {/* Inner Specular Highlight / Dual Border */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                
                {/* Image Placeholder & Graceful Loading State */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-[#13131c] dark:to-black z-20 animate-pulse">
                    {/* Abstract Cloud Engineering Monogram Placeholder */}
                    <div className="w-20 h-20 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-[#803CFF]/30 flex items-center justify-center text-[#803CFF] shadow-[0_0_20px_rgba(128,60,255,0.2)] mb-3">
                      <Cloud size={38} className="text-[#803CFF] dark:text-[#A855F7]" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-800 dark:text-slate-400 uppercase">
                      ARGHYA ROY
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 mt-1">
                      Loading Studio Portrait...
                    </span>
                  </div>
                )}

                {/* Graceful Fallback if image path is unavailable */}
                {imageError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 dark:from-[#161622] dark:via-[#0E0E17] dark:to-black p-6 text-center z-20">
                    <div className="w-24 h-24 rounded-2xl bg-[#803CFF]/10 border border-[#803CFF]/30 flex items-center justify-center text-[#803CFF] shadow-lg mb-4">
                      <span className="text-3xl font-black font-mono tracking-tight text-slate-900 dark:text-white">AR</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Arghya Roy</h3>
                    <p className="text-xs font-mono text-[#6D28D9] dark:text-[#803CFF] mb-3">Aspiring Cloud Engineer</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                      AWS Cloud • Terraform • Docker • Linux
                    </p>
                  </div>
                )}

                {/* Layer 1: Black & White Base Portrait (Default Appearance) */}
                <Image
                  src="/profile-bw.jpg"
                  alt="Arghya Roy - Cloud Engineer (Monochrome)"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`object-cover object-top transition-transform duration-700 ease-out motion-reduce:transform-none ${
                    isColorActive ? "scale-[1.03]" : "scale-100 group-hover:scale-[1.03]"
                  } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                />

                {/* Layer 2: Authentic Original Natural Color Portrait (Smooth Cross-fade on Hover / Click) */}
                <Image
                  src="/profile-color.jpg"
                  alt="Arghya Roy - Cloud Engineer (Natural Color)"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={`object-cover object-top transition-all duration-700 ease-in-out motion-reduce:transform-none ${
                    isColorActive
                      ? "opacity-100 scale-[1.03]"
                      : "opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-[1.03]"
                  }`}
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
