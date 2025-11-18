import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about-root">

      {/* HERO SECTION */}
      <section className="about-hero-image">
        <div className="hero-overlay">
            <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >
            About Dipanshi's NGO
            </motion.h1>

            <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            >
            Empowering lives, building futures across India
            </motion.p>
        </div>

        <img
            src="/src/assets/images/About/about-hero.png"
            alt="Dipanshi's NGO Banner"
            className="hero-img blurred-image"
        />
        </section>

      {/* MODERN MISSION – VISION – STORY SECTION */}
            <section className="about-section-modern">
            <div className="container">

                {/* Mission */}
                <motion.div
                className="mv-card-updated"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <div className="mv-icon-updated">🎯</div>
                <h2>Our Mission</h2>
                <p>
                    To deliver quality education, healthcare, and livelihood opportunities 
                    that empower underprivileged children and families across India.
                </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                className="mv-card-updated"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                >
                <div className="mv-icon-updated">🌟</div>
                <h2>Our Vision</h2>
                <p>
                    To build a world where every individual has equal access to education,
                    dignity, and opportunities that help them thrive.
                </p>
                </motion.div>

                {/* Story */}
                <motion.div
                className="story-modern-updated"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
                >
                <h2>Our Story</h2>
                <p>
                    Since 2002, Dipanshi’s NGO has touched the lives of over 50,000 children 
                    and families through impactful programs in education, digital learning, 
                    health support, and community empowerment.
                </p>
                </motion.div>

            </div>
            </section>


      {/* TIMELINE SECTION */}
            <section className="about-timeline-modern">
        <div className="container">
            <h2 className="modern-heading">Our Impact Journey</h2>

            <div className="timeline-container">
            {[
                { label: "Foundation", text: "Established with a vision to uplift underserved communities" },
                { label: "First Outreach", text: "Launched our first community-based education support program" },
                { label: "Growth Phase", text: "Expanded support across multiple regions and communities" },
                { label: "Community Impact", text: "Positively transformed thousands of lives through holistic programs" },
                { label: "Digital Transformation", text: "Introduced digital learning & modern development initiatives" },
            ].map((item, index) => (
                <motion.div
                className="timeline-card"
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                >
                <motion.div
                    className="timeline-year-circle"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {item.label}
                </motion.div>

                <div className="timeline-content-box">
                    <p>{item.text}</p>
                </div>

                {index !== 4 && <div className="timeline-line" />}
                </motion.div>
            ))}
            </div>
        </div>
        </section>


      {/* CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="container">
          <h2 className="about-cta-title">Support Our Mission</h2>
          <p className="about-cta-desc">
            Join us in creating a brighter future for every child.
          </p>
          <a href="/donate" className="about-cta-btn">Donate Now</a>
        </div>
      </section>

    </div>
  );
}
