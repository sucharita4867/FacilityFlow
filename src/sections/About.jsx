"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-32"
    >
      {/* Background Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-200/40 blur-[130px]" />

      <Container>
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 z-10">
            <motion.div variants={itemVariants}>
              <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/60 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700">
                <span>OUR ENTERPRISE PROFILE</span>
              </Badge>
            </motion.div>

            {/* Distinctive Heading (Distinct from Hero) */}
            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B1F3A]"
            >
              Setting the Gold Standard in <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Integrated Facility Management
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-normal"
            >
              FacilityFlow manages over 1200+ commercial and corporate properties across Pan-India with end-to-end operational governance, strict ISO safety protocols, and AI-driven asset maintenance.
            </motion.p>

            {/* Mission & Vision Split Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Target size={20} />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0B1F3A]">
                  Operational Mission
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Maximizing asset lifetime value through predictive technology and zero-downtime execution.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Eye size={20} />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0B1F3A]">
                  Strategic Vision
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Empowering enterprise work environments with 100% statutory compliance and sustainability.
                </p>
              </div>
            </motion.div>

            {/* Feature Highlights List */}
            <motion.div variants={itemVariants} className="mt-6 space-y-2.5">
              {[
                "100% Statutory & ISO Compliance Governance",
                "24/7 Centralized Command Center & Helpdesk",
                "Pan-India Verified Operations Workforce",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <Button className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700">
                <span>Explore Operations</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE & COMPACT BADGES ================= */}
          <div className="lg:col-span-6 relative">
            <motion.div variants={itemVariants} className="relative mx-auto max-w-md lg:max-w-none">
              {/* Premium Framed Image */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/about/about.jpg"
                    alt="Facility Management Team On-Site"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Stat Card 1: Experience */}
              <div className="absolute -left-6 top-8 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-lg font-black text-[#0B1F3A]">15+ Years</p>
                  <p className="text-xs text-slate-500 font-medium">Industry Leadership</p>
                </div>
              </div>

              {/* Stat Card 2: Satisfaction */}
              <div className="absolute -right-6 bottom-8 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-lg font-black text-[#0B1F3A]">98% Success</p>
                  <p className="text-xs text-slate-500 font-medium">Client Retention</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}