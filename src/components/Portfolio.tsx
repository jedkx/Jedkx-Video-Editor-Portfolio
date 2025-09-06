import React from 'react';

const Portfolio: React.FC = () => {
    const videos = [
        { 
            id: 1, 
            title: 'Cinematic Travel Film', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Travel' 
        },
        { 
            id: 2, 
            title: 'Corporate Brand Video', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Corporate' 
        },
        { 
            id: 3, 
            title: 'Wedding Highlight Reel', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Wedding' 
        },
        { 
            id: 4, 
            title: 'Music Video Production', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Music' 
        },
        { 
            id: 5, 
            title: 'Documentary Short', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Documentary' 
        },
        { 
            id: 6, 
            title: 'Commercial Ad Campaign', 
            thumbnail: '/api/placeholder/600/400', 
            category: 'Commercial' 
        }
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Featured Work</h2>
                    <p className="portfolio-subtitle">
                        A collection of my finest video editing projects, showcasing 
                        cinematic storytelling and technical excellence.
                    </p>
                </div>
                
                <div className="portfolio-grid">
                    {videos.map(video => (
                        <div key={video.id} className="video-card">
                            <div className="video-thumbnail">
                                <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                />
                                <div className="video-overlay">
                                    <button className="video-play-button">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="video-category-badge">
                                    {video.category}
                                </div>
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.title}</h3>
                                <p className="video-category">{video.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;