import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  // Pending Examiners
  const [pendingExaminers, setPendingExaminers] = useState([
    { id: 1, name: "Dr. Kamal Silva", email: "kamal.s@nex24.com", department: "Computing" },
    { id: 2, name: "Prof. Anura Perera", email: "anura.p@nex24.com", department: "Engineering" }
  ]);

  // System Users
  const [users] = useState([
    { id: 101, name: "Sahan Fernando", email: "sahan@student.com", role: "Student", status: "Active" },
    { id: 102, name: "Nimali Rodrigo", email: "nimali@examiner.com", role: "Examiner", status: "Active" }
  ]);

  // Face Recognition Tolerance State 
  const [threshold, setThreshold] = useState(0.60);

  const handleApprove = (id) => {
    setPendingExaminers(pendingExaminers.filter(exp => exp.id !== id));
    alert("Examiner Approved Successfully! 🎉");
  };

  const triggerBackup = () => {
    alert("Database Backup Created Successfully! 💾 (nex24_backup_2026.sql)");
  };

  const retrainFaceModel = () => {
    alert("Face Recognition AI Models are now retraining... 🤖⚙️");
  };

  return (
    <div className="admin-wrapper">
      {/* Navbar */}
      <nav className="admin-navbar">
        <div className="nav-logo">N <span className="logo-text">Nex24</span></div>
        <div className="nav-links">
          <span className="nav-item active">Dashboard</span>
          <span className="nav-item">Manage Users</span>
          <span className="nav-item">Face ID Config</span>
          <span className="nav-item">Database</span>
          <span className="nav-item">Profile</span>
        </div>
        <div className="nav-profile-badge">⚙️ Admin Portal</div>
      </nav>

      {/* Main Content Area */}
      <div className="admin-content">
        <div className="admin-header-section">
          <h2>Admin <span className="neon-blue">Control Panel</span> 🚀</h2>
          <p>System Proctors, Face Recognition AI Training, and Database Integrity Management.</p>
        </div>

        {/* 1. Updated Stats Grid */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <span className="stat-label">Total Students</span>
            <span className="stat-number">1,245</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-label">Face Profiles Trained</span>
            <span className="stat-number neon-green">1,220 / 1,245</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-label">Database Status</span>
            <span className="stat-number neon-blue">HEALTHY </span>
          </div>
          <div className="admin-stat-card alert-card">
            <span className="stat-label">Pending Approvals</span>
            <span className="stat-number neon-red">{pendingExaminers.length}</span>
          </div>
        </div>

        {/* 2. New Row: Face Recognition & Database Management*/}
        <div className="admin-two-column-grid" style={{ marginBottom: '30px' }}>
          
          {/* Face Recognition Component */}
          <div className="admin-section-card">
            <h3>Face Recognition AI Control 🤖</h3>
            <p className="card-sub">Manage student face verification models and threshold parameters.</p>
            
            <div className="face-config-box">
              <div className="config-row">
                <span className="config-label">AI Match Accuracy Threshold:</span>
                <span className="config-value">{threshold * 100}%</span>
              </div>
              <input 
                type="range" 
                min="0.50" 
                max="0.95" 
                step="0.05" 
                value={threshold} 
                onChange={(e) => setThreshold(parseFloat(e.target.value))}
                className="face-slider"
              />
              <p className="slider-hint">Higher threshold increases security but may cause strict verification flags.</p>
            </div>

            <div className="btn-group-admin">
              <button className="action-btn-primary" onClick={retrainFaceModel}>🔄 Retrain All Face Models</button>
              <button className="action-btn-secondary">📁 View Verification Logs</button>
            </div>
          </div>

          {/* Database Management Component */}
          <div className="admin-section-card">
            <h3>Core Database Management 💾</h3>
            <p className="card-sub">Perform secure manual backups, table optimizations, and view logs.</p>
            
            <div className="db-info-box">
              <div className="db-info-row"><span>DB Engine:</span> <strong>PostgreSQL / MongoDB</strong></div>
              <div className="db-info-row"><span>Last Backup:</span> <span className="text-muted">Today, 04:30 AM</span></div>
              <div className="db-info-row"><span>Total Storage Used:</span> <strong>1.42 GB</strong></div>
            </div>

            <div className="btn-group-admin vertical">
              <button className="db-btn backup" onClick={triggerBackup}>📦 Create Full System Backup</button>
              <div className="db-btn-row">
                <button className="db-btn optimize">⚡ Optimize Tables</button>
                <button className="db-btn clear-logs">🗑️ Clear Audit Logs</button>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Row: User & Examiner Approvals Table */}
        <div className="admin-main-grid">
          
          {/* Approve Examiners */}
          <div className="admin-section-card">
            <h3>Approve New Examiners 🧑‍🏫</h3>
            <p className="card-sub">Review and verify examiner registration requests.</p>
            {pendingExaminers.length === 0 ? (
              <p className="empty-text">No pending examiner approvals.</p>
            ) : (
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingExaminers.map(exp => (
                      <tr key={exp.id}>
                        <td>
                          <div className="table-bold-text">{exp.name}</div>
                          <span className="table-sub-text">{exp.email}</span>
                        </td>
                        <td>{exp.department}</td>
                        <td>
                          <button className="approve-btn" onClick={() => handleApprove(exp.id)}>Approve</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Manage Users */}
          <div className="admin-section-card">
            <h3>Manage System Users 👥</h3>
            <p className="card-sub">Quick view and status control of active accounts.</p>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User / Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="table-bold-text">{user.name}</div>
                        <span className="table-sub-text">{user.email}</span>
                      </td>
                      <td><span className={`role-tag ${user.role.toLowerCase()}`}>{user.role}</span></td>
                      <td><span className={`status-dot ${user.status.toLowerCase()}`}>{user.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;