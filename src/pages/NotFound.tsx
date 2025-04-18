
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-900 relative">
      <StarBackground />
      <div className="text-center z-10 cosmic-card p-8 max-w-md">
        <h1 className="text-4xl font-mystic text-starlight-400 cosmic-text-glow mb-4">404</h1>
        <p className="text-xl text-cosmic-100 mb-4">This cosmic path does not exist</p>
        <p className="text-cosmic-300 mb-6">The stars have not aligned for this journey.</p>
        <Button asChild className="bg-cosmic-500 hover:bg-cosmic-400 text-white">
          <a href="/">Return to Your Celestial Map</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
