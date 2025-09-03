import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Component configuration
  const config = {
    contactInfo: [
      {
        icon: Mail,
        label: 'Email',
        value: 'darkcut@example.com',
        href: 'mailto:darkcut@example.com'
      },
      {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567'
      },
      {
        icon: MapPin,
        label: 'Location',
        value: 'Los Angeles, CA',
        href: '#'
      }
    ],
    socialLinks: [
      {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com',
      },
      {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com',
      },
      {
        icon: Twitter,
        label: 'Twitter',
        href: 'https://twitter.com',
      }
    ],
    animations: {
      header: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
      },
      contactInfo: {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.2 }
      },
      contactForm: {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.4 }
      },
      infoItem: {
        whileHover: { 
          y: -2,
          transition: { duration: 0.2 }
        }
      },
      submitButton: {
        whileHover: { 
          y: -2,
          transition: { duration: 0.2 }
        },
        whileTap: { scale: 0.98 }
      },
      socialLink: {
        whileHover: { 
          y: -2,
          scale: 1.05,
          transition: { duration: 0.2 }
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`${styles.contactSection} ${styles.contactBackground}`}
    >
      <div className={styles.container}>
        <motion.div
          {...config.animations.header}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Get In
            <span className={styles.titleAccent}> Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to bring your darkest cinematic visions to life? Let's collaborate 
            and create something extraordinary together.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Contact Information */}
          <motion.div 
            {...config.animations.contactInfo}
            className={styles.contactInfo}
          >
            {config.contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={styles.infoItem}
                  {...config.animations.infoItem}
                >
                  <IconComponent className={styles.infoIcon} />
                  <div className={styles.infoContent}>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Me</h3>
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
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            {...config.animations.contactForm}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.formTextarea}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
                {...config.animations.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className={styles.buttonIcon} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
