import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Scissors, 
  Palette, 
  Music, 
  Zap, 
  Camera,
  Film,
  Monitor
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  // Component configuration and data
  const config = {
    skills: [
      {
        icon: Video,
        name: 'Video Editing',
        description: 'Advanced editing techniques with cinematic flair'
      },
      {
        icon: Scissors,
        name: 'Post Production',
        description: 'Complete post-production workflow mastery'
      },
      {
        icon: Palette,
        name: 'Color Grading',
        description: 'Atmospheric color correction and grading'
      },
      {
        icon: Music,
        name: 'Audio Design',
        description: 'Immersive soundscapes and audio mixing'
      },
      {
        icon: Zap,
        name: 'Motion Graphics',
        description: 'Dynamic animations and visual effects'
      },
      {
        icon: Camera,
        name: 'Cinematography',
        description: 'Visual storytelling and composition'
      },
      {
        icon: Film,
        name: 'Film Production',
        description: 'End-to-end production management'
      },
      {
        icon: Monitor,
        name: 'Digital Content',
        description: 'Multi-platform content optimization'
      }
    ],
    animations: {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      },
      item: {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      },
      header: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      },
      card: {
        whileHover: { 
          scale: 1.02,
          y: -4
        },
        transition: { duration: 0.3 }
      },
      icon: {
        whileHover: { rotate: 360 },
        transition: { duration: 0.6 }
      }
    }
  };

  // Component styles for dynamic effects
  const componentStyles = {
    floatingAnimation: (index) => ({
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: index * 0.2
      }
    }),
    glowEffect: {
      filter: 'drop-shadow(0 0 20px rgba(192, 192, 192, 0.3))'
    }
  };

  return (
    <section 
      id="skills" 
      className={`${styles.skillsSection} ${styles.skillsBackground}`}
    >
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}></div>

      <div className={styles.container}>
        <motion.div
          {...config.animations.header}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Mastered
            <span className={styles.titleAccent}> Crafts</span>
          </h2>
          <p className={styles.subtitle}>
            Years of dedication have forged expertise in the dark arts of visual storytelling, 
            where technical mastery meets creative vision.
          </p>
        </motion.div>

        <motion.div
          variants={config.animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.skillsGrid}
        >
          {config.skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={config.animations.item}
                className={`${styles.floatingCard}`}
              >
                <motion.div
                  className={styles.skillCard}
                  {...config.animations.card}
                  animate={componentStyles.floatingAnimation(index)}
                >
                  {/* Glow Effect */}
                  <div className={styles.cardGlow}></div>
                  
                  <div className={styles.cardContent}>
                    <motion.div
                      className={styles.iconContainer}
                      {...config.animations.icon}
                    >
                      <IconComponent className={styles.skillIcon} />
                    </motion.div>
                    
                    <h3 className={styles.skillName}>
                      {skill.name}
                    </h3>
                    
                    <p className={styles.skillDescription}>
                      {skill.description}
                    </p>
                  </div>

                  {/* Metallic Shine Effect */}
                  <div className={styles.shineEffect}></div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
