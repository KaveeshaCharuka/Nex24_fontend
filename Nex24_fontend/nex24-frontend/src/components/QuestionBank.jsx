import React from 'react';
import './QuestionBank.css';

function QuestionBank() {
  
  const questions = [
    { id: 1, code: "Q-1042", text: "What is the worst-case time complexity of QuickSort?", course: "Data Structures", type: "MCQ", difficulty: "Medium" },
    { id: 2, code: "Q-2081", text: "Explain the difference between useEffect and useState hooks in React.", course: "Advanced Web Dev", type: "Structured", difficulty: "Hard" },
    { id: 3, code: "Q-1105", text: "Which SQL keyword is used to sort the result-set in descending order?", course: "Database Systems", type: "MCQ", difficulty: "Easy" },
    { id: 4, code: "Q-3022", text: "Design a database schema for an online library management system.", course: "Database Systems", type: "Structured", difficulty: "Hard" }
  ];

  return (
    <div className="qbank-page-wrapper">
      {/* Header Section */}
      <div className="qbank-header">
        <h2>Examiner <span className="text-gradient">Question Bank</span> 🗄️</h2>
        <p>Create, manage, and organize all your examination questions in one place.</p>
      </div>

      {}
      <div className="qbank-stats-grid">
        <div className="stat-box">
          <span className="stat-title">Total Questions</span>
          <span className="stat-number">148</span>
        </div>
        <div className="stat-box">
          <span className="stat-title">MCQs</span>
          <span className="stat-number">92</span>
        </div>
        <div className="stat-box">
          <span className="stat-title">Structured</span>
          <span className="stat-number">56</span>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="qbank-card">
        <div className="qbank-action-bar">
          <h3>Questions List</h3>
          <button className="add-q-btn">+ Add New Question</button>
        </div>

        {/* Questions Table */}
        <div className="table-responsive">
          <table className="qbank-table">
            <thead>
              <tr>
                <th>Q-ID</th>
                <th>Question</th>
                <th>Course Name</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map(q => (
                <tr key={q.id}>
                  <td className="q-code">{q.code}</td>
                  <td className="q-text">{q.text}</td>
                  <td className="q-course">{q.course}</td>
                  <td><span className="q-type">{q.type}</span></td>
                  <td>
                    <span className={`diff-badge ${q.difficulty.toLowerCase()}`}>
                      {q.difficulty}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-action-btn">📝</button>
                      <button className="delete-action-btn">🗑️</button>
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

export default QuestionBank;