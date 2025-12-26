import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/NeuroConditionDetail.css";
import { neuroConditionsData } from "../data/neuroConditionsData";
import { FaCheckCircle, FaHeartbeat, FaWalking } from "react-icons/fa";

function NeuroConditionDetail() {
  const { slug } = useParams();

  const condition = neuroConditionsData
    .flatMap((section) => section.conditions)
    .find((item) => item.slug === slug);

  /* ============================
     🔥 SEO (NO HELMET – SAFE)
  ============================ */
  useEffect(() => {
    if (!condition) return;

    // ✅ PAGE TITLE
    document.title = `${condition.title} Physiotherapy in Kharar | CereVeda Physiotherapy Clinic`;

    // ✅ META DESCRIPTION
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      `${condition.title} physiotherapy treatment at CereVeda Physiotherapy Clinic, Kharar, Mohali. Personalized physiotherapy for pain relief, mobility improvement, and faster recovery. Book appointment today.`
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
      `https://www.cerevedaphysiotherapy.in/conditions-we-treat/${condition.slug}`
    );

    // ✅ BREADCRUMB SCHEMA (NO UI IMPACT)
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.cerevedaphysiotherapy.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Conditions We Treat",
          item: "https://www.cerevedaphysiotherapy.in/conditions-we-treat",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: condition.title,
          item: `https://www.cerevedaphysiotherapy.in/conditions-we-treat/${condition.slug}`,
        },
      ],
    };

    let script = document.getElementById("breadcrumb-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "breadcrumb-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [condition]);

  if (!condition) {
    return (
      <div style={{ padding: "140px 20px", textAlign: "center" }}>
        <h2>Condition not found</h2>
      </div>
    );
  }

  const symptoms = condition.symptoms || condition.commonSymptoms || [];
  const physioApproach = condition.physiotherapyApproach;

  return (
    <div className="neuro-detail-page">
      {/* HERO */}
      <section className="neuro-detail-hero">
        <h1>{condition.title}</h1>
        <p>{condition.shortDesc}</p>
      </section>

      {/* CONTENT */}
      <section className="neuro-detail-content">
        {/* HERO IMAGE */}
        {condition.heroImage && (
          <div className="condition-hero-image">
            <img
              src={condition.heroImage}
              alt={`${condition.title} physiotherapy treatment at CereVeda Physiotherapy Clinic`}
              loading="lazy"
            />
          </div>
        )}

        {/* OVERVIEW */}
        {condition.overview && (
          <>
            <h2>Understanding {condition.title}</h2>
            <p>{condition.overview}</p>
          </>
        )}

        {/* SYMPTOMS */}
        {symptoms.length > 0 && (
          <div className="detail-section">
            <h3>
              <FaHeartbeat /> Common Symptoms
            </h3>
            <ul className="icon-list">
              {symptoms.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* PHYSIOTHERAPY */}
        {physioApproach && (
          <div className="detail-section">
            <h3>
              <FaWalking /> Physiotherapy & Rehabilitation Approach
            </h3>

            {Array.isArray(physioApproach) ? (
              <ul className="icon-list">
                {physioApproach.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{physioApproach}</p>
            )}
          </div>
        )}
        {/* RELATED CONDITIONS – INTERNAL LINKING */}
        {(() => {
          const relatedConditions = neuroConditionsData
            .find((section) => section.conditions.some((item) => item.slug === condition.slug))
            ?.conditions.filter((item) => item.slug !== condition.slug)
            .slice(0, 3);

          if (!relatedConditions || relatedConditions.length === 0) return null;

          return (
            <div style={{ marginTop: "48px" }}>
              <h3>Related Neurological Conditions We Treat</h3>
              <ul style={{ paddingLeft: "18px", marginTop: "12px" }}>
                {relatedConditions.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    <Link to={`/conditions-we-treat/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}

        {/* INTERNAL LINK (VERY LIGHT) */}
        <p style={{ marginTop: "40px" }}>
          Looking for other conditions?{" "}
          <Link to="/conditions-we-treat">View all conditions we treat</Link>.
        </p>

        {/* NOTE */}
        <div className="neuro-highlight-box">
          <p>
            At <strong>CereVeda Physiotherapy Clinic</strong>, treatment is individualized and
            evidence-based, focusing on long-term recovery, functional independence, and improved
            quality of life.
          </p>
        </div>
      </section>
    </div>
  );
}

export default NeuroConditionDetail;
