import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import {
  Link, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Jobs from './components/Jobs';
import JobPost from './components/JobPost';
import JobContext from './contexts/JobContext';
import JobsContext from './contexts/JobsContext';

function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-6 sm:flex-row">
        <SideBar />
        <Jobs />
      </main>
    </div>
  );
}

function App() {
  const [currentJob] = useContext(JobContext);
  const { dispatchJobs } = useContext(JobsContext);

  return (
    <div className="min-h-screen w-11/12 mx-auto pt-7">
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
