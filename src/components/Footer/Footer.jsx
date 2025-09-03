import React from 'react';
import { motion } from 'framer-motion';
import { Film, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  // Component configuration
  const config = {
    brand: {
      name: 'DarkCut',
      description: 'Crafting cinematic experiences that transcend ordinary storytelling. Where shadows meet light, and every frame tells a story.',
      icon: Film
    },
    socialLinks: [
      { icon: Github, href: 'https://github.com', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
    ],
    navigation: {
      quickLinks: [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ],
      legalLinks: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' }
      ]
    },
    animations: {
      brand: {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.2 }
      },
      link: {
        whileHover: { x: 5 },
        transition: { duration: 0.2 }
      },
      socialLink: {
        whileHover: { 
          y: -2, 
          scale: 1.05 
        },
        transition: { duration: 0.2 }
      },
      backToTop: {
        whileHover: { y: -2 },
        transition: { duration: 0.2 }
      }
    }
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${styles.footerBackground}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <motion.div 
              className={styles.brand}
              {...config.animations.brand}
            >
              <config.brand.icon className={styles.brandIcon} />
              <span className={styles.brandName}>
                {config.brand.name}
              </span>
            </motion.div>
            <p className={styles.brandDescription}>
              {config.brand.description}
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {config.socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    {...config.animations.socialLink}
                    title={social.label}
                  >
                    <IconComponent className={styles.socialIcon} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <div className={styles.linkList}>
              {config.navigation.quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={styles.footerLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  {...config.animations.link}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Legal</h3>
            <div className={styles.linkList}>
              {config.navigation.legalLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={styles.footerLink}
                  {...config.animations.link}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <div className={styles.linkList}>
              <motion.a href="#" className={styles.footerLink} {...config.animations.link}>
                Video Editing
              </motion.a>
              <motion.a href="#" className={styles.footerLink} {...config.animations.link}>
                Color Grading
              </motion.a>
              <motion.a href="#" className={styles.footerLink} {...config.animations.link}>
                Motion Graphics
              </motion.a>
              <motion.a href="#" className={styles.footerLink} {...config.animations.link}>
                Post Production
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} DarkCut. All rights reserved. Crafted with passion for cinematic excellence.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className={styles.backToTop}
            {...config.animations.backToTop}
          >
            <span>Back to top</span>
            <ArrowUp className={styles.backToTopIcon} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
