import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
  const { docID } = useParams(); // Extract doctor ID from URL params
  const { doctors } = useContext(AppContext); // Get doctors data from context
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (doctors) {
      const selectedDoctor = doctors.find(doc => doc.id === docID);
      setDoctor(selectedDoctor);
    }
  }, [docID, doctors]);

  if (!doctor) {
    return <p className="text-center text-gray-500">Loading doctor details...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Book Appointment with {doctor.name}</h1>

      <div className="flex flex-col items-center gap-6">
        {/* Doctor Information */}
        <div className="flex flex-col items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <h2 className="text-lg font-semibold mt-4">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.speciality}</p>
          <p className="text-gray-500">Experience: {doctor.experience} years</p>
        </div>

        {/* Appointment Form */}
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-700 mb-2">
              Reason for Appointment
            </label>
            <textarea
              id="reason"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Briefly explain the reason for your visit..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
