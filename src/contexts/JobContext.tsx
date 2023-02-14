import React, { createContext, useReducer, useMemo } from 'react';

function jobReducer(state: object, action: { type: string, job: object }) {
  switch (action.type) {
    case 'SET':
      return action.job;
    default:
      return state;
  }
}

const JobContext = createContext({});

export function JobContextProvider({ children }: { children: React.ReactNode }) {
  const [job, dispatchJob] = useReducer(jobReducer, {});
  const value = useMemo(() => [job, dispatchJob], [job]);
  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
}

export default JobContext;
