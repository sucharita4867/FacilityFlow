"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navigation } from "@/constants/navigation";
import { company } from "@/constants/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Safely mount to prevent hydration mismatch and cascading render warnings
  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = navigation
      .map((item) => item.href.replace("#", "").replace("/", ""))
      .filter((id) => id && id !== "");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY >= 120) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    if (href === "/" || href === "#" || href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMobileOpen(false);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(targetId);
        setMobileOpen(false);
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 px-4 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 border border-slate-700/60 shadow-xl backdrop-blur-xl dark:bg-slate-950/80 dark:border-slate-800"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg dark:bg-slate-900/30 dark:border-white/10"
        }`}
      >
        <Container className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-black tracking-tight text-white">
              {company.name}
            </h1>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const sectionId =
                item.href === "/" || item.href === "#" || item.href === "#home"
                  ? "home"
                  : item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 font-bold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 h-[2.5px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400 dark:border-white/20 dark:bg-white/10"
                aria-label="Toggle Theme"
                type="button"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-amber-400" />
                ) : (
                  <Moon size={18} className="text-slate-200" />
                )}
              </button>
            )}

            <Button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30">
              <span>Get Quote</span>
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 text-white backdrop-blur-md"
                aria-label="Toggle Theme"
                type="button"
              >
                {theme === "dark" ? (
                  <Sun size={16} className="text-amber-400" />
                ) : (
                  <Moon size={16} className="text-slate-200" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 text-white transition hover:bg-white/10"
              aria-label="Toggle Menu"
              type="button"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden rounded-b-3xl border-t border-slate-800 bg-slate-900/95 backdrop-blur-2xl lg:hidden"
            >
              <Container className="py-6 px-6">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => {
                    const sectionId =
                      item.href === "/" ||
                      item.href === "#" ||
                      item.href === "#home"
                        ? "home"
                        : item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`group flex items-center justify-between border-b border-slate-800 pb-2.5 text-base font-semibold transition-colors ${
                          isActive
                            ? "text-cyan-400 font-bold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowRight
                          size={16}
                          className={`transition-transform ${
                            isActive
                              ? "text-cyan-400 translate-x-1"
                              : "text-slate-400"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6">
                  <Button className="w-full justify-center bg-blue-600 py-2.5 text-sm text-white hover:bg-blue-500">
                    Get Free Consultation
                  </Button>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
