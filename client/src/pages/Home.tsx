import Gallery from "@/components/Gallery";
import wallTexture from "../assets/kiwihug-3gifzboyZk0-unsplash.jpg";

const Home = () => {
  return (
    <div 
      className="min-h-screen pb-20"
      style={{
        backgroundImage: `url(${wallTexture})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll', // Changed from 'fixed' to 'scroll'
        backgroundPosition: 'center'
      }}
    >
      <main className="overflow-x-hidden max-w-md mx-auto px-4 sm:px-0">
        <header className="text-center pt-8 pb-6">
          <h1 className="text-4xl font-serif font-medium text-gray-800 drop-shadow-sm">
            Portfolio Gallery
          </h1>
          <p className="text-gray-600 mt-2 italic">
            A collection of my creative work
          </p>
          <div className="w-20 h-1 bg-gray-300 mx-auto mt-4"></div>
        </header>
        
        <Gallery />

        <footer className="text-center mt-4 text-gray-500 text-sm">
          <p className="mt-2">&copy; {new Date().getFullYear()} My Portfolio Gallery</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
