import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    remark: "",
    agree: false,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.agree) return alert("Please accept privacy policy");

    setIsSubmitting(true);

    try {
      await fetch("PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        setForm({
          name: "",
          mobile: "",
          email: "",
          city: "",
          remark: "",
          agree: false,
        });
        setIsSubmitting(false);
      }, 4000);
    } catch {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1>Request a Callback</h1>
        <p>We’re just a call away — share your details and we’ll reach you.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <span className="icon">👤</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
          <label className={form.name ? "active" : ""}>Name</label>
        </div>

        <div className="field">
          <span className="icon">📞</span>
          <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
          <label className={form.mobile ? "active" : ""}>Mobile No.</label>
        </div>

        <div className="field">
          <span className="icon">✉️</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          <label className={form.email ? "active" : ""}>Email (Optional)</label>
        </div>

        <div className="field">
          <span className="icon">📍</span>
          <input type="text" name="city" value={form.city} onChange={handleChange} required />
          <label className={form.city ? "active" : ""}>City</label>
        </div>

        <div className="field textarea">
          <textarea name="remark" value={form.remark} onChange={handleChange} rows="4" required />
          <label className={form.remark ? "active" : ""}>Remark / Concern</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          <span>
            I agree to the privacy policy and understand that my information will be kept
            confidential.
          </span>
        </div>

        <button
          type="submit"
          className={`submit-btn-animated ${showPopup ? "active" : ""}`}
          disabled={isSubmitting}
        >
          <span className="btn-text">
            {showPopup ? "Thanks" : isSubmitting ? "Submitting..." : "Submit"}
          </span>

          <span className="check-box">
            <svg viewBox="0 0 50 50">
              <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </span>
        </button>
      </form>

      {showPopup && (
        <div className="success-popup">
          <div className="popup-box">
            <p className="popup-title">Request Submitted</p>
            <p className="popup-desc">Our team will contact you shortly.</p>
            <div className="loader-line"></div>
          </div>
        </div>
      )}
    </section>
  );
}
