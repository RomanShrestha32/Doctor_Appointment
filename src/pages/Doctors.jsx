import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams(); // Extract speciality from URL params
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { doctors } = useContext(AppContext); // Fetch doctors data from context
  const navigate = useNavigate();

  // Filter doctors based on speciality
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

  // Apply filter on component load or when `speciality` changes
  useEffect(() => {
    setLoading(true); // Show loading state during filtering
    applyFilter(speciality || '');
  }, [doctors, speciality]);

  const specialties = [
    'All',
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatrician',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Browse Doctors by Speciality</h1>

      {/* Specialties List */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {specialties.map((spec, index) => (
          <button
            key={index}
            onClick={() => {
              setLoading(true);
              const filter = spec === 'All' ? '' : spec;
              applyFilter(filter);
              navigate(filter ? `/doctors/${filter}` : '/doctors');
            }}
            className={`px-4 py-2 border rounded transition-all ${
              speciality === spec || (!speciality && spec === 'All')
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-blue-100'
            }`}
          >
            {spec}
          </button>
        ))}
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
                className="p-4 border rounded shadow hover:shadow-lg transition-all"
              >
                <h2 className="text-lg font-semibold">{doc.name}</h2>
                <p className="text-gray-600">{doc.speciality}</p>
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
