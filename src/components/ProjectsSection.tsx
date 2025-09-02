import React from "react";
import { ArrowRight, ExternalLink, Play, Award, Users, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  category: string;
  duration?: string;
  views?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Documentary Series",
    description: "A compelling 6-episode documentary series showcasing innovation in tech startups. Featured advanced color grading and motion graphics.",
    image: "/projects/corporate-doc.jpg",
    tags: ["Documentary", "Color Grading", "Motion Graphics"],
    demoUrl: "#",
    category: "Documentary",
    duration: "45 min",
    views: "2.5M"
  },
  {
    id: 2,
    title: "Social Media Campaign",
    description: "High-energy promotional videos for a fitness brand's social media campaign. Optimized for multiple platforms with engaging transitions.",
    image: "/projects/social-campaign.jpg",
    tags: ["Social Media", "Branding", "Motion Design"],
    demoUrl: "#",
    category: "Marketing",
    duration: "60 sec",
    views: "1.8M"
  },
  {
    id: 3,
    title: "Wedding Highlight Reel",
    description: "Cinematic wedding film with emotional storytelling, color correction, and seamless audio mixing for a memorable couple's special day.",
    image: "/projects/wedding-reel.jpg",
    tags: ["Wedding", "Cinematic", "Audio Mixing"],
    demoUrl: "#",
    category: "Wedding",
    duration: "8 min",
    views: "125K"
  },
  {
    id: 4,
    title: "Product Launch Video",
    description: "Dynamic product showcase video featuring 3D animations, motion tracking, and professional voice-over synchronization.",
    image: "/projects/product-launch.jpg",
    tags: ["Product Video", "3D Animation", "Voice-over"],
    demoUrl: "#",
    category: "Commercial",
    duration: "2 min",
    views: "3.2M"
  },
  {
    id: 5,
    title: "Music Video Production",
    description: "Creative music video with advanced visual effects, color manipulation, and rhythm-based editing for an emerging artist.",
    image: "/projects/music-video.jpg",
    tags: ["Music Video", "VFX", "Creative Editing"],
    demoUrl: "#",
    category: "Music",
    duration: "4 min",
    views: "950K"
  },
  {
    id: 6,
    title: "Live Event Coverage",
    description: "Multi-camera live event streaming and post-production highlights reel for a major tech conference with real-time editing.",
    image: "/projects/live-event.jpg",
    tags: ["Live Streaming", "Multi-cam", "Event Coverage"],
    demoUrl: "#",
    category: "Live Event",
    duration: "3 hours",
    views: "15K Live"
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of diverse video editing projects spanning documentaries, commercials, 
          social media content, and live events. Each project demonstrates technical expertise 
          and creative storytelling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {project.duration && (
                      <div className="flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        {project.duration}
                      </div>
                    )}
                    {project.views && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.views}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <Play size={16} />
                    Watch Reel
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="#contact"
          >
            <Award className="h-4 w-4" />
            View Full Portfolio <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
