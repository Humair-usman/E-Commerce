'use clint'
import { TiLocation } from 'react-icons/ti'; // { Importing location icon from react-icons }
import { FaPhone } from 'react-icons/fa6'; // { Importing phone icon from react-icons }
import { IoTimeSharp } from 'react-icons/io5'; // { Importing time icon from react-icons }

export default function ContactPage() {
  return (
    <main className="font-poppins"> {/* { Applying Poppins font globally } */}

      {/* Header Section */}
      <div className="h-64 w-full bg-hero bg-cover bg-center"></div> {/* { Background image at the top of the page } */}


      {/* Title Section */}
      <div className="text-center mt-5 px-4"> {/* { Reduced margin-top to 5px (20px equivalent) } */}
        <h1 className="text-4xl font-semibold text-black">Get In Touch With Us</h1> {/* { Main heading } */}
        <p className="text-lg text-gray-400 font-normal mt-2 max-w-3xl mx-auto"> {/* { Reduced margin-top to 2px (8px equivalent) } */}
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate! {/* { Supporting description } */}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-10 px-6 md:px-20"> {/* { Container for contact info and form } */}

        {/* Contact Information Section */}
        <div className="flex-1 space-y-6"> {/* { Reduced spacing between sections to 6 } */}
          {/* Address Section */}
          <div className="flex items-start space-x-4">
            <TiLocation className="text-3xl text-gray-900 mt-1" /> {/* { Location Icon } */}
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Address</h2>
              <p className="text-gray-700 mt-1">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start space-x-4">
            <FaPhone className="text-3xl text-gray-900 mt-1" /> {/* { Phone Icon } */}
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Phone</h2>
              <p className="text-gray-700 mt-1">Mobile: +(84) 546-6789</p>
              <p className="text-gray-700 mt-1">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Time Section */}
          <div className="flex items-start space-x-4">
            <IoTimeSharp className="text-3xl text-gray-900 mt-1" /> {/* { Working Time Icon } */}
            <div>
              <h2 className="font-bold text-gray-900 text-xl">Working Time</h2>
              <p className="text-gray-700 mt-1">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-700 mt-1">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 mt-10 md:mt-0 w-full max-w-md">
          <form className="space-y-4"> {/* { Reduced spacing to 4 between inputs for compactness } */}

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name</label> {/* { Name label } */}
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label> {/* { Email label } */}
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-gray-700">Subject (Optional)</label> {/* { Subject label } */}
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Subject"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label> {/* { Message label } */}
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-yellow-700 py-3 rounded hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>

      </div>

      {/* Footer Section */}
      <div className="h-64 w-full bg-cover bg-center mt-10" style={{ backgroundImage: "url('/cool.jpg')" }}></div> {/* { Footer background image with reduced margin-top } */}

    </main>
  );
}