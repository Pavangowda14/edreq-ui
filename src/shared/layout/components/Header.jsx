import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useUser } from "../../../context/UserContext";
import logo from "../../../assets/images/Edreq_logo.png";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { useFetchCourses } from "../../../pages/courses/api/getCourse";
import { logout } from "../../../pages/auth/api/logout";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuth, logoutUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = async () => {
    try {
      const data = await logout();
      if (data.success) {
        console.log(data);
      }
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const {
    data: coursesData,
    isFetching,
    isLoading,
    isSuccess,
  } = useFetchCourses({});

  const uniqueClasses = [...new Set(coursesData?.courses)];
  const handleNavigate = (courseId) => {
    navigate(`/course/${courseId}`);
    setIsOpen(false);
  };
  return (
    <div
      className={`relative top-0 left-0 w-full z-50 border-b-4 border-n-2 bg-n-8 max-h-[5.5rem]`}
    >
      <div className="flex items-center lg:justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <button
          className="text-3xl py-2 px-4 lg:hidden"
          onClick={handleNavToggle}
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <Link
          className={`block w-[13rem] h-[4.2rem] lg:w-[13rem] mx-auto lg:mx-0 lg:h-[4.3rem]`}
          to="/"
        >
          <img
            src={logo}
            alt="EDREQ"
            className="object-contain h-full w-full"
          />
        </Link>
        <div className="border rounded-full p-3 bg-gray-200 lg:hidden">
          <FaPhoneAlt />
        </div>
        <nav
          className={`${
            navOpen ? "flex" : "hidden"
          } fixed top-[5.5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex   lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col md:items-center text-xl border-t-2 lg:text-sm lg:m-auto lg:flex-row w-full">
            <Link
              to="/"
              className={`px-5 py-3 uppercase lg:text-lg lg:font-semibold transition-colors ${
                isActive("/") ? "text-n-1" : "text-n-1/50 hover:text-n-1"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="relative font-code transition-colors px-5 py-6 md:py-5 uppercase lg:text-lg lg:font-semibold lg:leading-5 text-n-1/50 hover:text-n-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                Courses ▾
              </button>
              <ul className="absolute left--6 w-48 bg-n-2 shadow-md rounded-md hidden group-hover:block">
                {uniqueClasses?.map((eachClass, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigate(eachClass._id)}
                  >
                    {eachClass.category?.categoryName}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className={`px-5 py-3 uppercase lg:text-lg lg:font-semibold transition-colors ${
                isActive("/study-materials")
                  ? "text-n-1 "
                  : "text-n-1/50 hover:text-n-1"
              }`}
              to="/study-materials"
            >
              Study Material
            </Link>
            <div className="p-6 hidden lg:flex justify-center items-center gap-2">
              <div className="border rounded-full p-2 bg-gray-200">
                <FaPhoneAlt />
              </div>
              <div className="flex-grow-1 flex-shrink-0">
                <p className="font-thin text-xs">Talk to our experts</p>
                <p className="font-semibold">1800-000-000</p>
              </div>
            </div>
            <div
              className={`block relative px-5 ${
                isAuth ? "-order-1 bg-n-2 group" : ""
              } lg:order-last lg:bg-transparent lg:border-none p-5 border-b-2  `}
            >
              {isAuth ? (
                <div className="relative">
                  <div className="flex items-center space-x-2 focus:outline-none">
                    <span>Hi, {user?.fullName}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="lg:absolute lg:right-0 mt-3 lg:w-48 bg-n-2 border rounded-md shadow-lg hidden group-hover:block">
                    <Link
                      to="/my-courses"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Courses
                    </Link>
                    <Link
                      to="/my-profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Button
                  className="text-n-8 bg-n-15 ml-auto w-full lg:text-n-1 lg:bg-n-8 md:w-auto text-center"
                  href="/login"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
