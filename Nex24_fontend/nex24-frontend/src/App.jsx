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
import MyCoursesPage from './components/MyCoursesPage';
import SupportPage from './components/SupportPage'; // 👈 අලුතින්ම එකතු කරපු Support පේජ් එක

function App() {
  return (
    <Router>
      <Routes>
        {/* සාමාන්‍ය ඕනෑම කෙනෙකුට පෙනෙන පිටු (Public Routes) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/support" element={<SupportPage />} /> {/* 👈 Support පාර හැදුවා */}
        
        {/* Login පිටු දෙක (ඔයාලා හදපු සරල එක සහ Role-based එක) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/simple-login" element={<RoleLoginPage />} />

        {/* භූමිකාවන් අනුව ලැබෙන ප්‍රධාන පුවරු (Dashboard Routes) */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/examiner-dashboard" element={<ExaminerProfile />} />
        <Route path="/admin-dashboard" element={<AdminProfile />} />

        {/* සිසුන්ගේ ලකුණු සහ පාඨමාලා බැලීමට වෙනම ඇති පිටු */}
        <Route path="/student/grades" element={<GradesPage />} />
        <Route path="/student/courses" element={<MyCoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;