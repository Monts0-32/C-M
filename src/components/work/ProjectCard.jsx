
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? "scale-105 grayscale" : "scale-100 grayscale-0"
          }`}
        />

        {/* Hover overlay */} 
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col justify-end p-6 transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider space-y-2">
            <div className="flex justify-between">
              <span>.</span>
              <span>{project.stack}</span>
            </div>
            <div className="flex justify-between">
              <span>.</span>
              <span>{project.loadTime}</span>
            </div>
            <div className="flex justify-between">
              <span>.</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-heading font-bold text-lg md:text-xl text-foreground tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider mt-1">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
};
