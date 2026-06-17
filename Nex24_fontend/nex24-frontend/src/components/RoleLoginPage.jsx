import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Lock, Mail, ArrowRight } from 'lucide-react';
import './RoleLoginPage.css';

const RoleLoginPage = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    if (password !== confirmPassword) {
      alert();
      return; 
    }

    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'examiner') {
      navigate('/examiner-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-glass-card">
        <div className="login-logo">
          <span className="logo-icon">N</span> Nex24
        </div>

        <h2>Create Account</h2>
        <p className="login-subtitle">Please select your role and sign up</p>

        <div className="role-tabs">
          <button
            type="button"
            className={`role-tab ${role === 'student' ? 'active-student' : ''}`}
            onClick={() => setRole('student')}
          >
            <GraduationCap size={18} />
            Student
          </button>
          <button
            type="button"
            className={`role-tab ${role === 'examiner' ? 'active-examiner' : ''}`}
            onClick={() => setRole('examiner')}
          >
            <User size={18} />
            Examiner
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          
          {}
          <div className="input-group">
            <label>User Name</label>
            <div className="input-wrapper">
              <User size={16} className="input-icon" />
              <input 
                type="text" 
                placeholder="Enter your username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={16} className="input-icon" />
              <input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>

          {}
          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-pass">Forgot Password?</a>
          </div>

          <button type="submit" className={`login-submit-btn ${role === 'student' ? 'btn-blue' : 'btn-green'}`}>
            Login as {role === 'student' ? 'Student' : 'Examiner'} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleLoginPage;