import { useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex justify-center container bg-n-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-7">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
          <div className="">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Address
              </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
                <p className="text-gray-600">
                  123 Edre Street, Tech City, India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-lg" />
                <p className="text-gray-600">1800-000-000</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-lg" />
                <p className="text-gray-600">info@edre.in</p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-800"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-800"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-800"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h1 className="text-2xl text-center text-gray-800 mb-6">
          General Enquiry
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Number</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your Number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
