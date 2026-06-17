import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import RoleLoginPage from './components/RoleLoginPage';
import SupportPage from './components/SupportPage';
import MyCoursesPage from './components/MyCoursesPage';
import HowitWorksPage from './components/HowItWorksPage';
import FeaturesPage from './components/FeaturesPage';
import GradesPage from './components/GradesPage';
import SchedulePage from './components/SchedulePage';
import StudyPlanPage from './components/StudyPlanPage';
import ExaminerCourses from './components/ExaminerCourses';
import QuestionBank from './components/QuestionBank';
import ExaminerExams from './components/ExaminerExams';
import LiveMonitoring from './components/LiveMonitoring';


function App() {
  return (
    <BrowserRouter>
      <AdminDashboard/>
    </BrowserRouter>
  );
}

export default App;