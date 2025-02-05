export default function ShopBelowHero() {
    return (
  
  
      <div className="bg-hero bg-no-repeat bg-cover bg-center">
        <div className="">
          {/* //Content Will be Retrun Here */}
          <h1 className="flex justify-center items-center h-[20px]"></h1>
          <div />
          <div className="flex items-baseline mt-[20%]">
            <div className="flex justify-between items-center w-full h-16 bg-[#F9F1E7] px-6">
              {/* <!-- Left Section: Filter and Results Info --> */}
              <div className="flex items-center gap-5">
                {/* <!-- Filter Icon and Text --> */}
                <img src="/filter.png" alt="Filter" className="w-6 h-6" />
                <p className="text-gray-700 font-medium">Filter</p>
                <span className="text-gray-500">|</span>
                {/* <!-- Results Info --> */}
                <p className="text-gray-700">Showing 1–16 of 32 results</p>
              </div>
  
              {/* <!-- Right Section: Show and Sort --> */}
              <div className="flex items-center gap-5">
                {/* <!-- Show --> */}
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 font-medium">Show</p>
                  <input type="text" placeholder="16"
                    className="w-10 h-10 bg-black text-white text-center rounded-md focus:outline-none" />
                </div>
  
                {/* <!-- Sort By --> */}
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 font-medium">Sort by</p>
                  <input type="text" placeholder="Default"
                    className="w-32 h-10 bg-black text-white text-center rounded-md focus:outline-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }