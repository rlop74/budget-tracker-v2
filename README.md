# Ledgerly

Ledgerly is a personal finance application I'm building to help users track expenses, budgets, bills, and financial goals.

This is an ongoing personal project that I use to practice full-stack development and learn how application code, APIs, databases, authentication, and infrastructure work together.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Zustand
- TanStack Query
- React Hook Form
- Zod

### Backend / Data

- Node.js
- Express
- Supabase
- PostgreSQL

The backend for this project is maintained in a separate repository: [expense-budget-tracker-backend](https://github.com/rlop74/expense-budget-tracker-backend)

The frontend communicates with an Express API, which integrates with Supabase/PostgreSQL for authentication and application data.

### Development

- Git / GitHub
- Environment-based configuration
- Docker (in progress)

## Architecture

The application is structured around a frontend client communicating with a backend/API and Supabase for authentication and PostgreSQL data storage.

Current development is primarily local while I continue improving the application and its deployment architecture.

## What I'm Working On

- Improving frontend/backend separation
- Organizing API calls into reusable service layers
- Containerizing the application with Docker
- Improving environment and secrets management
- Deploying the application to AWS
- Adding CI/CD for automated testing and deployment

## Why I Built It

I originally started Ledgerly to build a practical full-stack application around a real-world problem.

As the project has grown, I've become increasingly interested in the infrastructure behind running applications reliably, including containerization, cloud infrastructure, CI/CD, security, and automation.

That interest is also driving my current learning in AWS and DevOps.

## Status

Work in progress. The application is actively being developed and is not currently a production service.
