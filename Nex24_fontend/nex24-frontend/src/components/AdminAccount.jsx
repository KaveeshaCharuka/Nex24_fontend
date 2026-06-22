import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAccount.css'; // අලුත් CSS ෆයිල් එකේ නම

function AdminAccount() {
  const navigate = useNavigate();

  // Admin Details State
  const [admin, setAdmin] = useState({
    name: "System Administrator",
    email: "admin@nex24.com",
    phone: "+94 77 123 4567",
    role: "Super Admin",
    employeeId: "NEX-ADM-001"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...admin });

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    setAdmin({ ...editForm });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // Password Change State
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: ""
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirmPass) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    setPasswords({ current: "", newPass: "", confirmPass: "" });
  };

  return (
    <div className="ap-wrapper">
      {/* Top Bar */}
      <div className="ap-top-bar">
        <button className="ap-back-btn" onClick={() => navigate('/admin-dashboard')}>
          ⬅ Back to Dashboard
        </button>
        <div className="ap-title">N <span className="logo-text">Nex24</span> | Account Settings</div>
      </div>

      <div className="ap-container">
        <div className="ap-header">
          <h2>My <span className="neon-blue">Account</span> 👤</h2>
          <p>Manage your administrative account details and security credentials.</p>
        </div>

        <div className="ap-grid">
          
          {/* Left Column: Profile Card & Edit Form */}
          <div className="ap-left-col">
            <div className="ap-card profile-card">
              <div className="ap-avatar">
                {admin.name.charAt(0)}
              </div>
              <h3>{admin.name}</h3>
              <span className="ap-badge">{admin.role}</span>
              
              <div className="ap-info-list">
                <div className="ap-info-item">
                  <span className="info-label">Employee ID</span>
                  <span className="info-value">{admin.employeeId}</span>
                </div>
                <div className="ap-info-item">
                  <span className="info-label">Email Address</span>
                  <span className="info-value">{admin.email}</span>
                </div>
                <div className="ap-info-item">
                  <span className="info-label">Phone Number</span>
                  <span className="info-value">{admin.phone}</span>
                </div>
              </div>

              {!isEditing ? (
                <button className="ap-primary-btn" onClick={() => setIsEditing(true)}>
                  ✏️ Edit Profile Info
                </button>
              ) : (
                <div className="ap-edit-form">
                  <h4>Update Information</h4>
                  <input 
                    type="text" name="name" 
                    value={editForm.name} onChange={handleEditChange} 
                    placeholder="Full Name" className="ap-input" 
                  />
                  <input 
                    type="text" name="phone" 
                    value={editForm.phone} onChange={handleEditChange} 
                    placeholder="Phone Number" className="ap-input" 
                  />
                  <div className="ap-form-actions">
                    <button className="ap-cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    <button className="ap-save-btn" onClick={handleSaveProfile}>Save Changes</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Security & Activity */}
          <div className="ap-right-col">
            
            {/* Security Card */}
            <div className="ap-card">
              <h3 className="card-title">🔐 Security & Password</h3>
              <form onSubmit={handlePasswordChange} className="ap-password-form">
                <div className="ap-input-group">
                  <label>Current Password</label>
                  <input 
                    type="password" required
                    value={passwords.current} 
                    onChange={(e) => setPasswords({...passwords, current: e.target.value})} 
                    className="ap-input" 
                  />
                </div>
                <div className="ap-input-group">
                  <label>New Password</label>
                  <input 
                    type="password" required
                    value={passwords.newPass} 
                    onChange={(e) => setPasswords({...passwords, newPass: e.target.value})} 
                    className="ap-input" 
                  />
                </div>
                <div className="ap-input-group">
                  <label>Confirm New Password</label>
                  <input 
                    type="password" required
                    value={passwords.confirmPass} 
                    onChange={(e) => setPasswords({...passwords, confirmPass: e.target.value})} 
                    className="ap-input" 
                  />
                </div>
                <button type="submit" className="ap-primary-btn">Update Password</button>
              </form>
            </div>

            {/* Activity Log Card */}
            <div className="ap-card">
              <h3 className="card-title">🕒 Recent Account Activity</h3>
              <div className="ap-activity-list">
                <div className="ap-activity-item">
                  <div className="activity-icon">🟢</div>
                  <div className="activity-details">
                    <p>Successful Login from IP 192.168.1.45</p>
                    <span>Today, 08:30 AM</span>
                  </div>
                </div>
                <div className="ap-activity-item">
                  <div className="activity-icon">⚙️</div>
                  <div className="activity-details">
                    <p>Updated System Database Configuration</p>
                    <span>Yesterday, 11:45 PM</span>
                  </div>
                </div>
                <div className="ap-activity-item">
                  <div className="activity-icon">👥</div>
                  <div className="activity-details">
                    <p>Suspended User: STU-002</p>
                    <span>Jun 15, 2026 - 02:15 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount; // නම වෙනස් කරා