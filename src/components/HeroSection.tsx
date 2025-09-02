import React from "react";
import { ArrowDown, Play, Camera, Film } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <Film className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Video Editor</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Creating</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Cinematic
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Stories
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I transform raw footage into compelling visual narratives through expert video editing, 
            color grading, motion graphics, and post-production magic that brings your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              <Play className="h-4 w-4 mr-2" />
              View My Reels
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Explore Portfolio</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
