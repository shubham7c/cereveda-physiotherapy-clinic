import { useEffect } from "react";
import "../styles/Conditions.css";
import conditionsData from "../data/conditionsData";

export default function ConditionsSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".conditions-header, .conditions-marquee"
    );

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

    elements.forEach((el) => observer.observe(el));

    /* =========================
       SEO: MEDICAL CONDITION SCHEMA
    ========================= */
    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      name: "Physiotherapy Conditions Treated",
      relatedCondition: conditionsData.map((item) => ({
        "@type": "MedicalCondition",
        name: item.title,
        description: item.description
      }))
    };

    let script = document.getElementById("schema-medical-conditions");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-medical-conditions";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(conditionSchema);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="conditions-section">
      <div className="conditions-header">
        <h2>Conditions We Help You Recover From</h2>
        <p>
          Evidence-based physiotherapy care for common pain, injuries and mobility
          problems — delivered with personalized clinical attention.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="conditions-marquee">
        <div className="conditions-track">
          {[...conditionsData, ...conditionsData].map((item, index) => (
            <div className="condition-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={`${item.title} physiotherapy treatment in Kharar Mohali`}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
