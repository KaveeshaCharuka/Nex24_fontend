import React, { useState } from 'react';
import './AdminProfile.css';
import { User } from 'lucide-react';

const AdminProfile = () => {
  // Toggle switches wala state eka manage karanna
  const [alerts, setAlerts] = useState(true);
  const [incidents, setIncidents] = useState(true);
  const [reports, setReports] = useState(false);

  return (
    <div className="admin-container">
      {/* Top Navigation */}
      <nav className="admin-nav">
        <div className="nav-logo">
          <span className="logo-icon">N</span> Nex24
        </div>
        
        <div className="nav-center-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#question-bank">Question Bank</a>
          <a href="#profile" className="active">Profile</a>
          <a href="#live">Live Monitoring</a>
        </div>

        <div className="nav-user">
          <div className="user-avatar-small">
            <User size={16} />
          </div>
          <span>Admin</span>
        </div>
      </nav>

      {/* Page Header */}
      <div className="page-header">
        <h1>Admin <span className="highlight-blue">Profile</span></h1>
        <p>Manage your account, security settings, and system preferences.</p>
      </div>

      {/* Main Content Area */}
      <div className="profile-content">
        
        {/* Left Column: Personal Information */}
        <div className="glass-card personal-info-card">
          <h2>Personal Information</h2>
          <div className="info-layout">
            <div className="avatar-large-container">
              <div className="avatar-large">
                <User size={60} color="#94a3b8" />
              </div>
            </div>
            
            <div className="form-group-list">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" value="System Administrator" readOnly />
              </div>
              
              <div className="input-group">
                <label>Username</label>
                <input type="text" value="admin_sys" readOnly />
              </div>
              
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" value="admin@nex24.com" readOnly />
              </div>
              
              <div className="input-group">
                <label>Role</label>
                <input type="text" value="Administrator" readOnly />
              </div>
            </div>
          </div>
          <button className="outline-btn full-width mt-20">Edit Profile</button>
        </div>

        {/* Right Column: Account & Security Settings */}
        <div className="glass-card security-settings-card">
          <h2>Account & Security Settings</h2>
          
          <div className="settings-section">
            <h3>Change Password</h3>
            <div className="password-inputs">
              <div className="input-group">
                <label>Current</label>
                <input type="password" />
              </div>
              <div className="input-group">
                <label>New</label>
                <input type="password" />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
            </div>
            <button className="outline-btn full-width mt-15">Update Password</button>
          </div>

          <div className="settings-section mt-30">
            <h3>Notification Preferences</h3>
            
            <div className="toggle-row">
              <span>System Alerts</span>
              <label className="switch">
                <input type="checkbox" checked={alerts} onChange={() => setAlerts(!alerts)} />
                <span className="slider round"></span>
              </label>
            </div>
            
            <div className="toggle-row">
              <span>Security Incidents</span>
              <label className="switch">
                <input type="checkbox" checked={incidents} onChange={() => setIncidents(!incidents)} />
                <span className="slider round"></span>
              </label>
            </div>
            
            <div className="toggle-row">
              <span>User Activity Reports</span>
              <label className="switch">
                <input type="checkbox" checked={reports} onChange={() => setReports(!reports)} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="admin-footer">
        <div className="footer-left">
          Developed by <span className="highlight-blue">DevSpire Studios</span>
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

export default AdminProfile;