import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;