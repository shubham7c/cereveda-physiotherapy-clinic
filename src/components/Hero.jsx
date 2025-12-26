import React from "react";
import AnimatedButton from "../components/AnimatedButton";

function Hero() {
  return (
    <section
      className="
        relative w-full 
        min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh]
        flex items-center sm:items-center
      "
      style={{
        backgroundImage: "url(/heroimage.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔵 PREMIUM OVERLAY */}
      <div
        className="
          absolute inset-0 
          bg-[#0f3d5c]/45
          from-[#0f3d5c]/70 
          via-[#2b6f9c]/45 
          to-[#5fa8d3]/25 
          backdrop-blur-[2px]
        "
        style={{
          backdropFilter: window.innerWidth < 768 ? "blur(1px)" : "blur(2px)",
        }}
      />

      {/* 🔒 SEO / ACCESSIBILITY IMAGE (NO UI IMPACT) */}
      <img
        src="/heroimage.png"
        alt="CereVeda Physiotherapy Clinic providing pain relief, mobility improvement and neurological rehabilitation in Kharar Mohali"
        className="sr-only"
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 
          max-w-300 mx-auto
          px-4 sm:px-6 lg:px-10
          pt-6 sm:pt-0
          text-white
        "
      >
        {/* SEO SUPPORTING H2 (HIDDEN) */}
        <h2 className="sr-only">
          Best Physiotherapy Clinic for Pain Relief, Injury Recovery and Mobility Improvement
        </h2>

        {/* MAIN H1 */}
        <h1
          className="
            text-center font-extrabold leading-snug sm:leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-7xl
            max-w-6xl mx-auto
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]
          "
        >
          Physiotherapy Care for Pain Relief, Mobility & Faster Recovery
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            mt-4 sm:mt-5
            text-center
            text-base sm:text-lg md:text-xl
            max-w-4xl mx-auto
            text-white/90
            drop-shadow-md
          "
        >
          Personalized physiotherapy programs designed to reduce pain, restore movement, and improve
          everyday quality of life.
        </p>

        {/* CTA BUTTONS */}
        <div
          className="
            mt-8 sm:mt-10
            flex justify-center
            gap-5 sm:gap-6
            flex-col sm:flex-row
            items-center
          "
        >
          <AnimatedButton
            text="Book Appointment"
            href="/book-appointment"
            color="blue"
          />

          <AnimatedButton
            text="Request Callback"
            href="/contact-us"
            color="green"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
