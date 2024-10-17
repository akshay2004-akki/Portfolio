// import logo from './logo.svg';
import './App.css';
import { Hero } from './Components/Hero.js';
import Navbar from './Components/Navbar.js';


function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar/>
        <Hero/>
      </main>
    </>
  );
}

export default App;
