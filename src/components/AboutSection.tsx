import React from "react";
import { Video, Palette, Music, Download, Mail } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">My Craft</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Professional Video Editor & Visual Storyteller
            </h3>

            <p className="text-muted-foreground">
              With over 7 years of experience in video production and post-production, 
              I specialize in transforming raw footage into compelling visual narratives. 
              From corporate documentaries to social media content, I bring technical 
              expertise and creative vision to every project.
            </p>

            <p className="text-muted-foreground">
              My passion lies in the art of visual storytelling—crafting seamless 
              transitions, perfecting color grades, and synchronizing audio to create 
              immersive experiences that captivate audiences and deliver your message 
              with maximum impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Start Your Project
              </a>

              <a
                href="/assets/video-editor-resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Video Editing & Post-Production</h4>
                  <p className="text-muted-foreground">
                    Expert editing with Premiere Pro, DaVinci Resolve, and Final Cut Pro. 
                    Specializing in narrative structure, pacing, and seamless transitions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Color Grading & Visual Effects</h4>
                  <p className="text-muted-foreground">
                    Professional color correction and grading to enhance mood and 
                    atmosphere. Motion graphics and VFX using After Effects and Cinema 4D.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Audio Post-Production</h4>
                  <p className="text-muted-foreground">
                    Professional audio editing, mixing, and sound design using 
                    Audition, Pro Tools, and industry-standard techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
