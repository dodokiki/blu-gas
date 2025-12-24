import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <footer id="contact" className="contact-us">
      <div className="container">
        <h2 className="contact-title">ติดต่อเรา</h2>
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ชื่อ-นามสกุล *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">อีเมล *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="02-123-4567 หรือ 081-234-5678"
                  value={formData.phone || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">ข้อความ *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">ส่งข้อความ</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d100.6!3d13.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQyJzAwLjAiTiAxMDDCsDM2JzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blu Gas Location"
              ></iframe>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <strong>ที่อยู่:</strong>
                <p>เลขที่ 1999 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310</p>
              </div>
              <div className="contact-item">
                <strong>อีเมล:</strong>
                <p><a href="mailto:sales@blu-gas.com">sales@blu-gas.com</a></p>
              </div>
              <div className="contact-item">
                <strong>โทรศัพท์:</strong>
                <p>02 718 0427-31, 092-1597777</p>
              </div>
              <div className="contact-item">
                <strong>LINE ID:</strong>
                <p>@blu-gas1967</p>
              </div>
              <div className="contact-item">
                <strong>เวลาทำการ:</strong>
                <p>บริการตลอด 24 ชั่วโมง ทุกวัน ไม่มีวันหยุด</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Copy Rights Reserved | บลูแกส - บริการแก๊สคุณภาพสูง ปลอดภัย ครบวงจร</p>
        </div>
      </div>
      <div className="footer-decoration"></div>
    </footer>
  );
};

export default ContactUs;

