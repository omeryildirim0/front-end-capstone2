import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar.js'; 
import Hero from './components/hero/Hero.js'; 
import MenuSpecials from './components/specials/MenuSpecials.js';
import About from './components/about/About.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MenuSpecials />
      <About />
      <Footer />
      
    </div>
  );
}

export default App;
