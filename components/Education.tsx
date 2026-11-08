"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ChevronDown,
  CertificateIcon,
  ExternalLink,
  MapPin,
  Sparkles,
} from "./Icons";

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  status?: string;
  board?: string;
  marks?: string;
  stream?: string;
  coursework?: string[];
  department?: string;
  certificateUrl?: string;
  certificateLabel?: string;
  isCurrent?: boolean;
}

export const defaultEducationData: EducationEntry[] = [
  {
    id: "college-btech",
    degree: "Bachelor of Technology in Information Technology",
    institution: "JIS College of Engineering",
    location: "Kalyani, West Bengal",
    duration: "2023 — 2027",
    status: "Undergraduate (Currently Pursuing)",
    department: "Department of Information Technology",
    isCurrent: true,
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management (SQL)",
      "OOP with Java",
    ],
  },
  {
    id: "class-12",
    degree: "Higher Secondary Education (Class XII)",
    institution: "Sainthia High School",
    location: "Sainthia, West Bengal",
    board: "WBCHSE",
    duration: "2023",
    marks: "83.8 %",
    stream: "Science",
    certificateUrl: "/certificates/class-12-certificate.pdf",
    certificateLabel: "View Class 12 Certificate",
  },
  {
    id: "class-10",
    degree: "Secondary Education (Class X)",
    institution: "Sainthia Pahari Baba Vidyapith",
    location: "Sainthia, West Bengal",
    board: "WBBSE",
    duration: "2021",
    marks: "78 %",
    certificateUrl: "/certificates/class-10-certificate.pdf",
    certificateLabel: "View Class 10 Certificate",
  },
];

interface EducationCardProps {
  entry: EducationEntry;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function EducationCard({ entry, isExpanded, onToggle, index }: EducationCardProps) {
  return (
    <div className="relative group">
      {/* Outer Card with Refined Glassmorphism & Subtle Hover Accent */}
      <div
        className={`rounded-2xl transition-all duration-300 border backdrop-blur-xl overflow-hidden ${
          isExpanded
            ? "bg-slate-900/90 border-sky-500/40 shadow-xl shadow-sky-500/10 dark:bg-white/[0.04]"
            : "bg-slate-900/60 border-slate-300/40 dark:border-white/10 hover:border-sky-500/35 hover:bg-slate-900/80 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
        }`}
      >
        {/* Clickable Card Header */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 text-left cursor-pointer select-none group/btn transition-colors"
        >
          <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
            {/* Academic Badge Icon */}
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                entry.isCurrent
                  ? "bg-sky-500/15 border-sky-500/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "bg-slate-800/80 dark:bg-white/[0.04] border-slate-700 dark:border-white/10 text-slate-300 group-hover/btn:border-sky-500/40 group-hover/btn:text-sky-400"
              }`}
            >
              {entry.isCurrent ? (
                <GraduationCap size={22} className="text-sky-400" />
              ) : (
                <CertificateIcon size={19} className="text-sky-400/90" />
              )}
            </div>

            {/* Degree Title & Institution */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-100 dark:text-white tracking-tight group-hover/btn:text-sky-300 transition-colors">
                  {entry.degree}
                </h4>
                {entry.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Pursuing
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-mono text-[#A855F7] dark:text-[#C084FC]">
                <span className="font-semibold">{entry.institution}</span>
                {entry.board && (
                  <span className="text-slate-400 font-normal">
                    • {entry.board}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Meta Badges & Smooth Rotating Arrow */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-center">
            {entry.marks && (
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30">
                {entry.marks}
              </span>
            )}
            <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline-block">
              {entry.duration}
            </span>
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-slate-800/80 dark:bg-white/[0.05] border border-slate-700 dark:border-white/10 text-slate-400 group-hover/btn:text-sky-400 transition-transform duration-300 ${
                isExpanded ? "rotate-180 bg-sky-500/15 border-sky-500/40 text-sky-400" : ""
              }`}
            >
              <ChevronDown size={15} />
            </div>
          </div>
        </button>

        {/* Smooth Expandable Body (Clean Inline Chips - No Truncated Boxes) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-5 sm:px-5 pt-2 border-t border-slate-800 dark:border-white/[0.06] space-y-4">
                
                {/* Clean Meta Chips Row (Fully readable, no truncation) */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
                  {entry.location && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 dark:bg-white/[0.03] text-slate-300 border border-slate-700 dark:border-white/10">
                      <MapPin size={13} className="text-sky-400 shrink-0" />
                      <span>{entry.location}</span>
                    </span>
                  )}

                  {entry.board && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 dark:bg-white/[0.03] text-slate-300 border border-slate-700 dark:border-white/10">
                      <span className="text-slate-500">Board:</span>
                      <b className="text-slate-100 font-semibold">{entry.board}</b>
                    </span>
                  )}

                  {entry.stream && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 dark:bg-white/[0.03] text-slate-300 border border-slate-700 dark:border-white/10">
                      <span className="text-slate-500">Stream:</span>
                      <b className="text-slate-100 font-semibold">{entry.stream}</b>
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 dark:bg-white/[0.03] text-slate-300 border border-slate-700 dark:border-white/10">
                    <span className="text-slate-500">
                      {entry.isCurrent ? "Duration:" : "Passing Year:"}
                    </span>
                    <b className="text-slate-100 font-semibold">{entry.duration}</b>
                  </span>

                  {entry.status && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 dark:bg-white/[0.03] text-slate-300 border border-slate-700 dark:border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{entry.status}</span>
                    </span>
                  )}
                </div>

                {/* Coursework Badges (B.Tech) */}
                {entry.coursework && entry.coursework.length > 0 && (
                  <div className="pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Core Technical Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.coursework.map((subject) => (
                        <span
                          key={subject}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-sky-500/10 text-sky-200 border border-sky-500/20 hover:border-sky-500/40 hover:bg-sky-500/15 transition-all"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Row: View Certificate Button (Class 12 & Class 10) */}
                {entry.certificateUrl && entry.certificateLabel && (
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80 dark:border-white/[0.06]">
                    <div className="text-xs font-mono text-slate-400">
                      <span>Official Academic Document: </span>
                      <span className="text-slate-200 font-medium">{entry.institution}</span>
                    </div>

                    <a
                      href={entry.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-sky-500/40 hover:border-sky-400 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white text-xs font-mono font-bold tracking-wide shadow-sm hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn cursor-pointer self-start sm:self-auto"
                    >
                      <CertificateIcon
                        size={15}
                        className="text-sky-400 group-hover/btn:rotate-6 transition-transform"
                      />
                      <span>{entry.certificateLabel}</span>
                      <ExternalLink
                        size={13}
                        className="opacity-70 group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                )}

                {/* Department Footer (B.Tech) */}
                {entry.department && (
                  <div className="pt-3 border-t border-slate-800/80 dark:border-white/[0.06] text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">{entry.department}</span>
                    <span className="text-sky-400 font-semibold text-[11px]">Degree in Progress</span>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface EducationProps {
  entries?: EducationEntry[];
}

export default function Education({ entries = defaultEducationData }: EducationProps) {
  // B.Tech open by default; Class 12 & 10 expandable on demand
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "college-btech": true,
    "class-12": false,
    "class-10": false,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-slate-950/80 dark:bg-white/[0.03] border border-slate-800 dark:border-white/10 hover:border-sky-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Background Volumetric Aura */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-sky-500/15 via-[#803CFF]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Section Header */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800 dark:border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/15">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Academic Foundation
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              Undergraduate Degree &amp; Secondary Milestones
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/10 font-semibold hidden sm:inline-block">
          Interactive Timeline
        </span>
      </div>

      {/* 3 Chronological Interactive Education Cards */}
      <div className="relative z-10 space-y-3.5">
        {entries.map((item, index) => (
          <EducationCard
            key={item.id}
            entry={item}
            index={index}
            isExpanded={Boolean(expandedIds[item.id])}
            onToggle={() => toggleExpand(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
