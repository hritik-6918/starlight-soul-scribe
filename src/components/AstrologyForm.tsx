
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AstrologyRequest, AstrologyResponse, getAstrologyReading } from '@/services/astrologyService';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import PaymentPrompt from './PaymentPrompt';

const AstrologyForm: React.FC = () => {
  const [formData, setFormData] = useState<AstrologyRequest>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthLocation: '',
    question: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AstrologyResponse | null>(null);
  
  const { user, decrementRequests } = useAuth();
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to use this feature',
        variant: 'destructive',
      });
      return;
    }
    
    if (user.requestsRemaining <= 0) {
      toast({
        title: 'No readings left',
        description: 'Please purchase more readings to continue',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    try {
      // Fill in the name from the user profile if not provided
      const requestData = {
        ...formData,
        name: formData.name || user.name,
      };
      
      // Get reading
      const response = await getAstrologyReading(requestData);
      
      // Decrease remaining requests
      decrementRequests();
      
      // Set result
      setResult(response);
      
      // Show success message
      toast({
        title: 'Reading complete!',
        description: 'Your celestial insights are ready',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to generate your reading. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };
  
  const resetForm = () => {
    setResult(null);
  };
  
  // If user has no readings left and no result is showing
  if (user && user.requestsRemaining <= 0 && !result) {
    return <PaymentPrompt />;
  }
  
  // If showing results
  if (result) {
    return (
      <Card className="cosmic-card max-w-4xl mx-auto">
        <CardHeader className="text-center border-b border-cosmic-700/30">
          <CardTitle className="text-2xl font-mystic text-starlight-400 cosmic-text-glow">
            Your Celestial Insights
          </CardTitle>
          <CardDescription>
            The stars have revealed their secrets for {formData.name || user?.name}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-starlight-300 mb-2">Cosmic Identity</h3>
              <div className="space-y-4 text-cosmic-100">
                <div>
                  <p className="text-sm text-cosmic-300">Zodiac Sign</p>
                  <p className="font-semibold">{result.zodiacSign}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">House Ruler</p>
                  <p className="font-semibold">{result.houseRuler}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">Life Path Number</p>
                  <p className="font-semibold">{result.lifePathNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">Cardinal Number</p>
                  <p className="font-semibold">{result.cardinalNumber}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-starlight-300 mb-2">Celestial Influences</h3>
              <div className="space-y-4 text-cosmic-100">
                <div>
                  <p className="text-sm text-cosmic-300">Planetary Influences</p>
                  <p className="font-semibold">{result.planetaryInfluences.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">Compatible Signs</p>
                  <p className="font-semibold">{result.compatibleSigns.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">Lucky Numbers</p>
                  <p className="font-semibold">{result.luckyNumbers.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic-300">Lucky Colors</p>
                  <p className="font-semibold">{result.luckyColors.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-starlight-300 mb-2">Cosmic Prediction</h3>
              <p className="text-cosmic-100">{result.prediction}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-starlight-300 mb-2">Celestial Advice</h3>
              <p className="text-cosmic-100">{result.advice}</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t border-cosmic-700/30 pt-4">
          <p className="text-sm text-cosmic-300">
            You have {user?.requestsRemaining} reading{user?.requestsRemaining !== 1 ? 's' : ''} remaining
          </p>
          <Button onClick={resetForm} variant="outline" className="border-cosmic-600 text-cosmic-100">
            New Reading
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  // Show form
  return (
    <Card className="cosmic-card max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-mystic text-starlight-400">Celestial Guidance Form</CardTitle>
        <CardDescription>
          Enter your birth details to receive personalized cosmic insights
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              placeholder={user?.name || "Your full name"}
              className="cosmic-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input
              id="birthDate"
              name="birthDate"
              type="date"
              className="cosmic-input"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthTime">Birth Time (approximate)</Label>
            <Input
              id="birthTime"
              name="birthTime"
              type="time"
              className="cosmic-input"
              value={formData.birthTime}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthLocation">Birth Location</Label>
            <Input
              id="birthLocation"
              name="birthLocation"
              placeholder="City, Country"
              className="cosmic-input"
              value={formData.birthLocation}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="question">Question for the Stars (Optional)</Label>
            <Textarea
              id="question"
              name="question"
              placeholder="What would you like cosmic guidance on?"
              className="cosmic-input min-h-24"
              value={formData.question}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <p className="text-sm text-cosmic-300">
            {user?.requestsRemaining} reading{user?.requestsRemaining !== 1 ? 's' : ''} remaining
          </p>
          <Button 
            type="submit" 
            className="bg-cosmic-500 hover:bg-cosmic-400 text-white"
            disabled={loading}
          >
            {loading ? "Consulting the Stars..." : "Get Your Reading"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AstrologyForm;
