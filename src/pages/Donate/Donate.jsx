import "./Donate.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Donate() {
  // Simulated donation count (could be fetched from backend in real app)
  const [donationCount, setDonationCount] = useState(1287);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleDonateSubmit(e) {
    e.preventDefault();
    setDonationCount((prev) => prev + 1);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
    e.target.reset();
  }

  return (
    <div className="donate-root">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-bg">
          <img
            src="/src/assets/images/donate/donate-hero.png"
            alt="Support Our Mission"
            className="donate-hero-img"
          />
          <div className="donate-hero-overlay"></div>
        </div>
        <div className="donate-hero-content">
          <h1 className="donate-title">Support Our Mission</h1>
          <p className="donate-subtitle">
            Your contribution helps transform lives and build a brighter future.
          </p>
          <a
            href="#donate-form"
            className="donate-cta donate-hero-btn"
            style={{
              background: "#F4B544",
              color: "#5A3D2B",
              fontWeight: 800,
              fontSize: "1.3rem",
              borderRadius: "40px",
              boxShadow: "0px 8px 24px rgba(244, 181, 68, 0.35)",
              padding: "1.1rem 2.5rem",
              border: "3px solid #fff",
              outline: "2px solid #F4B544",
              transition: "0.3s",
              zIndex: 10,
              display: "inline-block"
            }}
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Impact Stats + Donation Count */}
      <section className="donate-stats">
        <div className="container">
          <div className="donate-stats-grid">
            <div className="donate-stat">
              <span className="donate-stat-number">₹500</span>
              <span className="donate-stat-label">Educates a child for a month</span>
            </div>
            <div className="donate-stat">
              <span className="donate-stat-number">₹2,000</span>
              <span className="donate-stat-label">Provides healthcare to a family</span>
            </div>
            <div className="donate-stat">
              <span className="donate-stat-number">₹5,000</span>
              <span className="donate-stat-label">Empowers a woman entrepreneur</span>
            </div>
          </div>
          <div style={{textAlign: "center", marginTop: "2.5rem"}}>
            <span style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#F4B544",
              background: "#fff7ea",
              borderRadius: "1.5rem",
              padding: "0.7rem 2.2rem",
              boxShadow: "0 2px 8px rgba(244,181,68,0.10)",
              display: "inline-block"
            }}>
              <span style={{color: "#9F6C4C", fontSize: "2.1rem", fontWeight: 800, marginRight: "0.5rem"}}>
                {donationCount}
              </span>
              people have already contributed!
            </span>
          </div>
        </div>
      </section>

      {/* Donation Options Preview */}
      <section className="donate-options">
        <div className="container">
          <h2 className="donate-section-title">Choose Your Impact</h2>
          <div className="donate-options-grid">
            <div className="donate-option-card">
              <h3 className="donate-option-title">One Time</h3>
              <p className="donate-option-desc">Make a single impactful donation to support our mission.</p>
            </div>
            <div className="donate-option-card">
              <h3 className="donate-option-title">Monthly</h3>
              <p className="donate-option-desc">Become a monthly donor and help us create lasting change.</p>
            </div>
            <div className="donate-option-card">
              <h3 className="donate-option-title">Other Amount</h3>
              <p className="donate-option-desc">Choose a custom amount and make a difference your way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="donate-cta-section">
        <div className="container">
          <h2 className="donate-cta-title">Every Contribution Counts</h2>
          <p className="donate-cta-desc">
            Join us in making a lasting impact. Thank you for your generosity!
          </p>
          <a href="#donate-form" className="donate-cta-btn">Donate Now</a>
        </div>
      </section>

      {/* Donation Form */}
      <section className="donate-form-section" id="donate-form">
        <div className="container">
          <motion.h2
            className="donate-form-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Donate Securely
          </motion.h2>
          <motion.form
            className="donate-form"
            onSubmit={handleDonateSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.input
              type="text"
              placeholder="Full Name"
              required
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              required
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.input
              type="number"
              placeholder="Amount (₹)"
              required
              min="1"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.button
              type="submit"
              className="donate-form-btn"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Donate Now
            </motion.button>
          </motion.form>
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                style={{
                  textAlign: "center",
                  marginTop: "1.2rem",
                  color: "#16a34a",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  background: "#e8f2d8",
                  borderRadius: "1rem",
                  padding: "0.7rem 1.5rem",
                  boxShadow: "0 2px 8px rgba(22,163,74,0.10)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                Thank you for your contribution!
              </motion.div>
            )}
          </AnimatePresence>
          <p className="donate-form-note">100% secure payment. All donations are tax exempted under 80G.</p>
        </div>
      </section>
    </div>
  );
}
