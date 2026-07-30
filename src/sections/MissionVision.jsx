"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { missionData } from "@/data/mission";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function MissionVision() {
  return (
    <section
      id="mission"
      aria-label="Mission, Vision & Values"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 border-t border-slate-200/80"
    >
      {/* Decorative Light Background Accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11, 31, 58, 0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[160px]" />

      <Container className="relative z-10">
        {/* ================= EDITORIAL SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/60 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-700">
            <Compass size={14} className="text-blue-600" />
            <span>OUR FOUNDATION</span>
          </Badge>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-[#0B1F3A]">
            Mission, Vision & <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Core Principles
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Every operational decision we execute is guided by long-term vision,
            predictive innovation, and an unwavering commitment to workplace
            safety and excellence.
          </p>
        </motion.div>

        {/* ================= 3-COLUMN CARDS GRID ================= */}
        <motion.div
          className="mt-16 sm:mt-20 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {missionData.map((item) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden rounded-[32px] p-8 sm:p-10 shadow-sm backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "border border-blue-500/30 bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-[#102a4e] text-white shadow-xl shadow-blue-600/10"
                    : "border border-slate-200/90 bg-white/80 text-slate-800 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                }`}
              >
                {/* Soft Top Glow Highlight */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl transition-all duration-500 ${
                    isFeatured
                      ? "bg-blue-500/20"
                      : "bg-blue-100/60 group-hover:bg-blue-500/15"
                  }`}
                />

                {/* Top Row: Icon Container */}
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isFeatured
                          ? "border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-md"
                          : "border border-blue-100 bg-blue-50 text-blue-600 shadow-sm group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white"
                      }`}
                    >
                      <Icon size={26} />
                    </div>

                    {isFeatured && (
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
                        <Sparkles size={13} />
                        <span>GUIDING NORTH STAR</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`mt-8 text-2xl font-extrabold tracking-tight ${
                      isFeatured
                        ? "text-white"
                        : "text-[#0B1F3A] group-hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3.5 text-xs sm:text-sm leading-relaxed font-normal ${
                      isFeatured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className={`mt-8 pt-4 border-t ${
                    isFeatured ? "border-white/10" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isFeatured
                        ? "text-blue-300"
                        : "text-slate-400 group-hover:text-blue-600"
                    }`}
                  >
                    Strategic Pillar
                  </span>
                </div>

                {/* Bottom Glowing Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${
                    isFeatured
                      ? "from-blue-400 via-cyan-300 to-indigo-300"
                      : "from-blue-600 via-indigo-600 to-cyan-500 opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= REDESIGNED SPLIT INTERACTIVE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mt-16 sm:mt-20 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-[#102a4e] p-8 sm:p-12 text-white shadow-2xl"
        >
          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left 7 Columns: Editorial Headline & CTA */}
            <div className="lg:col-span-7 z-10 text-left">
              <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
                <Sparkles size={13} />
                <span>OUR COMMITMENT</span>
              </Badge>

              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-white tracking-tight">
                Architecting High-Performance Spaces. <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Generating Real Enterprise Value.
                </span>
              </h3>

              <p className="mt-3.5 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                Property management goes far beyond routine maintenance—we
                engineer tech-enabled environments where businesses, workforce,
                and communities thrive.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/25">
                  <span>Schedule Strategy Audit</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </div>

            {/* Right 5 Columns: Glassmorphic Floating Status Cards */}
            <div className="lg:col-span-5 relative z-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    100% Statutory Compliance
                  </p>
                  <p className="text-[11px] text-slate-300">
                    ISO-Certified Governance Standard
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/15">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    24/7 Command Helpdesk
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Average SLA dispatch &lt; 15 mins
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/15 sm:col-span-2 lg:col-span-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Zero Operational Downtime
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Predictive MEP & Facility Control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
