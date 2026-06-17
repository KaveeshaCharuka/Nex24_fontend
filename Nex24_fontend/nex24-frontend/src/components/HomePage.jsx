import React from 'react';
import './HomePage.css';
import { Shield, Fingerprint, Video, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">N</span> Nex24
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#support">Support</a>
        </div>
        <button className="nav-btn">Login / Register</button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="shield-icon-container">
            <Shield size={80} className="shield-icon" />
          </div>
          <h1>Welcome to <span className="highlight">Nex24</span>:<br/>The Smart Online Examination System.</h1>
          <p>Secure, seamless, and intelligent testing environment built for academic integrity.</p>
          <button className="cta-btn">Get Started / Login</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-header">
             <Fingerprint className="feature-icon" size={24} />
             <h3>Biometric Security</h3>
          </div>
          <p>Biometric security to protect your precedent-level learning, and achieve biometric security.</p>
        </div>
        <div className="feature-card">
          <div className="feature-header">
             <Video className="feature-icon" size={24} />
             <h3>Live Proctoring</h3>
          </div>
          <p>Learning is enhanced in live proctoring and provide seamless learning for training organizations.</p>
        </div>
        <div className="feature-card">
          <div className="feature-header">
             <Users className="feature-icon" size={24} />
             <h3>Role-Based Portals</h3>
          </div>
          <p>Role-based portals, comprehensive evaluation experience environment to retain academic integrity.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          Developed by <span className="highlight-text">DevSpire Studios</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#help">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;