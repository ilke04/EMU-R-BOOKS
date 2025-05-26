 import React, { useState } from 'react'; 
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'sifre123') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
      }}
    >
     
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '180px', marginBottom: '2px' }}
        />
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>EMU R BOOKS</h1>
      </div>

     
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px 40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '320px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '15px', color: '#555' }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '25px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1E90FF',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
