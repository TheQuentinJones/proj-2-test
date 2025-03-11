import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate successful login
    if (username === 'user' && password === 'pass') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    
    
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
          
<div className="signup"> 

             <Link to="/signup">Sign Up</Link>
             </div>
        </form>
        </div>
     
    
  );
};

export default Login;