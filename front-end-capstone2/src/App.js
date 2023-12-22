import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar.js'; 
import Hero from './components/hero/Hero.js'; 
import MenuSpecials from './components/specials/MenuSpecials.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MenuSpecials />
      
    </div>
  );
}

export default App;
