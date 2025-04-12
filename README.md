# TaskAI - AI-Powered Task Management Platform

TaskAI is an intelligent task management application that uses AI to enhance productivity and engagement. The platform combines traditional task management with AI-powered suggestions and a Speaking Practice module for language learning.

## Features

### Task Management
- Kanban-style board for task organization
- CRUD operations for tasks with drag-and-drop functionality
- Task filtering and categorization with tags
- Task priorities and due dates

### AI Integration
- AI-powered task suggestions based on user goals
- Smart prioritization of tasks
- Task summary and insights
- OpenAI GPT-4o integration

### Speaking Practice Module
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
