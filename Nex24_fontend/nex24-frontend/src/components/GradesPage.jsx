import React from 'react';
import './GradesPage.css';

function GradesPage() {
  return (
    <div className="nex-page-wrapper">
      <div className="nex-header">
        <h2>My <span className="text-gradient">Grades</span> 🎓</h2>
        <p>Keep track of your academic performance and exam results.</p>
      </div>

      <div className="nex-card">
        <div className="card-header-title">Semester Results Overview</div>
        <table className="nex-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Assessment</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structures & Algorithms</td>
              <td>Quiz 2</td>
              <td>94%</td>
              <td><span className="badge badge-blue">A</span></td>
            </tr>
            <tr>
              <td>Advanced Web Development</td>
              <td>Midterm</td>
              <td>88%</td>
              <td><span className="badge badge-blue">B+</span></td>
            </tr>
            <tr>
              <td>Database Management Systems</td>
              <td>Essay - Writing I</td>
              <td>91%</td>
              <td><span className="badge badge-green">A-</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradesPage;