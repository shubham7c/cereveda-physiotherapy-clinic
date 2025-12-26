import { useEffect } from "react";
import doctorsData from "../data/doctorsData";
import "../styles/DoctorsSection.css";

export default function DoctorsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".doctor-card");
    const header = document.querySelector(".doctors-header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    if (header) observer.observe(header);

    /* =========================
       SEO: PHYSICIAN SCHEMA (E-E-A-T)
    ========================= */
    const physicianSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: "CereVeda Physiotherapy Clinic",
      employee: doctorsData.map((doc) => ({
        "@type": "Physician",
        name: doc.name,
        medicalSpecialty: "Physiotherapy",
        description: doc.role,
        hasCredential: doc.qualification,
        knowsAbout: doc.specialties
      }))
    };

    let script = document.getElementById("schema-physicians");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-physicians";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(physicianSchema);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="doctors-section">
      {/* Decorative icons */}
      <span className="bg-icon stethoscope">🩺</span>
      <span className="bg-icon brain">🧠</span>

      {/* HEADER */}
      <div className="doctors-header animate-text">
        <h2>Meet Our Neuro Physiotherapy Experts</h2>
        <p>
          Experienced, qualified and clinically driven neuro physiotherapists
          dedicated to long-term recovery and functional independence.
        </p>
      </div>

      {/* DOCTOR CARDS */}
      <div className="doctors-grid">
        {doctorsData.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <div className="doctor-image">
              <img
                src={doc.image}
                alt={`${doc.name}, Neuro Physiotherapist at CereVeda Clinic in Kharar Mohali`}
              />
            </div>

            <div className="doctor-content">
              <h3>{doc.name}</h3>
              <span className="degree">{doc.qualification}</span>
              <p className="role">{doc.role}</p>
              <p className="exp">{doc.experience}</p>

              <ul>
                {doc.specialties.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
