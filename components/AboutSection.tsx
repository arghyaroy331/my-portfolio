"use client";

import {
  GraduationCap,
  Cpu,
  Terminal,
  Database,
  Cloud,
  Code,
  Sparkles,
  Linkedin,
  Github,
  LeetCode,
  Mail,
} from "./Icons";

export default function AboutSection() {
  const highlights = [
    {
      label: "Education",
      value: "B.Tech in IT (2027)",
      desc: "JIS College of Engineering, Kalyani",
      icon: GraduationCap,
      color: "from-purple-500/15 via-[#803CFF]/10 to-transparent",
      borderColor: "hover:border-[#803CFF]/50",
    },
    {
      label: "Specialization",
      value: "Cloud & DevOps",
      desc: "AWS, Terraform, Linux, Docker",
      icon: Cloud,
      color: "from-sky-500/15 via-indigo-500/10 to-transparent",
      borderColor: "hover:border-sky-500/50",
    },
    {
      label: "Hands-on Projects",
      value: "4+ Cloud Deployments",
      desc: "VPC, CloudWatch, EC2, S3, RDS",
      icon: Terminal,
      color: "from-emerald-500/15 via-teal-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
    },
    {
      label: "Problem Solving",
      value: "DSA in Java",
      desc: "Active algorithmic practice on LeetCode",
      icon: Code,
      color: "from-amber-500/15 via-rose-500/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
    },
  ];

  return (
    <section id="about" className="w-full flex justify-center px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="w-full max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Section 02 • About &amp; Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background &amp; <span className="text-[#803CFF] dark:text-[#C084FC]">Foundation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Academic foundations, cloud philosophy, and technical focus areas.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                className={`relative rounded-2xl p-5 bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 ${h.borderColor} backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div
                  className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${h.color} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div className="relative z-10 flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                    {h.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-slate-200 group-hover:text-[#803CFF] group-hover:scale-110 transition-all">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight block mb-1">
                    {h.value}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                    {h.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Main Story Cards: Career Vision & Academic Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Career Vision & Cloud Philosophy (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-[#803CFF]/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#803CFF]/15 border border-[#803CFF]/30 flex items-center justify-center text-[#803CFF]">
                  <Cpu size={22} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Career Vision &amp; Cloud Philosophy
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  My journey into technology began with a curiosity about how large-scale web services handle millions of users reliably. That passion quickly channeled into cloud computing, where I focus on architecting resilient, automated, and secure environments on Amazon Web Services (AWS).
                </p>
                <p>
                  I firmly believe in <b className="text-slate-900 dark:text-white font-semibold">Infrastructure as Code (IaC)</b> as a foundational practice. Writing declarative Terraform configurations allows cloud deployments to be reproducible, auditable, and version-controlled, minimizing human error and downtime.
                </p>
                <p>
                  As an undergraduate student at JIS College of Engineering, I divide my time between mastering operating systems, networking fundamentals, and computer algorithms in Java, while building real-world cloud labs that bridge theory with industry-standard DevOps workflows.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#6D28D9] dark:text-[#C084FC]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Cloud &amp; DevOps Roles</span>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arghya_Roy_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#803CFF]/10 text-[#6D28D9] dark:text-[#C084FC] hover:bg-[#803CFF] hover:text-white border border-[#803CFF]/25 font-bold transition-all shadow-sm"
              >
                <span>Download Resume (CV)</span>
              </a>
            </div>
          </div>

          {/* Academic Foundation (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-sky-500/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Academic Foundation
                </h3>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Bachelor of Technology in Information Technology
                </h4>
                <p className="text-xs font-mono text-[#6D28D9] dark:text-[#C084FC] mt-0.5 font-semibold">
                  JIS College of Engineering (Kalyani, WB)
                </p>
                <span className="inline-block mt-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                  2023 — 2027 • Undergraduate
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-2">
                  Core Technical Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms",
                    "Operating Systems",
                    "Computer Networks",
                    "Database Management (SQL)",
                    "OOP with Java",
                    "Software Engineering",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Department of Information Technology
            </div>
          </div>

        </div>

        {/* ========================================================
            UIVERSE.IO SLIDING FILL SOCIAL ICONS (About Section)
           ======================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:px-6 rounded-2xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-xl">
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 block">
              Professional &amp; Algorithmic Profiles
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Connect on LinkedIn, GitHub, LeetCode, or Direct Email
            </span>
          </div>

          <ul className="example-2">
            {/* LinkedIn */}
            <li className="icon-content">
              <a
                href="https://www.linkedin.com/in/arghyaroy1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-social="linkedin"
              >
                <div className="filled" />
                <Linkedin size={20} />
              </a>
              <div className="tooltip">LinkedIn</div>
            </li>

            {/* GitHub */}
            <li className="icon-content">
              <a
                href="https://github.com/arghyaroy331"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-social="github"
              >
                <div className="filled" />
                <Github size={20} />
              </a>
              <div className="tooltip">GitHub</div>
            </li>

            {/* LeetCode */}
            <li className="icon-content">
              <a
                href="https://leetcode.com/u/royarghya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                data-social="leetcode"
              >
                <div className="filled" />
                <LeetCode size={20} />
              </a>
              <div className="tooltip">LeetCode</div>
            </li>

            {/* Mail */}
            <li className="icon-content">
              <a
                href="mailto:arghya331@gmail.com"
                aria-label="Email"
                data-social="mail"
              >
                <div className="filled" />
                <Mail size={20} />
              </a>
              <div className="tooltip">Email</div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
