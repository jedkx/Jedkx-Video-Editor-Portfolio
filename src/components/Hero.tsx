import React, { useState, useEffect } from 'react';
import { GSAPAnimations } from '../utils/gsap';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Hero animasyonunu başlat
      GSAPAnimations.heroAnimation();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="hero-background">
        <div className="hero-video-placeholder">
          {/* Placeholder for video background */}
          <div className="hero-video-placeholder-content">
            <div className="hero-video-placeholder-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p>Video Background Placeholder</p>
            <p>Add your showreel video here</p>
          </div>
        </div>
        
        {/* Video would go here */}
        {/* 
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        */}
        
        {/* Cinematic Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className={`hero-content-inner ${isLoaded ? 'loaded' : 'loading'}`}>
          {/* Main Headline */}
          <h1 className="hero-headline">
            Crafting Stories Through
            <span className="hero-headline-gradient">
              Cinematic Vision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Professional video editing that transforms raw footage into compelling narratives. 
            Specializing in luxury weddings, corporate storytelling, and creative content.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">200+</div>
              <div className="hero-stat-label">Projects Completed</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-container">
            <button
              onClick={scrollToPortfolio}
              className="hero-cta-primary"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="hero-cta-secondary"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <button 
            onClick={scrollToPortfolio}
            className="hero-scroll-button"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Ambient Animation Elements */}
      <div className="hero-ambient">
        <div className="hero-ambient-element-1"></div>
        <div className="hero-ambient-element-2"></div>
      </div>
    </section>
  );
};

export default Hero;