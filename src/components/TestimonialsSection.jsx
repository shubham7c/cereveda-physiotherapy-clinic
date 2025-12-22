import testimonials from "../data/testimonialsData";
import "../styles/Testimonials.css";

export default function Testimonials() {
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
1;
