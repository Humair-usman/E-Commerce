import Hero from "./components/hero";
import SubHero from "./components/SubHero";
import Slides from "./components/Slides";
import Ourproduct from "./components/Ourpro";
import HomLast from "./components/HomLast";
import ProductCard from "./Products/page";



export default function Home() {
  return (
   <div className="">
     {/*<Navbar/>*/} 
    <Hero/>
    <SubHero/>
    <Ourproduct/>
    <Slides/>
    <HomLast/>
    <ProductCard/>
    {/*<Footer/> */}
   </div>
  );
}