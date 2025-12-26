import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import SvgLoader from "./SvgLoader";

function Topbar() {
  const [loading, setLoading] = useState(false);

  const handleRedirect = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 600);
  };

  return (
    <>
      {loading && <SvgLoader />}

      <div className="w-full bg-[#0B2F3A] text-white">
        <div className="max-w-300 mx-auto px-4 h-10 flex items-center justify-between text-sm">
          {/* LEFT : CALL */}
          <a
            href="tel:+917973113090"
            className="flex items-center gap-2 font-medium hover:text-[#9fd3d0] transition"
            onClick={(e) => {
              if (window.innerWidth > 768) e.preventDefault();
            }}
          >
            <FiPhoneCall className="text-base" />
            {/* ✅ TEXT NOW VISIBLE ON MOBILE TOO */}
            <span>Call Us</span>
          </a>

          {/* CENTER : WHATSAPP */}
          <button
            onClick={() =>
              handleRedirect(
                "https://wa.me/917973113090?text=Hello%20I%20want%20to%20book%20an%20appointment"
              )
            }
            className="flex items-center gap-2 font-medium hover:text-[#9fd3d0] transition"
          >
            <SiWhatsapp className="text-base" />
            {/* ✅ TEXT NOW VISIBLE ON MOBILE TOO */}
            <span>WhatsApp</span>
          </button>

          {/* RIGHT : SOCIALS (hide on mobile) */}
          <div className="hidden sm:flex gap-4 items-center text-base">
            <button
              onClick={() => handleRedirect("https://www.facebook.com/CLIENTUSERNAME")}
              className="hover:text-[#9fd3d0] transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </button>

            <button
              onClick={() => handleRedirect("https://www.instagram.com/CLIENTUSERNAME")}
              className="hover:text-[#9fd3d0] transition"
              aria-label="Instagram"
            >
              <BsInstagram />
            </button>

            <button
              onClick={() => handleRedirect("https://www.linkedin.com/company/CLIENTUSERNAME")}
              className="hover:text-[#9fd3d0] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
