"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
} from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [introDone, setIntroDone] = useState(false);

  // Synchronize navbar reveal with cinematic opening experience
  useEffect(() => {
    if (pathname !== "/") {
      setIntroDone(true);
      return;
    }

    const handleIntroComplete = () => {
      setIntroDone(true);
    };

    window.addEventListener("intro-complete", handleIntroComplete);
    // Fallback timer: ensure navbar reveals cleanly even if intro event missed
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 3200);

    return () => {
      window.removeEventListener("intro-complete", handleIntroComplete);
      clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    // Detect initial theme (default to dark)
    const saved = localStorage.getItem("theme");
    const initialTheme = saved === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle deep-link anchor hash on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(hashId);
        }
      }, 400);
    }
  }, []);

  // ScrollSpy to highlight active section in real-time as user scrolls
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/about") setActiveSection("about");
      else if (pathname === "/skills") setActiveSection("skills");
      else if (pathname === "/projects") setActiveSection("projects");
      else if (pathname === "/showcase") setActiveSection("showcase");
      else if (pathname === "/contact") setActiveSection("contact");
      else setActiveSection("");
      return;
    }

    const sections = ["hero", "about", "skills", "projects", "showcase", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 120) {
        setActiveSection("hero");
        return;
      }
      const scrollPosition = scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "/", id: "hero", icon: House },
    { name: "About", href: "/#about", id: "about", icon: Briefcase },
    { name: "Skills", href: "/#skills", id: "skills", icon: Cpu },
    { name: "Projects", href: "/#projects", id: "projects", icon: FolderGit2 },
    { name: "Showcase", href: "/#showcase", id: "showcase", icon: Sparkles },
    { name: "Contact", href: "/#contact", id: "contact", icon: Mail },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    setMobileOpen(false);

    if (pathname === "/") {
      e.preventDefault();
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
        setActiveSection("hero");
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
        setActiveSection(id);
      }
    }
  };

  const isLinkActive = (id: string, href: string) => {
    if (pathname === "/") {
      return activeSection === id;
    }
    return pathname === href || pathname === `/${id}`;
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center px-4 sm:px-6 py-4 transition-all duration-700 ease-out ${
        introDone
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="glass-navbar w-full max-w-[56rem]">
        <div
          className="flex items-center justify-between px-3 py-2"
          id="navbar-top"
        >
          {/* Home Icon Link */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/", "hero")}
            className={`nav-link px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              isLinkActive("hero", "/")
                ? "bg-[#803CFF]/15 dark:bg-[#803CFF]/20 text-[#6D28D9] dark:text-[#C084FC] shadow-sm border border-[#803CFF]/30 font-bold"
                : "text-slate-800 dark:text-slate-300 hover:text-[#6D28D9] dark:hover:text-[#C084FC] hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
            }`}
            aria-label="Home"
          >
            <House size={18} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(1).map((link) => {
              const Icon = link.icon;
              const active = isLinkActive(link.id, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`nav-link px-3 py-1.5 text-xs xl:text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? "bg-[#803CFF]/15 dark:bg-[#803CFF]/20 text-[#6D28D9] dark:text-[#C084FC] shadow-sm border border-[#803CFF]/30 font-bold"
                      : "text-slate-800 dark:text-slate-300 hover:text-[#6D28D9] dark:hover:text-[#C084FC] hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Medium Screens Nav (Condensed labels / Icons) */}
          <div className="hidden items-center gap-1 md:flex lg:hidden">
            {navLinks.slice(1).map((link) => {
              const Icon = link.icon;
              const active = isLinkActive(link.id, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  title={link.name}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`nav-link px-2.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                    active
                      ? "bg-[#803CFF]/15 dark:bg-[#803CFF]/20 text-[#6D28D9] dark:text-[#C084FC] shadow-sm border border-[#803CFF]/30 font-bold"
                      : "text-slate-800 dark:text-slate-300 hover:text-[#6D28D9] dark:hover:text-[#C084FC] hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon size={15} />
                  <span className="hidden sm:inline">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Controls: Theme toggle & Mobile menu button */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08] cursor-pointer transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon size={18} className="text-slate-200" />
              ) : (
                <Sun size={18} className="text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex cursor-pointer items-center rounded-xl p-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:bg-black/[0.05] dark:hover:bg-white/[0.08] hover:text-slate-900 dark:hover:text-white md:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with all Page Links */}
        {mobileOpen && (
          <div className="border-t border-slate-200/80 dark:border-white/10 px-3 py-3.5 flex flex-col gap-1.5 md:hidden animate-afterglow-rise">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isLinkActive(link.id, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors cursor-pointer ${
                    active
                      ? "bg-[#803CFF]/15 dark:bg-[#803CFF]/20 text-[#6D28D9] dark:text-[#C084FC] border border-[#803CFF]/30 font-bold"
                      : "text-slate-900 dark:text-slate-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] hover:text-[#6D28D9] dark:hover:text-[#C084FC]"
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
