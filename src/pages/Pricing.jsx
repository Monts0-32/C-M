import React from "react";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
}