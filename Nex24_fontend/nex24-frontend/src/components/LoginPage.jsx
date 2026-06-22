import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Background Circuit lines placeholder */}
      <div className="background-pattern"></div>
      
      {/* Logo Area */}
      <div className="header">
        <h1>Nex<span>24</span></h1>
      </div>
      
      {/* Glassmorphism Login Card */}
      <div className="login-card">
        <h2>Secure Login</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Email / NetID" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
        
        <div className="register-link">
          New to Nex24? <Link to="/simple-login">register here</Link>
        </div>
        
        {/* Glowing Shield Icon (SVG format) */}
        <div className="shield-icon">
          <svg viewBox="0 0 24 24" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" strokeWidth="1.5" />
            <circle cx="12" cy="15" r="1" fill="#38bdf8" />
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>
      
      {/* Footer Area */}
      <div className="footer">
        Developed by <span>DevSpire Studios</span>
      </div>
    </div>
  );
};

export default LoginPage;