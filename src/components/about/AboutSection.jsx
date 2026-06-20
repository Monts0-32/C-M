import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2", label: "Revison Rounds" },
  { value: "100%", label: "Client Ownership" },
  { value: "<1.2s", label: "Load Times" },
  { value: "SSL", label: "Secured" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
            WHO WE ARE
          </p>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground tracking-[-0.03em] mb-8">
            About
          </h2>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-[1.8]">
              At C&M, we believe that an exceptional digital presence shouldn't require a massive corporate budget or endless development bottlenecks. We are an agile, forward-thinking team of web developers and digital architects specializing in high-performance frontend builds, optimized user experiences, and modern cloud deployment.

              We don't just build websites; we design high-converting digital storefronts and clean user interfaces tailored to help your business grow effortlessly in a modern digital economy.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-[1.8]">
              We bridge the gap between creative visual design and secure, scalable web engineering. By leveraging cutting-edge development workflows, we bypass the overhead and slow turnaround times of traditional agencies—delivering sleek, professional web assets quickly and precisely.
              Our core focus centers on two foundational pillars:

              - Sleek, Responsive Design: Crafting custom layout frameworks optimized across all standard desktop, tablet, and mobile viewports to ensure seamless visual consistency and user engagement.

              - Modern Cloud Deployment: Architecting clean, production-ready code pushed directly to global serverless clouds like Cloudflare. This ensures lightning-fast global load speeds, advanced edge caching, and robust security baseline configurations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 content-start"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="border-t border-border pt-6"
            >
              <p className="font-heading font-black text-3xl md:text-5xl text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-24 h-px bg-border" />
    </section>
  );
}
