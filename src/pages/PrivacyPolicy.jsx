import { Helmet } from "react-helmet-async";
import "../styles/LegalPages.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | CereVeda Neuro Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Privacy Policy of CereVeda Neuro Physiotherapy Clinic, Kharar Mohali. Learn how we protect patient data, medical information, and personal details."
        />
        <link
          rel="canonical"
          href="https://www.cerevedaphysiotherapy.in/privacy-policy"
        />
      </Helmet>

      <div className="legal-page">
        <h1>Privacy Policy</h1>

        <p>
          CereVeda Neuro Physiotherapy Clinic (“CereVeda”, “we”, “our”, “us”)
          respects the privacy of every patient, visitor, and user of our
          website. This Privacy Policy explains how we collect, use, protect,
          and handle your personal and medical information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, phone number,
          email address, location, and appointment details when you:
        </p>
        <ul>
          <li>Book an appointment</li>
          <li>Request a callback</li>
          <li>Contact us via forms, email, or WhatsApp</li>
        </ul>

        <p>
          Medical or health-related information shared with us is collected only
          for treatment, rehabilitation planning, and patient care purposes.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To schedule and manage appointments</li>
          <li>To provide physiotherapy and rehabilitation services</li>
          <li>To communicate treatment-related information</li>
          <li>To improve patient experience and service quality</li>
        </ul>

        <h2>3. Patient Confidentiality</h2>
        <p>
          All patient data is treated as strictly confidential. Medical records,
          diagnosis details, and treatment plans are never shared with third
          parties without patient consent, except where required by law.
        </p>

        <h2>4. Data Protection & Security</h2>
        <p>
          We implement appropriate technical and organizational security
          measures to protect personal and medical data from unauthorized
          access, misuse, or disclosure.
        </p>

        <h2>5. Cookies & Analytics</h2>
        <p>
          Our website may use basic analytics tools to understand user behavior
          and improve performance. These tools do not collect personally
          identifiable medical information.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          We do not sell, rent, or trade your personal information. Any
          third-party services (such as email or hosting providers) are bound by
          confidentiality obligations.
        </p>

        <h2>7. Patient Rights</h2>
        <p>
          Patients have the right to request access, correction, or deletion of
          their personal data, subject to applicable medical and legal
          requirements.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          CereVeda reserves the right to update this Privacy Policy at any time.
          Changes will be reflected on this page.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          For any privacy-related concerns, please contact us at:
          <br />
          📧 cerevedaphysiotherapy@gmail.com
        </p>
      </div>
    </>
  );
}
