import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import JobContext from '../contexts/JobContext';

type JobType = {
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
};

function Job({ job }: { job: JobType }) {
  const [, dispatchJob] = useContext(JobContext);
  const today = new Date();

  return (
    <Link to={`/jobs/${job.id}`}>
      <button
        className="flex justify-between p-3 shadow-md rounded-md hover:shadow-lg relative
      transition-transform hover:-translate-y-1 mb-6 bg-white cursor-pointer w-full"
        onClick={() => dispatchJob({ type: 'SET', job })}
        type="button"
      >
        <div className="flex gap-3 text-gray-800">
          <img src={job.company_logo} alt="Company logo" className="rounded-lg w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]" />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">{job.company_name}</p>
            <h3 className="text-lg sm:text-xl">
              {job.title}
            </h3>
            {job.job_type === 'full_time'
              ? (
                <div className="border-2 border-blue-600 rounded-md text-blue-600 text-xs font-semibold w-16 py-1 px-1">
                  Full time
                </div>
              ) : null}
          </div>
        </div>
        <div className="flex flex-col self-end">
          <div className="flex gap-6 text-gray-600 text-xs py-2">
            <p>{job.candidate_required_location}</p>
            <p>{`${String(today.getDate() - Number(job.publication_date.slice(8, 10)))} days ago`}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}

export default Job;
