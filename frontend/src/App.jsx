import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Services />
        {/* Other sections will be added here */}
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="container text-center text-secondary">
          <p>© {new Date().getFullYear()} Merertu Philipos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
