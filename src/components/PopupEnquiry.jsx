import React, { useState, useEffect } from "react";
import "../styles/PopupEnquiry.css";

export default function PopupEnquiry({ show, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.agree) return alert("Please accept privacy policy");

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbze4O_wU7dAYlVw_Y7g5XSpMrFhplKTO47d-xlR2t3dyOOR5JyLMGJoA2y6rEdvx9nioQ/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...form,
            type: "call-request",
            source: "Popup Enquiry"
          }),
        }
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } catch {
      alert("Something went wrong");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-header">
          <button className="popup-close" onClick={onClose}>✕</button>
        </div>

        {!success ? (
          <>
            <h3>Request a Callback</h3>
            <p>Leave your details — we’ll call you shortly</p>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" onChange={handleChange} required />
              <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
              <input name="city" placeholder="City" onChange={handleChange} required />

              <label className="popup-checkbox">
                <input type="checkbox" name="agree" onChange={handleChange} />
                <span>I consent to the <strong>Privacy Policy</strong> and understand my information will be kept confidential.</span>
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="popup-success">
            ✅ Request submitted<br />
            We’ll contact you shortly
          </div>
        )}
      </div>
    </div>
  );
}
