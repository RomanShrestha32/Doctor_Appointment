import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d53bd08-c33e-4188-a90a-9ca7f2df66f6");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Sent successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000); // Reset message after 5 seconds
    } else {
      console.log("Error", res);
      setResult("Error: " + res.message);
    }
  };

  return (
    <div className="px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
        {/* Subject Field */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-600 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here"
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Feedback Message */}
      {result && <div className="text-center mt-4 text-lg text-green-600">{result}</div>}
    </div>
  );
};

export default Contact;
