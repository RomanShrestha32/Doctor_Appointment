import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (!doctors) return;
    const filtered = speciality
      ? doctors.filter(doc => doc.speciality === speciality)
      : doctors;
    setFilterDoc(filtered);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    applyFilter();
  }, [doctors, speciality]);

  const specialties = ['General physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Gastroenterologist'];

  return (
    <div>
      <h1>Browse Doctors by Speciality</h1>
      <div>
        {specialties.map((spec, index) => (
          <p key={index} className={speciality === spec ? 'highlighted' : ''}>
            {spec}
          </p>
        ))}
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : filterDoc.length > 0 ? (
          filterDoc.map(doc => (
            <div key={doc.id}>
              <h2>{doc.name}</h2>
              <p>{doc.speciality}</p>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
