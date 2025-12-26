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
        <h1>Physiotherapy Conditions We Treat in Kharar, Mohali</h1>

        <p>
          CereVeda Physiotherapy Clinic provides personalized physiotherapy and rehabilitation
          programs for neurological, orthopedic, and movement-related conditions. Our goal is to
          reduce pain, restore mobility, and help patients regain independence in daily life.
        </p>
      </section>

      {/* CONTENT */}
      <section className="neuro-conditions-wrapper">
        {neuroConditionsData.map((category, index) => (
          <div className="neuro-category reveal" key={index}>
            <h2>{category.category}</h2>

            {(category.intro || category.categoryIntro) && (
              <p className="category-intro">
                {category.intro || category.categoryIntro}
              </p>
            )}

            <div className="conditions-grid">
              {Array.isArray(category.conditions) &&
                category.conditions.map((condition, idx) => (
                  <div className="condition-card" key={idx}>
                    {condition.image && (
                      <div className="condition-image">
                        <img
                          src={condition.image}
                          alt={`${condition.title} physiotherapy treatment at CereVeda Clinic in Kharar`}
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="condition-body">
                      <h3>{condition.title} Physiotherapy</h3>

                      <ul className="condition-points">
                        {(Array.isArray(condition.keyPoints) &&
                        condition.keyPoints.length > 0
                          ? condition.keyPoints
                          : condition.shortDesc.split(",")
                        ).map((point, i) => (
                          <li key={i}>
                            <FaCheckCircle />
                            {point.trim()}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/conditions-we-treat/${condition.slug}`}
                        className="read-more"
                      >
                        View Treatment Details →
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
