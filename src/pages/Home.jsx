import React from "react";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import CareProcess from "../components/CareProcess";
import ConditionsSection from "../components/ConditionsSection";
import DoctorsSection from "../components/DoctorsSection";
import ClinicSection from "../components/ClinicSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NeuroCareScope from "../components/NeuroCareScope";
import FaqSection from "../components/CereVedaFAQ";
import SEO from "../components/SEO";
import { useState, useEffect } from "react";
import PopupEnquiry from "../components/PopupEnquiry";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500); // 25 sec after page load

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* 🔥 PROFESSIONAL SEO */}
      <SEO
        title="CereVeda Physiotherapy Clinic in Kharar, Mohali | Pain Relief & Rehabilitation Care"
        description="CereVeda Physiotherapy Clinic in Kharar, Mohali offers expert physiotherapy care for pain relief, stroke recovery, nerve injuries, posture problems, and mobility improvement. Personalized treatment by experienced physiotherapists."
        canonical="https://www.cerevedaphysiotherapy.in/"
        isHome
      />
       {/* 🔥 POPUP ENQUIRY */}
    <PopupEnquiry
      show={showPopup}
      onClose={() => setShowPopup(false)}
    />

      {/* 🔥 EXISTING UI (UNCHANGED) */}
      <div>
        <Hero />
        <TrustStrip />
        <CareProcess />
        <ConditionsSection />
        <DoctorsSection />
        <ClinicSection />
        <TestimonialsSection />
        <NeuroCareScope />
        <FaqSection />
      </div>
    </>
  );
}

export default Home;
