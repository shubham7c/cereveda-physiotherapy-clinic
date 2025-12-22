import { useEffect } from "react";
import doctorsData from "../data/doctorsData";
import "../styles/DoctorsSection.css";

export default function DoctorsSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".doctor-card");
    const header = document.querySelector(".doctors-header");

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

    cards.forEach((card) => observer.observe(card));
    if (header) observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="doctors-section">
      {/* Decorative icons */}
      <span className="bg-icon stethoscope">🩺</span>
      <span className="bg-icon brain">🧠</span>

      {/* 🔥 TEXT ANIMATION ADDED (ONLY HERE) */}
      <div className="doctors-header animate-text">
        <h2>Meet Our Neuro Physiotherapy Experts</h2>
        <p>
          Experienced, qualified and clinically driven neuro physiotherapists dedicated to long-term
          recovery and functional independence.
        </p>
      </div>

      {/* ❌ CARD CODE UNCHANGED */}
      <div className="doctors-grid">
        {doctorsData.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <div className="doctor-image">
              <img src={doc.image} alt={doc.name} />
            </div>

            <div className="doctor-content">
              <h3>{doc.name}</h3>
              <span className="degree">{doc.qualification}</span>
              <p className="role">{doc.role}</p>
              <p className="exp">{doc.experience}</p>

              <ul>
                {doc.specialties.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
