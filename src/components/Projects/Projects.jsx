import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Filter } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Component configuration and data
  const config = {
    projects: [
      {
        id: 1,
        title: 'Shadows of the Past',
        category: 'narrative',
        image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'A haunting tale of redemption set in a post-apocalyptic world.',
        tags: ['Drama', 'Dark Fantasy', 'Cinematic']
      },
      {
        id: 2,
        title: 'Neon Nightmares',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Cyberpunk-inspired commercial for a tech startup.',
        tags: ['Commercial', 'Cyberpunk', 'Motion Graphics']
      },
      {
        id: 3,
        title: 'The Last Symphony',
        category: 'music',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Music video featuring orchestral elements in a gothic cathedral.',
        tags: ['Music Video', 'Gothic', 'Classical']
      },
      {
        id: 4,
        title: 'Digital Decay',
        category: 'experimental',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Experimental piece exploring the intersection of technology and humanity.',
        tags: ['Experimental', 'Abstract', 'Digital Art']
      },
      {
        id: 5,
        title: 'Corporate Shadows',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Dark corporate video with atmospheric lighting and dramatic angles.',
        tags: ['Corporate', 'Atmospheric', 'Professional']
      },
      {
        id: 6,
        title: 'Echoes in the Void',
        category: 'narrative',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Short film exploring themes of isolation and connection.',
        tags: ['Short Film', 'Drama', 'Psychological']
      }
    ],
    filters: [
      { id: 'all', name: 'All Projects' },
      { id: 'narrative', name: 'Narrative' },
      { id: 'commercial', name: 'Commercial' },
      { id: 'music', name: 'Music Videos' },
      { id: 'experimental', name: 'Experimental' }
    ],
    animations: {
      header: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      },
      filterButton: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 }
      },
      projectCard: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        whileHover: { 
          y: -8,
          transition: { duration: 0.3 }
        }
      },
      playButton: {
        whileHover: { scale: 1.1 }
      },
      actionButton: {
        whileHover: { x: 5 }
      }
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? config.projects 
    : config.projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (projectId) => {
    console.log(`Opening project ${projectId}`);
    // Here you can add navigation logic or modal opening
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Background Elements */}
      <div className={styles.backgroundTexture}></div>

      <div className={styles.container}>
        <motion.div
          {...config.animations.header}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Featured
            <span className={styles.titleAccent}> Works</span>
          </h2>
          <p className={styles.subtitle}>
            A collection of dark, atmospheric visual narratives that push the boundaries 
            of conventional storytelling through cinematic excellence.
          </p>

          {/* Filter Buttons */}
          <div className={styles.filterContainer}>
            {config.filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`${styles.filterButton} ${
                  activeFilter === filter.id ? styles.active : ''
                }`}
                {...config.animations.filterButton}
              >
                <Filter className={styles.filterIcon} />
                <span>{filter.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className={styles.projectsGrid}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                {...config.animations.projectCard}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    className={styles.playButton}
                    {...config.animations.playButton}
                  >
                    <Play className={styles.playIcon} />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.projectActions}>
                    <motion.button
                      className={styles.actionButton}
                      {...config.animations.actionButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      <span>View Project</span>
                      <ExternalLink className={styles.actionIcon} />
                    </motion.button>
                  </div>
                </div>

                {/* Metallic Shine Effect */}
                <div className={styles.shineEffect}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
