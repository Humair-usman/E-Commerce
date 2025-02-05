export default function slides () {
    return (
      
        <div className="flex justify-center items-center gap-5 p-10 w-[100%] h-[85%] bg-[#FCF8F3]">
          <div className=" pt-9">
  
          <h4 className=" font-extrabold text-[2rem] ">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] p-2">Exlore More</button>
          </div>
          <div className=" flex gap-5">
  
          <img src="/inner.png" className="w-[300px] h-[250px]"  alt="Picture of the author" />
          <img src="/Sideinner.png" className="w-[300px] h-[250px]" alt="Picture of the author" />
  
          </div>
        </div>
      
    );
  }