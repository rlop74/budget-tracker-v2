# Frontend Conventions

## Folder Structure

src/
├── components/
├── features/
├── pages/
├── hooks/
├── services/
├── store/
├── lib/
└── routes/

## Naming
- PascalCase for components
- PascalCase for types/interfaces
- camelCase for variables/functions
- camelCase for non-component filenames
- PascalCase for component/page filenames

## Components
- Keep components small/reusable
- Separate UI from business logic

## State Management
- TanStack Query for API state
- Zustand for UI state only

## Forms
- React Hook Form + Zod

## API
- Centralized API client
- Handle errors consistently

## Auth/Data Access
- Use Supabase Auth for login/session flows
- Send Supabase access token to backend APIs
- Do not use Supabase client for app data reads/writes; use it only for auth/session flows
- Do not directly access Supabase tables for app data
- Backend APIs are the source of truth for app data and authorization

## Security
- Never store secrets/client keys
- Validate input on backend too

## Styling
- Tailwind utilities first
- Reusable UI components

## Collaboration
See ../../AGENTS.md for Codex collaboration preferences and learning-mode rules.
