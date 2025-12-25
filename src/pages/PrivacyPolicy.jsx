import SEO from "../components/SEO";
import "../styles/LegalPages.css";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | CereVeda Physiotherapy Clinic"
        description="Privacy policy of CereVeda Physiotherapy Clinic, Kharar Mohali. Learn how patient information and personal data are collected, protected, and used responsibly."
        canonical="https://www.cerevedaphysiotherapy.in/privacy-policy"
      />

      <div className="legal-page">
        <h1>Privacy Policy</h1>

        <p>
          CereVeda Physiotherapy Clinic respects the privacy of every patient,
          visitor, and user of this website. This Privacy Policy explains how we
          collect, use, and protect personal and medical information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as name, phone number, email
          address, location, and appointment details when you contact us, book
          an appointment, or request a callback.
        </p>

        <h2>2. Medical Information</h2>
        <p>
          Any health or medical information shared with us is collected strictly
          for treatment planning, physiotherapy care, and patient communication.
        </p>

        <h2>3. Use of Information</h2>
        <ul>
          <li>Appointment scheduling and follow-ups</li>
          <li>Providing physiotherapy services</li>
          <li>Improving patient care and clinic operations</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>
          We take reasonable technical and administrative measures to safeguard
          patient information against unauthorized access, misuse, or loss.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          CereVeda Physiotherapy Clinic does not sell or share patient data with
          third parties. Any external services used are bound by confidentiality
          obligations.
        </p>

        <h2>6. Cookies & Website Analytics</h2>
        <p>
          Our website may use basic analytics tools to understand website usage
          and improve performance. These tools do not collect sensitive medical
          data.
        </p>

        <h2>7. Patient Rights</h2>
        <p>
          Patients may request access, correction, or deletion of their personal
          information, subject to applicable medical and legal requirements.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically. Any changes will be
          reflected on this page.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          For privacy-related concerns, please contact us at:
          <br />
          📧 cerevedaphysiotherapy@gmail.com
        </p>
      </div>
    </>
  );
}
