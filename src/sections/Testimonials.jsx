"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareHeart } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { testimonials } from "@/data/testimonials";

// Duplicate items for continuous infinite marquee loop
const row1Testimonials = [
  ...testimonials.slice(0, 4),
  ...testimonials.slice(0, 4),
];
const row2Testimonials = [
  ...testimonials.slice(4, 8),
  ...testimonials.slice(4, 8),
];

function TestimonialCard({ item }) {
  return (
    <div className="group relative w-[320px] sm:w-[380px] shrink-0 overflow-hidden rounded-[32px] border border-slate-200/90 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-blue-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
      {/* Soft Glow Background on Hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/60 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

      {/* Top Bar: Quote Icon & Star Rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(item.rating || 5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110"
            />
          ))}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12">
          <Quote size={18} />
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal line-clamp-4">
        &ldquo;{item.review}&rdquo;
      </p>

      {/* Client Profile Information */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md transition-transform duration-500 group-hover:scale-105">
          <Image
            src={item.image || "/images/about/about.jpg"}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <h3 className="text-sm font-extrabold text-[#0B1F3A] truncate transition-colors duration-300 group-hover:text-blue-600">
            {item.name}
          </h3>
          <p className="text-[11px] font-semibold text-slate-500 truncate">
            {item.position}
          </p>
          <p className="text-[11px] font-bold text-blue-600 truncate">
            {item.company}
          </p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="relative overflow-hidden bg-slate-50 dark:bg-[#07111F] text-slate-900 dark:text-slate-100 py-24 sm:py-32 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Decorative Background Lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11, 31, 58, 0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[160px]" />

      <Container className="relative z-10 mb-14 sm:mb-18">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/60 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-700">
            <MessageSquareHeart size={14} className="text-blue-600" />
            <span>CLIENT TRUST & SATISFACTION</span>
          </Badge>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-[#0B1F3A]">
            Endorsed by India’s Leading <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Enterprise Visionaries
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Discover how FacilityFlow empowers Fortune 500 corporates,
            healthcare leaders, and IT campuses with SLA-backed operational
            excellence.
          </p>
        </motion.div>
      </Container>

      {/* ================= INFINITE DUAL-ROW MARQUEE TRACKS ================= */}
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent" />

        {/* ROW 1: Left -> Right Continuous Marquee */}
        <div className="group flex overflow-hidden select-none gap-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex shrink-0 gap-6 group-hover:[animation-play-state:paused]"
          >
            {row1Testimonials.map((item, index) => (
              <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex shrink-0 gap-6 group-hover:[animation-play-state:paused]"
          >
            {row1Testimonials.map((item, index) => (
              <TestimonialCard
                key={`row1-dup-${item.id}-${index}`}
                item={item}
              />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Right -> Left Continuous Marquee */}
        <div className="group flex overflow-hidden select-none gap-6">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex shrink-0 gap-6 group-hover:[animation-play-state:paused]"
          >
            {row2Testimonials.map((item, index) => (
              <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex shrink-0 gap-6 group-hover:[animation-play-state:paused]"
          >
            {row2Testimonials.map((item, index) => (
              <TestimonialCard
                key={`row2-dup-${item.id}-${index}`}
                item={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
