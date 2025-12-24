import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-main">
        <div className="container">
          <div className="logo-container">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} aria-label="บลูแกส หน้าแรก">
              <img src="/logo.png" alt="บลูแกส - บริการแก๊สคุณภาพสูง ปลอดภัย ครบวงจร" className="logo-image" />
            </a>
          </div>
          <nav className="top-nav" aria-label="เมนูนำทางหลัก">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>หน้าแรก</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>เกี่ยวกับเรา</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>ผลิตภัณฑ์และบริการ</a>
            <a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection('works'); }}>ผลงานของเรา</a>
            <a href="#news" onClick={(e) => { e.preventDefault(); scrollToSection('news'); }}>ข่าวสารองค์กร</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>ติดต่อเรา</a>
            <span className="language-toggle">(TH/EN)</span>
          </nav>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-menu" aria-label="เมนูมือถือ">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>หน้าแรก</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>เกี่ยวกับเรา</a>
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>ผลิตภัณฑ์และบริการ</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection('works'); }}>ผลงานของเรา</a>
          <a href="#news" onClick={(e) => { e.preventDefault(); scrollToSection('news'); }}>ข่าวสารองค์กร</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>ติดต่อเรา</a>
        </nav>
      )}
    </header>
  );
};

export default Header;

