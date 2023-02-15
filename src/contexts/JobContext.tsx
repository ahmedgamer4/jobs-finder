import React, { createContext, useReducer, useMemo } from 'react';
import data from '../jobs.json';

const initialState = data.jobs[0];

type IntialStateType = typeof initialState;

function jobReducer(state: IntialStateType, action: { type: string, job: IntialStateType }) {
  switch (action.type) {
    case 'SET':
      return action.job;
    default:
      return state;
  }
}

const JobContext = createContext<{
  job: IntialStateType;
  dispatchJob: React.Dispatch<any>
}>({
  job: initialState,
  dispatchJob: () => { },
});

export function JobContextProvider({ children }: { children: React.ReactNode }) {
  const [job, dispatchJob] = useReducer(jobReducer, initialState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <JobContext.Provider value={{ job, dispatchJob }}>
      {children}
    </JobContext.Provider>
  );
}

export default JobContext;
