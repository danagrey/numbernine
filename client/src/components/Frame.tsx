import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";
import FrameTooltip from "./FrameTooltip";
import { useState, useCallback } from "react";
import goldOrnateFrame from "../assets/frame-gold-ornate.png";
import woodDarkFrame from "../assets/frame-wood-dark.png";
import woodLightFrame from "../assets/frame-wood-light.png";
import nokiaFrame from "@assets/nokiaframe.png";
import nokiaFrameShadow from "../assets/nokiaframeshadow.png";

interface FrameProps {
  project: Project;
  index: number;
  className?: string;
  children?: React.ReactNode;
}

// Original CSS classes for frames that will still be used for non-image frames
const frameStyleClasses: Record<string, string> = {
  "wooden": "wooden-frame",
  "gold": "gold-frame",
  "black": "black-frame",
  "light-wood": "light-wood-frame"
};

// Map for new frame images
const frameImages: Record<string, string> = {
  "gold-ornate": nokiaFrameShadow,
  "wood-dark": woodDarkFrame,
  "wood-light": woodLightFrame,
  "nokia": nokiaFrame
};

const Frame = ({
  project,
  index,
  className,
  children
}: FrameProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [touchStarted, setTouchStarted] = useState(false);
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const handleTouchStart = useCallback(() => {
    setTouchStarted(true);
    
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
    
    setTooltipTimeout(timeout);
  }, []);
  
  const handleTouchEnd = useCallback(() => {
    setTouchStarted(false);
    
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
      setTooltipTimeout(null);
    }
    
    // Keep tooltip visible for a moment after releasing
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    }
  }, [tooltipTimeout, showTooltip]);

  // Check if we should use a frame image
  const useFrameImage = project.frameStyle in frameImages;
  const isNokiaFrame = project.frameStyle === 'nokia';
  
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "frame relative",
        !useFrameImage ? frameStyleClasses[project.frameStyle] : "",
        className,
        isNokiaFrame && "scale-125"
      )}
      aria-label={`Open ${project.title} project in new tab`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {/* If using a frame image, display it with content inside */}
      {useFrameImage ? (
        <div className="w-full h-full relative">
          {/* Content container with padding only if children exist */}
          {children && (
            <div className="absolute inset-[8%] overflow-hidden">
              {children}
            </div>
          )}
          {/* Frame image overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${frameImages[project.frameStyle]})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      ) : (
        // Regular frame with CSS border
        <div className="w-full h-full">
          {children}
        </div>
      )}
      
      {showTooltip && (
        <FrameTooltip project={project} />
      )}
    </a>
  );
};

export default Frame;