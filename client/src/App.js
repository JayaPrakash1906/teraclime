import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, redirect, Navigate, useNavigate } from 'react-router-dom';
import Cards from './Components/Cards';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Analysis from './Pages/Analysis';
import Pdf from './Components/Pdf';
import Table from './Components/Table';
import Login from './Pages/Login';

function App() {
  return(
    
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="*" element={<Navigate to="/" />} /> 
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/table" element={<Table />} />
      </Routes>
  </Router>
  );
}
export default App;
