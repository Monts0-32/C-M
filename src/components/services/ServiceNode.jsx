import React from "react";
import { motion } from "framer-motion";

export default function ServiceNode({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-start gap-6 md:gap-12 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Node marker */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background">
          <span className="font-mono text-xs text-foreground font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {index < 3 && <div className="w-px h-16 md:h-24 bg-border" />}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-12 md:pb-20">
        <div className="border border-border bg-card/40 backdrop-blur-xl p-6 md:p-8">
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
            {service.label}
          </p>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight mb-4">
            {service.title}
          </h3>
          <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-wider text-muted-foreground border border-border px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}