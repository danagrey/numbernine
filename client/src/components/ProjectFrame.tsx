import { cn } from "@/lib/utils";

export type FrameStyle = "wooden" | "gold" | "black" | "light-wood" | "gold-ornate" | "wood-dark" | "wood-light" | "nokia";

export type ProjectFrameProps = {
  id: string;
  title: string;
  url: string;
  frameStyle: FrameStyle;
  className?: string;
  children: React.ReactNode;
};

const frameStyleClasses: Record<string, string> = {
  "wooden": "wooden-frame",
  "gold": "gold-frame",
  "black": "black-frame",
  "light-wood": "light-wood-frame"
};

const ProjectFrame = ({
  id,
  title,
  url,
  frameStyle,
  className,
  children
}: ProjectFrameProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "frame bg-white shadow-md flex flex-col",
        frameStyleClasses[frameStyle] || "",
        className
      )}
      aria-label={`Open ${title} project in new tab`}
    >
      {children}
    </a>
  );
};

export default ProjectFrame;
