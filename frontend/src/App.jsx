import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Services from './sections/Services.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
