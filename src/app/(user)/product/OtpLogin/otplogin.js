"use client";
import { useState } from 'react';
import { API_BASE_URL } from '../../../../../utils/constants';
import Cookies from 'js-cookie'; // Import the js-cookie library

const OtpLogin = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Login and Sign Up

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Reset errors
    setErrors({
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    });

    let valid = true;

    // Validate form fields based on current mode
    if (isSignUp) {
      // Sign Up validation
      if (formData.fullName.trim() === '') {
        setErrors(prevErrors => ({ ...prevErrors, fullName: 'Full name is required' }));
        valid = false;
      }
      if (!validateEmail(formData.email)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
        valid = false;
      }
      if (!validatePhoneNumber(formData.phoneNumber)) {
        setErrors(prevErrors => ({ ...prevErrors, phoneNumber: 'Phone number must be 10 digits' }));
        valid = false;
      }
      if (formData.password.trim() === '') {
        setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
        valid = false;
      }
    } else {
      // Login validation
      if (!validateEmail(formData.email)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
        valid = false;
      }
      if (formData.password.trim() === '') {
        setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
        valid = false;
      }
    }

    if (valid) {
      try {
        const endpoint = isSignUp ? `${API_BASE_URL}/kycData/register` : `${API_BASE_URL}/kycData/login`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name: formData.fullName,
            EmailId: formData.email,
            Password: formData.password,
            Mobile: formData.phoneNumber,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          // Set cookie with token or user ID
          Cookies.set('UserId', data.token, { expires: 7 }); // Store token or user ID in a cookie, expires in 7 days

          if (isSignUp || !isSignUp) {
            onSignUpSuccess(); // Notify the Modal that action was successful
          }
          setSubmissionStatus(isSignUp ? 'Sign Up successful!' : 'Login successful!');
        } else {
          throw new Error(data.message || 'Authentication failed');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setSubmissionStatus('Authentication failed.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8  w-full max-w-md">
        <div className="flex mb-4">
          <button
            onClick={() => setIsSignUp(true)}
            className={`px-4 py-2  ${isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`px-4 py-2  ${!isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Login
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={loading}
            >
              {loading ? (isSignUp ? 'Signing Up...' : 'Logging In...') : (isSignUp ? 'Sign Up' : 'Login')}
            </button>
          </div>

          {submissionStatus && (
            <div className="mt-4 p-4 text-green-800 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-400">
              {submissionStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OtpLogin;
