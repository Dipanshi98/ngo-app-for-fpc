import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Team.css';

export default function Team() {
  return (
    <div className="team-root">
      {/* Hero Section (Updated) */}
      <section className="about-hero-image team-hero">
        <div className="team-hero-overlay">
          <motion.h1
            className="team-hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Meet Our Team
          </motion.h1>

          <motion.p
            className="team-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Dedicated leaders and changemakers driving our mission
          </motion.p>
        </div>

        <img
          src="/src/assets/images/team/team-hero.png"
          alt="Team Banner"
          className="hero-img blurred-image"
        />
      </section>

      {/* Leadership Section */}
      <section className="team-leadership-section">
        <div className="container">
          <h2 className="team-leadership-title">Leadership</h2>
          <div className="team-leadership-list">
            <div className="team-leader-card">
              <img src="/src/assets/images/team/leader1.jpg" alt="Leader 1" className="team-leader-img" />
              <h3>Ms.Dipanshi Yadav</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-leader-card">
              <img src="/src/assets/images/team/leader2.jpg" alt="Leader 2" className="team-leader-img" />
              <h3>Ms.Niharika</h3>
              <p>Director, Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="team-grid-section">
        <div className="container">
          <h2 className="team-grid-title">Our Changemakers</h2>
          <div className="team-grid-list">
            <div className="team-member-card">
              <img src="/src/assets/images/team/member1.jpg" alt="Member 1" className="team-member-img" />
              <h4>Priya Singh</h4>
              <p>Education Coordinator</p>
            </div>
            <div className="team-member-card">
              <img src="/src/assets/images/team/member2.jpg" alt="Member 2" className="team-member-img" />
              <h4>Ramesh Patel</h4>
              <p>Healthcare Lead</p>
            </div>
            <div className="team-member-card">
              <img src="/src/assets/images/team/member3.jpg" alt="Member 3" className="team-member-img" />
              <h4>Sunita Verma</h4>
              <p>Women Empowerment</p>
            </div>
            <div className="team-member-card">
              <img src="/src/assets/images/team/member4.jpg" alt="Member 4" className="team-member-img" />
              <h4>Ajay Mehra</h4>
              <p>Livelihood Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta-section">
        <div className="container">
          <h2 className="team-cta-title">Join Our Team</h2>
          <p className="team-cta-desc">Become a volunteer or partner and help us create lasting change!</p>
          <Link 
            to="/contact" 
            className="team-cta-btn"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
