import React from "react";
import { useParams } from "react-router-dom";
import "../styles/NeuroConditionDetail.css";
import { neuroSymptomsData } from "../data/neuroSymptomsData";
import {
  FaCheckCircle,
  FaHeartbeat,
  FaWalking,
  FaUserCheck,
} from "react-icons/fa";

function NeuroSymptomDetail() {
  const { slug } = useParams();

  // 🔍 find symptom from all categories
  const symptom = neuroSymptomsData
    .flatMap(category => category.conditions)
    .find(item => item.slug === slug);

  if (!symptom) {
    return (
      <div style={{ padding: "140px 20px", textAlign: "center" }}>
        <h2>Symptom not found</h2>
      </div>
    );
  }

  const { sections } = symptom;

  return (
    <div className="neuro-detail-page">

      {/* HERO */}
      <section className="neuro-detail-hero">
        <h1>{symptom.title}</h1>
        {symptom.heroSubtitle && <p>{symptom.heroSubtitle}</p>}
      </section>

      {/* CONTENT */}
      <section className="neuro-detail-content">

        {/* HERO IMAGE */}
        {symptom.heroImage && (
          <div className="detail-hero-image">
            <img
              src={symptom.heroImage}
              alt={symptom.title}
              loading="lazy"
            />
          </div>
        )}

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
            <h3><FaHeartbeat /> Why does this symptom occur?</h3>
            <p>{sections.causes}</p>
          </div>
        )}

        {/* SYMPTOMS LIST */}
        {Array.isArray(sections?.symptoms) && (
          <div className="detail-section">
            <h3><FaCheckCircle /> Common Problems Patients Face</h3>
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
            <h3><FaWalking /> How Physiotherapy Helps</h3>
            <p>{sections.physiotherapy}</p>
          </div>
        )}

        {/* CEREVEDA APPROACH */}
        {sections?.cerevedaApproach && (
          <div className="detail-section">
            <h3><FaUserCheck /> CereVeda Approach</h3>
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

        {/* NOTE */}
        <div className="neuro-highlight-box">
          <p>
            At <strong>CereVeda Neuro Physiotherapy Clinic</strong>, treatment is
            individualized, evidence-based, and focused on restoring function,
            independence, and long-term recovery.
          </p>
        </div>

      </section>
    </div>
  );
}

export default NeuroSymptomDetail;
