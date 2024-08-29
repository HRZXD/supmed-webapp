import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  // Assuming you have a way to check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('authToken'); // Example: check if a token exists in localStorage

  return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
};

export default Protected;
