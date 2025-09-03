import React, { useState } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Component specific configuration
  const config = {
    brand: {
      name: 'DarkCut',
      icon: Film,
    },
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    animations: {
      header: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
      },
      logo: {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.2 }
      },
      navLink: {
        whileHover: { scale: 1.05, y: -1 },
        transition: { duration: 0.2 }
      },
      mobileMenu: {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3 }
      }
    }
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      {...config.animations.header}
      className={styles.header}
    >
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <motion.div 
            {...config.animations.logo}
            className={styles.logo}
            onClick={() => handleNavClick('#home')}
          >
            <config.brand.icon className={styles.logoIcon} />
            <span className={styles.logoText}>
              {config.brand.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <div className={styles.navList}>
              {config.navigation.map((item) => (
                <motion.a
                  key={item.name}
                  {...config.animations.navLink}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              {...config.animations.mobileMenu}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileNavList}>
                {config.navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    className={styles.mobileNavLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
