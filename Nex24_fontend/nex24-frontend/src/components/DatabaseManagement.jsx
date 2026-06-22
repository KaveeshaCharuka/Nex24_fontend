import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DatabaseManagement.css';

function DatabaseManagement() {
  const navigate = useNavigate();

  // Mock Database Stats
  const [dbStats, setDbStats] = useState({
    status: "Connected",
    size: "42.8 MB",
    totalTables: 8,
    lastBackup: "Yesterday, 11:30 PM"
  });

  // Mock Tables Data
  const [tables, setTables] = useState([
    { name: "users", rows: 1245, size: "240 KB", status: "Healthy" },
    { name: "face_templates", rows: 1245, size: "32.4 MB", status: "Healthy" },
    { name: "exams", rows: 48, size: "96 KB", status: "Healthy" },
    { name: "exam_logs", rows: 15420, size: "8.2 MB", status: "Optimization Required" },
    { name: "student_results", rows: 3120, size: "1.4 MB", status: "Healthy" },
  ]);

  // Mock Backups List
  const [backups, setBackups] = useState([
    { filename: "nex24_db_backup_2026_06_17.sql", size: "41.2 MB", date: "2026-06-17 23:30" },
    { filename: "nex24_db_backup_2026_06_10.sql", size: "39.8 MB", date: "2026-06-10 23:30" },
  ]);

  // Backup System States
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);

  // Table Optimization Function
  const optimizeTable = (tableName) => {
    setTables(tables.map(table => 
      table.name === tableName ? { ...table, size: (parseFloat(table.size) * 0.9).toFixed(1) + " MB", status: "Optimized" } : table
    ));
    alert(`Table "${tableName}" optimized successfully!`);
  };

  // Generate Backup Function
  const handleCreateBackup = () => {
    setIsBackingUp(true);
    setBackupProgress(0);

    const interval = setInterval(() => {
      setBackupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsBackingUp(false);
            const newBackup = {
              filename: `nex24_db_backup_${new Date().toISOString().slice(0,10).replace(/-/g, '_')}.sql`,
              size: dbStats.size,
              date: new Date().toISOString().slice(0,16).replace('T', ' ')
            };
            setBackups([newBackup, ...backups]);
            setDbStats({ ...dbStats, lastBackup: "Just Now" });
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="dbm-wrapper">
      {/* Top Navigation Bar */}
      <div className="dbm-top-bar">
        <button className="dbm-back-btn" onClick={() => navigate('/admin-dashboard')}>
          ⬅ Back to Dashboard
        </button>
        <div className="dbm-title">N <span className="logo-text">Nex24</span> | DB Control Panel</div>
      </div>

      <div className="dbm-container">
        <div className="dbm-header">
          <h2>Database <span className="neon-blue">Management & Tuning</span> 🗄️</h2>
          <p>Monitor database performance, optimize tables, and manage system backups.</p>
        </div>

        {/* Database Status Cards */}
        <div className="dbm-stats-grid">
          <div className="dbm-stat-card">
            <span className="card-label">Connection Status</span>
            <div className="card-value status-online">● {dbStats.status}</div>
          </div>
          <div className="dbm-stat-card">
            <span className="card-label">Database Size</span>
            <div className="card-value">{dbStats.size}</div>
          </div>
          <div className="dbm-stat-card">
            <span className="card-label">Total Tables</span>
            <div className="card-value">{dbStats.totalTables}</div>
          </div>
          <div className="dbm-stat-card">
            <span className="card-label">Last Backup</span>
            <div className="card-value backup-time">{dbStats.lastBackup}</div>
          </div>
        </div>

        <div className="dbm-main-grid">
          {/* Left Column: Tables Overview */}
          <div className="dbm-left-col">
            <div className="dbm-card">
              <h3>System Tables Database</h3>
              <div className="dbm-table-responsive">
                <table className="dbm-table">
                  <thead>
                    <tr>
                      <th>Table Name</th>
                      <th>Total Rows</th>
                      <th>Size</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.map((table, index) => (
                      <tr key={index}>
                        <td className="table-name-cell">📁 {table.name}</td>
                        <td>{table.rows.toLocaleString()}</td>
                        <td>{table.size}</td>
                        <td>
                          <span className={`table-status ${table.status.toLowerCase().replace(' ', '-')}`}>
                            {table.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="dbm-action-btn optimize"
                            onClick={() => optimizeTable(table.name)}
                            disabled={table.status === "Optimized"}
                          >
                            ⚡ Optimize
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Backup & Actions */}
          <div className="dbm-right-col">
            <div className="dbm-card">
              <h3>Backup & Disaster Recovery</h3>
              <p className="card-desc">Create snapshots of your full SQL data and facial recognition models.</p>
              
              {!isBackingUp ? (
                <button className="dbm-backup-btn" onClick={handleCreateBackup}>
                  📥 Generate Live SQL Backup
                </button>
              ) : (
                <div className="dbm-progress-box">
                  <div className="progress-info">
                    <span>Exporting database tables...</span>
                    <span>{backupProgress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${backupProgress}%` }}></div>
                  </div>
                </div>
              )}

              <h4 className="backup-list-title">Available Backups</h4>
              <div className="dbm-backups-list">
                {backups.map((backup, idx) => (
                  <div className="backup-item" key={idx}>
                    <div className="backup-details">
                      <div className="backup-filename">📄 {backup.filename}</div>
                      <div className="backup-meta">{backup.size} • {backup.date}</div>
                    </div>
                    <div className="backup-actions">
                      <button className="backup-btn download" onClick={() => alert('Download Started!')}>⬇️</button>
                      <button className="backup-btn restore" onClick={() => alert('Database Restored to this point!')}>🔄</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DatabaseManagement;