
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  opacity: number;
  delay: string;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    // Create stars
    const starCount = 100;
    const newStars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.3,
        delay: `${Math.random() * 5}s`,
      });
    }
    
    setStars(newStars);
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-cosmic-900 starfield-bg"></div>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDelay: star.delay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
