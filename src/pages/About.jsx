import React, { useRef } from 'react';

const About = () => {
  // Create a reference to the "Contact Us" section
  const contactRef = useRef(null);

  // Function to scroll to the contact section
  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          Welcome to our platform! We are dedicated to providing top-notch healthcare services, 
          connecting patients with experienced doctors across various specializations. 
          Our mission is to make healthcare more accessible and convenient for everyone.
        </p>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-sm text-gray-600">
            To revolutionize the way people access healthcare by connecting them with trusted
            professionals in a seamless and efficient manner.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-sm text-gray-600">
            To create a world where healthcare is a right, not a privilege, and every individual
            has access to the care they deserve.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-sm text-gray-600">
            We are committed to compassion, trust, innovation, and excellence in every aspect of our service.
          </p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our platform is designed with your needs in mind. We combine technology, expertise, and a passion for service to offer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>User-friendly navigation and features.</li>
          <li>Verified professionals and services you can trust.</li>
          <li>Secure and seamless booking experiences.</li>
          <li>24/7 support for your queries and concerns.</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Our Journey</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Founded with a vision to bridge gaps between users and professionals, our journey has been one of growth, innovation, and unwavering commitment to quality. With every milestone, we strive to exceed expectations and set new benchmarks for service excellence.
        </p>

        <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Have questions or feedback? We'd love to hear from you! Feel free to reach out to our support team or connect with us on social media.
        </p>

        
      </div>

    </div>
  );
};

export default About;
