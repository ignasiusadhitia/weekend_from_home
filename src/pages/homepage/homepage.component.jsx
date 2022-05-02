import React from "react";
import Footer from "../../layouts/footer/footer.component";
import Header from "../../layouts/header/header.component";
import HelpAndTipsSection from "../../layouts/help-and-tips-section/help-and-tips-section.component";
import HeroSection from "../../layouts/hero-section/hero-section.component";
import POVAndResourceSection from "../../layouts/pov-and-resource-section/pov-and-resource-section.component";
import YouAreAllSetSection from "../../layouts/you-are-all-set-section/you-are-all-set-section.component";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <POVAndResourceSection />
      <HelpAndTipsSection />
      <YouAreAllSetSection />
      <Footer />
    </div>
  );
};

export default HomePage;
