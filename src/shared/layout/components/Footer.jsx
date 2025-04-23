import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../../../assets/images/Edreq_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-n-2 pt-8 mt-4">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48">
          <img
            src={logo}
            alt="EDREQ"
            className="object-contain h-full w-full"
          />
        </div>

        <div className="flex justify-center flex-wrap gap-x-8 gap-y-">
          <Link
            to="/about-us"
            className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            About us
          </Link>
          <Link
            to="/contact-us"
            className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Contact us
          </Link>
          <Link
            to="#"
            className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Careers
          </Link>
          <Link
            to="#"
            className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Help and Support
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-2 mt-4">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt /> <span>9999999999</span>
          </div>
          <div className="flex items-center space-x-3">
            <IoMdMail /> <a href="#">info@edreq.in</a>
          </div>
        </div>
        <div className="flex mt-4 gap-9 flex-wrap">
 <Link
                  href="#"
                  className="text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaInstagram />
                </Link>

        </div>
      </div>
      <div className="container mt-3 border-t py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm md:text-lg ">
          © 2023 Chakrapriya Edu-Ventures Pvt Ltd. All rights reserved.
        </p>
        <div className="mt-2 lg:m-0 space-x-4 lg:space-x-7">
          <a
            href="#"
            className="text-n-1/500 text-sm md:text-lg transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-n-1/500 text-sm md:text-lg transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Terms and Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
