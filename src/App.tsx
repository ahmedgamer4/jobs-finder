import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import {
  Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Jobs from './components/Jobs';
import JobPost from './components/JobPost';
import JobContext from './contexts/JobContext';
import JobsContext, { JobsType, JobType } from './contexts/JobsContext';
import getJobs from './services/jobs';
import Footer from './components/Footer';

function Home({
  currentItems, setCurrentItems,
}: { currentItems: JobType[] | undefined, setCurrentItems: (value: JobType[]) => void }) {
  const { dispatchJobs } = useContext(JobsContext);
  const [allJobs, setAllJobs] = useState<JobsType>();

  const { isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => getJobs(),
    onSuccess: (res: JobsType): void => {
      dispatchJobs({ type: 'SET_JOBS', jobs: res });
      setAllJobs(res);
      setCurrentItems(res.jobs.slice(0, 5));
    },
    retryOnMount: true,
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
  const { job } = useContext(JobContext);
  const [currentItems, setCurrentItems] = useState<JobType[]>();

  return (
    <div className="min-h-screen w-11/12 mx-auto py-7">
      <h1 className="text-gray-800 text-lg">
        {' '}
        <b>Jobs </b>
        Finder
      </h1>
      <Routes>
        <Route path="/" element={<Home currentItems={currentItems} setCurrentItems={setCurrentItems} />} />
        <Route
          path="/Jobs/:id"
          element={(
            <JobPost
              company={job.company_name}
              country={job.candidate_required_location}
              days={job.publication_date}
              description={job.description}
              fullTime={job.job_type}
              logo={job.company_logo}
              title={job.title}
            />
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
