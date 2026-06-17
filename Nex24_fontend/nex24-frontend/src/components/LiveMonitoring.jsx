import React, { useState } from 'react';
import './LiveMonitoring.css';

function LiveMonitoring() {
  // Live විභාගය ලියන සිසුන්ගේ දත්ත (Sample Live Data)
  const [activeStudents] = useState([
    { id: 1, name: "Kasun Perera", index: "ST-9401", exam: "Advanced Web Dev - Mid Term", timeLeft: "01:15:20", status: "Normal", flags: 0 },
    { id: 2, name: "Nimali Silva", index: "ST-9422", exam: "Advanced Web Dev - Mid Term", timeLeft: "01:12:05", status: "Warning", flags: 2 },
    { id: 3, name: "Sahan Fernando", index: "ST-9355", exam: "Database Systems - Quiz", timeLeft: "00:22:40", status: "Critical", flags: 4 },
    { id: 4, name: "Dilini Rodrigo", index: "ST-9488", exam: "Advanced Web Dev - Mid Term", timeLeft: "01:14:55", status: "Normal", flags: 0 }
  ]);

  return (
    <div className="live-monitor-wrapper">
      {/* Header Section */}
      <div className="monitor-header">
        <h2>
          Live <span className="text-gradient">Exam Monitoring</span> 
          <span className="live-indicator"><span className="dot"></span> LIVE</span>
        </h2>
        <p>Real-time proctoring, student status tracking, and academic integrity management.</p>
      </div>

      {/* Live Stats Row */}
      <div className="monitor-stats-grid">
        <div className="m-stat-box">
          <span className="m-label">Active Students</span>
          <span className="m-count blue">42</span>
        </div>
        <div className="m-stat-box">
          <span className="m-label">Flagged Alerts</span>
          <span className="m-count orange">3</span>
        </div>
        <div className="m-stat-box">
          <span className="m-label">Ongoing Exams</span>
          <span className="m-count green">2</span>
        </div>
      </div>

      {/* Main Monitoring Card */}
      <div className="monitor-main-card">
        <div className="monitor-card-header">
          <h3>Active Candidate Stream</h3>
          <span className="refresh-tag">Auto-refreshing every 5s...</span>
        </div>

        {/* Live Students Table */}
        <div className="monitor-table-container">
          <table className="monitor-custom-table">
            <thead>
              <tr>
                <th>Student / Index</th>
                <th>Current Exam</th>
                <th>Time Remaining</th>
                <th>Tab Switches / Flags</th>
                <th>Proctor Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeStudents.map(student => (
                <tr key={student.id} className={`row-status-${student.status.toLowerCase()}`}>
                  <td>
                    <div className="student-name-cell">{student.name}</div>
                    <span className="student-index-cell">{student.index}</span>
                  </td>
                  <td className="exam-cell">{student.exam}</td>
                  <td className="time-cell">{student.timeLeft}</td>
                  <td>
                    <span className={`flag-count ${student.flags > 0 ? 'has-flags' : ''}`}>
                      {student.flags} Flags
                    </span>
                  </td>
                  <td>
                    <span className={`proctor-badge ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <div className="monitor-actions">
                      <button className="mon-btn view" title="View Student Screen">🖥️ Screen</button>
                      <button className="mon-btn warn" title="Send Warning Route">⚠️ Warn</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LiveMonitoring;