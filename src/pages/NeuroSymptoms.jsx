import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NeuroConditions.css";
import { neuroSymptomsData } from "../data/neuroSymptomsData";
import { FaCheckCircle } from "react-icons/fa";

function NeuroSymptoms() {

  /* ============================
     🔥 SEO – LISTING PAGE
  ============================ */
  useEffect(() => {
    // ✅ TITLE
    document.title =
      "Neurological Symptoms Physiotherapy Treatment in Kharar | CereVeda Physiotherapy Clinic";

    // ✅ META DESCRIPTION
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Expert physiotherapy treatment for neurological symptoms such as balance problems, muscle weakness, spasticity, coordination issues, and mobility difficulties at CereVeda Physiotherapy Clinic, Kharar, Mohali."
    );

    // ✅ CANONICAL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.cerevedaphysiotherapy.in/symptoms-we-treat"
    );

    // ✅ BREADCRUMB SCHEMA
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cerevedaphysiotherapy.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Symptoms We Treat",
          "item": "https://www.cerevedaphysiotherapy.in/symptoms-we-treat"
        }
      ]
    };

    let script = document.getElementById("breadcrumb-schema-symptoms");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "breadcrumb-schema-symptoms";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

  }, []);

  return (
    <div className="neuro-conditions-page">
      {/* HERO */}
      <section className="neuro-hero">
        <h1>Neurological Symptoms We Treat</h1>
        <p>
          At CereVeda Neuro Physiotherapy Clinic, we provide specialized neurological rehabilitation
          focused on relieving symptoms, restoring function, and improving quality of life through
          evidence-based physiotherapy.
        </p>
      </section>

      {/* CONTENT */}
      <section className="neuro-conditions-wrapper">
        {neuroSymptomsData.map((category, index) => (
          <div className="neuro-category reveal" key={index}>
            <h2>{category.category}</h2>

            {category.categoryIntro && (
              <p className="category-intro">{category.categoryIntro}</p>
            )}

            <div className="conditions-grid">
              {category.conditions.map((symptom, idx) => (
                <div className="condition-card" key={idx}>
                  {symptom.image && (
                    <div className="condition-image">
                      <img src={symptom.image} alt={symptom.title} loading="lazy" />
                    </div>
                  )}

                  <div className="condition-body">
                    <h3>{symptom.title}</h3>

                    <ul className="condition-points">
                      {(symptom.sections?.symptoms || []).slice(0, 4).map((point, i) => (
                        <li key={i}>
                          <FaCheckCircle />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/symptoms-we-treat/${symptom.slug}`}
                      className="read-more"
                    >
                      Explore Symptom →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default NeuroSymptoms;
