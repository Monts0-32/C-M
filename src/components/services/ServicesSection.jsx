import React from "react";
import { motion } from "framer-motion";
import ServiceNode from "./ServiceNode";

const services = [
  {
    label: "Phase 01",
    title: "Discovery & Strategy",
    description:
      "Once the initial deposit is paid and we receive the necessary information from you, we will begin researching and planning the design layout for your website.",
    tags: ["1", "Designing", "Researching"],
  },
  {
    label: "Phase 02",
    title: "Design & Prototyping",
    description:
      "In phase two, we begin the core development process and start building your custom website.",
    tags: ["2", "Developing", "Intial Build"],
  },
  {
    label: "Phase 03",
    title: "Engineering & Build",
    description:
      "In phase three, we add the finishing touches to your website and configure your domain's DNS settings to launch it live on the internet.",
    tags: ["3", "Domains & DNS", "Configure"],
  },
  {
    label: "Phase 04",
    title: "Launch & Scale",
    description:
      "In phase four, the final half of the invoice is settled and your website is fully wrapped up. Depending on your chosen package, we also provide ongoing support for a limited time to ensure your website runs smoothly and to resolve any issues if they arise.",
    tags: ["4", "Support", "Deploy"],
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
