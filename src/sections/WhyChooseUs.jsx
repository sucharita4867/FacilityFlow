"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#07111F] py-28"
    >
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge>Why Choose Us</Badge>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-6xl">
              Trusted By India's
              <br />
              Leading Businesses
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              We combine experienced professionals, technology and proven
              operational processes to deliver reliable facility management
              services that create safer, cleaner and more productive
              environments.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ x: 8 }}
                    className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#14B8A6] text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/images/why/why.jpg"
                alt="Professional Facility Management Team"
                width={700}
                height={850}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/30 via-transparent to-transparent" />
            </div>

            {/* Experience Card */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-10 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-4xl font-black text-[#0B1F3A]">15+</h3>

              <p className="mt-2 text-sm text-slate-500">Years Experience</p>
            </motion.div>

            {/* Satisfaction Card */}

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -right-8 bottom-10 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-4xl font-black text-[#0B1F3A]">98%</h3>

              <p className="mt-2 text-sm text-slate-500">Client Satisfaction</p>
            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute bottom-24 left-1/2 -translate-x-1/2 rounded-full bg-[#0B1F3A] px-8 py-4 text-center text-white shadow-xl"
            >
              <p className="text-xl font-bold">Trusted Nationwide</p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                Enterprise Solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
