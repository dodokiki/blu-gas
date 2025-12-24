import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutUs from './components/AboutUs';
import Statistics from './components/Statistics';
import ProductsServices from './components/ProductsServices';
import OurWorks from './components/OurWorks';
import SafetyInfo from './components/SafetyInfo';
import News from './components/News';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <AboutUs />
      <Statistics />
      <ProductsServices />
      <OurWorks />
      <SafetyInfo />
      <News />
      <FAQ />
      <ContactUs />
    </div>
  );
}

export default App;

