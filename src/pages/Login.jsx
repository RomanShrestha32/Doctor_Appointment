import React from 'react';

const Login = () => {
  return (
    <div className="px-6 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Login</h1>
        <p className="text-lg leading-relaxed mb-8">
          Please enter your details.
        </p>
      </div>
      <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Full Name Field */}
        <div className="mb-4">
          <label htmlFor="full_name" className="block text-sm font-semibold text-gray-600 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
