import React from 'react'
import { Link } from 'react-router-dom'
import { doctorData } from '../assets/assets' // Assuming doctor data is in assets

const Doctor = () => {
  return (
    <div className='flex flex-col items-center py-16 text-gray-800' id='doctors'>
      <h1 className='text-3xl font-medium'>Our Trusted Doctors</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Meet our experienced doctors who are ready to assist you.
      </p>
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-scroll'>
        {doctorData.map((doctor, index) => (
          <Link
            to={`/doctor/${doctor.id}`} // Link to each doctor's page
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img src={doctor.image} alt={doctor.name} className='w-24 h-24 rounded-full' />
            <p>{doctor.name}</p>
            <p>{doctor.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Doctor
