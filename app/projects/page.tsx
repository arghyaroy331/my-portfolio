import Link from "next/link";
import Projects from "@/components/Projects";
import { Github, ExternalLink, ArrowRight, Award, Mail } from "@/components/Icons";

export const metadata = {
  title: "Projects | Arghya Roy",
  description:
    "Showcase of cloud architecture, Terraform automation, and software engineering projects by Arghya Roy.",
};

export default function ProjectsPage() {
  const projectStats = [
    { label: "Cloud Deployments", value: "AWS Powered", desc: "EC2, VPC, S3, RDS & CloudWatch" },
    { label: "Infrastructure as Code", value: "Terraform", desc: "Modular, repeatable IaC stacks" },
    { label: "Repositories", value: "4+ Open Source", desc: "Available on GitHub @arghyaroy331" },
    { label: "Leadership", value: "Project Lead", desc: "AI Geotagging & Detection team" },
  ];

  return (
    <main className="w-full pb-16">
      {/* Page Header */}
      <section className="flex justify-center px-4 sm:px-6 mb-8 pt-4">
        <div className="w-full max-w-4xl">
          <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#803CFF]/15 via-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#803CFF] dark:text-[#C084FC] px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/15 border border-[#803CFF]/20 inline-block mb-3">
                  Engineering Portfolio
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                  Featured Projects &amp; Deployments
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Hands-on cloud implementations, infrastructure automation using Terraform, real-time observability pipelines, and intelligent systems.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://github.com/arghyaroy331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white border border-slate-700 dark:border-white/15 text-sm font-semibold shadow-md transition-all group"
                >
                  <Github size={18} />
                  <span>Explore GitHub</span>
                  <ExternalLink size={14} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="flex justify-center px-4 sm:px-6 mb-10">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {projectStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 rounded-xl text-center flex flex-col justify-center"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  {stat.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Projects Grid Component */}
      <Projects />

      {/* Bottom Navigation */}
      <section className="flex justify-center px-4 sm:px-6 pt-4">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#803CFF] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-[#803CFF]/20 hover:shadow-[#803CFF]/35 transition-all"
          >
            <Mail size={16} />
            <span>Discuss Cloud Architecture &amp; Projects</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-800 dark:text-white font-semibold text-sm hover:border-[#803CFF] transition-all"
          >
            <Mail size={16} className="text-[#803CFF] dark:text-[#C084FC]" />
            <span>Discuss a Project</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
