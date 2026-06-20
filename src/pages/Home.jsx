import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import WorkSection from "@/components/work/WorkSection";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/about/AboutSection";
import PricingSection from "@/components/pricing/PricingSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}