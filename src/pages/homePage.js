import React, { useState } from 'react';

export const HomePage = () => {
  const [hasAppointment, setHasAppointment] = useState (false);

  return (
    <div className="container mx-auto">
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Hey, user</h1>
        <h2 className="text-2xl mt-4">A clean car is a happy car!</h2>
      </div>

      {/* Search Bar */}
      <div className="mt-8 mb-4">
        <input type="text" placeholder="Search" className="border border-gray-300 rounded-md py-2 px-4 w-full" />
      </div>

      {/* Featured Services */}
      <div className="mt-8 mb-4 overflow-x-auto flex flex-nowrap">
        {/* Service Cards */}
        {/* Replace the placeholders with actual services */}
        <div className="mr-4">
          <img src="service1.jpg" alt="Service 1" className="rounded-full h-32 w-32" />
          <p>Service 1</p>
        </div>
        <div className="mr-4">
          <img src="service2.jpg" alt="Service 2" className="rounded-full h-32 w-32" />
          <p>Service 2</p>
        </div>
        {/* Add more service cards as needed */}
      </div>

      {/* Appointment Card */}
      <div className="mt-8">
        {hasAppointment ? (
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="font-bold mb-2">Your Next Appointment</h2>
            {/* Display appointment details */}
          </div>
        ) : (
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="font-bold mb-2">Book Your Appointment Now!</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Book Now</button>
          </div>
        )}
      </div>

      {/* Special Offers Card */}
      <div className="mt-8">
        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="font-bold mb-2">Special Offers</h2>
          {/* Display special offers */}
        </div>
      </div>

      {/* About Us Card */}
      <div className="mt-8">
        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="font-bold mb-2">About Us</h2>
          {/* About Us content */}
        </div>
      </div>

      {/* Tips and Tricks Card */}
      <div className="mt-8">
        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="font-bold mb-2">Tips and Tricks</h2>
          {/* Tips and tricks content */}
        </div>
      </div>

    </div>
  );
}

export default HomePage();