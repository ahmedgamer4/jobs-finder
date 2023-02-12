import React from 'react';
import Job from './Job';
import jobs from '../jobs.json';

function Jobs() {
  const today = new Date();

  return (
    <section className="flex-grow mt-6">
      {jobs.jobs.slice(0, 10).map((job) => (
        <Job
          company={job.company_name}
          jobType={job.job_type}
          logo={job.company_logo}
          title={job.title}
          locaction={job.candidate_required_location}
          days={`${String(today.getDate() - Number(job.publication_date.slice(8, 10)))} days ago`}
          key={job.id}
        />
      ))}
      <div />
    </section>
  );
}

export default Jobs;
