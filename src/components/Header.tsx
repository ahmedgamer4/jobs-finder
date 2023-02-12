import React from 'react';
import background from './assets/backgroundImg.png';

function Header() {
  return (
    <header className="">
      <h1 className="text-gray-800 text-lg">
        {' '}
        <b>Jobs </b>
        Finder
      </h1>
      <div className="mt-8 relative flex flex-col h-28">
        <img src={background} className="h-28 object-cover rounded-lg" alt="" />
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-sm sm:w-4/6 w-11/12 ">
          <i className="fa-solid fa-briefcase absolute mt-[17.5px] ml-4 text-gray-400" />
          <input
            type="text"
            className="py-4 pl-10 outline-none rounded-md text-xs w-full"
            placeholder="Title, companies, expertise or benefits"
          />
          <button
            className="bg-blue-500 sm:absolute text-xs sm:text-sm sm:-ml-[130px] mt-[3px]
             text-white px-6 sm:px-10 py-[11px] text-center font-bold rounded-md"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
