import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
