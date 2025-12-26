import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/NeuroConditionDetail.css";
import { neuroSymptomsData } from "../data/neuroSymptomsData";
import { FaCheckCircle, FaHeartbeat, FaWalking, FaUserCheck } from "react-icons/fa";

function NeuroSymptomDetail() {
  const { slug } = useParams();

  // 🔍 find symptom from all categories
  const symptom = neuroSymptomsData
    .flatMap((category) => category.conditions)
    .find((item) => item.slug === slug);

  /* ============================
     🔥 SEO (NO HELMET – SAFE)
  ============================ */
  useEffect(() => {
    if (!symptom) return;

    // ✅ PAGE TITLE
    document.title = `${symptom.title} Physiotherapy Treatment in Kharar | CereVeda Physiotherapy Clinic`;

    // ✅ META DESCRIPTION
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      `${symptom.title} treated at CereVeda Physiotherapy Clinic in Kharar, Mohali. Expert physiotherapy care to manage symptoms, improve mobility, reduce pain, and restore daily function.`
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
      `https://www.cerevedaphysiotherapy.in/symptoms-we-treat/${symptom.slug}`
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": symptom.title,
          "item": `https://www.cerevedaphysiotherapy.in/symptoms-we-treat/${symptom.slug}`
        }
      ]
    };

    let script = document.getElementById("breadcrumb-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "breadcrumb-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [symptom]);

  if (!symptom) {
    return (
      <div style={{ padding: "140px 20px", textAlign: "center" }}>
        <h2>Symptom not found</h2>
      </div>
    );
  }

  const { sections } = symptom;

  /* ============================
     🔗 RELATED SYMPTOMS (INTERNAL LINKING)
  ============================ */
  const relatedSymptoms = neuroSymptomsData
    .find((category) =>
      category.conditions.some((item) => item.slug === symptom.slug)
    )
    ?.conditions.filter((item) => item.slug !== symptom.slug)
    .slice(0, 3);

  return (
    <div className="neuro-detail-page">
      {/* HERO */}
      <section className="neuro-detail-hero">
        <h1>{symptom.title}</h1>
        {symptom.heroSubtitle && <p>{symptom.heroSubtitle}</p>}
      </section>

      {/* CONTENT */}
      <section className="neuro-detail-content">
        {/* OVERVIEW */}
        {sections?.overview && (
          <>
            <h2>Understanding {symptom.title}</h2>
            <p>{sections.overview}</p>
          </>
        )}

        {/* CAUSES */}
        {sections?.causes && (
          <div className="detail-section">
            <h3>
              <FaHeartbeat /> Why does this symptom occur?
            </h3>
            <p>{sections.causes}</p>
          </div>
        )}

        {/* SYMPTOMS LIST */}
        {Array.isArray(sections?.symptoms) && sections.symptoms.length > 0 && (
          <div className="detail-section">
            <h3>
              <FaCheckCircle /> Common Problems Patients Face
            </h3>
            <ul className="icon-list">
              {sections.symptoms.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* PHYSIOTHERAPY */}
        {sections?.physiotherapy && (
          <div className="detail-section">
            <h3>
              <FaWalking /> How Physiotherapy Helps
            </h3>
            <p>{sections.physiotherapy}</p>
          </div>
        )}

        {/* CEREVEDA APPROACH */}
        {sections?.cerevedaApproach && (
          <div className="detail-section">
            <h3>
              <FaUserCheck /> CereVeda Treatment Approach
            </h3>
            <p>{sections.cerevedaApproach}</p>
          </div>
        )}

        {/* WHO NEEDS REHAB */}
        {sections?.whoNeedsRehab && (
          <div className="detail-section">
            <h3>Who Needs Rehabilitation?</h3>
            <p>{sections.whoNeedsRehab}</p>
          </div>
        )}

        {/* RECOVERY GOALS */}
        {sections?.recoveryGoals && (
          <div className="detail-section">
            <h3>Recovery Goals</h3>
            <p>{sections.recoveryGoals}</p>
          </div>
        )}

        {/* RELATED SYMPTOMS – INTERNAL LINKING */}
        {relatedSymptoms && relatedSymptoms.length > 0 && (
          <div style={{ marginTop: "48px" }}>
            <h3>Related Neurological Symptoms We Treat</h3>
            <ul style={{ paddingLeft: "18px", marginTop: "12px" }}>
              {relatedSymptoms.map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  <Link to={`/symptoms-we-treat/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FOOTER INTERNAL LINK */}
        <p style={{ marginTop: "40px" }}>
          Looking for other neurological symptoms?{" "}
          <Link to="/symptoms-we-treat">View all symptoms we treat</Link>.
        </p>

        {/* NOTE */}
        <div className="neuro-highlight-box">
          <p>
            At <strong>CereVeda Physiotherapy Clinic</strong>, treatment is
            individualized, evidence-based, and focused on restoring function,
            independence, and long-term recovery.
          </p>
        </div>
      </section>
    </div>
  );
}

export default NeuroSymptomDetail;
