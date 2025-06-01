import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import AboutPranjali from './components/AboutPranjali';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LoveStory />
      <AboutPranjali />
      <Teaching />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
