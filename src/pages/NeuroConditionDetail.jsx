import React from "react";
import { useParams } from "react-router-dom";
import "../styles/NeuroConditionDetail.css";
import { neuroConditionsData } from "../data/neuroConditionsData";
import { FaCheckCircle, FaHeartbeat, FaWalking } from "react-icons/fa";

function NeuroConditionDetail() {
  const { slug } = useParams();

  const condition = neuroConditionsData
    .flatMap(section => section.conditions)
    .find(item => item.slug === slug);

  if (!condition) {
    return (
      <div style={{ padding: "140px 20px", textAlign: "center" }}>
        <h2>Condition not found</h2>
      </div>
    );
  }

  const symptoms =
    condition.symptoms ||
    condition.commonSymptoms ||
    [];

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

        {condition.heroImage && (
          <div className="condition-hero-image">
            <img src={condition.heroImage} alt={condition.title} loading="lazy" />
          </div>
        )}

        {condition.overview && (
          <>
            <h2>Understanding {condition.title}</h2>
            <p>{condition.overview}</p>
          </>
        )}

        {/* SYMPTOMS */}
        {symptoms.length > 0 && (
          <div className="detail-section">
            <h3><FaHeartbeat /> Common Symptoms</h3>
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
            <h3><FaWalking /> Physiotherapy & Rehabilitation Approach</h3>

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

        {/* NOTE */}
        <div className="neuro-highlight-box">
          <p>
            At <strong>CereVeda Neuro Physiotherapy Clinic</strong>, treatment is
            individualized and evidence-based, focusing on long-term recovery,
            functional independence, and improved quality of life.
          </p>
        </div>

      </section>
    </div>
  );
}

export default NeuroConditionDetail;
