import { useEffect, useState, useRef } from "react";
import clinicImages from "../data/clinicImages";
import "../styles/ClinicSection.css";

export default function ClinicSection() {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  /* IMAGE SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clinicImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* TEXT SCROLL ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-show");
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    /* =========================
       SEO: LOCAL CLINIC SCHEMA
    ========================= */
    const clinicSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "CereVeda Physiotherapy Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Sco 9, Corner. Lower Ground, opposite Gulmohar Complex, Sector 126, Model Town",
        addressLocality: "Kharar",
        addressRegion: "Punjab",
        postalCode: "140301",
        addressCountry: "IN"
      },
      medicalSpecialty: "Physiotherapy",
      openingHours: "Mo-Sa 10:00-17:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "5"
      }
    };

    let script = document.getElementById("schema-clinic-local");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-clinic-local";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(clinicSchema);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="clinic-section">
      {/* STATIC HEADING */}
      <h2 className="clinic-title">ADVANCED PHYSIOTHERAPY CLINICS</h2>
      <p className="clinic-subtitle">
        Experience expert physiotherapy at our advanced clinic equipped with modern technology for
        long-term recovery.
      </p>

      <div className="clinic-wrapper">
        {/* IMAGE */}
        <div className="clinic-image">
          <img
            src={clinicImages[index]}
            alt="CereVeda Physiotherapy Clinic in Kharar Punjab"
            key={index}
          />

          {/* DOTS */}
          <div className="clinic-dots">
            {clinicImages.map((_, i) => (
              <span key={i} className={`dot ${i === index ? "active" : ""}`} />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="clinic-info" ref={textRef}>
          <h3>CereVeda Physiotherapy Clinic</h3>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="star">
                ★
              </span>
            ))}
            <span className="rating-number">5.0</span>
          </div>

          <p className="clinic-type">
            Specialised in Neuro-Rehabilitation & Paediatric Cases.
          </p>

          <p className="clinic-address">
            Sco 9, Corner. Lower Ground, to, kharar. NH, opposite gulmohar complex,
            Sector 126, Model Town, Chandigarh, Kharar, Punjab 140301
          </p>

          <p className="clinic-time">🕒 Opening Hours: 10:00 AM – 5:00 PM</p>

          <div className="clinic-actions">
            <a href="/contact-us" className="btn-primary">
              Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/dmqzKKzhkEkq4emT9"
              target="_blank"
              className="btn-outline"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
