"use client"

import React, { useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        paymentMethod: 'creditCard',
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Order Submitted:', formData);
    };

    return (
        <div className="flex bg-gray-100 min-h-screen py-10">
            <div className="  max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
                <h1 className="text-2xl text-center  font-bold mb-6">Checkout</h1>
                <div className='flex w-[95%] m-5 gap-20'>
                    <form  className="w-50%" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h2 className="block text-xl font-bold text-gray-700 mb-2">Billing Details :</h2>
                            <label className="block text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">ZIP Code</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Payment Method</label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="creditCard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bankTransfer">Bank Transfer</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Place Order
                        </button> */}
                    </form>

                    {/* <div className=" space-5 border-4 h-60  p-5 mx-auto text-center">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span className="gap-10">Product</span>
                            <span>Price</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="gap-10">Wooden Chair</span>
                            <span>Rs:1500</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Dining Table</span>
                            <span>Rs: 5500</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>Rs: 7,000</span>
                        </div>
                    </div> */}
                    <div className="  h-60  p-5 mx-auto text-center ">

                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-center mb-2">
                            <span className='gap-3'>Product     Subtotal</span>
                            
                        </div>
                        <div className="flex justify-between mb-2"> 
                            <span>Asgaard sofa x 1</span> 
                            <span>Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between font-bold"> <span>Total</span>
                         <span>Rs. 250,000.00</span> </div>
                        <div className="mt-4">
                            <div className="flex items-center ">
                                <input type="radio" id="direct-bank-transfer" name="payment-method" checked className="mr-2" />
                                <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>
                            </div>
                            <p className="text-left text-sm mb-4"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </p>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="cash-on-delivery" name="payment-method" className="mr-2" />
                                <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                            </div>
                        </div>
                        <p className="text-left text-xs mt-4"> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                            <a href="#" className="underline">privacy policy</a>.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;