import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      number: '50+',
      label: 'ปีประสบการณ์',
      description: 'มากกว่า 50 ปีในอุตสาหกรรมแก๊ส'
    },
    {
      number: '10,000+',
      label: 'ลูกค้าพึงพอใจ',
      description: 'ลูกค้าที่ไว้วางใจบลูแกส'
    },
    {
      number: '24/7',
      label: 'บริการตลอดเวลา',
      description: 'พร้อมให้บริการทุกวันไม่มีวันหยุด'
    },
    {
      number: '100%',
      label: 'ความปลอดภัย',
      description: 'มาตรฐานความปลอดภัยระดับสากล'
    }
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

