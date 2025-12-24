import React from 'react';
import './OurWorks.css';

const OurWorks = () => {
  const works = [
    {
      id: 1,
      title: 'โรงงานแก๊สอุตสาหกรรม',
      description: 'ระบบแก๊สขนาดใหญ่สำหรับโรงงานอุตสาหกรรม',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'โครงการแก๊สชุมชน',
      description: 'การติดตั้งระบบแก๊สสำหรับชุมชน',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'โรงงานผลิตแก๊ส',
      description: 'โรงงานผลิตและจัดเก็บแก๊สคุณภาพสูง',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'การรับรองมาตรฐาน',
      description: 'การได้รับมาตรฐานคุณภาพระดับสากล',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'รถขนส่งแก๊ส',
      description: 'ระบบขนส่งแก๊สที่ปลอดภัยและมีประสิทธิภาพ',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'ระบบแก๊สครบวงจร',
      description: 'การติดตั้งระบบแก๊สแบบครบวงจร',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="works" className="our-works">
      <div className="container">
        <h2 className="section-title">ผลงานของเรา</h2>
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="work-item">
              <img 
                src={work.image} 
                alt={work.title}
                className="work-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #001f3f 0%, #003366 100%)';
                  const icon = document.createElement('div');
                  icon.className = 'work-icon';
                  icon.textContent = '🏭';
                  icon.style.cssText = 'font-size: 80px; opacity: 0.2; color: #ffffff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
                  e.target.parentElement.appendChild(icon);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

