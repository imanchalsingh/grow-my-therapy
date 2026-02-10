import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetStart from "../components/GetStart";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import TherapySection from "../components/TherapySection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainSection />
      <SpecialtiesSection />
      <TherapySection />
      <GetStart />
      <Footer />
    </div>
  );
};

export default HomePage;
