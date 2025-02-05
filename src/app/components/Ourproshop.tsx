import Link from "next/link";

export default function Ourproshop() {
    return (
        <div className="bg-[#F5F5F5] py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Products</h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product 1 {Syltherine} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (1).png"
                                alt="Syltherine"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded shadow">
                                    <Link href="./ProPage">Add to cart</Link>
                                </button>
                            </div>
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

                    {/* Product 2 {Leviosa} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (2).png"
                                alt="Leviosa"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded shadow">
                                    <Link href="./ProPage">Add to cart</Link>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Leviosa</h3>
                            <p className="text-sm text-gray-500">Stylish cafe chair</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 2,500.000</p>
                        </div>
                    </div>

                    {/* Product 3 {Lolito} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (3).png"
                                alt="Lolito"
                                className="w-full h-48 object-cover rounded-md"
                            />
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

                    {/* Product 4 {Respira} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (4).png"
                                alt="Respira"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Respira</h3>
                            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 500.000</p>
                        </div>
                    </div>

                    {/* Product 5 {Syltherine 2} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (1).png"
                                alt="Syltherine"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded shadow">
                                    <Link href="./ProPage">Add to cart</Link>
                                </button>
                            </div>
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

                    {/* Product 6 {Leviosa 2} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (2).png"
                                alt="Leviosa"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded shadow">
                                    <Link href="./ProPage">Add to cart</Link>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Leviosa</h3>
                            <p className="text-sm text-gray-500">Stylish cafe chair</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 2,500.000</p>
                        </div>
                    </div>

                    {/* Product 7 {Lolito 2} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (3).png"
                                alt="Lolito"
                                className="w-full h-48 object-cover rounded-md"
                            />
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

                    {/* Product 8 {Respira 2} */}
                    <div className="group relative bg-white rounded-lg shadow-md p-4">
                        <div className="relative">
                            <img
                                src="/Images (4).png"
                                alt="Respira"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900">Respira</h3>
                            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
                            <p className="mt-2 text-lg font-bold text-gray-900">Rs 500.000</p>
                        </div>
                    </div>

                    {/* Duplicate this structure for remaining 8 products, modifying comments as needed */}
                </div>
            </div>
        </div>











    )
}