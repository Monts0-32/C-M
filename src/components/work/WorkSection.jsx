const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Meridian Capital",
    category: "FINTECH",
    stack: "React / Node / AWS",
    loadTime: "0.8s",
    year: "2024",
    image: "https://media.db.com/images/public/6a32e4c8f9b7edbed0a3853f/873e6c3cf_generated_6981e553.png",
  },
  {
    title: "Vertex Studio",
    category: "CREATIVE",
    stack: "Next.js / Three.js",
    loadTime: "1.1s",
    year: "2024",
    image: "https://media.db.com/images/public/6a32e4c8f9b7edbed0a3853f/9e84a9f93_generated_0b495a73.png",
  },
  {
    title: "Obsidian Health",
    category: "HEALTHTECH",
    stack: "React / Python / GCP",
    loadTime: "0.6s",
    year: "2023",
    image: "https://media.db.com/images/public/6a32e4c8f9b7edbed0a3853f/32c905ec4_generated_5830f6d7.png",
  },
  {
    title: "Prism Analytics",
    category: "SAAS",
    stack: "Vue / Go / K8s",
    loadTime: "0.9s",
    year: "2023",
    image: "https://media.db.com/images/public/6a32e4c8f9b7edbed0a3853f/0620358a6_generated_aff22b18.png",
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
            Portfolio
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

      {/* Horizontal scroll */}
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