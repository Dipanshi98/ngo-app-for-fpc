import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Impact.css'

export default function Impact() {
  return (
    <div className="impact-root">

      {/* Updated Hero Section */}
      <section className="about-hero-image">
        <div className="hero-overlay">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Impact
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Changing lives, one step at a time
          </motion.p>
        </div>

        <img
          src="/src/assets/images/Impact/Impact-hero.png"
          alt="Impact Banner"
          className="hero-img blurred-image"
        />
      </section>

      {/* Impact Stats */}
      <section className="impact-stats-section">
        <div className="container">
          <div className="impact-stats-list">
            <div className="impact-stats-item">
              <span className="impact-stats-value">50,000+</span>
              <span className="impact-stats-label">Children Educated</span>
            </div>
            <div className="impact-stats-item">
              <span className="impact-stats-value">10,000+</span>
              <span className="impact-stats-label">Families Supported</span>
            </div>
            <div className="impact-stats-item">
              <span className="impact-stats-value">5,000+</span>
              <span className="impact-stats-label">Women Empowered</span>
            </div>
            <div className="impact-stats-item">
              <span className="impact-stats-value">20+</span>
              <span className="impact-stats-label">States Reached</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="impact-stories-section">
        <div className="container">
          <h2 className="impact-stories-title">Success Stories</h2>
          <div className="impact-stories-list">
            <div className="impact-story-card">
              <h3>Priya's Journey</h3>
              <p>Priya, once out of school, now excels in her studies and dreams of becoming a doctor, thanks to our education program.</p>
            </div>
            <div className="impact-story-card">
              <h3>Ramesh's Family</h3>
              <p>Ramesh's family received healthcare and livelihood support, helping them overcome poverty and lead a healthier life.</p>
            </div>
            <div className="impact-story-card">
              <h3>Sunita's Empowerment</h3>
              <p>Sunita started her own tailoring business after skill training, inspiring other women in her village.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="impact-gallery-section">
        <div className="container">
          <h2 className="impact-gallery-title">Impact Gallery</h2>
          <div className="impact-gallery-list">
            <img src="/src/assets/images/Impact/priya.png" alt="Impact 1" className="impact-gallery-img" />
            <img src="/src/assets/images/Impact/Ramesh.png" alt="Impact 2" className="impact-gallery-img" />
            <img src="/src/assets/images/Impact/Sunita.png" alt="Impact 3" className="impact-gallery-img" />
            <img src="/src/assets/images/Impact/EMP.png" alt="Impact 4" className="impact-gallery-img" />
            <img src="/src/assets/images/Impact/EMPPS.png" alt="Impact 5" className="impact-gallery-img" />
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="impact-cta-section">
        <div className="container">
          <h2 className="impact-cta-title">Be Part of the Change</h2>
          <p className="impact-cta-desc">Your support helps us reach more lives. Volunteer, partner, or donate today!</p>
          <Link 
            to="/donate" 
            className="impact-cta-btn"
          >
            Donate Now
          </Link>
        </div>
      </section>

    </div>
  )
}
