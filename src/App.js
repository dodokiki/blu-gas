import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutUs from './components/AboutUs';
import ProductsServices from './components/ProductsServices';
import OurWorks from './components/OurWorks';
import News from './components/News';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <AboutUs />
      <ProductsServices />
      <OurWorks />
      <News />
      <ContactUs />
    </div>
  );
}

export default App;

