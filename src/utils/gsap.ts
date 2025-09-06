import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP plugins kayıt
gsap.registerPlugin(ScrollTrigger);

// GSAP animasyon yardımcı fonksiyonları
export class GSAPAnimations {
  
  // Sayfa yüklenme animasyonu
  static pageLoader() {
    const tl = gsap.timeline();
    
    tl.set('.page-loader', { display: 'flex' })
      .to('.loader-bar', {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
      })
      .to('.page-loader', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set('.page-loader', { display: 'none' });
        }
      });
    
    return tl;
  }

  // Hero section animasyonu
  static heroAnimation() {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from('.hero-headline', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta-container', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-stats', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2');
    
    return tl;
  }

  // Kart hover animasyonları
  static cardHoverEffects() {
    gsap.utils.toArray('.video-card').forEach((card: any) => {
      const overlay = card.querySelector('.video-overlay');
      const playButton = card.querySelector('.video-play-button');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out'
        });
        
        if (overlay) {
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3
          });
        }
        
        if (playButton) {
          gsap.to(playButton, {
            scale: 1.1,
            rotation: 360,
            duration: 0.4,
            ease: 'back.out(1.7)'
          });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
        
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3
          });
        }
        
        if (playButton) {
          gsap.to(playButton, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    });
  }

  // Logo hover animasyonu (JEDKX efekti)
  static logoHoverEffect() {
    const logoContainer = document.querySelector('.logo-container');
    const logoText = document.querySelector('.logo-text');
    
    if (logoContainer && logoText) {
      logoContainer.addEventListener('mouseenter', () => {
        gsap.to(logoText, {
          x: 40,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
      
      logoContainer.addEventListener('mouseleave', () => {
        gsap.to(logoText, {
          x: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    }
  }

  // Scroll tetiklemeli animasyonlar
  static scrollAnimations() {
    // Portfolio section
    gsap.fromTo('.portfolio-section', 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Portfolio grid items stagger
    gsap.fromTo('.video-card', 
      {
        opacity: 0,
        y: 30,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // About section
    gsap.fromTo('.about-section', 
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Buton hover efektleri
  static buttonEffects() {
    gsap.utils.toArray('.btn-primary, .btn-secondary, .btn-hero-primary, .btn-hero-secondary').forEach((btn: any) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, {
          scale: 0.95,
          duration: 0.1,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.1,
          ease: 'power2.out'
        });
      });
    });
  }

  // Mobile menu animasyonu
  static mobileMenuAnimation(isOpen: boolean) {
    const tl = gsap.timeline();
    
    if (isOpen) {
      tl.to('.mobile-menu', {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      .from('.mobile-menu-item', {
        x: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.1');
    } else {
      tl.to('.mobile-menu-item', {
        x: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.in'
      })
      .to('.mobile-menu', {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      }, '-=0.1');
    }
    
    return tl;
  }

  // Tüm animasyonları başlat
  static init() {
    // Sayfa yüklendiğinde animasyonları başlat
    gsap.set('.hero-headline, .hero-subtitle, .hero-cta-container, .hero-stats', { opacity: 0 });
    
    // Ana animasyonları çalıştır
    this.heroAnimation();
    this.scrollAnimations();
    this.cardHoverEffects();
    this.logoHoverEffect();
    this.buttonEffects();
    
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }

  // Temizleme
  static cleanup() {
    ScrollTrigger.killAll();
    gsap.killTweensOf("*");
  }
}

export default GSAPAnimations;
