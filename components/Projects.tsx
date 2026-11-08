"use client";

import Image from "next/image";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
} from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  accentBorder: string;
  metric: string;
  bannerImage: string;
}

const projects: ProjectItem[] = [
  {
    id: "aws-monitoring",
    title: "Firefly — AWS Monitoring & Alerting System",
    tagline: "Always watching. Always illuminating.",
    subtitle: "Terraform • CloudWatch • SNS • EC2 • VPC",
    description:
      "Engineered automated AWS cloud infrastructure using declarative Terraform. Implemented comprehensive CloudWatch metric alarms for CPU, memory, and disk thresholds with real-time automated incident dispatch via Amazon SNS.",
    tags: ["AWS", "Terraform", "EC2", "VPC", "CloudWatch", "Amazon SNS", "Linux", "Bash"],
    githubUrl: "https://github.com/arghyaroy331/aws-monitoring-alerting-system",
    badge: "Flagship Cloud Project",
    badgeColor: "bg-[#803CFF]/15 text-[#C084FC] border-[#803CFF]/30",
    gradient: "from-[#803CFF]/25 via-[#6366F1]/15 to-transparent",
    accentBorder: "hover:border-[#803CFF]/60",
    metric: "<60s Incident Alert Latency",
    bannerImage: "/projects/firefly-banner.jpg",
  },
  {
    id: "scalable-blog",
    title: "Paperboat — Scalable Blog Application on AWS",
    tagline: "Every story deserves a journey.",
    subtitle: "EC2 • Custom VPC • RDS MySQL • S3 • EBS",
    description:
      "Architected high-availability multi-tier cloud infrastructure on AWS. Features public and private subnet isolation, persistent Amazon S3 object storage for assets, Amazon RDS MySQL with automated multi-AZ snapshots, and secure security groups.",
    tags: ["AWS", "EC2", "VPC Subnets", "Amazon RDS", "Amazon S3", "EBS Volumes", "MySQL", "Nginx"],
    githubUrl: "https://github.com/arghyaroy331/aws-scalable-web-application",
    badge: "Multi-Tier Infrastructure",
    badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    gradient: "from-sky-500/25 via-[#38BDF8]/15 to-transparent",
    accentBorder: "hover:border-sky-500/60",
    metric: "99.9% Cloud Availability",
    bannerImage: "/projects/paperboat-banner.jpg",
  },
  {
    id: "civiclens",
    title: "CivicLens — AI-Powered Risk Intelligence Platform",
    subtitle: "AWS EC2 • Python • FastAPI • React • Anomaly Detection",
    description:
      "Automated public infrastructure project risk tracking system. Analyzes budget variances, project milestone delays, and contractor track records using anomaly detection algorithms. Hosted on AWS EC2 behind an Nginx reverse proxy.",
    tags: ["AWS EC2", "Python", "FastAPI", "React", "Vite", "Anomaly Detection", "Nginx"],
    githubUrl: "https://github.com/arghyaroy331/CivicLens",
    badge: "GovTech AI Platform",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    gradient: "from-amber-500/25 via-rose-500/15 to-transparent",
    accentBorder: "hover:border-amber-500/60",
    metric: "Real-time Risk Scoring",
    bannerImage: "/projects/civiclens-banner.jpg",
  },
  {
    id: "potato-disease-ai",
    title: "AI-Powered Potato Plant Disease Detection",
    subtitle: "Python • CNN • Deep Learning • FastAPI • Docker",
    description:
      "Trained custom Convolutional Neural Network (CNN) deep-learning models to diagnose healthy vs. infected agricultural crops (Early Blight, Late Blight). Packaged as a high-throughput REST API with FastAPI and containerized in Docker.",
    tags: ["Python", "TensorFlow", "Computer Vision", "FastAPI", "Docker", "REST API", "AWS EC2"],
    badge: "Computer Vision & AI",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    accentBorder: "hover:border-emerald-500/60",
    metric: "98.4% Classification Accuracy",
    bannerImage: "/projects/potato-disease-banner.jpg",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full flex justify-center px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="w-full max-w-5xl">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Section 04 • Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-[#803CFF] dark:text-[#C084FC]">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Practical cloud infrastructure, Infrastructure as Code automation, and intelligent software systems.
            </p>
          </div>

          <a
            href="https://github.com/arghyaroy331"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#6D28D9] dark:text-[#C084FC] hover:text-[#803CFF] transition-colors self-start sm:self-auto"
          >
            <Github size={16} />
            <span>View All on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 ${project.accentBorder} backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top Graphic Showcase Banner Header */}
              <div className="relative aspect-[16/7.5] sm:aspect-[16/7] w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-white/10 group/banner">
                {/* Background Ambient Color Blend */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none z-10 mix-blend-overlay`}
                />

                {/* Authentic Project Graphic Banner */}
                <Image
                  src={project.bannerImage}
                  alt={`${project.title} Banner`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Vignette Gradient for Readable Badges and Polished Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/35 pointer-events-none z-10" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border shadow-md backdrop-blur-md ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Metric Pill */}
                <div className="absolute bottom-3 right-3 z-20">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/80 text-slate-100 border border-white/15 shadow-md backdrop-blur-md">
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-[#6D28D9] dark:group-hover:text-[#C084FC] transition-colors">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-xs italic text-slate-600 dark:text-slate-300 mb-2 font-serif">
                      &ldquo;{project.tagline}&rdquo;
                    </p>
                  )}
                  <p className="text-xs font-mono text-[#6D28D9] dark:text-[#803CFF] mb-3 font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between min-h-[44px]">
                    {project.githubUrl ? (
                      <>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#803CFF] dark:hover:text-white transition-colors"
                        >
                          <Github size={15} />
                          <span>View Source Code</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#803CFF]/10 dark:bg-[#803CFF]/15 text-[#6D28D9] dark:text-[#C084FC] hover:bg-[#803CFF] hover:text-white border border-[#803CFF]/20 text-xs font-mono font-semibold transition-all group/btn"
                        >
                          <span>Explore</span>
                          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </>
                    ) : (
                      <div className="flex items-center justify-between w-full text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          <span>Academic Research Project</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-[10px] font-semibold border border-slate-200 dark:border-white/10">
                          Model Deployed
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
