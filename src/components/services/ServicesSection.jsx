import React from "react";
import { motion } from "framer-motion";
import ServiceNode from "./ServiceNode";

const services = [
  {
    label: "Phase 01",
    title: "Discovery & Strategy",
    description:
      "We begin every engagement with deep research into your market, users, and goals. This phase produces a comprehensive blueprint that aligns business objectives with technical architecture.",
    tags: ["UX RESEARCH", "COMPETITIVE AUDIT", "TECHNICAL SPEC"],
  },
  {
    label: "Phase 02",
    title: "Design & Prototyping",
    description:
      "High-fidelity interface design built on systematic design tokens. We prototype every interaction to ensure pixel-perfect execution before a single line of code is written.",
    tags: ["UI DESIGN", "MOTION DESIGN", "DESIGN SYSTEMS"],
  },
  {
    label: "Phase 03",
    title: "Engineering & Build",
    description:
      "Performance-obsessed development using modern frameworks and best practices. Every component is tested, accessible, and optimized for sub-second load times.",
    tags: ["REACT", "NODE.JS", "CLOUD INFRA"],
  },
  {
    label: "Phase 04",
    title: "Launch & Scale",
    description:
      "Deployment is just the beginning. We provide ongoing performance monitoring, iterative improvements, and infrastructure scaling to grow with your business.",
    tags: ["CI/CD", "MONITORING", "OPTIMIZATION"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
          OUR PROCESS
        </p>
        <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.03em]">
          Services
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {services.map((service, i) => (
          <ServiceNode key={service.title} service={service} index={i} />
        ))}
      </div>

      <div className="mt-12 h-px bg-border" />
    </section>
  );
}