import React from "react";
import "../styles/About.css";

import useReveal from "../hooks/useReveal";

import DrMishu from "../assets/images/Dr.Mishu.jpeg";
import DrMridul from "../assets/images/DRMridul.jpeg";

export default function About() {
  useReveal();

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero reveal">
        <h1>About CereVeda</h1>
        <p>Home / About Us</p>
      </div>

      {/* ABOUT CONTENT */}
      <section className="about-content reveal">
        <span className="tag">About CereVeda Physiotherapy Clinic</span>

        <h2>
          We Are Dedicated To <br />
          Advanced & Ethical Physiotherapy Care
        </h2>

        <p>
          <strong>CereVeda Physiotherapy Clinic</strong> is a modern, evidence-based physiotherapy
          center located in Mohali, focused on restoring movement, confidence, independence, and
          long-term functional recovery.
        </p>

        <p>
          We strongly believe physiotherapy is not a quick fix. Every patient journey at CereVeda
          begins with identifying the <strong>root cause</strong> of pain, neurological dysfunction,
          or movement limitation and then designing structured rehabilitation programs for
          sustainable results.
        </p>

        <p>
          Our clinical approach integrates neurological rehabilitation, manual therapy, dry
          needling, postural correction, balance training, gait re-education, strengthening
          programs, and functional retraining — helping patients regain control over their daily
          lives.
        </p>

        <strong className="highlight">Trusted Neuro & Functional Rehabilitation Care</strong>
      </section>

      {/* MARQUEE */}
      <div className="about-marquee">
        <div className="marquee-track">
          {[
            "Evidence-Based Care",
            "Neurological Rehabilitation",
            "Patient-Centric Treatment",
            "Ethical Physiotherapy Practice",
            "Long-Term Functional Recovery",
          ].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
          {[
            "Evidence-Based Care",
            "Neurological Rehabilitation",
            "Patient-Centric Treatment",
            "Ethical Physiotherapy Practice",
            "Long-Term Functional Recovery",
          ].map((t, i) => (
            <span key={`dup-${i}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="about-testimonials reveal">
        <span className="section-tag">Happiness On Our Patient’s Faces Is What Drives Us</span>

        <h2>What Patients Say About Us</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card hover-lift reveal">
            ⭐⭐⭐⭐⭐
            <h4>Excellent Care & Professional Approach</h4>
            <p>
              The structured rehabilitation approach helped me regain confidence, mobility, and
              independence.
            </p>
            <span>— Patient</span>
          </div>

          <div className="testimonial-card hover-lift reveal">
            ⭐⭐⭐⭐⭐
            <h4>Focused Therapy With Real Results</h4>
            <p>CereVeda truly focuses on long-term recovery rather than short-term pain relief.</p>
            <span>— Patient</span>
          </div>

          <div className="testimonial-card hover-lift reveal">
            ⭐⭐⭐⭐⭐
            <h4>Highly Recommended Neuro Care</h4>
            <p>Excellent neurological rehabilitation with personal attention.</p>
            <span>— Patient</span>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="about-founders reveal">
        <span className="section-tag">Our Clinical Leadership</span>
        <h2>Meet The Founders</h2>

        <div className="founder-grid">
          <div className="founder-card hover-lift reveal">
            <img src={DrMishu} alt="Dr Mishu Garg" />
            <h3>Dr. Mishu Garg</h3>
            <span>MPT (Neurology)</span>
            <p>Dr. Mishu Garg is a highly experienced neuro-physiotherapist.</p>
          </div>

          <div className="founder-card hover-lift reveal">
            <img src={DrMridul} alt="Dr Mridul Jyotsna" />
            <h3>Dr. Mridul Jyotsna</h3>
            <span>BPT, MPT (Neurology)</span>
            <p>Dr. Mridul Jyotsna is an expert in neurological rehabilitation.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="about-why reveal">
        <span className="section-tag">Treatment That Blends Competence With Compassion</span>

        <h2>Why Choose CereVeda Physiotherapy</h2>

        <div className="why-grid">
          <div className="hover-lift reveal">
            <h4>Evidence-Based Rehabilitation</h4>
            <p>Clinically proven protocols.</p>
          </div>
          <div className="hover-lift reveal">
            <h4>Specialized Neuro Physiotherapy</h4>
            <p>Advanced neurological expertise.</p>
          </div>
          <div className="hover-lift reveal">
            <h4>Advanced Manual Therapy</h4>
            <p>Dry needling & soft tissue work.</p>
          </div>
          <div className="hover-lift reveal">
            <h4>One-On-One Personalized Care</h4>
            <p>Individual attention.</p>
          </div>
          <div className="hover-lift reveal">
            <h4>Ethical & Transparent Practice</h4>
            <p>Honest guidance.</p>
          </div>
          <div className="hover-lift reveal">
            <h4>Compassionate Healing Environment</h4>
            <p>Supportive care.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
