import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">About Us</h1>

        <section className="bg-white p-8 rounded-md shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Hungry Hopper! We started our journey in 2024 with a mission to Our mission is to revolutionize the way people experience food delivery by combining innovative technology with exceptional customer service. We aim to create seamless, efficient, and delightful experiences for our users, ensuring they have access to their favorite meals with just a few clicks.
            
          </p>
        </section>

        <section className="bg-white p-8 rounded-md shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to [describe your mission in detail]. We believe in [mention any core values or principles] and are committed to [explain how you fulfill your mission or values].
          </p>
        </section>

        

        <section className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            We’d love to hear from you! If you have any questions or want to learn more about what we do, feel free to reach out to us.
          </p>
          <ul className="mt-4">
            <li className="text-gray-800">
              <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
            </li>
            <li className="text-gray-800">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
            </li>
            <li className="text-gray-800">
              <strong>Address:</strong> 123 Main Street, City, State, ZIP
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
