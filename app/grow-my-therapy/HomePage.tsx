import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetStart from "../components/GetStart";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import TherapySection from "../components/TherapySection";
import ProfessionalBG from "../components/ProfessionalBG";
import FAQs from "../components/FAQs";
import AboutSection from "../components/AboutSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainSection />
      <SpecialtiesSection />
      <TherapySection />
      <AboutSection />
      <FAQs />
      <ProfessionalBG />
      <GetStart />
      <Footer />
    </div>
  );
};

export default HomePage;
