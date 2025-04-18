
// This is a mock service for OpenAI API calls
// In a real app, this would make actual API calls to OpenAI

export interface AstrologyRequest {
  birthDate: string;
  birthTime: string;
  birthLocation: string;
  name: string;
  question?: string;
}

export interface AstrologyResponse {
  zodiacSign: string;
  houseRuler: string;
  planetaryInfluences: string[];
  lifePathNumber: number;
  cardinalNumber: number;
  prediction: string;
  advice: string;
  compatibleSigns: string[];
  luckyNumbers: number[];
  luckyColors: string[];
}

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 
  'Leo', 'Virgo', 'Libra', 'Scorpio', 
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const HOUSES = [
  'First House (Self)', 'Second House (Values)', 'Third House (Communication)',
  'Fourth House (Home)', 'Fifth House (Creativity)', 'Sixth House (Health)',
  'Seventh House (Partnerships)', 'Eighth House (Transformation)', 'Ninth House (Philosophy)',
  'Tenth House (Career)', 'Eleventh House (Community)', 'Twelfth House (Spirituality)'
];

const PLANETS = [
  'Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 
  'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'
];

const COLORS = [
  'Red', 'Blue', 'Green', 'Purple', 'Gold', 
  'Silver', 'White', 'Black', 'Orange', 'Pink', 'Turquoise'
];

// Calculate life path number based on birthdate
const calculateLifePathNumber = (birthDate: string): number => {
  // Parse birthdate (format: YYYY-MM-DD)
  const dateStr = birthDate.replace(/-/g, '');
  
  // Sum all digits until we get a single digit (1-9) or master number (11, 22)
  let sum = 0;
  for (const digit of dateStr) {
    sum += parseInt(digit);
  }
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    sum.toString().split('').forEach(digit => {
      newSum += parseInt(digit);
    });
    sum = newSum;
  }
  
  return sum;
};

// Get random items from array
const getRandomItems = <T,>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Get random number in range
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a celestial prediction based on user data
const generatePrediction = (request: AstrologyRequest, lifePathNumber: number, zodiacSign: string): string => {
  const templates = [
    `As a ${zodiacSign} with a Life Path number of ${lifePathNumber}, you're currently in a phase where the cosmic energies are aligning to bring significant changes in your personal relationships. The positioning of Venus suggests new connections or deepening of existing bonds. Trust your intuition when meeting new people in the coming months.`,
    
    `Your ${zodiacSign} nature combined with your Life Path ${lifePathNumber} indicates that you're entering a period of self-discovery and spiritual growth. The recent planetary movements suggest that you should focus on inner healing and reflection. Journal your thoughts and pay attention to recurring dreams as they contain important messages.`,
    
    `With the sun transiting through your house of career, and as a ${zodiacSign} with Life Path ${lifePathNumber}, you're likely to encounter new opportunities for professional advancement. Your natural talents will be recognized by someone in a position of authority. Stay prepared and don't hesitate to showcase your unique abilities.`,
    
    `The cosmic alignment for ${zodiacSign} individuals with Life Path ${lifePathNumber} suggests that financial matters will require your attention soon. A careful review of your resources and spending patterns will reveal opportunities for growth and stability. Consider seeking advice from a trusted mentor in financial matters.`,
    
    `Your creative energy is at an all-time high as Mars energizes your expression sector. As a ${zodiacSign} with Life Path ${lifePathNumber}, you have a unique perspective that others find fascinating. Don't hold back from sharing your ideas, as they could lead to unexpected opportunities for collaboration and growth.`
  ];

  return templates[lifePathNumber % templates.length];
};

// Generate advice based on zodiac sign and life path number
const generateAdvice = (zodiacSign: string, lifePathNumber: number): string => {
  const adviceTemplates = [
    `Embrace your natural ${zodiacSign} leadership qualities and combine them with the organizational strength of your Life Path ${lifePathNumber}. This week, focus on structuring your goals into actionable steps rather than getting overwhelmed by the big picture.`,
    
    `Your ${zodiacSign} intuition is heightened right now, and with your Life Path ${lifePathNumber}, you're particularly attuned to underlying patterns. Take time for meditation and reflection before making important decisions in the next few weeks.`,
    
    `As a ${zodiacSign} with Life Path ${lifePathNumber}, your communication style is both persuasive and thoughtful. Use this gift to bridge understanding in a challenging relationship. Express your needs clearly but also make space to truly listen to others' perspectives.`,
    
    `The current planetary alignment suggests that ${zodiacSign} individuals with your Life Path ${lifePathNumber} should focus on physical well-being. Incorporate more movement into your daily routine and pay attention to what your body needs in terms of rest and nourishment.`,
    
    `With Mercury retrograde affecting your sector of learning, this is an excellent time for a ${zodiacSign} with Life Path ${lifePathNumber} to revisit unfinished creative projects or studies. Your perspective has evolved, and you'll find new significance in what you previously set aside.`
  ];

  return adviceTemplates[(lifePathNumber + zodiacSign.length) % adviceTemplates.length];
};

// Mock API call to get astrological insights
export const getAstrologyReading = async (request: AstrologyRequest): Promise<AstrologyResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Get birth month and day from birthDate
  const birthDate = new Date(request.birthDate);
  const month = birthDate.getMonth();
  const day = birthDate.getDate();
  
  // Determine zodiac sign based on birth date
  let zodiacIndex = 0;
  if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) zodiacIndex = 0; // Aries
  else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) zodiacIndex = 1; // Taurus
  else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) zodiacIndex = 2; // Gemini
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) zodiacIndex = 3; // Cancer
  else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) zodiacIndex = 4; // Leo
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiacIndex = 5; // Virgo
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiacIndex = 6; // Libra
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) zodiacIndex = 7; // Scorpio
  else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) zodiacIndex = 8; // Sagittarius
  else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) zodiacIndex = 9; // Capricorn
  else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) zodiacIndex = 10; // Aquarius
  else zodiacIndex = 11; // Pisces
  
  // Calculate life path number
  const lifePathNumber = calculateLifePathNumber(request.birthDate);
  
  // Calculate cardinal number (based on name)
  const cardinalNumber = request.name.length % 9 + 1;
  
  // Generate response
  const response: AstrologyResponse = {
    zodiacSign: ZODIAC_SIGNS[zodiacIndex],
    houseRuler: HOUSES[month],
    planetaryInfluences: getRandomItems(PLANETS, 3),
    lifePathNumber,
    cardinalNumber,
    prediction: generatePrediction(request, lifePathNumber, ZODIAC_SIGNS[zodiacIndex]),
    advice: generateAdvice(ZODIAC_SIGNS[zodiacIndex], lifePathNumber),
    compatibleSigns: getRandomItems(ZODIAC_SIGNS.filter(sign => sign !== ZODIAC_SIGNS[zodiacIndex]), 3),
    luckyNumbers: [
      getRandomNumber(1, 10), 
      getRandomNumber(11, 30), 
      getRandomNumber(31, 99)
    ],
    luckyColors: getRandomItems(COLORS, 2),
  };
  
  return response;
};
