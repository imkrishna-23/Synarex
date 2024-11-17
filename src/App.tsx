import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Crousal from './components/Crousal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Crousal/> */}
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;