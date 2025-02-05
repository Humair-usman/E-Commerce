import { FaFacebook, FaLinkedin,FaTwitter} from "react-icons/fa";

import SmallStars from "./star"
import Link from "next/link";


function Productpage() {
    return (
        <div className="">
            {/* 1st Section */}
            <div className="flex justify-start w-[100%] bg-[#F9F1E7]  h-[80px] ">
                <div className=" flex justify-start items-center w-[90%] mx-auto bg-[#F9F1E7] gap-5">
                    <div className="text-[#9F9F9F] m-2">Home {">"}</div>
                    <div className="text-[#9F9F9F]">Shop {">"}</div>
                    <div className="text-[#000000]  border-l-2 p-5">Asgaard sofa</div>
                </div>
            </div>
            {/* 2nd Section */}

            <div className="w-full shadow-custom ">
                <div className="flex justify-between items-start p-5 bg-white w-[95%] mx-auto h-[600px]">
                    {/* Left Side Div */}
                    <div className="flex justify-start items-start space-x-10 w-[90%] mx-auto">
                        <div><img src="/Side 76X416.png" alt="Sidebar" className="max-w-[76px] max-h-[380px]" /></div>
                        <div><img src="/Main 481X500.png" alt="SideMain" className="max-w-[481px] max-h-[380px]" /></div>
                    </div>


                    {/* Right Side Div */}
                    <div className="w-[85%] mx-auto leading-[2]">
                        <div><h1 className="text-[24px]">Asgard Sofa</h1></div>
                        <div className="text-[#D9D9D9]"> Rs: 25,000.00</div>
                        <div className="flex items-center gap-5 "><SmallStars /> <p className="border-l-2  p-[5px]">& Customer Reviews</p></div>
                        <div><p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p></div>
                        <div>
                            <h4>Size</h4>
                            <div className="flex items-center align-middle justify-start gap-5  ">
                                <div className="border-[1px] w-10 text-center hover:bg-slate-500 hover:text-white">L</div>
                                <div className="border-[1px] w-10 text-center  hover:bg-slate-500 hover:text-white">M</div>
                                <div className="border-[1px] w-10 text-center  hover:bg-slate-500 hover:text-white">XL</div>
                            </div>
                        </div>
                        <div>
                            <h4>Color</h4>
                            <div className="flex justify-start gap-5">
                                <div className="w-5 h-5 bg-[#816DFA] rounded-full font-sm"></div>
                                <div className="w-5 h-5 bg-[#000000] rounded-full"></div>
                                <div className="w-5 h-5 bg-[#B88E2F] rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-start p-5 gap-3 ">
                            <div className="border-[1px] w-20 rounded-sm text-center hover:bg-slate-500 hover:text-white">- 1 +</div>
                            <div className="border-[1px] w-[110px] rounded-sm text-center hover:bg-slate-500 hover:text-white"><Link href="./Cart">Add to Cart</Link></div>
                            <div className="border-[1px] w-[110px] rounded-sm text-center hover:bg-slate-500 hover:text-white"> + Compare</div>
                        </div>
                        <div className="border-t-2">
                        <div>SKU  :  SS01</div>
                        <div>Catergory : Sofa</div>
                        <div>Tag : Sofa Chair,Home,Shop</div>
                        <div className="flex gap-5 items-center">
                            <h5>Share :</h5>
                            <FaFacebook />
                            <FaLinkedin />
                            <FaTwitter />
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* 3rd Section */}
            <div className="shadow-custom">
                <div className="flex justify-center items-center text-[#9F9F9F] gap-20 w-[649px] h-[70px] font-semibold text-2xl mx-auto ">
                    <div className="hover:text-[#000000]">Description</div>
                    <div className="hover:text-[#000000]">Additional Information</div>
                    <div className="hover:text-[#000000]">Reviews</div>
                </div>
                <div className="felx flex-row justify-center align-middle items-center w-[80%] mx-[auto] leading-6"><p className="p-5">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="p-5 felx justify-center items-center ">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></div>

                <div><img src="/Last 2 Product 1239X348.png" alt="Main Last" className="max-w-[681px] max-h-[580px] flex justify-center align-middle items-center mx-auto" /></div>

            </div>
            
            <div className="bg-[#F5F5F5] py-12">
            <div className="container mx-auto px-4">
                {/* <!-- Header --> */}
                <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Products</h2>

                {/* <!-- Products Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Product 1 --> */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img src="/Images (1).png" alt="Syltherine" className="w-full h-48 object-cover rounded-md"/>
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-30%</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Syltherine</h3>
                            <p className="text-sm text-gray-500">Stylish cafe chair</p>
                            <div className="mt-2 flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-900">Rs 2,500.000</p>
                                <p className="text-sm text-gray-400 line-through">Rs 3,500.000</p>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img src="/Images (2).png" alt="Leviosa" className="w-full h-48 object-cover rounded-md"/>
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                    <button className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded shadow">Add to cart</button>
                                </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Leviosa</h3>
                            <p className="text-sm text-gray-500">Stylish cafe chair</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 2,500.000</p>
                        </div>
                    </div>

                    {/* <!-- Product 3 --> */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img src="/Images (3).png" alt="Lolito" className="w-full h-48 object-cover rounded-md"/>
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-50%</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Lolito</h3>
                            <p className="text-sm text-gray-500">Luxury big sofa</p>
                            <div className="mt-2 flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-900">Rs 7,000.000</p>
                                <p className="text-sm text-gray-400 line-through">Rs 14,000.000</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product 4 --> */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img src="/Images (4).png" alt="Respira" className="w-full h-48 object-cover rounded-md"/>
                                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Respira</h3>
                            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 500.000</p>
                        </div>
                    </div>

                    {/* <!-- Additional products follow a similar structure... --> */}
                </div>
            </div>
        </div>







        </div>
    )
}


export default Productpage