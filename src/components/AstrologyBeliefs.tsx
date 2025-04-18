
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AstrologyBeliefs: React.FC = () => {
  const beliefs = [
    {
      title: "Zodiac Signs & Personality",
      description: "Based on birth date, zodiac signs (Aries to Pisces) are believed to influence personality traits, behaviors, and life paths. Each sign is associated with specific traits that shape how individuals interact with the world around them."
    },
    {
      title: "Planetary Influence",
      description: "The positions of planets at the time of birth are believed to impact different aspects of life. Each planet governs specific life areas: Mercury affects communication, Venus relationships, Mars energy and drive, and so forth."
    },
    {
      title: "Houses & Life Areas",
      description: "The zodiac is divided into 12 houses, each representing different life areas (self, values, communication, home, etc.). The placement of planets within these houses at birth affects how their energies manifest in specific aspects of life."
    },
    {
      title: "Life Path Numbers",
      description: "In numerology, your birth date reduces to a single digit (1-9) or master number (11, 22, 33) that reveals your life purpose, natural traits, and challenges. This 'Life Path Number' guides personal development throughout life."
    },
    {
      title: "Astrological Transits & Timing",
      description: "The ongoing movement of planets (transits) creates alignments with birth chart positions, triggering important life events and opportunities. These cosmic timings explain why certain periods bring specific challenges or breakthroughs."
    }
  ];

  return (
    <section className="mt-12 mb-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-mystic text-starlight-400 cosmic-text-glow">
          Key Beliefs in Astrology & Numerology
        </h2>
        <p className="mt-4 text-cosmic-100 max-w-2xl mx-auto">
          Throughout history, these five fundamental principles have guided astrological and numerological practice,
          offering insights into personality, fate, and the cosmic forces that shape our lives.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {beliefs.map((belief, index) => (
          <Card key={index} className="cosmic-card overflow-hidden">
            <CardHeader className="bg-cosmic-800/50 pb-4">
              <CardTitle className="text-xl text-starlight-300">
                {belief.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-cosmic-100">{belief.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AstrologyBeliefs;
