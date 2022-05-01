import React from "react";
import BottomPageSection from "../../layouts/bottom-page-section/bottom-page-section.component";
import Footer from "../../layouts/footer/footer.component";
import Header from "../../layouts/header/header.component";
import HeroSection from "../../layouts/hero-section/hero-section.component";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BottomPageSection />
      <Footer />
    </div>
  );
};

export default HomePage;
