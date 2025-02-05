export default function SubHero() {

    return (
        <>
            
                <div className="mt-5">
                    <h3 className="text-center font-bold text-[2.5rem] text-black"> Browse The Range</h3>
                    <p className="text-center  text-[20px] text-[#666666] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-center gap-5 mt-5 m-5 leading-loose">
                    <div className="">
                        <img className="" src="/Dining.png" alt="Picture of the author" />
                        <h6 className="text-center font-bold text-[20px]  text-black">Dining</h6>
                    </div>
                    <div className="">
                        <img src="/Living.png" alt="Picture of the author" />
                        <h6 className="text-center font-bold text-[20px] text-black">Living</h6>
                    </div>
                    <div className="">

                        <img src="Bed.png" alt="Picture of the author" />
                        <h6 className="text-center font-bold text-[20px] text-black">Bedroom</h6>
                    </div>
                </div>
        
        </>
    )
}