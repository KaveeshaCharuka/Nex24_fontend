import React from 'react';
import './StudentDashboard.css';
import { User, Bell, ChevronDown, ChevronRight, Star, Megaphone, GraduationCap, Search, BookOpen } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="student-container">
      {/* Top Navigation */}
      <nav className="student-nav">
        <div className="nav-logo">
          <span className="logo-icon">N</span> Nex24
        </div>
        
        <div className="nav-center-links">
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#grades">Grades</a>
          <a href="#schedule">Schedule</a>
          <a href="#study-plan">Study Plan</a>
        </div>

        <div className="nav-right">
          <div className="icon-btn">
            <Bell size={18} />
          </div>
          <div className="nav-user-dropdown">
            <div className="user-avatar-micro student-avatar">
              <User size={14} color="#0f766e" />
            </div>
            <span>Student</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="student-header">
        <div>
          <h1>Welcome, <span className="highlight-blue">Student.</span></h1>
          <p>Keep track of your academic progress.</p>
        </div>
        <button className="primary-glow-btn">Start Exam Portal</button>
      </div>

      {/* Main Content Grid */}
      <div className="student-content-grid">
        
        {/* Left Column: My Courses */}
        <div className="grid-col col-courses">
          <div className="glass-card courses-card">
            <h2>My Courses</h2>
            
            <div className="course-progress-item">
              <div className="course-header">
                <div>
                  <span className="course-label">Course Name</span>
                  <h3>Data Structures</h3>
                  <span className="instructor">Instructor: Prof. Lee</span>
                </div>
                <div className="course-icon">
                  <Search size={24} color="#0ea5e9" />
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-fill fill-blue" style={{ width: '85%' }}></div>
              </div>
              <div className="course-footer">
                <span>85% Complete</span>
                <button className="action-btn">Continue <ChevronRight size={14} /></button>
              </div>
            </div>

            <div className="course-progress-item mt-15">
              <div className="course-header">
                <div>
                  <span className="course-label">Course Name</span>
                  <h3>Algorithms</h3>
                  <span className="instructor">Instructor: Prof. Chen</span>
                </div>
                <div className="course-icon">
                  <Search size={24} color="#0ea5e9" />
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-fill fill-green" style={{ width: '70%' }}></div>
              </div>
              <div className="course-footer">
                <span>70% Complete</span>
                <button className="icon-only-btn"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Grades & Announcements */}
        <div className="grid-col col-middle">
          <div className="glass-card grades-card">
            <h2>Recent Grades</h2>
            <div className="grade-list">
              <div className="grade-item">
                <Star size={16} className="text-cyan" />
                <span>Quiz 2 - Data Structures: <strong>A (94%)</strong></span>
              </div>
              <div className="grade-item">
                <Star size={16} className="text-cyan" />
                <span>Midterm - Algorithms: <strong>B+ (88%)</strong></span>
              </div>
              <div className="grade-item">
                <Star size={16} className="text-cyan" />
                <span>Essay - Writing I: <strong>A- (91%)</strong></span>
              </div>
            </div>
          </div>

          <div className="glass-card announcements-card mt-20">
            <h2>Announcements</h2>
            <div className="announcement-list">
              <div className="announcement-item">
                <Megaphone size={16} className="text-gray" />
                <span><strong>System:</strong> Final schedule updated.</span>
              </div>
              <div className="announcement-item">
                <Megaphone size={16} className="text-gray" />
                <span><strong>Prof. Lee:</strong> Quiz 3 materials available.</span>
              </div>
              <div className="announcement-item">
                <Megaphone size={16} className="text-gray" />
                <span><strong>Student Union:</strong> Campus event next week.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Overview & Completion */}
        <div className="grid-col col-stats">
          <div className="glass-card overview-card green-glow">
            <div className="card-header-flex">
              <h2>Academic Overview</h2>
              <GraduationCap size={20} className="text-green" />
            </div>
            <div className="gpa-display">
              <h3>GPA: 3.82</h3>
              <p>BS Computer Science</p>
            </div>
          </div>

          <div className="glass-card completion-card green-glow mt-20">
            <h2>Program Completion</h2>
            <div className="circular-progress-container">
              <div className="circular-chart">
                <div className="inner-circle">
                  <span className="percentage">65%</span>
                  <span className="progress-label">Program<br/>Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="student-footer">
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

export default StudentDashboard;