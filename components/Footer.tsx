"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", id: "hero" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Showcase", href: "/#showcase", id: "showcase" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <footer className="w-full flex justify-center px-4 sm:px-6 py-10 mt-12 border-t border-slate-200 dark:border-white/[0.08] transition-colors relative z-10">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-xs font-mono">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.id)}
              className="text-slate-600 dark:text-slate-400 hover:text-[#803CFF] dark:hover:text-[#C084FC] transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono border-t border-slate-200/60 dark:border-white/[0.05] pt-4">
          <p>© {new Date().getFullYear()} Arghya Roy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Aspiring Cloud Engineer • Software Developer</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
