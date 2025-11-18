import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-root">
      {/* Hero Section (Updated) */}
      <section className="about-hero-image">
        <div className="hero-overlay">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're here to help, collaborate, and answer your questions.
          </motion.p>
        </div>
        <img
          src="/src/assets/images/contact/contact-hero.png"
          alt="Contact Banner"
          className="hero-img blurred-image"
        />
      </section>

      {/* Contact Info Stats */}
      <section className="contact-impact">
        <div className="container">
          <div className="contact-impact-list">
            <div className="contact-impact-item">
              <span className="contact-impact-value">24/7</span>
              <span className="contact-impact-label">Support Available</span>
            </div>
            <div className="contact-impact-item">
              <span className="contact-impact-value">1000+</span>
              <span className="contact-impact-label">Queries Resolved</span>
            </div>
            <div className="contact-impact-item">
              <span className="contact-impact-value">500+</span>
              <span className="contact-impact-label">Partners Connected</span>
            </div>
            <div className="contact-impact-item">
              <span className="contact-impact-value">200+</span>
              <span className="contact-impact-label">Volunteers Joined</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-list-section">
        <div className="container">
          <h2 className="contact-list-title">Get in Touch</h2>
          <div className="contact-list">
            <div className="contact-card">
              <h3>Email Us</h3>
              <p>
                info@dipanshingo.org
                <br />
                support@dipanshingo.org
              </p>
            </div>
            <div className="contact-card">
              <h3>Call Us</h3>
              <p>
                +91 980xxxxx90
                <br />
                Mon-Fri, 10am-6pm
              </p>
            </div>
            <div className="contact-card">
              <h3>Partnership</h3>
              <p>
                Collaborate with us for impactful projects and volunteering.
              </p>
            </div>
            <div className="contact-card">
              <h3>Visit Us</h3>
              <p>Kanpur Institute of Technology,Kanpur,India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Query Form */}
      <section className="contact-query-form-section">
        <div className="container">
          <motion.h2
            className="contact-form-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Volunteer Query Form
          </motion.h2>
          <motion.form
            className="contact-query-form"
            action="mailto:dipanshiyadav21xyz@gmail.com"
            method="POST"
            encType="text/plain"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.textarea
              name="message"
              placeholder="Why do you want to volunteer?"
              rows="4"
              required
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.button
              type="submit"
              className="contact-form-btn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Submit Query
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <h2 className="contact-cta-title">Connect With Us</h2>
          <p className="contact-cta-desc">
            We're ready to answer your questions and welcome you to our mission.
          </p>
          <Link to="mailto:info@dipanshingo.org" className="contact-cta-btn">
            Email Now
          </Link>
        </div>
      </section>
    </div>
  );
}
