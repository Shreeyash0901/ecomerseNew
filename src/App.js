import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonials from './components/Testimonial/Testimonial';
import Popup from './components/Popup/Popup';

function App() {

  const [orderPopup, setOrderPopup]=React.useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  };


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
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe/>
      <Testimonials/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}   />
      <Footer/>
    </div>
  );
}

export default App;
