import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams(); // Extract speciality from URL params
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Filter doctors based on specialty
  const applyFilter = (filterSpeciality = '') => {
    if (!doctors || doctors.length === 0) {
      setFilterDoc([]);
      setLoading(false);
      return;
    }

    const filtered = filterSpeciality
      ? doctors.filter(doc =>
          doc.speciality.toLowerCase().includes(filterSpeciality.toLowerCase())
        )
      : doctors;

    setFilterDoc(filtered);
    setLoading(false);
  };

  // Apply filter on component load or when speciality changes
  useEffect(() => {
    setLoading(true); // Show loading state during filtering
    applyFilter(speciality || '');
  }, [speciality]);

  const specialties = [
    'All',
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatrician',
    'Neurologist',
    'Gastroenterologist',
  ];

  // Handle doctor profile redirection
  const handleDoctorClick = (doctorId) => {
    navigate(`/doctor/${doctorId}`); // Navigate to the specific doctor's details page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Browse Doctors by Specialty</h1>

      {/* Specialties List */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {specialties.map((spec, index) => {
          const isActive =
            speciality === spec || (!speciality && spec === 'All');
          return (
            <button
              key={index}
              onClick={() => {
                setLoading(true);
                const filter = spec === 'All' ? '' : spec;
                applyFilter(filter);
                navigate(filter ? `/doctors/${filter}` : '/doctors');
              }}
              className={`px-4 py-2 border rounded transition-all ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-blue-100'
              }`}
            >
              {spec}
            </button>
          );
        })}
      </div>

      {/* Doctors List */}
      <div>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : filterDoc.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterDoc.map(doc => (
              <div
                key={doc.id}
                className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => handleDoctorClick(doc.id)} // Pass item.id to navigate
              >
                {/* Image Container with Background and Hover Effect */}
                <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center mb-4 transform transition duration-300 hover:scale-110">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm mb-2">
                    <span>Available</span>
                  </div>
                  <p className="font-semibold text-lg">{doc.name}</p>
                  <p className="text-gray-600">{doc.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
