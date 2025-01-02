import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate= useNavigate()
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10 items-center justify-between">
      {/* Left Side */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-lg text-white font-medium">Book Appointment</p>
        <p className="text-2xl sm:text-3xl font-semibold text-white">
          With 100+ Trusted Doctors
        </p>
        <button onClick={()=> {navigate('/login');scrollTo(0,0)}}className="mt-4 bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full h-auto rounded-lg"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
