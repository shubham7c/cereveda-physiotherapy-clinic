import "../styles/Footer.css";
import logo from "../assets/cereveda-logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoaderContext } from "../App";

export default function Footer() {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoaderContext);

  // 🔥 Common internal navigation handler
  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };

  return (
    <footer className="footer">
      {/* TOP GLOW DIVIDER */}
      <div className="footer-glow-divider"></div>

      <div className="footer-container">
        {/* LEFT : BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="CereVeda Neuro Physiotherapy Clinic Logo" />

          <p>
            CereVeda is a specialized neuro physiotherapy clinic dedicated to restoring movement,
            independence, and quality of life through evidence-based neurological rehabilitation and
            personalized care.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              i
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        {/* MIDDLE : QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button onClick={() => handleNavigate("/about-us")}>About CereVeda</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/therapy-offers")}>Our Services</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/conditions-we-treat")}>
                Conditions We Treat
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/faq")}>FAQs</button>
            </li>
          </ul>
        </div>

        {/* RIGHT : CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Kharar, Mohali</p>
          <p>🕒 Mon – Sat: 10:00 AM – 5:00 PM</p>

          {/* ✅ MAIL CLICK */}
          <p>
            ✉️ <a href="mailto:cerevedaphysiotherapy@gmail.com">cerevedaphysiotherapy@gmail.com</a>
          </p>

          <button className="footer-cta" onClick={() => handleNavigate("/book-appointment")}>
            Book Appointment
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CereVeda Neuro Physiotherapy Clinic. All Rights Reserved.
        </p>

        <div className="footer-policies">
          <button onClick={() => handleNavigate("/terms-and-conditions")}>Terms & Conditions</button>
          <button onClick={() => handleNavigate("/privacy-policy")}>Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
}
