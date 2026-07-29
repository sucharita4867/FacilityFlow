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
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 px-4 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)]"
        }`}
      >
        <Container className="flex h-20 items-center justify-between px-6">
          {/* ================= Logo ================= */}
          <Link href="/">
            <div className="cursor-pointer">
              <h1 className="text-[28px] font-black tracking-tight text-white drop-shadow-md transition-colors duration-500">
                {company.name}
              </h1>
              <p className="-mt-1 text-xs font-medium text-slate-200 drop-shadow-sm transition-colors duration-500">
                {company.tagline}
              </p>
            </div>
          </Link>

          {/* ================= Desktop Menu ================= */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-semibold text-white transition-all duration-300 drop-shadow-sm hover:text-blue-200"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ================= CTA ================= */}
          <div className="hidden lg:block">
            <Button className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0B1F3A] hover:shadow-lg">
              Get Quote
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* ================= Mobile ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 text-white transition lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>

        {/* ================= Mobile Drawer ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden rounded-b-2xl border-t border-white/20 bg-black/40 backdrop-blur-2xl lg:hidden"
            >
              <Container className="py-6 px-6">
                <nav className="flex flex-col gap-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 pb-3 text-lg font-semibold text-white transition-colors hover:text-blue-300"
                    >
                      <span>{item.name}</span>
                      <ArrowRight
                        size={18}
                        className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </nav>
                <div className="mt-6">
                  <Button className="w-full justify-center bg-white/20 border border-white/30 py-3 text-white backdrop-blur-md hover:bg-white hover:text-[#0B1F3A]">
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