import React, { useState, useRef } from "react";
import "../styles/BookAppointment.css";

export default function BookAppointment() {
  const timeRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    date: "",
    time: "",
    agree: false,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ NEW (logic only)

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ double click block
    if (isSubmitting) return;

    if (!form.agree) {
      alert("Please accept privacy policy");
      return;
    }

    setIsSubmitting(true); // 🔒 lock click

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbze4O_wU7dAYlVw_Y7g5XSpMrFhplKTO47d-xlR2t3dyOOR5JyLMGJoA2y6rEdvx9nioQ/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      console.log("FORM DATA 👉", form);

      // ✅ SAME FLOW AS BEFORE
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        setForm({
          name: "",
          mobile: "",
          email: "",
          service: "",
          date: "",
          time: "",
          agree: false,
        });
        setIsSubmitting(false); // 🔓 unlock
      }, 4000);

    } catch (err) {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="book-appointment">
      <h2 className="title">Book Your Appointment</h2>
      <p className="subtitle">Please Fill The Form</p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="field">
          <span className="icon">👤</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
          <label className={form.name ? "active" : ""}>Name</label>
        </div>

        {/* MOBILE */}
        <div className="field">
          <span className="icon">📞</span>
          <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
          <label className={form.mobile ? "active" : ""}>Mobile No.</label>
        </div>

        {/* EMAIL */}
        <div className="field">
          <span className="icon">✉️</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          <label className={form.email ? "active" : ""}>Email</label>
        </div>

        {/* SERVICE */}
        <div className="field">
          <span className="icon">🏥</span>
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value=""></option>
            <option value="Clinic Visit">Clinic Visit</option>
            <option value="Home Visit">Home Visit</option>
          </select>
          <label className={form.service ? "active" : ""}>Type Of Service</label>
        </div>

        {/* DATE */}
        <div className="field date-field">
          <span className="icon">📅</span>
          <input type="date" name="date" min={today} value={form.date} onChange={handleChange} required />
          <label className="active">Select Date</label>
        </div>

        {/* TIME */}
        <div className="field" onClick={() => timeRef.current?.showPicker()}>
          <span className="icon">⏰</span>
          <input
            ref={timeRef}
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            min={form.date === today ? new Date().toTimeString().slice(0, 5) : "00:00"}
            required
            inputMode="none"
          />
          <label className={form.time ? "active" : ""}>Select Time Slot</label>
        </div>

        {/* CHECKBOX */}
        <div className="checkbox">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required />
          <span>I agree to the privacy policy and understand that my information will be kept secure and confidential.</span>
        </div>

        {/* SUBMIT BUTTON — SAME ANIMATION */}
        <button
          type="submit"
          className={`submit-btn-animated ${showPopup ? "active" : ""}`}
          style={{ pointerEvents: isSubmitting ? "none" : "auto" }} // ✅ ONLY FIX
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

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="success-popup">
          <div className="popup-box">
            <div className="icon">✔</div>
            <p className="popup-title">Done Successfully :)</p>
            <p className="popup-desc">Your Form Has Been Accepted.</p>
            <div className="loader-line"></div>
          </div>
        </div>
      )}
    </section>
  );
}
