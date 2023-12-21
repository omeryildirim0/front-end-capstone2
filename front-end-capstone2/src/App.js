import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar.js'; 
import Hero from './components/hero/Hero.js'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
    </div>
  );
}

export default App;
