import React from "react";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import CareProcess from "../components/CareProcess";
import ConditionsSection from "../components/ConditionsSection";
import DoctorsSection from "../components/DoctorsSection";
import ClinicSection from "../components/ClinicSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NeuroCareScope from "../components/NeuroCareScope";
import FaqSection from "../components/CerevedaFAQ";

function Home() {
  return <div>
    <Hero />
    <TrustStrip />
    <CareProcess /> 
    <ConditionsSection />
    <DoctorsSection />
    <ClinicSection />
    <TestimonialsSection />
    <NeuroCareScope />
    <FaqSection />
    
    
  </div>;
}

export default Home;
