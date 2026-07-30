"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { services } from "@/data/services";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative bg-slate-50 dark:bg-[#07111F] text-slate-900 dark:text-slate-100 pt-16 pb-16 sm:pt-24 sm:pb-36 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Decorative Light Background Accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11, 31, 58, 0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-[550px] w-[550px] rounded-full bg-cyan-200/30 blur-[150px]" />

      <Container className="relative z-10">
        {/* ================= EDITORIAL HEADER LAYOUT ================= */}
        <motion.div
          className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/60 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-700">
              <Layers size={14} className="text-blue-600" />
              <span>CAPABILITIES & CAPACITIES</span>
            </Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-[#0B1F3A]">
              Enterprise Solutions. <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Engineered for Scale.
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              We deliver fully managed property operations, predictive MEP
              maintenance, and statutory compliance frameworks tailored for
              high-density enterprise assets.
            </p>
            <div className="mt-6">
              <Button className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/25">
                <span>Request Custom RFP</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ================= FEATURED HERO SERVICE CARD ================= */}
        <motion.div
          className="mt-14 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-[#102a4e] p-8 sm:p-12 text-white shadow-2xl transition-all duration-500 hover:border-blue-500/40">
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7 z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
                  <Sparkles size={14} />
                  <span>FLAGSHIP INTEGRATED SOLUTION</span>
                </div>
                <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug">
                  Integrated Facility Management (IFM)
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
                  Consolidate all hard and soft facility services under a single
                  command center. Driven by ISO-certified SLAs, IoT asset
                  monitoring, and a 24/7 centralized dispatch team to guarantee
                  100% operational uptime.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <ShieldCheck className="text-cyan-400" size={18} />
                    <span>SLA Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <ShieldCheck className="text-blue-400" size={18} />
                    <span>100% Statutory Compliant</span>
                  </div>
                </div>

                {/* EXACT MATCH BUTTON ACCORDING TO IMAGE */}
                <div className="mt-8">
                  <Button className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30">
                    <span>Explore IFM Architecture</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative z-10">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-800 shadow-xl">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/services/service.png"
                      alt="Integrated Facility Management Operations"
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 p-3.5 backdrop-blur-md">
                    <div>
                      <p className="text-xs font-bold text-white">
                        Central Helpdesk Active
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Response time &lt; 15 mins
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= 01-09 SERVICE CARDS GRID ================= */}
        <motion.div
          className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const formattedIndex = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.id || index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/60 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <span className="text-2xl font-black tracking-wider text-slate-300 transition-colors duration-300 group-hover:text-blue-600/40">
                    {formattedIndex}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-extrabold text-[#0B1F3A] transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                    Service Scope
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
