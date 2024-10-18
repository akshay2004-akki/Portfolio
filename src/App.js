// import logo from './logo.svg';
import './App.css';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
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
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
