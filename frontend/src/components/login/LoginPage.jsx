import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [idCard, setIdCard] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/login', { idCard, password });
      if (response.data.message === 'Login successful') {
        localStorage.setItem('authToken', response.data.token); // Store token in localStorage
        navigate('/data'); // Redirect to the data page
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col bg-white w-full max-w-md p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Doctor Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="idCard" className="block text-sm font-medium text-gray-700">ID Card</label>
            <input
              type="text"
              id="idCard"
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
