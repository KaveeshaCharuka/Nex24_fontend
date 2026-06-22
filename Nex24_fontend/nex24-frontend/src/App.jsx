import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// ==========================================
// 1. PUBLIC & AUTH PAGES
// ==========================================
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import SupportPage from './components/SupportPage';
import LoginPage from './components/LoginPage';
import RoleLoginPage from './components/RoleLoginPage';

// ==========================================
// 2. MAIN DASHBOARDS
// ==========================================
import StudentDashboard from './components/StudentDashboard';
import ExaminerProfile from './components/ExaminerProfile'; // 👈 මේක කලින් අඩුවෙලා තිබුණේ
import AdminDashboard from './components/AdminDashboard'; 
import AdminProfile from './components/AdminProfile'; // 👈 මේකයි කලින් අඩුවෙලා තිබුණේ

// ==========================================
// 3. STUDENT SUB-PAGES
// ==========================================
import GradesPage from './components/GradesPage';
import MyCoursesPage from './components/MyCoursesPage';
import SchedulePage from './components/SchedulePage';
import StudyPlanPage from './components/StudyPlanPage';

// ==========================================
// 4. EXAMINER SUB-PAGES
// ==========================================
import ExaminerCourses from './components/ExaminerCourses';
import QuestionBank from './components/QuestionBank';
import ExaminerExams from './components/ExaminerExams';
import LiveMonitoring from './components/LiveMonitoring';

// ==========================================
// 5. ADMIN SUB-PAGES
// ==========================================
import ManageUsers from './components/ManageUsers';
import FaceIdConfig from './components/FaceIdConfig';
import DatabaseManagement from './components/DatabaseManagement';


function App() {
  return (
    /*<Router>
      <Routes>
        // --- Public & Auth Routes --- 
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/simple-login" element={<RoleLoginPage />} />

        // --- Main Dashboard Routes --- 
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/examiner-dashboard" element={<ExaminerProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/admin-profile" element={<AdminProfile />} />

        // --- Student Routes --- *
        <Route path="/student/grades" element={<GradesPage />} />
        <Route path="/student/courses" element={<MyCoursesPage />} />
        <Route path="/student/schedule" element={<SchedulePage />} />
        <Route path="/student/study-plan" element={<StudyPlanPage />} />

        // --- Examiner Routes ---
        <Route path="/examiner/courses" element={<ExaminerCourses />} />
        <Route path="/examiner/question-bank" element={<QuestionBank />} />
        <Route path="/examiner/exams" element={<ExaminerExams />} />
        <Route path="/examiner/live-monitoring" element={<LiveMonitoring />} />

        // --- Admin Routes --- 
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/face-id-config" element={<FaceIdConfig />} />
        <Route path="/admin/database" element={<DatabaseManagement />} />
       

      </Routes>
    </Router>
  );*/
    <BrowserRouter>
      <AdminProfile/>
    </BrowserRouter>
  );
}

export default App;