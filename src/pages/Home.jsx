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
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      {/* 🔥 SEO META TAGS */}
      <Helmet>
        <title>
          CereVeda Physiotherapy Clinic | Best Physiotherapist in Kharar Mohali
        </title>

        <meta
          name="description"
          content="CereVeda is a specialized neuro physiotherapy clinic in Kharar, Mohali offering stroke rehabilitation, neurological physiotherapy, pain management, and personalized recovery programs."
        />

        <link
          rel="canonical"
          href="https://www.cerevedaphysiotherapy.in/"
        />
      </Helmet>

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
