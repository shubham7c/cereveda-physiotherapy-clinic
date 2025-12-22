import { useEffect } from "react";
import "../styles/Conditions.css";
import conditionsData from "../data/conditionsData";

export default function ConditionsSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".conditions-header, .conditions-marquee");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="conditions-section">
      <div className="conditions-header">
        <h2>Conditions We Help You Recover From</h2>
        <p>
          Evidence-based physiotherapy care for common pain, injuries and mobility problems —
          delivered with personalized clinical attention.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="conditions-marquee">
        <div className="conditions-track">
          {[...conditionsData, ...conditionsData].map((item, index) => (
            <div className="condition-card" key={index}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
