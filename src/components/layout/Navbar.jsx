"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navigation } from "@/constants/navigation";
import { company } from "@/constants/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 px-4 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 border border-slate-700/60 shadow-xl backdrop-blur-xl"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        }`}
      >
        <Container className="flex h-16 items-center justify-between px-6">
          {/* ================= Logo ================= */}
          <Link href="/">
            <div className="cursor-pointer">
              <h1 className="text-2xl font-black tracking-tight text-white">
                {company.name}
              </h1>
            </div>
          </Link>

          {/* ================= Desktop Menu ================= */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-semibold text-white transition-all duration-300 hover:text-blue-400"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ================= CTA ================= */}
          <div className="hidden lg:block">
            <Button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30">
              Get Quote
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* ================= Mobile ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-white transition lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* ================= Mobile Drawer ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden rounded-b-full border-t border-slate-800 bg-slate-900/95 backdrop-blur-2xl lg:hidden"
            >
              <Container className="py-6 px-6">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-slate-800 pb-2.5 text-base font-semibold text-white transition-colors hover:text-blue-400"
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={16} className="text-slate-400" />
                    </Link>
                  ))}
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
