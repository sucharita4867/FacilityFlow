"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { features } from "@/data/features";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose FacilityFlow"
      className="relative overflow-hidden bg-[#07111F] py-24 sm:py-32 text-white"
    >
      {/* Background Decorative Mesh & Radial Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[170px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <Container className="relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ================= LEFT COLUMN: EDITORIAL TYPOGRAPHY & 2-COLUMN FEATURE GRID ================= */}
          <div className="lg:col-span-7 z-10">
            {/* Header Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-300 backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <span>WHY CHOOSE US</span>
              </Badge>
            </motion.div>

            {/* Gradient Title (Exact Match with Image 3 Style) */}
            <motion.h2
              variants={itemVariants}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white"
            >
              Trusted By India&apos;s <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Leading Businesses.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-normal"
            >
              We combine experienced professionals, AI-driven technology, and
              proven operational processes to deliver reliable facility
              management services across Pan-India assets.
            </motion.p>

            {/* 2-Column Balanced Feature Grid (Eliminates empty gaps) */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-blue-400 shadow-md backdrop-blur-md transition-colors duration-300 group-hover:border-blue-400 group-hover:rotate-6 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 text-base font-extrabold text-white transition-colors duration-300 group-hover:text-blue-300">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: PROPORTIONAL IMAGE & GLASS CARDS ================= */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Premium Framed Image */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-blue-400/40">
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden relative">
                  <Image
                    src="/images/why/why.jpg"
                    alt="Professional Facility Management Operations"
                    width={700}
                    height={850}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Stat Card 1: Experience */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 top-8 z-20 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-[#07111F]/80 p-4 shadow-2xl backdrop-blur-xl sm:-left-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-xl font-black leading-none text-white">
                    15+
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Satisfaction */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 bottom-8 z-20 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-[#07111F]/80 p-4 shadow-2xl backdrop-blur-xl sm:-right-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-xl font-black leading-none text-white">
                    98%
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    Client Retention
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
