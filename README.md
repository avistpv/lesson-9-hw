# Today Tasks - Task Management App

A React + TypeScript task management application using react-hook-form for form handling and json-server as the backend API.

## Features

- Task creation with form validation
- React Hook Form for form state management
- Beautiful glassmorphic UI design
- Dark/Light mode support
- Responsive design
- RESTful API integration with json-server

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the JSON Server

In one terminal window, start the JSON server:

```bash
npm run server
```

This will start the API server on `http://localhost:3001`

### 3. Start the Development Server

In another terminal window, start the Vite dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
  ├── CreateTaskForm.tsx    # Main task creation form component
  ├── CreateTaskForm.css    # Form styling
  ├── main.tsx              # App entry point
  ├── utilities.ts          # API utility functions
  └── index.css             # Global styles

db.json                     # JSON Server database
vite.config.ts              # Vite configuration with proxy
```

## API Endpoints

The app uses JSON Server with the following endpoints:

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a single task
- `PUT /api/tasks/:id` - Update a task
- `PATCH /api/tasks/:id` - Partially update a task
- `DELETE /api/tasks/:id` - Delete a task

## Tech Stack

- React 19
- TypeScript
- Vite
- React Hook Form
- JSON Server
