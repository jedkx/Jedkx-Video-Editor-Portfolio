import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { GSAPAnimations } from '../utils/gsap';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu toggle with improved GSAP animation
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // GSAP animation with proper timing
    if (newState) {
      // Opening animation
      gsap.set('.mobile-menu', { display: 'block' });
      gsap.fromTo('.mobile-menu', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.mobile-menu-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.1, ease: 'power2.out' }
      );
    } else {
      // Closing animation
      gsap.to('.mobile-menu-item',
        { opacity: 0, x: -20, duration: 0.2, stagger: 0.05, ease: 'power2.in' }
      );
      gsap.to('.mobile-menu',
        { opacity: 0, y: -10, duration: 0.3, delay: 0.1, ease: 'power2.in',
          onComplete: () => {
            gsap.set('.mobile-menu', { display: 'none' });
          }
        }
      );
    }
  };

  const navigation = [
    { name: 'Work', href: '/#portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Eğer ana sayfadaysak en üste scroll et, değilse ana sayfaya git
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`header-main ${isScrolled ? 'scrolled' : 'transparent'}`}
    >
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link 
            to="/" 
            className="logo-container"
            onClick={handleLogoClick}
          >
            <div className="logo-icon">
              <span>J</span>
            </div>
            <span className="logo-text">
              JEDKX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-item"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <div className="mobile-menu-icon">
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          <div className="mobile-menu-content">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-menu-item"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;