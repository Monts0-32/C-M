import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
          LET'S WORK TOGETHER
        </p>
        <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.03em]">
          Contact
        </h2>
      </motion.div>

      {sent ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl"
        >
          <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Message received.
          </p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We'll review your inquiry and respond within 24 hours.
            A confirmation has been sent to your email.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            ← SEND ANOTHER
          </button>
        </motion.div>
      ) : (
        <form action="https://formsubmit.co/contact@cm-web-developers.co.uk" method="POST" onSubmit={handleSubmit} className="max-w-2xl space-y-12">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New C&M Enquiry" />

          {[
            { field: "name", label: "Your Name", type: "text", name: "name" },
            { field: "email", label: "Email Address", type: "email", name: "email" },
          ].map(({ field, label, type, name }) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-4 uppercase">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                required
                className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40"
                placeholder={`Enter your ${field}`}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block font-mono text-[10px] text-muted-foreground tracking-widest mb-4 uppercase">
              Project Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={4}
              className="w-full bg-transparent border-b border-border text-foreground font-mono text-sm pb-3 focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/40"
              placeholder="Tell us about your project"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-6 bg-foreground text-background font-heading font-bold text-lg md:text-xl tracking-tight hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 min-h-[44px]"
          >
            {sending ? "SENDING..." : "SUBMIT INQUIRY"}
          </motion.button>
        </form>
      )}
    </section>
  );
}