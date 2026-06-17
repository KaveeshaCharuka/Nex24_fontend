import React from 'react';
import './ExaminerCourses.css';

const ExaminerCourses = () => {
  const courses = [
    { id: 1, title: "Advanced Web Development", students: 124, progress: "Active" },
    { id: 2, title: "Database Systems", students: 89, progress: "Active" },
    { id: 3, title: "Data Structures & Algo", students: 156, progress: "Completed" },
  ];

  return (
    <div className="exam-courses-wrapper">
      <div className="exam-header">
        <h2>My <span className="text-gradient">Teaching Courses</span> 🎓</h2>
        <p>Manage your ongoing and completed courses.</p>
      </div>

      <div className="exam-courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-top">
              <h3>{course.title}</h3>
              <span className={`status-badge ${course.progress.toLowerCase()}`}>
                {course.progress}
              </span>
            </div>
            <div className="course-card-body">
              <p>Total Enrolled Students: <strong>{course.students}</strong></p>
            </div>
            <button className="view-btn">Manage Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExaminerCourses;