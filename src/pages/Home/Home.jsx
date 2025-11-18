import "./Home.css";

export default function Home() {
  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-bg">
            <img
            src="/src/assets/images/home/hero-placeholder.png"
            alt="Empowering India"
            className="home-hero-img"
            />
            <div className="home-hero-overlay"></div>
        </div>

        <div className="home-hero-content">
            <h1 className="home-title">Empowering India, One Smile at a Time</h1>
            <p className="home-subtitle">
            Transforming lives through education, healthcare, and community
            development.
            </p>

            <a href="/donate" className="home-cta">
            Donate Now
            </a>
        </div>
        </section>


      {/* Impact Stats */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat">
              <span className="home-stat-number">50,000+</span>
              <span className="home-stat-label">Children Educated</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-number">25+</span>
              <span className="home-stat-label">States Reached</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-number">10,000+</span>
              <span className="home-stat-label">Healthcare Beneficiaries</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-number">500+</span>
              <span className="home-stat-label">Community Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="home-programs">
        <div className="container">
          <h2 className="home-section-title">Our Key Programs</h2>
          <div className="home-programs-grid">
            <div className="home-program-card">
              <img
                src="/src/assets/images/programs/program-placeholder1.png"
                alt="Education"
                className="home-program-img"
              />
              <h3 className="home-program-title">Education for All</h3>
              <p className="home-program-desc">
                Ensuring quality education for underprivileged children across
                India.
              </p>
            </div>
            <div className="home-program-card">
              <img
                src="/src/assets/images/programs/program-placeholder2.png"
                alt="Healthcare"
                className="home-program-img"
              />
              <h3 className="home-program-title">Healthcare Initiatives</h3>
              <p className="home-program-desc">
                Providing access to essential healthcare and nutrition.
              </p>
            </div>
            <div className="home-program-card">
              <img
                src="/src/assets/images/programs/program-placeholder3.png"
                alt="Community"
                className="home-program-img"
              />
              <h3 className="home-program-title">Community Development</h3>
              <p className="home-program-desc">
                Empowering communities through skill training and livelihood
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta-section">
        <div className="container">
          <h2 className="home-cta-title">Join Us in Making a Difference</h2>
          <p className="home-cta-desc">
            Your support helps us bring smiles and hope to thousands. Volunteer,
            partner, or donate today!
          </p>
          <a href="/contact" className="home-cta-btn">
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
