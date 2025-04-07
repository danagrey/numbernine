import GalleryWall from "./GalleryWall";

export default function Gallery() {
  return (
    <div className="mb-16">
      <GalleryWall />
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Tip: Hold on a frame to see project details
        </p>
      </div>
    </div>
  );
}