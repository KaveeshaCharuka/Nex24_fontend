import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AdminProfile from './components/AdminProfile';
import ExaminerProfile from './components/ExaminerProfile';
import StudentDashboard from './components/StudentDashboard';
import RoleLoginPage from './components/RoleLoginPage';
import SupportPage from './components/SupportPage';
import MyCoursesPage from './components/MyCoursesPage';
import HowitWorksPage from './components/HowItWorksPage';
import FeaturesPage from './components/FeaturesPage';
import GradesPage from './components/GradesPage';

function App() {
  return (
    <BrowserRouter>
      <FeaturesPage/>
    </BrowserRouter>
  );
}

export default App;