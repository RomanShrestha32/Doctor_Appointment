import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-10 min-h-[600px]">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="Illustration of group profiles"
          />
          <p className="text-sm font-light text-white">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <button
          onClick={toggleModal}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="Doctor consultation illustration"
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="date">
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="speciality">
                  Speciality
                </label>
                <select id="speciality" className="w-full border rounded p-2">
                  <option value="general">General Physician</option>
                  <option value="gynecologist">Gynecologist</option>
                  <option value="dermatologist">Dermatologist</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="neurologist">Neurologist</option>
                  <option value="gastroenterologist">Gastroenterologist</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-300 px-4 py-2 rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
