"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Globe,
  Share2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { company } from "@/constants/company";

const quickLinks = ["About", "Services", "Industries", "Process", "Contact"];
const services = [
  "Housekeeping",
  "Security",
  "MEP Maintenance",
  "Pest Control",
  "Deep Cleaning",
];

// SVG Brand Icons (Lucide-react brand icon issue solution)
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-4.873-12-10.875-12S2.25 5.446 2.25 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H9.703v-3.47h2.672V9.413c0-2.637 1.57-4.092 3.974-4.092 1.15 0 2.351.205 2.351.205v2.584h-1.325c-1.306 0-1.713.81-1.713 1.643v1.97h2.912l-.465 3.47H15.67v8.385C21.407 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050B16] pt-24 text-white border-t border-slate-800/60">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Company Column */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">
              {company.name}
            </h2>
            <p className="mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
              Delivering premium integrated property and facility management
              solutions across Pan-India with innovation, professionalism, and
              operational governance.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-extrabold tracking-wide text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-all duration-300 hover:text-blue-400"
                  >
                    <span>{link}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-extrabold tracking-wide text-white uppercase">
              Services
            </h3>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400 transition-colors duration-300 hover:text-blue-400 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-extrabold tracking-wide text-white uppercase">
              Contact Us
            </h3>
            <div className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase">
                    Phone
                  </p>
                  <p className="mt-0.5 text-slate-300 font-medium">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase">
                    Email
                  </p>
                  <p className="mt-0.5 text-slate-300 font-medium break-all">
                    info@facilityflow.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase">
                    Office
                  </p>
                  <p className="mt-0.5 text-slate-300 font-medium">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="#" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-slate-300">
              Terms & Conditions
            </Link>

            {/* Scroll Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
