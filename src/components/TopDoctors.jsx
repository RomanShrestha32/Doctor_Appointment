import React from 'react';
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const TopDoctors = () => {
  const navigate = useNavigate();

  // Function to handle the navigation when clicking a doctor card
  const handleDoctorClick = (id) => {
    navigate(`/appointments/${id}`); // Navigate with the doctor id or name
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 bg-gray-100 py-10 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-primary">Top Doctors to Book</h1>
      <p className="text-center">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="grid grid-cols-auto gap-6 w-full px-4">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item.id} // Changed to use `id` as key
            className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => handleDoctorClick(item.id)} // Pass `item.id` to navigate
          >
            {/* Image Container with Background and Hover Effect */}
            <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center mb-4 transform transition duration-300 hover:scale-110">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm mb-2">
                <span>Available</span>
              </div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          window.scrollTo(0, 0); // Ensure scroll happens correctly
        }}
        className="mt-6 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
