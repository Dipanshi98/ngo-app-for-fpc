import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/src/assets/images/home/logo.jpeg" alt="Dipanshi's NGO" />
          <span>Dipanshi's NGO</span>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/impact">Impact</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
          <a href="/donate" className="footer-donate-btn">Donate</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><img src="/src/assets/images/home/facebook.svg" alt="Facebook" /></a>
          <a href="#" aria-label="Twitter"><img src="/src/assets/images/home/twitter.svg" alt="Twitter" /></a>
          <a href="#" aria-label="Instagram"><img src="/src/assets/images/home/instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Dipanshi's NGO. All rights reserved.</span>
      </div>
    </footer>
  );
}
