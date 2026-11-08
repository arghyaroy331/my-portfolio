import Link from "next/link";
import { House, FolderGit2 } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-[#803CFF]/20 to-[#A855F7]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* 404 Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-widest mb-4">
              Error 404
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Route <span className="text-[#803CFF] dark:text-[#C084FC]">Not Found</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
              The cloud resource or page you are attempting to reach does not exist, was moved, or is temporarily unavailable.
            </p>

            {/* Back Home CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#803CFF] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-[#803CFF]/25 hover:shadow-[#803CFF]/40 transition-all"
              >
                <House size={16} />
                <span>Return to Home</span>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-800 dark:text-white font-semibold text-sm hover:border-[#803CFF] transition-all"
              >
                <FolderGit2 size={16} />
                <span>View Projects</span>
              </Link>
            </div>

            {/* Quick Link Navigation Pills */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
              >
                /about
              </Link>
              <Link
                href="/skills"
                className="px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
              >
                /skills
              </Link>
              <Link
                href="/certifications"
                className="px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
              >
                /certifications
              </Link>
              <Link
                href="/experience"
                className="px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
              >
                /experience
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
              >
                /contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

