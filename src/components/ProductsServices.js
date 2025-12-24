import React, { useState } from 'react';
import './ProductsServices.css';

const ProductsServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      icon: '⛑️',
      title: 'แก๊สอุตสาหกรรม',
      description: 'บริการแก๊สสำหรับโรงงานอุตสาหกรรม ระบบแก๊สขนาดใหญ่ ปลอดภัย มาตรฐานสากล'
    },
    {
      icon: '💧',
      title: 'แก๊สครัวเรือน',
      description: 'แก๊ส LPG คุณภาพสูงสำหรับครัวเรือน จัดส่งรวดเร็ว บริการ 24 ชั่วโมง'
    },
    {
      icon: '🏭',
      title: 'บริการครบวงจร',
      description: 'ให้บริการแก๊สครบทุกประเภท พร้อมบริการหลังการขาย ติดตั้งและบำรุงรักษา'
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
        <p className="section-subtitle">บริการแก๊สครบวงจรสำหรับทุกความต้องการ ทั้งแก๊สอุตสาหกรรม แก๊สครัวเรือน และบริการจัดส่ง</p>
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
                  <p className="product-description">{product.description}</p>
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

