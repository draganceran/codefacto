import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
