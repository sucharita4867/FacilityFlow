"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { industries } from "@/data/industries";

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);
  const currentIndustry = industries[activeTab] || industries[0];

  return (
    <section
      id="industries"
      aria-label="Industries We Serve"
      className="relative overflow-hidden bg-slate-100 py-24 sm:py-32 border-t border-slate-200"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ================= LEFT: EDITORIAL CONTENT & TABS ================= */}
          <div className="lg:col-span-6 z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-700">
              <Building2 size={14} className="text-blue-600" />
              <span>SECTOR COVERAGE</span>
            </div>

            {/* Main Title */}
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F3A] leading-tight">
              Tailored Solutions for <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Every Specialized Industry
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 font-normal">
              We bring specialized operational governance, ISO-certified compliance, and dedicated facility workforces tailored to complex enterprise environments.
            </p>

            {/* Interactive Tab Selector Pill List */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {industries.map((item, idx) => (
                <button
                  key={item.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-[#0B1F3A] text-white shadow-lg shadow-[#0B1F3A]/20 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Selected Industry Feature Highlights */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                {currentIndustry.title} Operations
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {currentIndustry.description}
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "100% Statutory Compliance Governance",
                  "Dedicated Sector-Trained Workforce",
                  "24/7 SLA-Backed Emergency Dispatch",
                ].map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Sector Architecture
                </span>
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  <span>Explore Scope</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: OVERLAPPING ROTATED IMAGE GALLERY ================= */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none flex items-center justify-center min-h-[420px]">
              
              {/* Back Overlapped Card (Tilted Left) - industries-last.png */}
              <motion.div
                initial={{ rotate: -6, scale: 0.95 }}
                animate={{ rotate: -6, scale: 0.95 }}
                whileHover={{ rotate: -2, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -left-2 sm:-left-6 top-0 w-[78%] overflow-hidden rounded-[28px] border-4 border-white bg-slate-900 shadow-2xl z-0"
              >
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <Image
                    src="/images/industries/industries-last.png"
                    alt="On-Site Operations Team"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold tracking-wider text-blue-300">ISO CERTIFIED</p>
                    <p className="text-lg font-black">Workforce Operations</p>
                  </div>
                </div>
              </motion.div>

              {/* Front Overlapped Card (Tilted Right) - industries-first.png */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20, rotate: 6 }}
                  animate={{ opacity: 1, x: 0, rotate: 6 }}
                  exit={{ opacity: 0, x: -20, rotate: 6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  className="relative left-6 sm:left-10 top-8 w-[82%] overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl z-10"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden relative">
                    <Image
                      src="/images/industries/industries-first.png"
                      alt={currentIndustry.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent" />

                    {/* Floating Trust Badge */}
                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-xl text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-200">Enterprise Infrastructure</p>
                          <p className="text-base font-extrabold">{currentIndustry.title}</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0B1F3A] font-bold">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}