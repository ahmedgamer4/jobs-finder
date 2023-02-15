import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Job from './Job';
import getJobs from '../services/jobs';
import JobsContext, { JobsType, JobType } from '../contexts/JobsContext';
import PaginatedItems from './Pagination';

function Jobs({
  currentItems, setCurrentItems,
}: { currentItems: JobType[] | undefined, setCurrentItems: (value: JobType[]) => void }) {
  const { jobs } = useContext<JobsType | React.Dispatch<{ type: string; jobs: { 'job-count': number; jobs: JobType[] } }>>(JobsContext);

  return (
    <section className="flex-grow mt-6">
      {currentItems.map((job: JobType) => (
        <Job
          job={job}
          key={job.id}
        />
      ))}
      <PaginatedItems items={jobs} setCurrentItems={setCurrentItems} />
    </section>
  );
}

export default Jobs;
