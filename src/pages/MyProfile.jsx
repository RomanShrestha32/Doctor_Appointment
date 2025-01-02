import React, { useState } from 'react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Roman Shrestha',
    email: 'romannshresthaa999@gmail.com',
    phone: '9843645661',
    address: 'Madhyapur Thimi,Bhaktapur',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save updated profile details (e.g., API call) can go here
  };

  return (
    <div className="px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-primary mb-6">My Profile</h1>
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg">{profile.fullName}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg">{profile.email}</p>
            )}
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Phone
            </label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg">{profile.phone}</p>
            )}
          </div>
          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Address
            </label>
            {isEditing ? (
              <textarea
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg">{profile.address}</p>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              >
                Save
              </button>
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
