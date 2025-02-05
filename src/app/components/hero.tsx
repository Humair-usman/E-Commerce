export default function Hero() {
    return (
      <>
        {/* w90rem h 63 */}
        
        <div className=" bg-hero bg-no-repeat bg-cover bg-center h-screen">
          <div className="w-[95%] text-center gap-5">
          <div className="bg-[#FFF3E3] absolute top-[50%] left-[50%] right-[20%] p-5" >
            <h6 className=" text-left font-bold text-[10px] text-black">New Arrival</h6>
            <h3 className=" text-[#B88E2F] text-left font-bold text-[2.5rem]">Discover Our <br /> New Collection</h3>
            <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className=" mt-2 mx-auto bg-[#B88E2F] px-[10px] py-[5px] text-white">BUY NOW</button>
          </div>
          </div>
        </div>
      </>
    )};