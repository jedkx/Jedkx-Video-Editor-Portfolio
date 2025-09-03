import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  // Component specific styles object for dynamic styling
  const componentStyles = {
    textShadow: {
      default: '0 0 10px rgba(192, 192, 192, 0.3)',
      glow: '0 0 20px rgba(192, 192, 192, 0.5)',
    },
    gradients: {
      primary: 'linear-gradient(to right, #C0C0C0, #43464B)',
      secondary: 'linear-gradient(to right, #43464B, #C0C0C0)',
      overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
    },
    colors: {
      metallic: {
        silver: '#C0C0C0',
        gold: '#FFD700',
        iron: '#43464B',
      }
    }
  };

  const handleWorkClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`${styles.heroSection} ${styles.starryBackground}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Space-themed background"
          className={styles.backgroundImage}
          loading="eager"
        />
        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Floating Particles Effect */}
      <div className={styles.floatingParticles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            animate={{ 
              textShadow: [
                componentStyles.textShadow.default,
                componentStyles.textShadow.glow,
                componentStyles.textShadow.default
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Cinematic
            <span className={`block ${styles.metallicShine}`}>Video Artistry</span>
          </motion.h1>

          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Crafting dark, atmospheric visual narratives that transcend ordinary storytelling. 
            Where shadows dance with light, and every frame tells a haunting tale.
          </motion.p>

          <motion.div 
            className={styles.buttonContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              className={styles.primaryButton}
              onClick={handleWorkClick}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>View My Work</span>
              </span>
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              onClick={handleContactClick}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <span>Get In Touch</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => {
            const skillsSection = document.querySelector('#skills');
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
