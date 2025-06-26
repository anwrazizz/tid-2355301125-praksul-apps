# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with Vite that demonstrates Backend as a Service (BaaS) implementation using Supabase. It's an academic project (TID-2355301125) showcasing a Notes application with full CRUD operations.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

### Core Structure
- **Frontend**: React 19 with Vite build tool
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: React Icons library
- **HTTP Client**: Axios for API communication
- **Backend**: Supabase (PostgreSQL) as BaaS

### Key Components
- `App.jsx` - Main application with tab navigation between Documentation and Notes
- `Documentation.jsx` - Static documentation component explaining the project
- `Notes.jsx` - Main notes CRUD component with form and table
- `GenericTable.jsx` - Reusable table component for data display
- `AlertBox.jsx` - Alert/notification component
- `LoadingSpinner.jsx` - Loading state component
- `EmptyState.jsx` - Empty state component

### Service Layer
- `notesAPI.js` - API service for Supabase REST API integration
  - Contains hardcoded API credentials for academic purposes
  - Implements fetchNotes(), createNote(), and deleteNote() methods
  - Uses Supabase REST API with proper headers and authentication

### Data Model
Supabase table: `notes`
- `id` (BIGSERIAL PRIMARY KEY)
- `title` (TEXT NOT NULL)
- `content` (TEXT NOT NULL) 
- `status` (VARCHAR(20)) - "To Do", "On Progress", "Done"
- `created_at` (TIMESTAMPTZ)

### Component Patterns
- Uses functional components with hooks (useState, useEffect)
- Props-based component reusability (especially GenericTable)
- Consistent error handling and loading states
- Form validation and user feedback
- Confirmation dialogs for destructive actions

### Styling Approach
- Tailwind CSS utility classes throughout with custom configuration
- Custom color palette with emerald, blue, and purple gradients
- Glass morphism effects with backdrop blur
- Custom animations defined in index.css (fade-in, slide-up, pulse-glow)
- Responsive design with mobile-first approach
- Status-based conditional styling (badges, colors)
- Inter font family for consistent typography

## API Integration

The application connects to Supabase REST API:
- Base URL: `https://eawtaeoanogylsgejljl.supabase.co/rest/v1/notes`
- Authentication via API key in headers
- Standard REST operations (GET, POST, DELETE)
- Error handling with try/catch blocks

## Notes for Development

- API credentials are hardcoded in `notesAPI.js` for academic demonstration
- The application uses Indonesian language in the UI
- GenericTable component is designed for responsive card-based layout instead of traditional tables
- All components follow consistent naming and styling patterns
- Loading states and error handling are implemented throughout
- Uses modern React patterns with functional components and hooks
- No testing framework is currently configured
- Built with Vite for fast development and optimized builds
# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.