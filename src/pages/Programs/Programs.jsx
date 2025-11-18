import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Programs.css'

export default function Programs() {
  return (
    <div className="programs-root">
      
      {/* Hero Section (Updated) */}
      <section className="about-hero-image">
        <div className="hero-overlay">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Programs
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transforming lives through education, healthcare, and empowerment
          </motion.p>
        </div>

        <img
          src="/src/assets/images/programs/program-hero.png"
          alt="Programs Banner"
          className="hero-img blurred-image"
        />
      </section>

      {/* Impact Stats */}
      <section className="programs-impact">
        <div className="container">
          <div className="programs-impact-list">
            <div className="programs-impact-item">
              <span className="programs-impact-value">20+</span>
              <span className="programs-impact-label">States Reached</span>
            </div>
            <div className="programs-impact-item">
              <span className="programs-impact-value">50,000+</span>
              <span className="programs-impact-label">Children Educated</span>
            </div>
            <div className="programs-impact-item">
              <span className="programs-impact-value">10,000+</span>
              <span className="programs-impact-label">Families Supported</span>
            </div>
            <div className="programs-impact-item">
              <span className="programs-impact-value">5,000+</span>
              <span className="programs-impact-label">Women Empowered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="programs-list-section">
        <div className="container">
          <h2 className="programs-list-title">Featured Initiatives</h2>
          <div className="programs-list">
            <div className="program-card">
              <img src="/src/assets/images/programs/education.png" alt="Education" className="program-card-img" />
              <h3>Education for All</h3>
              <p>Providing access to quality education for underprivileged children in rural and urban areas.</p>
            </div>
            <div className="program-card">
              <img src="/src/assets/images/programs/healthcare.png" alt="Healthcare" className="program-card-img" />
              <h3>Healthcare Outreach</h3>
              <p>Delivering essential healthcare services and awareness programs to remote communities.</p>
            </div>
            <div className="program-card">
              <img src="/src/assets/images/programs/women.png" alt="Women Empowerment" className="program-card-img" />
              <h3>Women Empowerment</h3>
              <p>Empowering women through skill development, education, and entrepreneurship support.</p>
            </div>
            <div className="program-card">
              <img src="/src/assets/images/programs/livelihood.png" alt="Livelihood" className="program-card-img" />
              <h3>Livelihood Programs</h3>
              <p>Creating sustainable livelihood opportunities for families to break the cycle of poverty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section">
        <div className="container">
          <h2 className="programs-cta-title">Partner With Us</h2>
          <p className="programs-cta-desc">Support our mission to transform lives. Volunteer, partner, or donate to make a difference!</p>
          <Link 
            to="/donate" 
            className="programs-cta-btn"
          >
            Donate Now
          </Link>
        </div>
      </section>

    </div>
  )
}
