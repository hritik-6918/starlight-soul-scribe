
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const PaymentPrompt: React.FC = () => {
  const { toast } = useToast();
  
  const handlePurchase = () => {
    // Simulate payment process
    toast({
      title: "Coming Soon",
      description: "Payment processing will be implemented in a future update.",
    });
  };
  
  const pricingOptions = [
    {
      name: 'Basic',
      price: '$4.99',
      readings: 5,
      features: [
        'Personalized zodiac readings',
        'Life path number analysis',
        'Compatibility insights',
      ],
      recommended: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      readings: 15,
      features: [
        'All Basic features',
        'Detailed planetary influences',
        'Birth chart analysis',
        'Monthly predictions',
      ],
      recommended: true,
    },
    {
      name: 'Oracle',
      price: '$19.99',
      readings: 40,
      features: [
        'All Premium features',
        'Relationship compatibility reports',
        'Career path guidance',
        'Financial predictions',
        'Lifetime chart storage',
      ],
      recommended: false,
    },
  ];
  
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-mystic text-starlight-400 cosmic-text-glow">
          Continue Your Cosmic Journey
        </h2>
        <p className="text-cosmic-100 mt-2">
          You've used all your complimentary readings. Choose a package to unlock more celestial insights.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {pricingOptions.map((option, index) => (
          <Card 
            key={index} 
            className={`cosmic-card relative ${option.recommended ? 'border-starlight-500 shadow-lg shadow-starlight-500/20' : 'border-cosmic-700/30'}`}
          >
            {option.recommended && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-starlight-500 text-cosmic-900 text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-mystic text-starlight-300">{option.name}</CardTitle>
              <div>
                <span className="text-2xl font-bold text-white">{option.price}</span>
              </div>
              <CardDescription>
                {option.readings} celestial readings
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-2">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-cosmic-100">
                    <span className="text-starlight-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={handlePurchase} 
                className={`w-full ${option.recommended ? 'bg-starlight-500 hover:bg-starlight-400 text-cosmic-900' : 'bg-cosmic-700 hover:bg-cosmic-600 text-white'}`}
              >
                Select Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <p className="text-center text-cosmic-300 text-sm">
        All packages are one-time purchases. No subscription or recurring payments.
      </p>
    </div>
  );
};

export default PaymentPrompt;
