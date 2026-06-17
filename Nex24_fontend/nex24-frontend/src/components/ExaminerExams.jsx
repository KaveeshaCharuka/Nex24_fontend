import React, { useState } from 'react';
import './ExaminerExams.css';

function ExaminerExams() {
 
  const [exams] = useState([
    { id: 1, code: "EX-401", title: "Mid-Term Assessment", course: "Advanced Web Development", date: "2026-07-10", time: "09:00 AM", duration: "2 Hours", status: "Active" },
    { id: 2, code: "EX-405", title: "Final Theory Exam", course: "Data Structures & Algo", date: "2026-08-15", time: "01:00 PM", duration: "3 Hours", status: "Draft" },
    { id: 3, code: "EX-302", title: "Quiz 02 - SQL Queries", course: "Database Systems", date: "2026-06-05", time: "10:30 AM", duration: "45 Mins", status: "Completed" }
  ]);

  return (
    <div className="exams-page-wrapper">
      {/* Header Section */}
      <div className="exams-header">
        <h2>Manage <span className="text-gradient">Examinations</span> 📝</h2>
        <p>Create new exams, manage schedules, and monitor student submissions.</p>
      </div>

      {/* Stats Overview */}
      <div className="exams-stats-grid">
        <div className="exam-stat-box">
          <span className="stat-label">Total Exams</span>
          <span className="stat-count">24</span>
        </div>
        <div className="exam-stat-box">
          <span className="stat-label">Active / Upcoming</span>
          <span className="stat-count-active">1</span>
        </div>
        <div className="exam-stat-box">
          <span className="stat-label">Completed</span>
          <span className="stat-count">23</span>
        </div>
      </div>

      {/* Main Exams Card */}
      <div className="exams-main-card">
        <div className="exams-action-bar">
          <h3>All Scheduled Exams</h3>
          <button className="create-exam-btn">+ Create New Exam</button>
        </div>

        {/* Exams Table */}
        <div className="exams-table-container">
          <table className="exams-custom-table">
            <thead>
              <tr>
                <th>Exam Code</th>
                <th>Exam Title</th>
                <th>Course</th>
                <th>Date & Time</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exams.map(exam => (
                <tr key={exam.id}>
                  <td className="exam-code">{exam.code}</td>
                  <td className="exam-title">{exam.title}</td>
                  <td className="exam-course">{exam.course}</td>
                  <td className="exam-datetime">
                    <div>{exam.date}</div>
                    <span className="exam-time">{exam.time}</span>
                  </td>
                  <td>{exam.duration}</td>
                  <td>
                    <span className={`status-badge ${exam.status.toLowerCase()}`}>
                      {exam.status}
                    </span>
                  </td>
                  <td>
                    <div className="exam-actions">
                      <button className="exam-btn edit" title="Edit Exam">📝</button>
                      <button className="exam-btn view" title="View Results">📊</button>
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

export default ExaminerExams;