import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CreateTaskForm from './CreateTaskForm';
import './CreateTaskForm.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div id="app">
      <header>
        <h1>Today Tasks</h1>
      </header>
      <main>
        <CreateTaskForm />
      </main>
    </div>
  </StrictMode>
);
