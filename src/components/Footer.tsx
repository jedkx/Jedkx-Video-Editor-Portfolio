import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span>JEDKX</span>
                        </div>
                        <p className="footer-tagline">
                            Crafting cinematic stories through video editing
                        </p>
                    </div>
                    
                    <div className="footer-links">
                        <div className="footer-link-group">
                            <h4 className="footer-link-title">Navigation</h4>
                            <a href="#portfolio" className="footer-link">Work</a>
                            <a href="#about" className="footer-link">About</a>
                            <a href="#contact" className="footer-link">Contact</a>
                        </div>
                        
                        <div className="footer-link-group">
                            <h4 className="footer-link-title">Services</h4>
                            <span className="footer-link">Video Editing</span>
                            <span className="footer-link">Color Grading</span>
                            <span className="footer-link">Post Production</span>
                        </div>
                    </div>
                    
                    <div className="footer-social">
                        <h4 className="footer-link-title">Connect</h4>
                        <div className="footer-social-links">
                            <a href="https://twitter.com/jedkx" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <span>Twitter</span>
                            </a>
                            <a href="https://linkedin.com/in/jedkx" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://instagram.com/jedkx" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} JEDKX. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
                        <a href="/terms" className="footer-bottom-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;