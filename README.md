
# Starlight Soul Scribe

Starlight Soul Scribe is a React-based web application that provides personalized astrological and numerological readings using AI-powered insights. The application features a cosmic-themed user interface, user authentication, and a payment prompt for additional readings. Built with modern web technologies like TypeScript, Tailwind CSS, and Vite, it offers a seamless and engaging user experience.

## Features

- **Personalized Astrological Readings**: Users can input their birth details to receive tailored insights, including zodiac signs, planetary influences, life path numbers, and cosmic predictions.
- **User Authentication**: Secure login and signup functionality with a mock user database, storing user data in localStorage.
- **Payment Prompt**: A visually appealing interface for users to purchase additional readings when their free quota is exhausted.
- **Responsive Design**: Optimized for both desktop and mobile devices with Tailwind CSS and custom breakpoints.
- **Cosmic UI**: A starfield background, gradient animations, and mystic typography create an immersive astrological experience.
- **Component Library**: Utilizes shadcn/ui components for accessible and customizable UI elements.
- **Mock API**: Simulates OpenAI API calls for generating astrological insights based on user input.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui, custom cosmic-themed styles
- **State Management**: React Context (AuthContext), TanStack Query
- **Routing**: React Router
- **Build Tools**: Vite, ESLint, PostCSS
- **Dependencies**:
  - `@radix-ui/*` for accessible UI components
  - `react-hook-form` and `zod` for form handling and validation
  - `lucide-react` for icons
  - `next-themes` for theme management
  - `recharts` for potential- `recharts` for chart visualizations
  - `sonner` for toast notifications
  - `class-variance-authority` and `tailwind-merge` for styling utilities
  - `date-fns` for date handling
  - `react-router-dom` for client-side routing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/starlight-soul-scribe.git
   cd starlight-soul-scribe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`.

## Usage

1. **Sign Up/Login**: Create an account or log in using the demo credentials (`demo@example.com`, `password123`).
2. **Get a Reading**: Enter your birth details (date, time, location) and an optional question to receive a personalized astrological reading.
3. **View Results**: Explore your zodiac sign, planetary influences, life path number, and more in a beautifully designed results card.
4. **Purchase More Readings**: If you run out of free readings (5 by default), select a pricing plan to continue your cosmic journey.
5. **Sign Out**: Log out from the header to end your session.

## Development

- **Linting**: Run `npm run lint` to check for code quality issues using ESLint.
- **Building**: Use `npm run build` to create a production-ready build in the `dist` folder.
- **Preview**: Run `npm run preview` to test the production build locally.
- **Development Mode**: Use `npm run build:dev` for a development build with debugging capabilities.

## Configuration

- **Tailwind CSS**: Custom colors (`cosmic`, `starlight`), fonts (`Inter`, `Cormorant Garamond`, `Cinzel`), and animations are defined in `tailwind.config.ts`.
- **TypeScript**: Configured in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` for strict type checking and module resolution.
- **Vite**: Configured in `vite.config.ts` with aliases for the `src` directory and the `@vitejs/plugin-react-swc` plugin for fast compilation.
- **ESLint**: Rules are defined in `eslint.config.js` to enforce coding standards, with specific configurations for React and TypeScript.

## Future Improvements

- Integrate a real payment gateway (e.g., Stripe) for purchasing readings.
- Add support for saving and viewing past readings.
- Implement a backend with a real database instead of mock user data.
- Enhance astrological calculations with more sophisticated algorithms.
- Add internationalization (i18n) for multi-language support.

**Starlight Soul Scribe** • Cosmic wisdom for the modern soul • © 2025
