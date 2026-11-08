import Link from "next/link";
import Skills from "@/components/Skills";
import { FolderGit2, Award, ArrowRight, Cloud, Terminal, Cpu } from "@/components/Icons";

export const metadata = {
  title: "Skills & Tech Stack | Arghya Roy",
  description:
    "Comprehensive technical skills of Arghya Roy across Cloud Computing (AWS), DevOps & IaC (Terraform, Docker, Linux), Programming (Java, Python, SQL), and Tools.",
};

export default function SkillsPage() {
  const highlights = [
    {
      title: "AWS Cloud Architecture",
      desc: "Multi-tier VPC, public/private subnets, EC2 instances, S3 buckets, and RDS instances provisioned with strict IAM least-privilege policies.",
      icon: Cloud,
      accent: "text-[#803CFF] dark:text-[#C084FC]",
    },
    {
      title: "Infrastructure as Code",
      desc: "Declarative Terraform scripts for repeatable, audit-ready cloud deployments, eliminating manual configuration drift.",
      icon: Terminal,
      accent: "text-emerald-500 dark:text-emerald-400",
    },
    {
      title: "Algorithms & Systems",
      desc: "Strong core computing foundation in Data Structures, Algorithms in Java, Linux process management, and networking fundamentals.",
      icon: Cpu,
      accent: "text-blue-500 dark:text-sky-400",
    },
  ];

  return (
    <main className="w-full pb-16">
      {/* Page Header Banner */}
      <section className="flex justify-center px-4 sm:px-6 mb-8 pt-4">
        <div className="w-full max-w-4xl">
          <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#803CFF]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#803CFF] dark:text-[#C084FC] px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/15 border border-[#803CFF]/20 inline-block mb-3">
                Core Competencies
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                Cloud, DevOps &amp; Engineering Stack
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Hands-on technical proficiency across Amazon Web Services, declarative Infrastructure as Code, Linux systems engineering, containerization with Docker, and algorithmic development in Java.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categorized Skills Section */}
      <Skills />

      {/* Cloud & DevOps Highlights Cards */}
      <section className="flex justify-center px-4 sm:px-6 mb-12">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="mb-3">
                    <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center mb-3">
                      <Icon size={20} className={item.accent} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Step CTAs */}
      <section className="flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#803CFF] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-[#803CFF]/20 hover:shadow-[#803CFF]/35 transition-all"
          >
            <FolderGit2 size={16} />
            <span>See These Skills in Action (Projects)</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-800 dark:text-white font-semibold text-sm hover:border-[#803CFF] transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

