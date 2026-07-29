"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  MapPin,
  Award,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const floatAnimation = (duration = 5, delay = 0) => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-slate-100 lg:min-h-screen lg:pt-40 lg:pb-28 flex items-center justify-center">
      {/* 1. LAYERED BACKGROUND ARCHITECTURE */}
      {/* Subtle Mesh Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial Light Glows */}
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute -left-20 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[130px]" />
      <div className="absolute -right-20 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[150px]" />

      <Container>
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN: TYPOGRAPHY & CTA */}
          <div className="lg:col-span-7 z-10">
            {/* Enterprise Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-blue-300 backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <span>India&apos;s Premier Facility Management Partner</span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              Architecting <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                World-Class
              </span>{" "}
              Environments
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 font-normal"
            >
              Empowering enterprise real estate with tech-enabled facility
              management, asset optimization, and sustainable operations
              engineered for seamless scale across Pan-India infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button className="group relative inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0">
                <span>Get Free Consultation</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                variant="secondary"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ChevronRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-0.5"
                />
              </Button>
            </motion.div>

            {/* Live Statistics Counter Block */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 sm:gap-8"
            >
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  15+
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  1200+
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                  Managed Properties
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  98%
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: HERO IMAGE & FLOATING GLASS CARDS */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Premium Image Frame */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-slate-600">
                {/* Image Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Main Hero Image */}
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/hero/building.jpg"
                    alt="Corporate Property Facility Management"
                    width={800}
                    height={1000}
                    priority
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* GLASS FLOATING CARD 1: Client Satisfaction */}
              <motion.div
                {...floatAnimation(5, 0)}
                className="absolute -left-6 top-8 z-20 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl sm:-left-10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-white">
                    98%
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Client Satisfaction
                  </p>
                </div>
              </motion.div>

              {/* GLASS FLOATING CARD 2: Managed Properties */}
              <motion.div
                {...floatAnimation(6, 1)}
                className="absolute -right-6 top-1/2 z-20 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl sm:-right-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-white">
                    1200+
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Managed Properties
                  </p>
                </div>
              </motion.div>

              {/* GLASS FLOATING CARD 3: PAN India Operations */}
              <motion.div
                {...floatAnimation(5.5, 0.5)}
                className="absolute bottom-6 left-6 z-20 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none text-white">
                    PAN India
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Operations Network
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
