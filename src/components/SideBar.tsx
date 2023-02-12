import React from 'react';

function SideBar() {
  return (
    <section className="sm:w-1/3 mt-4">
      <div className="text-sm mb-5 ml-2">
        <label htmlFor="full-time">
          <input name="city" id="full-time" className="mr-2" type="checkbox" />
          Full time
        </label>
      </div>
      <div>
        <h4 className="text-gray-400 text-sm font-bold mb-2">LOCATION</h4>
        <div className="relative z-10 sm:text-sm shadow-md rounded-lg">
          <i className="fa-solid fa-globe absolute mt-[14.5px] ml-4 text-gray-400" />
          <input
            type="text"
            className="py-3 pl-10 outline-none rounded-md text-xs w-full"
            placeholder="Country"
          />
        </div>
      </div>

      <div className="text-sm text-gray-900 mt-5 ml-2 flex flex-col gap-2">
        <div className="">
          <label htmlFor="london">
            <input name="city" className="mr-2" id="london" type="radio" />
            London
          </label>
        </div>
        <div className="">
          <label htmlFor="amesterdam">
            <input name="city" className="mr-2" type="radio" id="amesterdam" />
            Amesterdam
          </label>
        </div>
        <div className="">
          <label htmlFor="new-york">
            <input name="city" className="mr-2" type="radio" id="new-york" />
            New York

          </label>
        </div>
        <div className="">
          <label htmlFor="berlin">
            <input name="city" className="mr-2" type="radio" id="berlin" />
            Berlin
          </label>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
