import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">About Me</h2>
                    <div className="about-content">
                        <p className="portfolio-subtitle">
                            I am a passionate video editor with a keen eye for detail and a love for storytelling through visuals. 
                            My journey in video editing began with a fascination for film and the art of visual communication.
                        </p>
                        <p className="portfolio-subtitle">
                            I believe that every project is a unique story waiting to be told. My approach combines creativity 
                            with technical expertise, ensuring that each video not only meets the client's vision but also 
                            resonates with the audience.
                        </p>
                        <p className="portfolio-subtitle">
                            With years of experience in post-production, I specialize in cinematic storytelling, color grading, 
                            and creating seamless visual narratives that captivate and inspire.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;