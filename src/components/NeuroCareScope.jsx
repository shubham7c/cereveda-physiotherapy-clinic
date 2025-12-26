import { useEffect } from "react";
import neuroCareScopeData from "../data/neuroCareScopeData";
import "../styles/NeuroCareScope.css";

export default function NeuroCareScope() {
  useEffect(() => {
    const elements = document.querySelectorAll(".ncs-card, .ncs-chip");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    /* =========================
       SEO: NEURO CARE AUTHORITY SCHEMA
    ========================= */
    const neuroSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "CereVeda Physiotherapy Clinic",
      medicalSpecialty: "Neurological Physiotherapy",
      knowsAbout: neuroCareScopeData.conditions.flatMap((group) => group.items),
      availableService: neuroCareScopeData.treatmentFocus.map((focus) => ({
        "@type": "MedicalProcedure",
        name: focus
      }))
    };

    let script = document.getElementById("schema-neuro-care");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-neuro-care";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(neuroSchema);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ncs-section">
      {/* HEADER */}
      <div className="ncs-header">
        <h2>Conditions We Treat at CereVeda</h2>
        <p>
          As specialized Neurology Physiotherapists (BPT, MPT – Neurology), we provide
          evidence-based rehabilitation focused on recovery, independence and quality of life.
        </p>
      </div>

      {/* CONDITIONS */}
      <div className="ncs-grid">
        {neuroCareScopeData.conditions.map((group, index) => (
          <div className="ncs-card" key={index}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* TREATMENT FOCUS */}
      <div className="ncs-focus">
        <h2>Our Treatment Focus Includes</h2>

        <div className="ncs-focus-grid">
          {neuroCareScopeData.treatmentFocus.map((focus, i) => (
            <span className="ncs-chip" key={i}>
              {focus}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
