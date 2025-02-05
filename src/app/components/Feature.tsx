import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa"; // { Importing required icons }

export default function FeaturesSection() {
  return (
    <section className="bg-[#FAF3EA] py-6"> {/* { Background and padding } */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 space-y-4 md:space-y-0"> {/* { Flex container with responsive spacing } */}
        
        {/* Feature 1: High Quality */}
        <div className="flex items-center space-x-4">
          <FaTrophy className="text-3xl text-[#242424]" /> {/* { Trophy icon } */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">High Quality</h3> {/* { Feature title } */}
            <p className="text-sm text-gray-600">crafted from top materials</p> {/* { Feature description } */}
          </div>
        </div>

        {/* Feature 2: Warranty Protection */}
        <div className="flex items-center space-x-4">
          <FaShieldAlt className="text-3xl text-[#242424]" /> {/* { Shield icon } */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Warranty Protection</h3> {/* { Feature title } */}
            <p className="text-sm text-gray-600">Over 2 years</p> {/* { Feature description } */}
          </div>
        </div>

        {/* Feature 3: Free Shipping */}
        <div className="flex items-center space-x-4">
          <FaTruck className="text-3xl text-[#242424]" /> {/* { Truck icon } */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3> {/* { Feature title } */}
            <p className="text-sm text-gray-600">Order over 150 $</p> {/* { Feature description } */}
          </div>
        </div>

        {/* Feature 4: 24/7 Support */}
        <div className="flex items-center space-x-4">
          <FaHeadset className="text-3xl text-[#242424]" /> {/* { Headset icon } */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">24 / 7 Support</h3> {/* { Feature title } */}
            <p className="text-sm text-gray-600">Dedicated support</p> {/* { Feature description } */}
          </div>
        </div>
      </div>
    </section>
  );
}