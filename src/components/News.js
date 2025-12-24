import React, { useState } from 'react';
import './News.css';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: 'บลูแกสเปิดตัวผลิตภัณฑ์ใหม่',
      description: 'บลูแกสได้เปิดตัวผลิตภัณฑ์แก๊สคุณภาพสูงรุ่นใหม่ที่ปลอดภัยและมีประสิทธิภาพมากขึ้น',
      time: '2 ชั่วโมงที่แล้ว',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'การประชุมทีมงานประจำปี',
      description: 'การประชุมทีมงานประจำปีเพื่อวางแผนและพัฒนาบริการให้ดียิ่งขึ้น',
      time: '3 ชั่วโมงที่แล้ว',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'โครงการขยายโรงงาน',
      description: 'บลูแกสประกาศโครงการขยายโรงงานเพื่อเพิ่มกำลังการผลิตและให้บริการที่ดีขึ้น',
      time: '1 วันที่แล้ว',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section id="news" className="news">
      <div className="container">
        <h2 className="section-title">ข่าวสารองค์กร</h2>
        <div className="news-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="news-card">
                  <div className="news-image">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="news-image-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #4da6ff 0%, #0066cc 50%, #001f3f 100%)';
                        const icon = document.createElement('div');
                        icon.className = 'news-icon';
                        icon.textContent = '💧';
                        icon.style.cssText = 'font-size: 100px; opacity: 0.3; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
                        e.target.parentElement.appendChild(icon);
                      }}
                    />
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                    <span className="news-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </section>
  );
};

export default News;

