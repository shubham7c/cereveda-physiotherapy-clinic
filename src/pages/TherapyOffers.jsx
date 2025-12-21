import React, { useContext } from "react";
import "../styles/TherapyOffers.css";
import therapyOffersData from "../data/therapyOffersData";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../App";

export default function TherapyOffers() {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoaderContext);

  const handleBookConsultation = () => {
    setLoading(true);

    // smooth premium delay
    setTimeout(() => {
      navigate("/book-appointment");
      setLoading(false);
    }, 700);
  };

  return (
    <section className="therapy-page">

      {/* HERO */}
      <div className="therapy-hero">
        <h1>Advanced Therapy Programs</h1>
        <p>
          Evidence-Based, Patient-Centered Physiotherapy Designed for
          Long-Term Recovery
        </p>
      </div>

      {/* THERAPY LIST */}
      <div className="therapy-list">
        {therapyOffersData.map((item, index) => (
          <div
            key={index}
            className={`therapy-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* IMAGE */}
            <div className="therapy-image">
              <img src={item.image} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="therapy-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* ✅ LOADER + NAVIGATION */}
              <button
                className="therapy-btn"
                onClick={handleBookConsultation}
              >
                Book Consultation
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
