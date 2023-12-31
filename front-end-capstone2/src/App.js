import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js'; 
import Hero from './components/hero/Hero.js'; 
import MenuSpecials from './components/specials/MenuSpecials.js';
import About from './components/about/About.js';
import Footer from './components/footer/Footer.js';
import ReservationPage from './ReservationPage'; // Import the reservation page
import MainPage from './MainPage.js'
import ReservationForm from './ReservationForm.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
