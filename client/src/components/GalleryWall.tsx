import Frame from "@/components/Frame";
import { projects } from "@/data/projects";

const GalleryWall = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 gap-6 mb-12">
        {/* Design Studio */}
        <Frame 
          project={projects[0]}
          index={0}
          className="col-span-2 aspect-square"
        />
        
        {/* Fashion Store */}
        <Frame 
          project={projects[1]}
          index={1}
          className="row-span-2 aspect-[3/5]"
        />
        
        {/* Banking App */}
        <Frame 
          project={projects[2]}
          index={2}
          className="aspect-square"
        />
        
        {/* Travel Blog */}
        <Frame 
          project={projects[3]}
          index={3}
          className="col-span-2 aspect-[4/5]"
        />
        
        {/* Recipe App */}
        <Frame 
          project={projects[4]}
          index={4}
          className="aspect-[3/4]"
        />
        
        {/* Music Player */}
        <Frame 
          project={projects[5]}
          index={5}
          className="aspect-square"
        />
        
        {/* Photography Portfolio */}
        <Frame 
          project={projects[6]}
          index={6}
          className="col-span-2 aspect-video"
        />
      </div>
    </div>
  );
};

export default GalleryWall;
