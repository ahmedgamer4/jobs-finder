import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  Link, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Jobs from './components/Jobs';
import JobPost from './components/JobPost';
import JobContext from './contexts/JobContext';
import JobsContext, { JobsType, JobType } from './contexts/JobsContext';
import getJobs from './services/jobs';

function Home() {
  const { jobs, dispatchJobs } = useContext(JobsContext);
  const [allJobs, setAllJobs] = useState<JobsType>();
  const [currentItems, setCurrentItems] = useState<JobType[]>();

  const { isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => getJobs(),
    onSuccess: (res: JobsType): void => {
      dispatchJobs({ type: 'SET_JOBS', jobs: res });
      setAllJobs(res);
      setCurrentItems(res.jobs.slice(0, 5));
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <Header allJobs={allJobs} />
      <main className="flex flex-col gap-6 sm:flex-row">
        <SideBar allJobs={allJobs} />
        {isLoading ? <div>loading....</div>
          : <Jobs currentItems={currentItems} setCurrentItems={setCurrentItems} />}
      </main>
    </div>
  );
}

function App() {
  const [currentJob] = useContext(JobContext);

  return (
    <div className="min-h-screen w-11/12 mx-auto pt-7 mb-8">
      <h1 className="text-gray-800 text-lg">
        {' '}
        <b>Jobs </b>
        Finder
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Jobs/:id"
          element={(
            <JobPost
              company={currentJob.company_name}
              country={currentJob.country}
              days={currentJob.days}
              description={currentJob.description}
              fullTime={currentJob.job_type}
              logo={currentJob.company_logo}
              title={currentJob.title}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
