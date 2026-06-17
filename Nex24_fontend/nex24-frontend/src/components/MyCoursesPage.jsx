import React from 'react';
import './MyCoursesPage.css';

function MyCoursesPage() {
  const courses = [
    { id: 1, name: "Data Structures", instructor: "Prof. Lee", progress: 85, color: "blue" },
    { id: 2, name: "Algorithms", instructor: "Prof. Chen", progress: 70, color: "green" },
    { id: 3, name: "Database Systems", instructor: "Dr. Silva", progress: 45, color: "blue" },
    { id: 4, name: "Computer Networks", instructor: "Prof. Kumar", progress: 90, color: "green" }
  ];

  return (
    <div className="courses-page-wrapper">
      <div className="courses-header">
        <h2>My <span className="text-gradient">Courses</span> 📚</h2>
        <p>Access your ongoing academic courses and learning materials.</p>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-top">
              <div>
                <span className="course-label">COURSE NAME</span>
                <h3 className="course-title">{course.name}</h3>
                <p className="instructor-name">Instructor: {course.instructor}</p>
              </div>
              <div className="search-icon-box">🔍</div>
            </div>

            <div className="progress-section">
              <div className="progress-bar-track">
                <div 
                  className={`progress-bar-fill ${course.color === 'green' ? 'bg-green' : 'bg-blue'}`} 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="progress-footer">
                <span>{course.progress}% Complete</span>
                <button className="continue-btn">Continue &gt;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCoursesPage;