import React from 'react';

function Job({
  company, title, jobType, logo, locaction, days,
}: {
  company: string, title: string, jobType: string,
  logo: string | undefined, locaction: string, days: string
}) {
  return (
    <section className="flex justify-between p-3 shadow-md rounded-md hover:shadow-lg relative
    transition-transform hover:-translate-y-1 mb-6 bg-white cursor-pointer"
    >
      <div className="flex gap-3 text-gray-800">
        <img src={logo} alt="Company logo" className="rounded-lg w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]" />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">{company}</p>
          <h3 className="text-lg sm:text-xl">
            {title}
          </h3>
          {jobType === 'full_time'
            ? (
              <div className="border-2 border-blue-600 rounded-md text-blue-600 text-xs font-semibold w-16 py-1 px-1">
                Full time
              </div>
            ) : null}
        </div>
      </div>
      <div className="flex flex-col self-end">
        <div className="flex gap-6 text-gray-600 text-xs py-2">
          <p>{locaction}</p>
          <p>{days}</p>
        </div>
      </div>
    </section>
  );
}

export default Job;
