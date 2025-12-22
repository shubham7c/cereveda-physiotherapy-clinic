import "./AnimatedButton.css";
import { useContext } from "react";
import { LoaderContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function AnimatedButton({ text, href, color = "blue" }) {
  const { setLoading } = useContext(LoaderContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // 🔥 SHOW LOADER
    setLoading(true);

    // mobile tap animation (agar hai)
    if (window.innerWidth <= 640) {
      e.currentTarget.classList.add("mobile-redirect");
    }

    // ⏳ small premium delay
    setTimeout(() => {
      navigate(href);
      setLoading(false);
    }, 600);
  };

  return (
    <a href={href} onClick={handleClick} className={`animated-button ${color}`}>
      {/* LEFT ARROW */}
      <svg viewBox="0 0 24 24" className="arr-2">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      <span className="text">{text}</span>
      <span className="circle"></span>

      {/* RIGHT ARROW */}
      <svg viewBox="0 0 24 24" className="arr-1">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </a>
  );
}
