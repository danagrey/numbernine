import { useCallback, useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface FrameTooltipProps {
  project: Project;
}

export const FrameTooltip = ({ project }: FrameTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const handleTouchStart = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Show after 500ms of press
    
    setTouchTimeout(timeout);
  }, []);
  
  const handleTouchEnd = useCallback(() => {
    if (touchTimeout) {
      clearTimeout(touchTimeout);
      setTouchTimeout(null);
    }
    setIsVisible(false);
  }, [touchTimeout]);
  
  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (touchTimeout) {
        clearTimeout(touchTimeout);
      }
    };
  }, [touchTimeout]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 p-4 overflow-y-auto"
      style={{ padding: "20px" }}
    >
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      
      {project.tags && (
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      <div className="text-xs text-gray-400 mt-4">
        Hold to view details • Tap to visit site
      </div>
    </div>
  );
};

export default FrameTooltip;