"use client";

import { useState } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import CinematicHero from "@/components/CinematicHero";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <main className="w-full relative flex flex-col gap-12 sm:gap-20 pb-16">
      {/* ========================================================
          OPENING EXPERIENCE — REFERENCE MATCH
          (Glowing blue-purple gradient light sweep, "PORTFOLIO"
           typographic reveal, subtle zoom-in & cinematic fade)
         ======================================================== */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* ========================================================
          1. HOME
          (Hero profile, Cloud Engineer, animated DevOps rotator,
           Explore My Work & Contact Me CTAs, telemetry badges)
         ======================================================== */}
      <CinematicHero />

      {/* ========================================================
          2. ABOUT
          (Highlights stats, Career Vision & Cloud Philosophy,
           Academic Foundation at JIS College of Engineering)
         ======================================================== */}
      <AboutSection />

      {/* ========================================================
          3. SKILLS
          (9 Animated Core Skills: AWS, Terraform, Docker, Kubernetes,
           Linux, Git & GitHub, CI/CD, Java, SQL)
         ======================================================== */}
      <Skills />

      {/* ========================================================
          4. PROJECTS
          (Firefly — AWS Monitoring & Alerting, Paperboat — Scalable Blog on AWS,
           AI Potato Plant Disease Detection, CivicLens)
         ======================================================== */}
      <Projects />

      {/* ========================================================
          5. SHOWCASE
          (Interactive Topology Diagram, Terraform IaC Snippets,
           Live Telemetry & Cloud Metrics)
         ======================================================== */}
      <ProjectShowcase />

      {/* ========================================================
          6. CONTACT
          (Interactive inquiry form to arghya331@gmail.com, direct
           channels, and signature closing banner)
         ======================================================== */}
      <Contact />
    </main>
  );
}
