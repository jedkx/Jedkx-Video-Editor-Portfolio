import React from "react";
import { ArrowUp, Film } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Film className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Professional Video Editor. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Crafted with passion for visual storytelling
            </p>
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
