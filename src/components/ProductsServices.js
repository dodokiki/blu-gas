import React, { useState } from 'react';
import './ProductsServices.css';

const ProductsServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      icon: '⛑️',
      title: 'ผลิตภัณฑ์และบริการ'
    },
    {
      icon: '💧',
      title: 'ผลิตภัณฑ์และบริการ'
    },
    {
      icon: '🏭',
      title: 'ผลิตภัณฑ์และบริการ'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="products-services">
      <div className="container">
        <h2 className="section-title">ผลิตภัณฑ์และบริการ</h2>
        <div className="products-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h3 className="product-title">{product.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>
        </div>
        <div className="carousel-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;

