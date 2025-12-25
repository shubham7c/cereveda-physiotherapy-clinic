import { Helmet } from "react-helmet-async";
import "../styles/LegalPages.css";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | CereVeda Neuro Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Terms and Conditions for CereVeda Neuro Physiotherapy Clinic services, appointments, and website usage."
        />
        <link
          rel="canonical"
          href="https://www.cerevedaphysiotherapy.in/terms-and-conditions"
        />
      </Helmet>

      <div className="legal-page">
        <h1>Terms & Conditions</h1>

        <p>
          By accessing or using the CereVeda Neuro Physiotherapy Clinic website,
          you agree to comply with the following terms and conditions.
        </p>

        <h2>1. Medical Disclaimer</h2>
        <p>
          Information on this website is for general awareness only and does not
          replace professional medical consultation, diagnosis, or treatment.
        </p>

        <h2>2. Appointments & Services</h2>
        <p>
          Appointment requests submitted through the website are subject to
          confirmation. Treatment plans vary based on individual patient needs.
        </p>

        <h2>3. Patient Responsibility</h2>
        <p>
          Patients must provide accurate medical history and follow prescribed
          rehabilitation programs for optimal results.
        </p>

        <h2>4. Payments & Cancellations</h2>
        <p>
          Fees, session durations, and cancellation policies are communicated
          directly at the clinic. CereVeda reserves the right to modify service
          charges.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All website content, logos, images, and text are the property of
          CereVeda Neuro Physiotherapy Clinic and may not be copied or reused
          without permission.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          CereVeda shall not be liable for any indirect or incidental damages
          arising from website usage or treatment outcomes.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes shall fall
          under the jurisdiction of Punjab courts.
        </p>

        <h2>8. Updates</h2>
        <p>
          CereVeda reserves the right to update these Terms & Conditions at any
          time without prior notice.
        </p>
      </div>
    </>
  );
}
