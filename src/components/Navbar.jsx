import React, { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { LoaderContext } from "../App";

function Navbar() {
  const educationLinks = [
    { label: "Conditions We Treat", path: "/conditions-we-treat" },
    { label: "Symptoms We Treat", path: "/symptoms-we-treat" },
  ];

  const { setLoading } = useContext(LoaderContext);

  const [educationOpen, setEducationOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  let closeTimer;

  const handleEnter = () => {
    if (window.innerWidth < 1024) return;
    clearTimeout(closeTimer);
    setEducationOpen(true);
  };

  const handleLeave = () => {
    if (window.innerWidth < 1024) return;
    closeTimer = setTimeout(() => {
      setEducationOpen(false);
    }, 200);
  };

  return (
    <nav className="w-full bg-white text-[#404041] sticky top-0 z-9999">
      <div className="max-w-300 mx-auto px-3 py-2 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              window.location.href = "/";
            }, 700);
          }}
          className="h-25 w-40 rounded-xl overflow-hidden flex items-center cursor-pointer"
        >
          <img
            className="h-full w-full object-cover scale-[1.6]"
            src={logo}
            alt="CereVeda Logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-lg">
          <Link className="hover:text-[#4c9bd4]" to="/">Home</Link>
          <Link className="hover:text-[#4c9bd4]" to="/about-us">About Us</Link>
          <Link className="hover:text-[#4c9bd4]" to="/contact-us">Contact Us</Link>
          <Link className="hover:text-[#4c9bd4]" to="/therapy-offers">Therapy Offers</Link>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button className="flex items-center gap-1 hover:text-[#4c9bd4]">
              Patient Education
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  educationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-0 mt-4 w-56 bg-[#0B2F3A] text-white rounded-xl shadow-lg transition-all duration-300 ease-out ${
                educationOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <ul className="p-4 space-y-3">
                {educationLinks.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#57a6e2] hover:scale-[0.9] transition-all"
                    onClick={() => (window.location.href = item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link className="hover:text-[#4c9bd4]" to="/faq">FAQ</Link>

          <a
            href="https://maps.app.goo.gl/dmqzKKzhkEkq4emT9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#71a2c5] transition-colors"
          >
            <FaLocationDot />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl transition-transform duration-300 active:scale-90"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ================= MOBILE MENU (FIXED) ================= */}
      <div
        className={`
          lg:hidden bg-white px-6 overflow-hidden
          transition-all duration-500 ease-out border-t
          ${menuOpen ? "max-h-130 opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="space-y-5 font-semibold text-lg">

          <Link to="/" className="block" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about-us" className="block" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link to="/contact-us" className="block" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <Link to="/therapy-offers" className="block" onClick={() => setMenuOpen(false)}>
            Therapy Offers
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setEducationOpen(!educationOpen)}
              className="flex items-center justify-between w-full"
            >
              Patient Education
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  educationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-400 ease-out
                ${educationOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
              `}
            >
              <ul className="ml-4 space-y-3 text-base">
                {educationLinks.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#4c9bd4] transition-colors"
                    onClick={() => {
                      setMenuOpen(false);
                      setEducationOpen(false);
                      window.location.href = item.path;
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/faq" className="block" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>

          <a
            href="https://maps.app.goo.gl/dmqzKKzhkEkq4emT9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaLocationDot />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
