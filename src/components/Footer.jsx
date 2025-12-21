import "../styles/Footer.css";
import logo from "../assets/cereveda-logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP GLOW DIVIDER */}
      <div className="footer-glow-divider"></div>

      <div className="footer-container">

        {/* LEFT : BRAND */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="CereVeda Neuro Physiotherapy Clinic Logo"
          />

          <p>
            CereVeda is a specialized neuro physiotherapy clinic dedicated to
            restoring movement, independence, and quality of life through
            evidence-based neurological rehabilitation and personalized care.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">i</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* MIDDLE : QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About CereVeda</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/conditions">Conditions We Treat</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* RIGHT : CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Kharar, Mohali</p>
          <p>🕒 Mon – Sat: 10:00 AM – 5:00 PM</p>
          <p>✉️ cerevedaphysiotherapy@gmail.com</p>

          <a href="/book-appointment" className="footer-cta">
            Book Appointment
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CereVeda Neuro Physiotherapy Clinic.
          All Rights Reserved.
        </p>

        <div className="footer-policies">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
