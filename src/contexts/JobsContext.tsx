import React, {
  createContext, useMemo, useReducer,
} from 'react';
// import getJobs from '../services/jobs';
// import data from '../jobs.json';

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

export type JobsType = {
  'job-count': number,
  jobs: JobType[]
};

function jobsReducer(state: { 'job-count': number, jobs: JobType[] }, action: { type: string, jobs: { 'job-count': number, jobs: JobType[] } }) {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs;
    default:
      return state;
  }
}

const JobsContext = createContext<JobsType | null>(null);

export function JobsContextProvider({ children }: { children: React.ReactNode }) {
  // const data = () => getJobs().then((res) => res);
  const [jobs, dispatchJobs] = useReducer(jobsReducer, {} as JobsType);

  return (
    <JobsContext.Provider value={{ jobs, dispatchJobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
