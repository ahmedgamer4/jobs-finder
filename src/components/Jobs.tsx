import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Job from './Job';
import getJobs from '../services/jobs';
import JobsContext, { JobType } from '../contexts/JobsContext';
import PaginatedItems from './Pagination';

function Jobs() {
  const { jobs, dispatchJobs } = useContext(JobsContext);
  const [currentItems, setCurrentItems] = useState();

  useEffect(() => {
  }, [jobs]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => getJobs(),
    onSuccess: (): void => dispatchJobs({ type: 'SET_JOBS', jobs: data }),
    refetchOnWindowFocus: false,
  });

  if (!isLoading) {
    setCurrentItems(jobs.jobs);
    console.log(currentItems);
  }

  if (isLoading) return <div>loading....</div>;
  if (isError) return <p>error</p>;

  return (
    <section className="flex-grow mt-6">
      {currentItems.jobs.map((job: JobType) => (
        <Job
          job={job}
          key={job.id}
        />
      ))}
      <PaginatedItems items={jobs.jobs} setCurrentItems={setCurrentItems} />
    </section>
  );
}

export default Jobs;
