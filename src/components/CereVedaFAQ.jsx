import { useState } from "react";
import faqData from "../data/cerevedaFaqData";
import "../styles/CereVedaFAQ.css";

export default function CereVedaFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cereveda-faq">
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Answers to common questions about neurological physiotherapy and rehabilitation at
          CereVeda.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              {/* 👇 click ONLY here */}
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </div>

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
