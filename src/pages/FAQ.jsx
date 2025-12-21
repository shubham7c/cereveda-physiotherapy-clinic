import React, { useState } from "react";
import "../styles/FAQ.css";
import faqData from "../data/faqData";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const currentSection = faqData.find(sec => sec.id === activeCategory);

  return (
    <section className="faq-page">

      {/* HERO */}
      <div className="faq-hero page-fade">
        <h1>Frequently Asked Questions</h1>
        <p>Home / FAQ</p>
      </div>

      <div className="faq-layout">

        {/* SIDEBAR */}
        <aside className="faq-sidebar slide-left">
          {faqData.map(section => (
            <button
              key={section.id}
              className={`faq-tab ${activeCategory === section.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(section.id);
                setActiveQuestion(null);
              }}
            >
              {section.title}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <div
          className="faq-content fade-switch"
          key={activeCategory}   // 🔥 CATEGORY SWITCH ANIMATION
        >
          <h2 className="faq-heading">{currentSection.title}</h2>

          {currentSection.questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeQuestion === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                {item.q}
                <span className="icon"></span>
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
