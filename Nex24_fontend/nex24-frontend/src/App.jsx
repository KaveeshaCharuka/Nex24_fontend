import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RoleLoginPage from './components/RoleLoginPage';
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import ExaminerProfile from './components/ExaminerProfile';
import AdminProfile from './components/AdminProfile';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import GradesPage from './components/GradesPage';

function App() {
  return (
    <BrowserRouter>
      <FeaturesPage/>
    </BrowserRouter>
  );
}

export default App;