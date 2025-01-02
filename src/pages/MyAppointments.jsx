import React, { useState, useEffect } from 'react';

const mockAppointments = [
  { id: 1, doctor: "Dr. Richard James", specialty: "General physician", time: "2024-12-16T10:00", status: "Booked" },
  { id: 2, doctor: "Dr. Emily Larson", specialty: "Gynecologist", time: "2024-12-17T14:00", status: "Booked" },
  { id: 3, doctor: "Dr. Sarah Patel", specialty: "Dermatologist", time: "2024-12-18T11:30", status: "Completed" },
  { id: 4, doctor: "Dr. Christopher Lee", specialty: "Pediatrics", time: "2024-12-19T09:00", status: "Booked" },
];

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(4);

  useEffect(() => {
    setAppointments(mockAppointments);
  }, []);

  const handleCancel = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
    alert("Appointment cancelled.");
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="appointments-container px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">My Appointments</h1>
        <p className="text-lg leading-relaxed mb-8">
          View and manage your upcoming appointments.
        </p>
      </div>
      
      {/* Appointment List */}
      <div className="appointment-list">
        {currentAppointments.length === 0 ? (
          <p className="text-center text-gray-600">You don't have any upcoming appointments.</p>
        ) : (
          currentAppointments.map(appointment => (
            <div key={appointment.id} className="appointment-item mb-4 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{appointment.doctor}</h3>
              <p className="text-gray-600">{appointment.specialty}</p>
              <p className="text-gray-600">Date: {formatDate(appointment.time)}</p>
              <p className="text-gray-600">Status: 
                <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span>
              </p>
              {appointment.status === "Booked" && (
                <div className="appointment-actions mt-4">
                  <button 
                    onClick={() => handleCancel(appointment.id)} 
                    className="btn btn-danger text-white bg-red-500 hover:bg-red-600 rounded-lg py-2 px-4"
                  >
                    Cancel Appointment
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="pagination text-center mt-8">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="pagination-btn mr-2"
        >
          Previous
        </button>
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={indexOfLastAppointment >= appointments.length} 
          className="pagination-btn ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MyAppointments;
