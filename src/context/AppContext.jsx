import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Define the provider
const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  // Add other state and logic here if necessary
  const value = {
    doctors,
    setDoctors,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
