
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login';
import Home from '../Home'; // Assuming you have a Home component

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;