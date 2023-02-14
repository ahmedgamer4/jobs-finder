import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col sm:flex-row gap-10 mt-8">
      <section className="w-1/3">
        <Link to="/">
          <button className="flex gap-2 text-sm items-center text-blue-500" type="button">
            <i className="fa-solid fa-arrow-left" />
            <p>Back to search</p>
          </button>
        </Link>
        <h4 className="text-gray-500 font-bold mt-3">HOW TO APPLY</h4>
        <p className="mt-3 text-sm text-gray-800">
          Please email a copy of your resume and online portfolio
          to wes@kasisto.com & CC eric@kasisto.com
        </p>
      </section>

      <section className="flex-grow flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <h1 className="text-xl sm:text-2xl">{title}</h1>
          {fullTime === 'full_time'
            ? (
              <div className="border-2 border-blue-600 rounded-md text-blue-600 text-xs font-semibold w-16 h-7 py-1 px-1">
                Full time
              </div>
            )
            : null}
        </div>
        <p>{days}</p>
        <div className="flex gap-2">
          <img src={logo} alt="company logo" className="w-[40px] h-[40px]" />
          <div>
            <p>{company}</p>
            <p>{country}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: description}}>
          {/* {description} */}
        </div>
      </section>
    </div>
  );
}

export default JobPost;
