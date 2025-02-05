import { RiArrowDropDownLine} from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import Link from "next/link";

function Navbar() {
    return (

        <header className="bg-white shadow-sm border-b mx-auto flex flex-col ">
            {/* Top Section */}
            <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full ">
                <div className="text-center flex-1">

                    Winter Sale For New Bed And Free Express Delivery - OFF 50%!

                    <a href="#" className="underline hover:text-slate-300" >{"  "} ShopNow {" "}

                    </a>
                </div>
                <div className="flex items-center gap-[2px]">
                    <div className="text-white text-sm font-normal leading-[21px]">
                        English
                    </div>
                    <RiArrowDropDownLine className="text-white text-3xl" />
                </div>
            </div>

            {/* Navigation Section */}
            <div className="flex justify-between items-center px-8 py-4">
                <h1 className="text-2xl font-bold text-black px-16"><img src="/Logo.png" alt="Logo"/></h1>

                <nav className="hidden md:flex space-x-8 items-center">     
                    <a href="/" className="text-slate-600 hover:text-black underline"> Home </a>
                    <a href="/Shop" className="text-slate-600 hover:text-black"> Shop </a>
                    <a href="/Blog" className="text-slate-600 hover:text-black"> Blog </a>
                    <a href="/Contact" className="text-slate-600 hover:text-black"> Contact </a>
                </nav>
            {/* Search Icons Section */}

            <div className=" flex items-center space-x-6">
                <div className="hidden lg:flex items-center px-3 py-2">
                    {/* <input 
                    type="text"
                    placeholder="what are you looking for"
                    className="bg-slate-100 outline-none text-sm"/>  */}

                </div>
                    <MdPersonOutline />
                    <Link href="https://www.google.com/" target="_"><CiSearch /></Link>
                    <CiHeart/>
                    <Link href="./checkout"><IoCartOutline/></Link>
                
            </div>

            </div>


        </header>
    );
}

export default Navbar