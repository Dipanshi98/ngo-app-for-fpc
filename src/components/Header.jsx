import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-root">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/src/assets/images/home/logo.jpeg" alt="Dipanshi's NGO" />
          <span>Dipanshi's NGO</span>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-home-btn">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate" className="header-donate-btn">Donate</Link>
        </nav>
      </div>
    </header>
  );
}
