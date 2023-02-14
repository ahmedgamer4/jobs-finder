import React, { useContext, useEffect, useState } from 'react';
import JobsContext, { JobType } from '../contexts/JobsContext';
import getJobs from '../services/jobs';

function SideBar() {
  const { jobs, dispatchJobs } = useContext(JobsContext);
  const [allJobs, setAllJobs] = useState({});

  useEffect(() => {
    getJobs().then((res) => setAllJobs(res));
  }, []);

  const onClick = async (e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const newJobs = allJobs.jobs.filter((j: JobType) => j.job_type === 'full_time');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.target.checked === true
      ? dispatchJobs({ type: 'SET_JOBS', jobs: { 'jobs-count': newJobs.length, jobs: newJobs } })
      : dispatchJobs({ type: 'SET_JOBS', jobs: allJobs });
  };

  const handleCountrySearchChange = (e) => {
    const newJobs = allJobs.jobs.filter((j: JobType) => j.candidate_required_location
      .toLowerCase().includes(e.target.value.toLowerCase()));
    dispatchJobs({ type: 'SET_JOBS', jobs: { 'jobs-count': newJobs.length, jobs: newJobs } });
  };

  return (
    <section className="sm:w-1/3 mt-4">
      <div className="text-sm mb-5 ml-2">
        <label htmlFor="full-time">
          <input
            name="city"
            id="full-time"
            className="mr-2"
            type="checkbox"
            onChange={onClick}
          />
          Full time
        </label>
      </div>
      <div>
        <h4 className="text-gray-400 text-sm font-bold mb-2">LOCATION</h4>
        <div className="relative z-10 sm:text-sm shadow-md rounded-lg">
          <i className="fa-solid fa-globe absolute mt-[14.5px] ml-4 text-gray-400" />
          <input
            type="text"
            className="py-3 pl-10 outline-none rounded-md text-xs w-full"
            placeholder="Country"
            onChange={handleCountrySearchChange}
          />
        </div>
      </div>
    </section>
  );
}

export default SideBar;
