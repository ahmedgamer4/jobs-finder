import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import jobs from './jobs.json';

function Job({
  company, title, jobType, logo,
}: { company: string, title: string, jobType: string, logo: string | undefined }) {
  return (
    <section className="flex justify-between p-4">
      <div className="flex gap-2">
        <img src={logo} alt="Company logo" className="rounded-md" />
        <div className="flex flex-col gap-2">
          <p>{company}</p>
          <h3>
            {title}
          </h3>
          <div className="border border-blue-700 rounded-sm text-blue-700 text-xs">
            {jobType === 'full_time'
              ? (
                <div>
                  Full time
                </div>
              ) : null}
          </div>
        </div>
      </div>
      <div>
        <p />
        <p />
      </div>
    </section>
  );
}

function App() {
  console.log(jobs);
  const job = jobs.jobs[0];

  return (
    <div className="min-h-screen w-11/12 mx-auto pt-7">
      <Header />
      <main className="flex gap-6">
        <SideBar />
        <section>
          <div>
            <Job
              company={job.company_name}
              jobType={job.job_type}
              logo={job.company_logo_url}
              title={job.title}
              key={job.id}
            />
          </div>
          <div />
        </section>
      </main>
    </div>
  );
}

export default App;
