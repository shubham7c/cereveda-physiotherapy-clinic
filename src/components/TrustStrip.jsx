import { FaUserMd, FaHome, FaLaptopMedical } from "react-icons/fa";
import "./TrustStrip.css";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-grid">

        {/* CARD 1 */}
        <div className="trust-card">
          <div className="icon-box">
            <FaUserMd />
          </div>
          <div>
            <h3>Advanced Clinics</h3>
            <p>
              Modern infrastructure, latest physiotherapy equipment and
              clinically guided treatment protocols.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* CARD 2 */}
        <div className="trust-card">
          <div className="icon-box">
            <FaHome />
          </div>
          <div>
            <h3>Professional Home Care</h3>
            <p>
              Physiotherapy at home with expert supervision, structured plans
              and strict quality monitoring.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* CARD 3 */}
        <div className="trust-card">
          <div className="icon-box">
            <FaLaptopMedical />
          </div>
          <div>
            <h3>Tele / Remote Rehabilitation</h3>
            <p>
              Personalized physio exercises at home with continuous digital
              guidance and progress tracking.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
