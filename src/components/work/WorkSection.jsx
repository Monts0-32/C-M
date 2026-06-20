
const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "",
    category: "",
    stack: "",
    loadTime: "",
    year: "",
    image: "https://kommodo.ai/i/JgZeZjGu3rxPPVbZeT4D",
  },
  {
    title: "",
    category: "",
    stack: "",
    loadTime: "",
    year: "",
    image: "https://kommodo.ai/i/FJXz1OoaKLpDoAcxWrSl",
  },
  {
    title: "",
    category: "",
    stack: "",
    loadTime: "",
    year: "",
    image: "https://kommodo.ai/i/uMMOSAqtnMaliL0tp7G5",
  },
  {
    title: "",
    category: "",
    stack: "",
    loadTime: "",
    year: "",
    image: "https://kommodo.ai/i/JgZeZjGu3rxPPVbZeT4D",
  },
];

export default function WorkSection() {
  const scrollRef = useRef(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="px-6 md:px-12 mb-12 md:mb-16 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
            SELECTED WORK
          </p>
          <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.03em]">
            
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:block font-mono text-xs text-muted-foreground tracking-wider"
        >
          SCROLL →
        </motion.p>
      </div>

      {/* Horizontal scroll */ } 

      <div
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-12 pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-12 md:mt-16 h-px bg-border" />
    </section>
  );
}

