import React from 'react';

type JobPostType = {
  title: string,
  fullTime: string | undefined,
  days: string,
  logo: string,
  description: string,
  country: string,
  company: string,
};

function JobPost({
  title, fullTime, days, logo, description, country, company,
}: JobPostType) {
  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <section>
        <button type="button">
          <i className="fa-solid fa-arrow-left" />
          <p>Back to search</p>
        </button>
        <h4>HOW TO APPLY</h4>
        <p>
          Please email a copy of your resume and online portfolio
          to wes@kasisto.com & CC eric@kasisto.com
        </p>
      </section>
      <section>
        <div>
          <h1 className="text-xl sm:text-2xl">{title}</h1>
          <div className="border-2 border-blue-600 rounded-md text-blue-600 text-xs font-semibold w-16 py-1 px-1">
            Full time
          </div>
        </div>
        <p>{days}</p>
        <div className="flex gap-2">
          <img src={logo} alt="company logo" className="w-[40px] h-[40px]" />
          <div>
            <p>{company}</p>
            <p>{country}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
