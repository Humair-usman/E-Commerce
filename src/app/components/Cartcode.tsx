export default function Cart() {
    return (

        <div className="bg-hero bg-no-repeat bg-cover bg-center">
            <div className="">
                {/* //Content Will be Retrun Here */}
                <h1 className="flex justify-center items-center h-[20px]"></h1>
                <div />
                <div className="w-[95%] mx-auto ">
                <div className="container">
                    {/* <!-- Shopping Cart Section --> */}
                    <div className="sm:flex shadow-md my-10">
                        {/* <!-- Left Section: Cart Items --> */}
                        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                            {/* <!-- Cart Header --> */}
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">1 Item</h2>
                            </div>

                            {/* <!-- Product Row --> */}
                            <div className="flex items-center py-5 border-b w-[95%]">
                                {/* <!-- Product Image --> */}
                                <div className="w-1/6">
                                    <img
                                        src=".\Main 481X500.png"
                                        alt="Asgaard Sofa"
                                        className="w-full h-auto"
                                    />
                                    {/* <!-- {Image of the product} --> */}
                                </div>
                                {/* <!-- Product Details --> */}
                                <div className="w-3/6 pl-5">
                                    <p className="font-semibold text-lg">Asgaard sofa</p>
                                    <p className="text-gray-500">Rs. 250,000.00</p>
                                </div>
                                {/* <!-- Quantity Selector --> */}
                                <div className="w-1/6 text-center">
                                    <input
                                        type="number"
                                        min="1"
                                        value="1"
                                        className="w-12 border text-center"
                                    />
                                    {/* <!-- {Quantity input field} --> */}
                                </div>
                                {/* <!-- Product Subtotal --> */}
                                <div className="w-1/6 text-right">
                                    <p className="font-semibold">Rs. 250,000.00</p>
                                </div>
                                {/* <!-- Remove Icon --> */}
                                <div className="w-1/12 text-right">
                                    {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 cursor-pointer hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
           </svg>  */}
                                    {/* <!-- {Trash icon for removing the product} --> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right Section: Cart Totals --> */}
                        <div id="summary" className="w-full sm:w-1/4 bg-[#F9F1E7] m-r-3 border-4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8 m-r-5">Cart Totals</h1>
                            {/* <!-- Subtotal --> */}
                            <div className="flex justify-between mt-10">
                                <span className="font-medium text-gray-600">Subtotal</span>
                                <span className="font-semibold">Rs. 250,000.00</span>
                            </div>
                            {/* <!-- Total --> */}
                            <div className="flex justify-between mt-4">
                                <span className="font-medium text-gray-600">Total</span>
                                <span className="font-bold text-orange-500">Rs. 250,000.00</span>
                            </div>
                            {/* <!-- Checkout Button --> */}
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-white py-3 mt-6 w-full">
                                Check Out
                            </button>
                            {/* <!-- {Checkout button for proceeding to payment} --> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </div>



    )
}