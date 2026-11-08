"use client";

import {
  ExternalLink,
  Github,
  Cloud,
  Terminal,
  Database,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
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
  visualType: "cloudwatch" | "vpc" | "ai" | "civic";
}

const projects: ProjectItem[] = [
  {
    id: "aws-monitoring",
    title: "AWS Monitoring & Alerting System",
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
    visualType: "cloudwatch",
  },
  {
    id: "scalable-blog",
    title: "Scalable Blog Application on AWS",
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
    visualType: "vpc",
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
    visualType: "civic",
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
    visualType: "ai",
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
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 ${project.accentBorder} backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top Graphic Showcase Header */}
              <div className="relative h-44 sm:h-48 w-full bg-slate-100 dark:bg-[#0B0B12] overflow-hidden border-b border-slate-200 dark:border-white/10 flex items-center justify-center p-6">
                
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none`}
                />

                {/* Circuit Grid Lines */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Simulated Visual Preview depending on VisualType */}
                {project.visualType === "cloudwatch" && (
                  <div className="relative z-10 w-full max-w-xs p-3 rounded-xl bg-white/90 dark:bg-black/60 border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-lg font-mono">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5 text-emerald-500 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        CloudWatch Monitoring
                      </span>
                      <span>us-east-1</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center bg-slate-100 dark:bg-white/[0.05] px-2 py-1 rounded">
                        <span className="text-slate-600 dark:text-slate-300">EC2 CPU Utilization</span>
                        <span className="text-emerald-500 font-bold">18.4% (Normal)</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-100 dark:bg-white/[0.05] px-2 py-1 rounded">
                        <span className="text-slate-600 dark:text-slate-300">Terraform State</span>
                        <span className="text-[#803CFF] font-bold">Synchronized</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visualType === "vpc" && (
                  <div className="relative z-10 w-full max-w-xs p-3 rounded-xl bg-white/90 dark:bg-black/60 border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-lg font-mono">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                        <Cloud size={14} />
                        Custom VPC Topology
                      </span>
                      <span>10.0.0.0/16</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-1.5 rounded bg-sky-500/10 border border-sky-500/20 text-center">
                        <span className="block text-sky-400 font-bold">Public Subnet</span>
                        <span className="text-slate-500 text-[9px]">EC2 + Nginx</span>
                      </div>
                      <div className="p-1.5 rounded bg-[#803CFF]/10 border border-[#803CFF]/20 text-center">
                        <span className="block text-[#C084FC] font-bold">Private Subnet</span>
                        <span className="text-slate-500 text-[9px]">RDS MySQL</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visualType === "ai" && (
                  <div className="relative z-10 w-full max-w-xs p-3 rounded-xl bg-white/90 dark:bg-black/60 border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-lg font-mono">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Cpu size={14} />
                        Deep Learning Classifier
                      </span>
                      <span>CNN Model</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                        <span className="text-slate-600 dark:text-slate-300">Diagnosis Confidence</span>
                        <span className="text-emerald-400 font-bold">98.4% Precision</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-100 dark:bg-white/[0.05] px-2 py-1 rounded">
                        <span className="text-slate-600 dark:text-slate-300">Container Runtime</span>
                        <span className="text-sky-400 font-bold">Docker • FastAPI</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visualType === "civic" && (
                  <div className="relative z-10 w-full max-w-xs p-3 rounded-xl bg-white/90 dark:bg-black/60 border border-slate-300 dark:border-white/15 backdrop-blur-md shadow-lg font-mono">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <Terminal size={14} />
                        Risk Intelligence
                      </span>
                      <span>AI Model</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                        <span className="text-slate-600 dark:text-slate-300">Delay Anomaly Score</span>
                        <span className="text-amber-400 font-bold">Low Variance</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-100 dark:bg-white/[0.05] px-2 py-1 rounded">
                        <span className="text-slate-600 dark:text-slate-300">Host Environment</span>
                        <span className="text-slate-300 font-bold">AWS EC2 • Nginx</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Metric Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/70 text-slate-200 border border-white/10 backdrop-blur-md">
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
