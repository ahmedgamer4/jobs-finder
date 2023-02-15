import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import JobsContext, { JobsType, JobType } from '../contexts/JobsContext';
import getJobs from '../services/jobs';
import background from './assets/backgroundImg.png';

function Header({ allJobs }: { allJobs: JobsType | undefined }) {
  const { jobs, dispatchJobs } = useContext(JobsContext);
  const [searchInput, setSearchInput] = useState('');

  const setSearch = () => {
    const newJobs = allJobs
      .jobs.filter((j: JobType) => j.title.toLowerCase().includes(searchInput));
    dispatchJobs({
      type: 'SET_JOBS',
      jobs: { 'job-count': newJobs.length, jobs: newJobs },
    });
    setSearchInput('');
  };

  return (
    <header className="">
      <div className="mt-8 relative flex flex-col h-28">
        <img src={background} className="h-28 object-cover rounded-lg" alt="" />
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-sm sm:w-4/6 w-11/12 ">
          <i className="fa-solid fa-briefcase absolute mt-[17.5px] ml-4 text-gray-400" />
          <input
            type="text"
            className="py-4 pl-10 outline-none rounded-md text-xs w-full"
            placeholder="Search by job title...."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="bg-blue-500 sm:absolute text-xs sm:text-sm sm:-ml-[130px] mt-[3px]
             text-white px-6 sm:px-10 py-[11px] text-center font-bold rounded-md"
            type="button"
            onClick={setSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
