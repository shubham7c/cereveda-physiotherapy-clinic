import React from "react";
import { Link } from "react-router-dom";
import "../styles/NeuroConditions.css";
import { neuroConditionsData } from "../data/neuroConditionsData";
import { FaCheckCircle } from "react-icons/fa";

function NeuroConditions() {
  return (
    <div className="neuro-conditions-page">
      {/* HERO */}
      <section className="neuro-hero">
        <h1>Neurological Conditions We Treat</h1>
        <p>
          At CereVeda Neuro Physiotherapy Clinic, we provide evidence-based neurological
          rehabilitation programs designed to restore movement, balance, independence, and quality
          of life.
        </p>
      </section>

      {/* CONTENT */}
      <section className="neuro-conditions-wrapper">
        {neuroConditionsData.map((category, index) => (
          <div className="neuro-category reveal" key={index}>
            <h2>{category.category}</h2>

            {/* ✅ SAFE INTRO FIX (intro OR categoryIntro) */}
            {(category.intro || category.categoryIntro) && (
              <p className="category-intro">{category.intro || category.categoryIntro}</p>
            )}

            <div className="conditions-grid">
              {Array.isArray(category.conditions) &&
                category.conditions.map((condition, idx) => (
                  <div className="condition-card" key={idx}>
                    {/* IMAGE (OPTIONAL) */}
                    {condition.image && (
                      <div className="condition-image">
                        <img src={condition.image} alt={condition.title} loading="lazy" />
                      </div>
                    )}

                    {/* CONTENT */}
                    <div className="condition-body">
                      <h3>{condition.title}</h3>

                      {/* DESCRIPTION / CHECKPOINTS */}
                      <ul className="condition-points">
                        {(Array.isArray(condition.keyPoints) && condition.keyPoints.length > 0
                          ? condition.keyPoints
                          : condition.shortDesc.split(",")
                        ).map((point, i) => (
                          <li key={i}>
                            <FaCheckCircle />
                            {point.trim()}
                          </li>
                        ))}
                      </ul>

                      <Link to={`/conditions-we-treat/${condition.slug}`} className="read-more">
                        Explore Condition →
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

export default NeuroConditions;
