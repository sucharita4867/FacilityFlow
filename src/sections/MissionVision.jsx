"use client";

import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { missionData } from "@/data/mission";

export default function MissionVision() {
  return (
    <section id="mission" className="relative overflow-hidden bg-white py-32">
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Our Foundation</Badge>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F3A] lg:text-6xl">
            Mission,
            <br />
            Vision &
            <br />
            Values
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every decision we make is guided by a clear mission, a long-term
            vision and values that inspire trust, innovation and operational
            excellence.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {missionData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 ${
                  item.featured
                    ? "border-blue-500 bg-gradient-to-br from-[#0B1F3A] via-[#163D73] to-[#2563EB] text-white shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
                    : "border-slate-200 bg-white shadow-lg hover:border-blue-200 hover:shadow-2xl"
                }`}
              >
                {/* Glow */}

                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-500 ${
                    item.featured
                      ? "bg-white/10"
                      : "bg-blue-100 opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="relative p-10">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                      item.featured
                        ? "bg-white/15 backdrop-blur-xl"
                        : "bg-gradient-to-br from-[#2563EB] to-[#14B8A6] text-white"
                    }`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className={`mt-8 text-3xl font-black ${
                      item.featured ? "text-white" : "text-[#0B1F3A]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-6 leading-8 ${
                      item.featured ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.featured && (
                    <div className="mt-10 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
                      Our Guiding Principle
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-4xl rounded-[36px] bg-[#0B1F3A] px-10 py-16 text-center text-white shadow-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            OUR COMMITMENT
          </p>

          <h3 className="mt-6 text-3xl font-black leading-tight lg:text-5xl">
            Creating Better Spaces.
            <br />
            Building Better Experiences.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We believe that exceptional facility management goes beyond
            maintenance—it creates environments where businesses, communities
            and people thrive.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
