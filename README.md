# SpeakPro - AI-Powered Speaking Practice Platform

## Features
- AI tutor for language learning
- Conversation practice with AI
- Personalized exercises and feedback
- Progress tracking
- Roleplay scenarios for language practice
- Community engagement features

## Tech Stack

### Frontend
- React with TypeScript
- TailwindCSS for styling
- Shadcn UI components
- React Query for data fetching
- Wouter for routing
- FullCalendar for calendar views

### Backend
- Node.js with Express
- Socket.IO for real-time features
- Passport.js for authentication
- Drizzle ORM with PostgreSQL
- OpenAI API integration

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL database
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/taskai.git
cd taskai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=postgresql://user:password@localhost:5432/taskai
OPENAI_API_KEY=your_openai_api_key
```

4. Run database migrations
```bash
npm run db:push
```

5. Start the application
```bash
npm run dev
```

## Deployment

The application can be deployed using various platforms:
- Frontend: Vercel, Netlify
- Backend: Render, Railway, Fly.io
- Database: Neon, Supabase

## License

This project is licensed under the MIT License - see the LICENSE file for details.
