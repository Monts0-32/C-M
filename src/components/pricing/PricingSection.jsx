import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    label: "For startups",
    price: "£200",
    description: "A solid foundation for your online presence.",
    features: [
      "Custom design (up to 5 pages)",
      "Responsive development",
      "Basic SEO setup",
      "Contact form integration",
      "1 month of support",
    ],
    unavailable: [
      "E-commerce functionality",
      "CMS integration",
      "Custom animations",
      "Performance optimization",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Advanced",
    label: "For growing businesses",
    price: "£400",
    description: "A fully engineered digital experience.",
    features: [
      "Custom design (up to 15 pages)",
      "Responsive development",
      "Advanced SEO strategy",
      "CMS integration",
      "Custom animations & interactions",
      "Performance optimization",
      "3 months of support",
      "Analytics dashboard",
    ],
    unavailable: [
      "Custom API development",
      "Multi-platform deployment",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Custom",
    label: "For enterprise",
    price: "Let's talk",
    description: "Bespoke engineering for complex needs.",
    features: [
      "Unlimited pages & features",
      "Custom API development",
      "Multi-platform deployment",
      "Full-stack engineering",
      "Advanced animations (Three.js)",
      "Dedicated project manager",
      "12 months of support",
      "Performance SLA",
      "Infrastructure architecture",
    ],
    unavailable: [],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  const handleCta = (planName) => {
    if (planName === "Custom") {
      const el = document.querySelector("#contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/order?plan=${planName}`);
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
          INVESTMENT
        </p>
        <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.03em]">
          Pricing
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`relative border ${
              plan.highlighted
                ? "border-foreground/20 bg-card/60"
                : "border-border bg-card/30"
            } backdrop-blur-xl flex flex-col`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-0 right-0 h-px bg-foreground/40" />
            )}

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-2 uppercase">
                  {plan.label}
                </p>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground tracking-tight mb-1">
                  {plan.name}
                </h3>
                <p className="font-heading font-black text-3xl md:text-4xl text-foreground tracking-tight mt-4">
                  {plan.price}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="h-px bg-border mb-6" />

              <div className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={14} className="text-foreground mt-0.5 flex-shrink-0" />
                    <span className="font-mono text-xs text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.unavailable.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-30">
                    <Minus size={14} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="font-mono text-xs text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleCta(plan.name)}
                className={`mt-8 w-full py-4 font-heading font-bold text-sm tracking-tight transition-all duration-500 flex items-center justify-center gap-2 min-h-[44px] group ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 h-px bg-border" />
    </section>
  );
}