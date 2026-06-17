import React from 'react';
import './ExaminerProfile.css';
import { User, ChevronDown, ChevronRight, AlertCircle, Video, MoreHorizontal } from 'lucide-react';

const ExaminerProfile = () => {
  return (
    <div className="examiner-container">
      {/* Top Navigation */}
      <nav className="examiner-nav">
        <div className="nav-logo">
          <span className="logo-icon">N</span> Nex24
        </div>
        
        <div className="nav-user-dropdown">
          <div className="user-avatar-micro">
            <User size={14} />
          </div>
          <span>Examiner</span>
          <ChevronDown size={16} />
        </div>

        <div className="nav-center-links">
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#question-bank">Question Bank</a>
          <a href="#exams">Exams</a>
          <a href="#live">Live Monitoring</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        
        {/* Left Area (Main Grid) */}
        <div className="main-grid-area">
          <div className="welcome-header">
            <h1>Welcome, <span className="highlight-blue">Examiner.</span></h1>
            <p>Pending Tasks: 3 Exams to Grade.</p>
          </div>

          <div className="cards-grid">
            {/* Column 1 */}
            <div className="glass-card my-courses-card">
              <h2>My Courses</h2>
              
              <div className="course-item">
                <div className="course-info">
                  <h3>Advanced Programming</h3>
                  <span className="student-count">133 Students</span>
                </div>
                <ChevronRight size={18} className="text-gray" />
              </div>

              <div className="course-item">
                <div className="course-info">
                  <h3>Data Structures</h3>
                  <span className="student-count">140 Students</span>
                </div>
                <ChevronRight size={18} className="text-gray" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="middle-column">
              <div className="glass-card question-bank-card">
                <h2>Question Bank</h2>
                <p className="total-questions">Total Questions: <span className="text-green">500</span></p>
                <button className="outline-btn full-width">Add New Question</button>
              </div>

              <div className="glass-card upcoming-exams-card mt-20">
                <h2>Upcoming Exams</h2>
                
                <div className="exam-item">
                  <div className="exam-info">
                    <h4>Midterm 1 - Oct 25</h4>
                    <span>25 Oct 25</span>
                  </div>
                  <button className="small-action-btn">Manage</button>
                </div>

                <div className="exam-item">
                  <div className="exam-info">
                    <h4>Final Exam - Dec 15</h4>
                    <span>15 Dec 15</span>
                  </div>
                  <button className="small-action-btn">Manage</button>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="glass-card live-monitoring-card">
              <h2>Live Exam Monitoring</h2>
              
              <div className="video-placeholder">
                <div className="video-badge"><Video size={12} /> Webcam</div>
                {/* Oya meken video ekak hari image ekak hari pennanna puluwan */}
                <div className="mock-video-feed"></div> 
              </div>
              
              <div className="webcam-status">
                <p>Webcam Feed</p>
                <span className="status-active"><span className="dot"></span> Active Session: 12 Students</span>
              </div>
              
              <button className="outline-btn full-width mt-15">View Live</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Area */}
        <div className="sidebar-area">
          <div className="glass-card alerts-card">
            <div className="card-header-flex">
              <h2>Alerts</h2>
              <MoreHorizontal size={18} className="text-gray cursor-pointer" />
            </div>
            
            <div className="alert-item">
              <div className="alert-icon-box">
                <AlertCircle size={16} color="#ef4444" />
              </div>
              <div className="alert-details">
                <p>Face Mismatch Detected - User 112</p>
                <span>27 hours ago</span>
              </div>
            </div>
          </div>

          <div className="glass-card grading-queue-card mt-20">
            <h2>Grading Queue</h2>
            <div className="queue-status">
              <span className="warning-dot"></span> Pending Results: 15
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="examiner-footer">
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

export default ExaminerProfile;