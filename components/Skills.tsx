"use client";

import { useState } from "react";
import {
  AwsIcon,
  TerraformIcon,
  DockerIcon,
  KubernetesIcon,
  LinuxIcon,
  Github,
  GitIcon,
  CicdIcon,
  JavaIcon,
  PythonIcon,
  SqlIcon,
  FlaskIcon,
  Cloud,
  Terminal,
  Database,
  Code,
  Sparkles,
} from "./Icons";

interface MarqueeSkill {
  name: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badgeStyle: string;
  glowStyle: string;
}

// Row 1 Skills: Cloud, DevOps & Infrastructure (Moves Left to Right)
const row1Skills: MarqueeSkill[] = [
  {
    name: "AWS",
    category: "Cloud Platform",
    icon: AwsIcon,
    badgeStyle: "bg-amber-500/10 border-amber-500/30 text-[#FF9900]",
    glowStyle: "hover:border-[#FF9900]/70 hover:shadow-[0_0_25px_rgba(255,153,0,0.3)]",
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    icon: TerraformIcon,
    badgeStyle: "bg-purple-500/10 border-purple-500/30 text-[#C084FC]",
    glowStyle: "hover:border-[#803CFF]/70 hover:shadow-[0_0_25px_rgba(128,60,255,0.3)]",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: DockerIcon,
    badgeStyle: "bg-sky-500/10 border-sky-500/30 text-[#38BDF8]",
    glowStyle: "hover:border-[#38BDF8]/70 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
  },
  {
    name: "Kubernetes",
    category: "Container Orchestration",
    icon: KubernetesIcon,
    badgeStyle: "bg-blue-500/10 border-blue-500/30 text-sky-400",
    glowStyle: "hover:border-sky-400/70 hover:shadow-[0_0_25px_rgba(50,108,229,0.3)]",
  },
  {
    name: "Linux",
    category: "OS & Server Admin",
    icon: LinuxIcon,
    badgeStyle: "bg-amber-400/10 border-amber-400/30 text-amber-300",
    glowStyle: "hover:border-amber-400/70 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]",
  },
  {
    name: "CI/CD",
    category: "Automated Pipelines",
    icon: CicdIcon,
    badgeStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    glowStyle: "hover:border-emerald-400/70 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
  },
];

// Row 2 Skills: Languages, Databases, Version Control & APIs (Moves Right to Left)
const row2Skills: MarqueeSkill[] = [
  {
    name: "Python",
    category: "Automation & Scripting",
    icon: PythonIcon,
    badgeStyle: "bg-sky-500/10 border-sky-500/30 text-sky-400",
    glowStyle: "hover:border-sky-400/70 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
  },
  {
    name: "Java",
    category: "OOP & Algorithmic DSA",
    icon: JavaIcon,
    badgeStyle: "bg-rose-500/10 border-rose-500/30 text-rose-300",
    glowStyle: "hover:border-rose-400/70 hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]",
  },
  {
    name: "SQL",
    category: "Relational Databases",
    icon: SqlIcon,
    badgeStyle: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    glowStyle: "hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: GitIcon,
    badgeStyle: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    glowStyle: "hover:border-orange-400/70 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]",
  },
  {
    name: "GitHub",
    category: "Workflows & Collaboration",
    icon: Github,
    badgeStyle: "bg-slate-200/10 border-slate-300/20 text-slate-200",
    glowStyle: "hover:border-slate-300/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
  },
  {
    name: "Flask",
    category: "Web APIs & Microservices",
    icon: FlaskIcon,
    badgeStyle: "bg-teal-500/10 border-teal-500/30 text-teal-300",
    glowStyle: "hover:border-teal-400/70 hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]",
  },
];

// Single Reusable Skill Card for Marquee
function SkillMarqueeCard({ skill }: { skill: MarqueeSkill }) {
  const Icon = skill.icon;
  return (
    <div
      className={`group/card relative rounded-2xl px-5 py-3.5 sm:py-4 flex items-center gap-3.5 bg-white/80 dark:bg-[#161622]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm ${skill.glowStyle} hover:scale-105 hover:bg-white dark:hover:bg-[#1c1c2b] transition-all duration-300 ease-out cursor-pointer select-none shrink-0 min-w-[210px] sm:min-w-[240px]`}
    >
      {/* Icon Badge */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover/card:scale-110 shadow-sm ${skill.badgeStyle}`}
      >
        <Icon size={22} />
      </div>

      {/* Skill Name & Subtitle */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover/card:text-[#6D28D9] dark:group-hover/card:text-[#C084FC] transition-colors">
          {skill.name}
        </span>
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
          {skill.category}
        </span>
      </div>
    </div>
  );
}

// 9 Core In-Depth Skills (for Detailed View)
interface CoreSkill {
  name: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  technologies: string[];
  gradient: string;
  borderColor: string;
  tagColor: string;
}

const coreSkills: CoreSkill[] = [
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    icon: AwsIcon,
    description:
      "Core cloud computing architecture, compute, networking, security policies, and real-time monitoring.",
    technologies: ["EC2", "VPC", "S3", "RDS", "CloudWatch", "SNS", "IAM", "Route 53"],
    gradient: "from-amber-500/15 via-[#803CFF]/10 to-transparent",
    borderColor: "hover:border-[#FF9900]/50",
    tagColor: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20",
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    icon: TerraformIcon,
    description:
      "Automating multi-tier cloud infrastructure, declarative states, modular provisioning, and drift control.",
    technologies: ["HCL", "Modules", "State Management", "AWS Provider", "Outputs", "Variables"],
    gradient: "from-[#803CFF]/20 via-[#6366F1]/10 to-transparent",
    borderColor: "hover:border-[#803CFF]/60",
    tagColor: "bg-[#803CFF]/15 text-[#C084FC] border-[#803CFF]/30",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: DockerIcon,
    description:
      "Building lightweight container images, multi-stage Dockerfiles, microservice isolation, and Compose stacks.",
    technologies: ["Dockerfiles", "Multi-stage Builds", "Compose", "Networking", "Volumes", "Registry"],
    gradient: "from-[#0284C7]/15 via-[#38BDF8]/10 to-transparent",
    borderColor: "hover:border-[#38BDF8]/60",
    tagColor: "bg-[#0284C7]/15 text-[#38BDF8] border-[#0284C7]/30",
  },
  {
    name: "Kubernetes",
    category: "Container Orchestration",
    icon: KubernetesIcon,
    description:
      "Deploying scalable container clusters, pod scheduling, service discovery, ingress, and self-healing workloads.",
    technologies: ["Pods", "Deployments", "Services", "ConfigMaps", "Cluster Architecture", "kubectl"],
    gradient: "from-[#326CE5]/20 via-[#6366F1]/10 to-transparent",
    borderColor: "hover:border-[#326CE5]/60",
    tagColor: "bg-[#326CE5]/15 text-sky-400 border-[#326CE5]/30",
  },
  {
    name: "Linux",
    category: "Operating System & Administration",
    icon: LinuxIcon,
    description:
      "Deep server administration, systemd daemons, process management, shell scripting, and security hardening.",
    technologies: ["Ubuntu/Debian", "Bash Scripting", "systemd", "SSH", "Nginx", "File Permissions"],
    gradient: "from-amber-400/15 via-emerald-500/10 to-transparent",
    borderColor: "hover:border-amber-400/50",
    tagColor: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  },
  {
    name: "Git & GitHub",
    category: "Version Control & Collaboration",
    icon: Github,
    description:
      "Distributed version control workflows, branching strategies, code reviews, and remote repository governance.",
    technologies: ["Git CLI", "GitHub Actions", "Pull Requests", "Branch Protection", "Rebase", "Tags"],
    gradient: "from-slate-400/15 via-purple-500/10 to-transparent",
    borderColor: "hover:border-slate-300/50",
    tagColor: "bg-white/10 text-slate-200 border-white/20",
  },
  {
    name: "CI/CD",
    category: "Continuous Delivery & Automation",
    icon: CicdIcon,
    description:
      "End-to-end automated build, test, and cloud deployment pipelines reducing manual deployment toil to zero.",
    technologies: ["GitHub Workflows", "Automated Testing", "Artifact Building", "Deployment Hooks"],
    gradient: "from-emerald-500/15 via-[#803CFF]/10 to-transparent",
    borderColor: "hover:border-emerald-500/60",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  {
    name: "Java",
    category: "Programming & Backend Logic",
    icon: JavaIcon,
    description:
      "Object-oriented software development, robust data structures, algorithmic problem solving, and backend logic.",
    technologies: ["Core Java", "OOP Principles", "Data Structures", "Algorithms"],
    gradient: "from-rose-500/15 via-amber-500/10 to-transparent",
    borderColor: "hover:border-rose-500/50",
    tagColor: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  },
  {
    name: "Python",
    category: "Cloud Automation & Scripting",
    icon: PythonIcon,
    description:
      "Writing Python scripts for cloud automation, task automation, data processing, and integrating with cloud services.",
    technologies: [
      "Python 3",
      "Automation Scripting",
      "AWS Boto3",
      "JSON Processing",
      "API Integration",
      "File Handling",
    ],
    gradient: "from-sky-500/15 via-amber-400/10 to-transparent",
    borderColor: "hover:border-sky-400/50",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    name: "SQL",
    category: "Relational Databases",
    icon: SqlIcon,
    description:
      "Relational database design, schema normalization, optimized complex queries, and Amazon RDS integration.",
    technologies: ["MySQL", "Schema Design", "Joins & Aggregations", "Indexes", "Transactions", "Amazon RDS"],
    gradient: "from-cyan-500/15 via-[#6366F1]/10 to-transparent",
    borderColor: "hover:border-cyan-500/50",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"marquee" | "grid" | "categories">("marquee");

  // Create two identical halves for mathematically seamless 50% translation
  const row1Half = [...row1Skills, ...row1Skills];
  const row2Half = [...row2Skills, ...row2Skills];

  return (
    <section id="skills" className="w-full flex justify-center px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="w-full max-w-5xl">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Section 03 • Technical Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical <span className="text-[#803CFF] dark:text-[#C084FC]">Skills</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Engineered for resilient cloud infrastructure, automated provisioning, container orchestration, and reliable systems.
            </p>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-white/[0.05] border border-slate-300/70 dark:border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("marquee")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === "marquee"
                  ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Animated Marquee
            </button>
            <button
              onClick={() => setActiveTab("grid")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === "grid"
                  ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Core Matrix
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === "categories"
                  ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Categories
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB 1: HORIZONTALLY MOVING INFINITE DUAL MARQUEE EFFECT
           ======================================================== */}
        {activeTab === "marquee" && (
          <div className="relative w-full rounded-3xl p-6 sm:p-8 bg-slate-950/70 dark:bg-white/[0.02] border border-slate-800 dark:border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group/marquee marquee-container">
            
            {/* Ambient Background Glow Behind Marquee */}
            <div
              className="absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#803CFF]/15 via-sky-500/10 to-transparent blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-sky-500/15 via-[#803CFF]/10 to-transparent blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Left Edge Vignette Mask for Seamless Fade */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent dark:from-[#13131c] dark:via-[#13131c]/80 dark:to-transparent z-10"
              aria-hidden="true"
            />

            {/* Right Edge Vignette Mask for Seamless Fade */}
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent dark:from-[#13131c] dark:via-[#13131c]/80 dark:to-transparent z-10"
              aria-hidden="true"
            />

            <div className="relative z-0 space-y-4 sm:space-y-5">
              
              {/* ----------------------------------------------------
                  ROW 1: MOVES CONTINUOUSLY LEFT TO RIGHT
                 ---------------------------------------------------- */}
              <div className="relative w-full overflow-hidden py-1">
                <div className="animate-marquee-right flex items-center gap-4 sm:gap-5 group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
                  {/* Half 1 */}
                  {row1Half.map((skill, index) => (
                    <SkillMarqueeCard
                      key={`row1-h1-${skill.name}-${index}`}
                      skill={skill}
                    />
                  ))}
                  {/* Half 2 (Exact duplicate for mathematically seamless 50% translation) */}
                  {row1Half.map((skill, index) => (
                    <SkillMarqueeCard
                      key={`row1-h2-${skill.name}-${index}`}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* ----------------------------------------------------
                  ROW 2: MOVES CONTINUOUSLY RIGHT TO LEFT
                 ---------------------------------------------------- */}
              <div className="relative w-full overflow-hidden py-1">
                <div className="animate-marquee-left flex items-center gap-4 sm:gap-5 group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
                  {/* Half 1 */}
                  {row2Half.map((skill, index) => (
                    <SkillMarqueeCard
                      key={`row2-h1-${skill.name}-${index}`}
                      skill={skill}
                    />
                  ))}
                  {/* Half 2 (Exact duplicate for mathematically seamless 50% translation) */}
                  {row2Half.map((skill, index) => (
                    <SkillMarqueeCard
                      key={`row2-h2-${skill.name}-${index}`}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Interactive Guidance Pill */}
            {/* <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#803CFF] animate-pulse" />
                <span>Infinite Interactive Stream • Row 1 (Left to Right) &amp; Row 2 (Right to Left)</span>
              </div>
              <span className="text-[11px] text-slate-500">
                Hover over marquee to pause animation
              </span>
            </div> */}

          </div>
        )}

        {/* ========================================================
            TAB 2: CORE DETAILED 9 SKILLS GRID
           ======================================================== */}
        {activeTab === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group relative rounded-2xl p-5 bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 ${skill.borderColor} backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle top-right ambient glow */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${skill.gradient} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />

                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:scale-110 group-hover:border-[#803CFF]/40 transition-all duration-300 shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className={`text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full border ${skill.tagColor}`}>
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-[#6D28D9] dark:group-hover:text-[#C084FC] transition-colors">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Micro-tags */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.07] flex flex-wrap gap-1.5">
                    {skill.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================
            TAB 3: DETAILED ARCHITECTURAL CATEGORIES
           ======================================================== */}
        {activeTab === "categories" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
            {/* Category 1: Cloud Computing */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#803CFF]/15 border border-[#803CFF]/30 flex items-center justify-center text-[#803CFF]">
                  <Cloud size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Cloud Computing (AWS)</h3>
                  <p className="text-xs text-slate-500">Resilient, scalable multi-tier architectures</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Amazon EC2",
                  "Amazon VPC",
                  "Amazon S3",
                  "Amazon RDS",
                  "Amazon EBS",
                  "AWS IAM",
                  "Amazon CloudWatch",
                  "Amazon SNS",
                  "AWS Route 53",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#803CFF]/10 text-[#6D28D9] dark:text-[#C084FC] border border-[#803CFF]/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: DevOps & IaC */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">DevOps &amp; IaC</h3>
                  <p className="text-xs text-slate-500">Automated provisioning and container workloads</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Terraform (IaC)",
                  "Docker",
                  "Kubernetes",
                  "Linux Administration",
                  "CI/CD Pipelines",
                  "GitHub Actions",
                  "Bash Scripting",
                  "Nginx",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Programming */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Programming &amp; Scripting</h3>
                  <p className="text-xs text-slate-500">Object-oriented software &amp; automation scripts</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Java (OOP & DSA)",
                  "Python",
                  "Flask",
                  "Shell / Bash",
                  "YAML / JSON",
                  "Data Structures",
                  "Algorithms",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: Databases */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Databases &amp; Storage</h3>
                  <p className="text-xs text-slate-500">Relational databases, queries &amp; object storage</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "SQL",
                  "MySQL",
                  "Amazon RDS",
                  "Amazon S3",
                  "Database Normalization",
                  "Query Optimization",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
