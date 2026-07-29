"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { stats } from "@/data/stats";

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

export default function Stats() {
  return (
    <section
      id="stats"
      aria-label="Company Statistics"
      className="relative overflow-hidden bg-[#07111F] py-16
       sm:py-32 text-white"
    >
      {/* Background Decorative Mesh & Radial Lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-950/60 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 backdrop-blur-md">
            COMPANY STATISTICS
          </Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Trusted By Hundreds <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Of Enterprises Across India
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            Our commitment to operational excellence, professional workforce,
            and customer-first approach has made us a leading integrated
            facility management partner.
          </p>
        </motion.div>

        {/* 4 Cards Dynamic Grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Hover Soft Background Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/25" />

                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-blue-400 shadow-md backdrop-blur-md transition-colors duration-300 group-hover:border-blue-400 group-hover:text-white">
                  <Icon size={26} />
                </div>

                {/* Statistic Value */}
                <h3 className="mt-8 text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {item.value}
                </h3>

                {/* Title */}
                <h4 className="mt-2 text-lg font-bold text-slate-100">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
