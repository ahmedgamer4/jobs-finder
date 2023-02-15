import React, {
  createContext, useReducer,
} from 'react';
// import getJobs from '../services/jobs';
import data from '../jobs.json';

export interface JobType {
  id: number,
  url: string,
  title: string,
  company_name: string,
  company_logo: string,
  category: string,
  tags: string[],
  job_type: string,
  publication_date: string,
  candidate_required_location: string,
  salary: string,
  description: string,
}

// export type JobsType = {
//   'job-count': number,
//   jobs: JobType[]
// };

export type JobsType = typeof data;

function jobsReducer(state: JobsType, action: { type: string, jobs: JobsType }): JobsType {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs;
    default:
      return state;
  }
}

const initialState: JobsType = {
  'job-count': 1,
  jobs: [data.jobs[0]],
};

const JobsContext = createContext<{
  jobs: JobsType;
  dispatchJobs: React.Dispatch<any>
}>({
  jobs: initialState,
  dispatchJobs: () => { },
});

export function JobsContextProvider({ children }: { children: React.ReactNode }) {
  const [jobs, dispatchJobs] = useReducer(jobsReducer, initialState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <JobsContext.Provider value={{ jobs, dispatchJobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
