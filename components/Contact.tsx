"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  Github,
  Linkedin,
  LeetCode,
  ExternalLink,
} from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [copied, setCopied] = useState(false);

  const email = "arghya331@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      // Direct POST to FormSubmit API targeting arghya331@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name} (${formData.email})`,
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("submitted");
      } else {
        // Fallback to direct pre-filled mail client for arghya331@gmail.com
        const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(
          `Hi Arghya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setStatus("submitted");
      }
    } catch {
      // Fallback to direct pre-filled mail client for arghya331@gmail.com
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Arghya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("submitted");
    }

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 4500);
  };

  return (
    <section id="contact" className="relative flex justify-center px-4 sm:px-6 mb-16 pt-6 scroll-mt-24">
      <div className="w-full max-w-4xl relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>Section 06 • Get In Touch</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2.5">
            Get in <span className="text-[#803CFF] dark:text-[#C084FC]">Touch!</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#803CFF] dark:text-[#C084FC] font-mono uppercase">
            WE ARE LOOKING FORWARD TO START A PROJECT WITH YOU!
          </p>
        </div>

        {/* Outer Container with Side Accent Wings from Image 1 */}
        <div className="relative flex justify-center items-center">
          {/* Subtle Side Accent Layer Wings (Image 1 aesthetic, matching Image 2 palette) */}
          <div
            className="absolute w-[98%] sm:w-[104%] h-[78%] sm:h-[72%] top-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-r from-[#803CFF] via-[#9333EA] to-[#6D28D9] opacity-80 sm:opacity-95 shadow-2xl shadow-[#803CFF]/35 pointer-events-none transition-all duration-300"
            aria-hidden="true"
          />

          {/* Main Elevated Glass Card (Image 2 Glassmorphism Surface) */}
          <div className="glass-card relative z-10 w-full p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#1A1A24]/95 backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Contact Details & Office Hours (Image 1 Structure) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 pb-6 md:pb-0">
                <div className="space-y-6">
                  {/* Location Info */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 text-[#803CFF] dark:text-[#C084FC] border border-[#803CFF]/30 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <MapPin size={20} />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-bold text-slate-900 dark:text-white leading-snug">
                        Location
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-0.5">
                        Kalyani, West Bengal
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        India • 741235
                      </p>
                    </div>
                  </div>

                  {/* Direct Email / Contact */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 text-[#803CFF] dark:text-[#C084FC] border border-[#803CFF]/30 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-bold text-slate-900 dark:text-white leading-snug">
                        Email Address
                      </h4>
                      <button
                        onClick={handleCopyEmail}
                        className="text-slate-700 dark:text-slate-200 font-mono text-xs sm:text-sm hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors text-left flex items-center gap-1.5 mt-0.5"
                        title="Click to copy email address"
                      >
                        <span>{email}</span>
                        {copied && (
                          <span className="text-[11px] font-sans font-bold text-emerald-500 ml-1">
                            ✓ Copied!
                          </span>
                        )}
                      </button>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Availability & Working Hours */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 text-[#803CFF] dark:text-[#C084FC] border border-[#803CFF]/30 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Clock size={20} />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-bold text-slate-900 dark:text-white leading-snug">
                        Availability
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 font-mono text-xs mt-1">
                        Mon – Fri ...... <span className="font-semibold text-slate-900 dark:text-white">9 am – 8 pm</span>
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 font-mono text-xs mt-0.5">
                        Sat, Sun ...... <span className="font-semibold text-slate-900 dark:text-white">Open for Projects</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels Quick Links */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                    Connect Profiles
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://github.com/arghyaroy331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/[0.04] dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#803CFF] hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                    <a
                      href="https://linkedin.com/in/arghyaroy1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/[0.04] dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#803CFF] hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors"
                    >
                      <Linkedin size={14} />
                      <span>LinkedIn</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                    <a
                      href="https://leetcode.com/u/royarghya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-black/[0.04] dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#FFA116] hover:text-[#FFA116] transition-colors"
                    >
                      <LeetCode size={14} />
                      <span>LeetCode</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form (Image 1 Layout) */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <form
                  action={`https://formsubmit.co/${email}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`Portfolio Message from ${formData.name || "Visitor"}`}
                  />

                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Enter your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#803CFF] dark:focus:border-[#803CFF] focus:ring-2 focus:ring-[#803CFF]/20 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Enter a valid email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter a valid email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#803CFF] dark:focus:border-[#803CFF] focus:ring-2 focus:ring-[#803CFF]/20 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Enter your message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#803CFF] dark:focus:border-[#803CFF] focus:ring-2 focus:ring-[#803CFF]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Status Indicator */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status !== "idle"}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-gradient-to-r from-[#803CFF] to-[#6D28D9] hover:from-[#9333EA] hover:to-[#7E22CE] shadow-lg shadow-[#803CFF]/25 hover:shadow-[#803CFF]/40 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : status === "submitted" ? (
                        <>
                          <span>✓ MESSAGE SENT</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    {status === "submitted" && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-pulse">
                        ✓ Sent to {email}! Arghya will get back to you shortly.
                      </p>
                    )}
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            PROFESSIONAL CLOSING BANNER & SIGNATURE ANIMATION
           ======================================================== */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#803CFF]/10 via-purple-500/5 to-sky-500/10 border border-[#803CFF]/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                SYSTEMS OPERATIONAL • OPEN TO WORK
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              ARGHYA ROY • CLOUD ENGINEER
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">
              JIS College of Engineering (B.Tech IT &apos;27) • AWS Cloud • Terraform • DevOps
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-5 py-2.5 rounded-xl bg-white/90 dark:bg-white/[0.08] hover:bg-[#803CFF] hover:text-white border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
