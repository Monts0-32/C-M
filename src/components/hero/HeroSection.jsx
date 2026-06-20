import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toUTCString().split(" ").slice(4, 5).join("") + " UTC"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-12 pb-16 md:pb-24">
      {/* Top metadata */}
      <div className="absolute top-24 right-6 md:right-12 font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider">
        <span>{time}</span>
      </div>

      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider">
        <span>WEB DEVELOPMENT STUDIO</span>
      </div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-heading font-black text-foreground leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,10vw,10rem)] max-w-6xl">
          PRECISION
          <br />
          BUILT
          <br />
          <span className="text-muted-foreground">EXPERIENCES</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <p className="font-mono text-xs md:text-sm text-muted-foreground max-w-md leading-relaxed">
          We design and engineer digital products with obsessive attention to detail, performance, and craft. Every pixel intentional. Every interaction considered.
        </p>

        <button
          onClick={scrollToContact}
          className="font-mono text-xs tracking-widest text-foreground border border-border px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500 uppercase min-h-[44px]"
        >
          Start a project →
        </button>
      </motion.div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}