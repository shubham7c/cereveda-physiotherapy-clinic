import { useEffect } from "react";
import testimonials from "../data/testimonialsData";
import "../styles/Testimonials.css";

export default function Testimonials() {
  useEffect(() => {
    /* =========================
       SEO: REVIEW & RATING SCHEMA
    ========================= */
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "CereVeda Physiotherapy Clinic",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: testimonials.length.toString()
      },
      review: testimonials.slice(0, 5).map((t) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating.toString(),
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: t.name
        },
        reviewBody: t.review
      }))
    };

    let script = document.getElementById("schema-reviews");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-reviews";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(reviewSchema);
  }, []);

  return (
    <section className="testimonials-section">
      <p className="mini-title">Rating & Reviews</p>
      <h2 className="main-title">Trusted by people</h2>

      {/* TOP ROW */}
      <div className="marquee reverse">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`top-${i}`} data={t} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="marquee">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`bottom-${i}`} data={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ data }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        {"★".repeat(data.rating)}
        {"☆".repeat(5 - data.rating)}
      </div>

      <p className="review">“{data.review}”</p>

      <span className="name">— {data.name}</span>
    </div>
  );
}
