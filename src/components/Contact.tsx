import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, message });
    };

    return (
        <section id="contact" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Get In Touch</h2>
                    <p className="portfolio-subtitle">
                        Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
                    </p>
                </div>
                
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                                required
                                placeholder="Your full name"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-textarea"
                                rows={6}
                                required
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary form-submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;