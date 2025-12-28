import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1>Request a Callback</h1>
        <p>We’re just a call away — share your details and we’ll reach you.</p>
      </div>

      <ContactForm source="call-request" />
    </section>
  );
}
