import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import BooksManagement from './pages/BooksManagement';  // doğru import yap

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books-management" element={<BooksManagement />} /> {/* Yeni sayfa */}
      </Routes>
    </Router>
  );
}

export default App;
