"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Clock3,
  Building2,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

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

export default function CTA() {
  return (
    <section
      id="contact"
      aria-label="Contact FacilityFlow"
      className="relative overflow-hidden bg-[#07111F] py-24 sm:py-36 text-white"
    >
      {/* Background Decorative Mesh & Radial Lighting */}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0B1F3A] via-[#102B53] to-[#1E3A8A] px-6 py-16 sm:px-12 sm:py-20 shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
        >
          {/* Ambient Lighting Orbs Inside Container */}
          <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-300 backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <span>LET&apos;S WORK TOGETHER</span>
              </Badge>
            </motion.div>

            {/* Title (Matching Rest of Project Typography) */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Ready To Transform <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Your Facility Operations?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
              Partner with FacilityFlow to create safer, cleaner, and more
              efficient enterprise environments through world-class integrated
              property and facility management solutions.
            </p>

            {/* Standard Project Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0">
                <span>Get Free Consultation</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                variant="secondary"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white hover:-translate-y-0.5"
              >
                <PhoneCall size={18} className="text-blue-400" />
                <span>Contact Us</span>
              </Button>
            </div>

            {/* Interactive Animated Cards Grid */}
            <motion.div
              className="mt-16 grid gap-6 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/25" />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-blue-400 shadow-md backdrop-blur-md transition-colors duration-300 group-hover:border-blue-400 group-hover:rotate-6 group-hover:text-white">
                  <Clock3 size={26} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-blue-300">
                  24/7 Support
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  Round-the-clock assistance for uninterrupted facility
                  operations and emergency response.
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/25" />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-600/30 to-blue-500/20 text-cyan-400 shadow-md backdrop-blur-md transition-colors duration-300 group-hover:border-cyan-400 group-hover:rotate-6 group-hover:text-white">
                  <ShieldCheck size={26} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  Certified Experts
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  Skilled certified professionals delivering consistent quality
                  across every property asset.
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/25" />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/30 to-blue-500/20 text-indigo-400 shadow-md backdrop-blur-md transition-colors duration-300 group-hover:border-indigo-400 group-hover:rotate-6 group-hover:text-white">
                  <Building2 size={26} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  PAN India Service
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  Trusted by businesses, corporate parks, and enterprise clients
                  across India.
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
