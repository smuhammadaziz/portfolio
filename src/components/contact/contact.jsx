import React from 'react';

function ContactSection() {
  return (
    <div className="bg-indigo-950 py-20 text-white font-inter">
      <div className="container mx-auto px-6 md:px-20 lg:px-40 flex flex-col items-center text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-lg mb-6 text-gray-400">
          Feel free to reach out via email or phone, or use the form below to send a message.
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 text-gray-300">
          <p><span className="font-semibold text-white">Email:</span> workmuhammadaziz@gmail.com</p>
          <p><span className="font-semibold text-white">Phone:</span> +998 95 029-10-80</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-300 text-left text-sm font-medium mb-2" htmlFor="name">
              Your Name *
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-left text-sm font-medium mb-2" htmlFor="email">
              Your Email *
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-left text-sm font-medium mb-2" htmlFor="phone">
              Your Phone
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="phone"
              placeholder="+998 99 999-99-99"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-300 text-left text-sm font-medium mb-2" htmlFor="message">
              Your Message *
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              placeholder="Write your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
