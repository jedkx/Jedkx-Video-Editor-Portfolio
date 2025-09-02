import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Video Editing Software
  { name: "Adobe Premiere Pro", level: 95, category: "editing" },
  { name: "DaVinci Resolve", level: 90, category: "editing" },
  { name: "Final Cut Pro", level: 85, category: "editing" },
  { name: "Avid Media Composer", level: 75, category: "editing" },

  // Motion Graphics & VFX
  { name: "After Effects", level: 90, category: "motion" },
  { name: "Cinema 4D", level: 80, category: "motion" },
  { name: "Blender", level: 75, category: "motion" },
  { name: "Nuke", level: 65, category: "motion" },

  // Audio Post-Production
  { name: "Adobe Audition", level: 85, category: "audio" },
  { name: "Pro Tools", level: 80, category: "audio" },
  { name: "Logic Pro", level: 75, category: "audio" },
  { name: "Reaper", level: 70, category: "audio" },

  // Production Tools
  { name: "OBS Studio", level: 90, category: "tools" },
  { name: "Wirecast", level: 80, category: "tools" },
  { name: "Frame.io", level: 85, category: "tools" },
  { name: "Shotcut", level: 75, category: "tools" },
];

const categories = ["all", "editing", "motion", "audio", "tools"];

const categoryLabels: Record<string, string> = {
  all: "All Skills",
  editing: "Video Editing",
  motion: "Motion Graphics",
  audio: "Audio Post",
  tools: "Production Tools"
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Expertise</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proficient in industry-standard software and cutting-edge tools for professional video production
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
