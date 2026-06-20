import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Send, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const planDetails = {
  Basic: "Basic Package — £300",
  Advanced: "Advanced Package — £500",
};

export default function Order() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "Basic";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    websiteType: "",
    pages: "",
    deadline: "",
    budget: "",
    features: "",
    competitors: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="font-mono text-[10px] text-muted-foreground tracking-widest hover:text-foreground transition-colors mb-12 flex items-center gap-2 min-h-[44px]"
          >
            <ArrowLeft size={12} />
            BACK
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
              {planDetails[plan] || plan}
            </p>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground tracking-[-0.03em] mb-4">
              Tell us about your project
            </h1>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-lg">
              Fill in the details below and we'll get back to you with a tailored proposal within 24 hours.
            </p>
          </motion.div>

          <div className="h-px bg-border my-10 md:my-14" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center mx-auto mb-8">
                <Check size={28} className="text-foreground" />
              </div>
              <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Order submitted
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                We've sent a confirmation to {form.email}. Our team will review your requirements and respond within 24 hours.
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-10 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
              >
                ← BACK TO HOME
              </button>
            </motion.div>
          ) : (
            <form action="https://formsubmit.co/contact@cm-web-developers.co.uk" method="POST" onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New C&M Web Developers Order Request" />
              <input type="hidden" name="selected_plan" value={planDetails[plan] || plan} />
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  { field: "name", label: "Your Name", type: "text", required: true, placeholder: "John Smith", name: "name" },
                  { field: "email", label: "Email Address", type: "email", required: true, placeholder: "john@company.com", name: "email" },
                ].map(({ field, label, type, required, placeholder, name }) => (
                  <div key={field}>
                    <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                      {label}{required && " *"}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      required={required}
                      className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Company + Website Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  { field: "company", label: "Company / Organization", type: "text", placeholder: "Acme Inc.", name: "company" },
                  { field: "websiteType", label: "Type of Website", type: "text", placeholder: "E-commerce, Portfolio, SaaS...", name: "website_type" },
                ].map(({ field, label, type, placeholder, name }) => (
                  <div key={field}>
                    <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Pages + Deadline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  { field: "pages", label: "Estimated Pages", type: "text", placeholder: "5–10", name: "estimated_pages" },
                  { field: "deadline", label: "Target Deadline", type: "text", placeholder: "Q4 2026", name: "deadline" },
                ].map(({ field, label, type, placeholder, name }) => (
                  <div key={field}>
                    <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Budget */}
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                  placeholder="£200 – £500"
                />
              </div>

              {/* Features */}
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                  Key Features Needed
                </label>
                <textarea
                  name="key_features"
                  value={form.features}
                  onChange={(e) => handleChange("features", e.target.value)}
                  rows={2}
                  className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/30"
                  placeholder="Payment gateway, user accounts, blog, CMS..."
                />
              </div>

              {/* Competitors */}
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                  Competitor / Reference Sites
                </label>
                <input
                  type="text"
                  name="reference_sites"
                  value={form.competitors}
                  onChange={(e) => handleChange("competitors", e.target.value)}
                  className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                  placeholder="URLs or names of sites you like"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-3 uppercase">
                  Project Description *
                </label>
                <textarea
                  name="project_description"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/30"
                  placeholder="Tell us about your project, goals, target audience, and anything else we should know..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-foreground text-background font-heading font-bold text-sm md:text-base tracking-tight hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
              >
                {sending ? (
                  "SUBMITTING..."
                ) : (
                  <>
                    SUBMIT ORDER
                    <Send size={14} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
