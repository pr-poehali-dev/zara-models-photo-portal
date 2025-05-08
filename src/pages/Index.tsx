
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import UploadSection from "@/components/UploadSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <RequirementsSection />
        <PortfolioSection />
        <UploadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
