import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="contact-us">
      <div className="container">
        <h2 className="contact-title">ติดต่อเรา</h2>
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message"
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
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Copy Rights Reserved</p>
        </div>
      </div>
      <div className="footer-decoration"></div>
    </footer>
  );
};

export default ContactUs;

