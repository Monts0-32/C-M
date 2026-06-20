import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "PROJECTS DELIVERED" },
  { value: "12", label: "YEARS EXPERIENCE" },
  { value: "0.8s", label: "AVG LOAD TIME" },
  { value: "100%", label: "CLIENT RETENTION" },
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
              C&M Web Developers is a digital engineering studio founded on the
              principle that great software is invisible — it simply works.
              We build websites and applications that perform flawlessly under
              pressure.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-[1.8]">
              Our team combines deep technical expertise with refined design
              sensibility. We don't chase trends — we engineer solutions that
              endure. Every project is treated as a piece of architecture:
              structurally sound, aesthetically precise, and built to last.
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