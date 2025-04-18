
import React from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-cosmic-900/80 border-b border-cosmic-700/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-mystic text-starlight-400">Starlight Soul Scribe</span>
        </a>
        
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-cosmic-100">
                  {user.name} • <span className="text-starlight-300">{user.requestsRemaining} readings left</span>
                </span>
              </div>
              <Button 
                variant="outline" 
                className="border-cosmic-600 text-cosmic-100"
                onClick={logout}
              >
                Sign Out
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
