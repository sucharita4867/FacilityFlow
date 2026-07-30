"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Workflow, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { process as processSteps } from "@/data/process";

// Motion Animation Variants
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

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Operational Execution Workflow"
      className="relative overflow-hidden bg-white dark:bg-[#07111F] text-slate-900 dark:text-slate-100 py-24 sm:py-32 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Decorative Background Mesh & Soft Blur Accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11, 31, 58, 0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[160px]" />

      <Container className="relative z-10">
        {/* ================= EDITORIAL SECTION HEADER ================= */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-700">
            <Workflow size={14} className="text-blue-600" />
            <span>OPERATIONAL BLUEPRINT</span>
          </Badge>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-[#0B1F3A]">
            Precision Execution. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Zero Operational Friction.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Our 5-phase structured workflow guarantees seamless onboarding, ISO-compliant service execution, and 24/7 transparent SLA governance.
          </p>
        </motion.div>

        {/* ================= WORKFLOW BENTO GRID LAYOUT ================= */}
        <motion.div
          className="mt-16 sm:mt-20 grid gap-6 lg:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isFeatured = step.id === "03" || step.title.toLowerCase().includes("execution");

            {/* ================= STEP 03 FEATURED HERO CARD (Full Column Highlight) ================= */}
            if (isFeatured) {
              return (
                <motion.div
                  key={step.id || index}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-[32px] border border-blue-500/30 bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-[#102a4e] p-8 sm:p-10 text-white shadow-2xl lg:col-span-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
                >
                  {/* Glowing Background Overlay */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

                  {/* Left Column Content */}
                  <div className="z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
                      <Sparkles size={13} />
                      <span>CORE PHASE</span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-4xl sm:text-5xl font-black text-blue-400">
                        {step.id}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
                      {step.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-cyan-400" />
                        <span>SLA-Backed Execution</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-400" />
                        <span>Certified On-Site Workforce</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Icon Container */}
                  <div className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-blue-400 shadow-2xl backdrop-blur-xl group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Icon size={48} />
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />
                </motion.div>
              );
            }

            {/* ================= STANDARD STEP CARDS (2-Column Grid Rows) ================= */}
            return (
              <motion.div
                key={step.id || index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 lg:col-span-6 flex flex-col justify-between min-h-[220px]"
              >
                {/* Top Row: Icon & Step ID */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <span className="text-3xl font-black tracking-wider text-slate-200 transition-colors duration-300 group-hover:text-blue-600/30">
                    {step.id}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-6">
                  <h3 className="text-xl font-extrabold text-[#0B1F3A] transition-colors duration-300 group-hover:text-blue-600">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Arrow Indicator */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600">
                    Phase Milestone
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}