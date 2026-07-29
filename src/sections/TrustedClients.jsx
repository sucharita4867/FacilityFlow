"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const CLIENT_CATEGORIES = [
  "IT PARKS",
  "HOSPITALS",
  "HOTELS",
  "PHARMA",
  "INDUSTRIES",
  "CORPORATES",
];

export default function TrustedClients() {
  return (
    <section className="bg-slate-950 border-t border-slate-800/60 py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-8 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Trusted By Leading Businesses Across India
          </p>
          <div className="grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-3 lg:grid-cols-6">
            {CLIENT_CATEGORIES.map((category, idx) => (
              <div
                key={idx}
                className="text-center text-base font-bold tracking-wider text-slate-400 transition-colors duration-300 hover:text-blue-400"
              >
                {category}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
