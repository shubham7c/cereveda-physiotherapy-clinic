import { useEffect } from "react";
import "./CareProcess.css";

export default function CareProcess() {
  useEffect(() => {
    const elements = document.querySelectorAll(".cp-card, .cp-title, .cp-subtitle");

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
    <section className="care-process">
      <div className="cp-container">
        {/* TEXT ANIMATION */}
        <h2 className="cp-title">How Our Physiotherapy Care Works</h2>
        <p className="cp-subtitle">
          A structured physiotherapy approach focused on pain relief, mobility improvement and
          long-term recovery.
        </p>

        <div className="cp-track">
          <div className="cp-card">
            <div className="cp-icon">🩺</div>
            <h3>Detailed Assessment</h3>
            <p>
              Our physiotherapists perform a thorough physical evaluation to understand your pain,
              movement limitations and recovery needs.
            </p>
          </div>

          <div className="cp-line"></div>

          <div className="cp-card">
            <div className="cp-icon">📋</div>
            <h3>Personalized Treatment Plan</h3>
            <p>
              Based on assessment findings, we design a personalized physiotherapy plan aligned with
              your condition and goals.
            </p>
          </div>

          <div className="cp-line"></div>

          <div className="cp-card">
            <div className="cp-icon">🏃‍♂️</div>
            <h3>Guided Therapy Sessions</h3>
            <p>
              Structured therapy sessions with expert supervision to ensure safe exercises, correct
              techniques and steady progress.
            </p>
          </div>

          <div className="cp-line"></div>

          <div className="cp-card">
            <div className="cp-icon">🔁</div>
            <h3>Progress Review & Follow-ups</h3>
            <p>
              Regular progress reviews and follow-ups to prevent relapse and help you maintain
              long-term recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
