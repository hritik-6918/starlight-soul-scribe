
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import StarBackground from '@/components/StarBackground';
import AuthForms from '@/components/AuthForms';
import AstrologyBeliefs from '@/components/AstrologyBeliefs';
import AstrologyForm from '@/components/AstrologyForm';

const Index = () => {
  const { user, loading } = useAuth();
  
  const handleLearnMore = () => {
    window.open('https://www.astro.com/horoscope/about-astrology.html', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StarBackground />
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="animate-pulse text-cosmic-300">Loading...</div>
          </div>
        ) : user ? (
          // Logged in state - Show form
          <div className="py-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mystic text-starlight-400 cosmic-text-glow mb-4">
                Your Cosmic Guide Awaits
              </h1>
              <p className="text-cosmic-100">
                Unlock celestial insights tailored specifically to your astrological profile.
                Discover what the stars have in store for you today.
              </p>
            </div>
            
            <AstrologyForm />
          </div>
        ) : (
          // Logged out state - Show landing page
          <>
            <div className="py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mystic text-starlight-400 cosmic-text-glow leading-tight">
                  Starlight Soul Scribe
                </h1>
                <p className="text-xl text-cosmic-100">
                  Discover your cosmic path with AI-powered astrological insights tailored to your unique celestial blueprint.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    onClick={handleLearnMore} 
                    className="bg-cosmic-500 hover:bg-cosmic-400 text-white"
                  >
                    Learn More 
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="cosmic-card p-6">
                  <AuthForms />
                </div>
              </div>
            </div>
            
            <AstrologyBeliefs />
            
            <section className="py-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-mystic text-starlight-400 cosmic-text-glow mb-6">
                  Begin Your Celestial Journey Today
                </h2>
                <p className="text-cosmic-100 mb-8">
                  Sign up now to receive three complimentary readings and unlock the cosmic wisdom that awaits.
                </p>
              </div>
            </section>
          </>
        )}
      </main>
      
      <footer className="border-t border-cosmic-800 py-6 backdrop-blur-sm bg-cosmic-900/50">
        <div className="container mx-auto px-4 text-center text-cosmic-400 text-sm">
          <p>© 2025 Starlight Soul Scribe • Cosmic wisdom for the modern soul</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
