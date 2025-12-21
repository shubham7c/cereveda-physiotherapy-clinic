import React from "react";
import { Link } from "react-router-dom";
import "../styles/NeuroConditions.css"; // SAME CSS reuse
import { neuroSymptomsData } from "../data/neuroSymptomsData";
import { FaCheckCircle } from "react-icons/fa";

function NeuroSymptoms() {
  return (
    <div className="neuro-conditions-page">
      
      {/* HERO */}
      <section className="neuro-hero">
        <h1>Neurological Symptoms We Treat</h1>
        <p>
          At CereVeda Neuro Physiotherapy Clinic, we provide specialized
          neurological rehabilitation focused on relieving symptoms,
          restoring function, and improving quality of life through
          evidence-based physiotherapy.
        </p>
      </section>

      {/* CONTENT */}
      <section className="neuro-conditions-wrapper">
        {neuroSymptomsData.map((category, index) => (
          <div className="neuro-category reveal" key={index}>
            
            {/* CATEGORY HEADING */}
            <h2>{category.category}</h2>

            {/* CATEGORY INTRO */}
            {category.categoryIntro && (
              <p className="category-intro">{category.categoryIntro}</p>
            )}

            {/* GRID */}
            <div className="conditions-grid">
              {Array.isArray(category.conditions) &&
                category.conditions.map((symptom, idx) => (
                  <div className="condition-card" key={idx}>

                    {/* CARD IMAGE (LISTING IMAGE) */}
                    {symptom.image && (
                      <div className="condition-image">
                        <img
                          src={symptom.image}
                          alt={symptom.title}
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* CARD BODY */}
                    <div className="condition-body">
                      <h3>{symptom.title}</h3>

                      {/* SHORT POINTS (from sections.symptoms OR fallback) */}
                      <ul className="condition-points">
                        {(symptom.sections?.symptoms || [])
                          .slice(0, 4)
                          .map((point, i) => (
                            <li key={i}>
                              <FaCheckCircle />
                              {point}
                            </li>
                          ))}
                      </ul>

                      {/* CTA */}
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
