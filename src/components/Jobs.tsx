import React, { useContext } from 'react';
import Job from './Job';
import JobsContext, { JobType } from '../contexts/JobsContext';
import PaginatedItems from './Pagination';

function Jobs({
  currentItems, setCurrentItems,
}: { currentItems: JobType[] | any, setCurrentItems: (value: JobType[]) => void }) {
  const { jobs } = useContext(JobsContext);

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
