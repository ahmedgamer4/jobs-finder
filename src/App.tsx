import background from "./assets/backgroundImg.png"

const App = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto pt-7">
      <header className="">
        <h1 className="text-gray-800 text-lg">
          {" "}
          <b>Jobs </b>Finder
        </h1>
        <div className="mt-8 relative flex flex-col h-28">
          <img src={background} className="h-28 object-cover rounded-lg" alt="" />
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-sm sm:w-4/6 ">
            <i className="fa-solid fa-briefcase absolute mt-[17.5px] ml-4 text-gray-400"></i>
            <input
              type="text"
              className="py-4 pl-10 outline-none rounded-md text-xs w-full"
              placeholder="Title, companies, expertise or benefits"
            />
            <button className="bg-blue-500 absolute -ml-[130px] mt-[3px] text-sm text-white px-10 py-[11px] text-center font-bold rounded-md">Search</button>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="flex justify-start items-center text-sm gap-2">
            <input name="city" id="full-time" type="checkbox" />
            <label htmlFor="full-time">Full time</label>
          </div>

          <div>
            <h4 className="text-gray-500">LOCATION</h4>
            <div>
              
            </div>
          </div>

          <div>
            <div className="flex justify-start items-center text-sm gap-2">
              <input name="city" id="london" type="radio" />
              <label htmlFor="london">London</label>
            </div>
            <div className="flex justify-start items-center text-sm gap-2">
              <input name="city" type="radio" id="amesterdam" />
              <label htmlFor="amesterdam">Amesterdam</label>
            </div>
            <div className="flex justify-start items-center text-sm gap-2">
              <input name="city" type="radio" id="new-york" />
              <label htmlFor="new-york">New York</label>
            </div>
            <div className="flex justify-start items-center text-sm gap-2">
              <input name="city" type="radio" id="berlin" />
              <label htmlFor="berlin">Berlin</label>
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </div>
  )
}

export default App
