import { useEffect } from "react";

export default function SEO({ title, description, canonical, isHome }) {
  useEffect(() => {
    /* =========================
       BASIC META
    ========================= */
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    /* =========================
       HOME PAGE SCHEMA ONLY
    ========================= */
    if (isHome) {
      // 🔥 Local Business Schema
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "CereVeda Physiotherapy Clinic",
        url: "https://www.cerevedaphysiotherapy.in/",
        logo: "https://www.cerevedaphysiotherapy.in/logo.png",
        image: "https://www.cerevedaphysiotherapy.in/clinic.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kharar",
          addressRegion: "Punjab",
          addressCountry: "IN"
        },
        areaServed: "Kharar, Mohali, Chandigarh",
        medicalSpecialty: "Physiotherapy",
        availableService: [
          "Neuro Physiotherapy",
          "Stroke Rehabilitation",
          "Pain Management",
          "Post-surgical Rehabilitation",
          "Home Physiotherapy"
        ]
      };

      // 🔥 Organization Schema
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CereVeda Physiotherapy Clinic",
        url: "https://www.cerevedaphysiotherapy.in/",
        logo: "https://www.cerevedaphysiotherapy.in/logo.png"
      };

      // 🔥 Website Schema
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "CereVeda Physiotherapy Clinic",
        url: "https://www.cerevedaphysiotherapy.in/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.cerevedaphysiotherapy.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      const addSchema = (id, schema) => {
        let script = document.getElementById(id);
        if (!script) {
          script = document.createElement("script");
          script.type = "application/ld+json";
          script.id = id;
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
      };

      addSchema("schema-local-business", localBusinessSchema);
      addSchema("schema-organization", organizationSchema);
      addSchema("schema-website", websiteSchema);
    }
  }, [title, description, canonical, isHome]);

  return null;
}
