import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { JobContextProvider } from './contexts/JobContext';
import { JobsContextProvider } from './contexts/JobsContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <JobsContextProvider>
          <JobContextProvider>
            <App />
          </JobContextProvider>
        </JobsContextProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
);
