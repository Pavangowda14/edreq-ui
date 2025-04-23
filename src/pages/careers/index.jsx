import React, { useState } from "react";
import { useApplyJobApplication } from "./api/applyJobApplication";
import Loader from "../../shared/components/Loader";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const {mutate:applyJobApplication,isPending:isJobApplicationPending}=useApplyJobApplication()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyJobApplication(formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Careers
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 mb-6">
            We are always looking for talented individuals to join our team. If
            you are passionate about education and technology, we would love to
            hear from you. Browse our current job openings below and apply
            today!
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Frontend Developer
            </h3>
            <p className="text-gray-600 mb-4">
              We are looking for a skilled Frontend Developer to join our team.
              You will be responsible for building and maintaining the user
              interface of our platform.
            </p>
            <button
              onClick={() =>
                document.getElementById("apply-form").scrollIntoView()
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Backend Developer
            </h3>
            <p className="text-gray-600 mb-4">
              We are seeking a Backend Developer to work on our server-side
              logic and database management. Experience with Node.js and MongoDB
              is preferred.
            </p>
            <button
              onClick={() =>
                document.getElementById("apply-form").scrollIntoView()
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Content Writer
            </h3>
            <p className="text-gray-600 mb-4">
              We are hiring a Content Writer to create engaging and informative
              content for our courses and blog. Strong writing and research
              skills are required.
            </p>
            <button
              onClick={() =>
                document.getElementById("apply-form").scrollIntoView()
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div
          id="apply-form"
          className="bg-white shadow-lg rounded-lg p-8 mt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Apply for a Position
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                accept=".pdf,.doc,.docx"
                // required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Write your cover letter here..."
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
    {isJobApplicationPending && <Loader message="Submitting.."/>}
    </>
  );
};

export default Careers;
