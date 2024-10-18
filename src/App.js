// import logo from './logo.svg';
import './App.css';
import About from './Components/About.js';
import { Hero } from './Components/Hero.js';
import Navbar from './Components/Navbar.js';
import Projects from './Components/Projects.js';


function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
      </main>
    </>
  );
}

export default App;
