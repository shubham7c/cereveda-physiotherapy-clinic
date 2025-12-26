import React, { useState, useEffect } from "react";
import "../styles/FAQ.css";
import faqData from "../data/faqData";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const currentSection = faqData.find((sec) => sec.id === activeCategory);

  /* ============================
     🔥 SEO – FAQ PAGE (SAFE)
  ============================ */
  useEffect(() => {
    // ✅ TITLE
    document.title =
      "Physiotherapy FAQ | CereVeda Neuro Physiotherapy Clinic in Kharar";

    // ✅ META DESCRIPTION
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Find answers to common physiotherapy questions including treatment duration, home physiotherapy, neurological rehabilitation, clinic visits, and recovery process at CereVeda Neuro Physiotherapy Clinic, Kharar, Mohali."
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
      "https://www.cerevedaphysiotherapy.in/faq"
    );

    // ✅ BREADCRUMB SCHEMA
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.cerevedaphysiotherapy.in/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
          item: "https://www.cerevedaphysiotherapy.in/faq"
        }
      ]
    };

    let breadcrumbScript = document.getElementById("breadcrumb-schema-faq");
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement("script");
      breadcrumbScript.type = "application/ld+json";
      breadcrumbScript.id = "breadcrumb-schema-faq";
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    // ✅ FAQ PAGE SCHEMA (🔥 RICH RESULTS)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.flatMap(section =>
        section.questions.map(q => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.a
          }
        }))
      )
    };

    let faqScript = document.getElementById("faq-schema");
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = "faq-schema";
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

  }, []);

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
          {faqData.map((section) => (
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
        <div className="faq-content fade-switch" key={activeCategory}>
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
