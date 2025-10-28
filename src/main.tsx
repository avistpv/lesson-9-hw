import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateTaskForm from './CreateTaskForm.tsx'
import './CreateTaskForm.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="app">
      <header>
        <h1>Today Tasks</h1>
      </header>
      <main>
        <CreateTaskForm />
      </main>
    </div>
  </StrictMode>,
)
