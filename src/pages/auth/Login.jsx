import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authImg1 from "../../assets/images/58385.jpg";
import { login } from "./api/login";
import { register } from "./api/register";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    classNo: "",
    password: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const { isAuth, loginUser } = useUser();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordRegex.test(password)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!validatePassword(formData.password)) {
      validationErrors.password =
        "Password must have at least 8 characters, 1 uppercase, 1 number, and 1 special character";
    }

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }
    setFieldErrors({});
    setIsLoading(true);
    setError("");

    try {
      let requestData = { email: formData.email, password: formData.password };

      if (currentState === "signup") {
        requestData.fullName = formData.fullName;
        requestData.classNo = formData.classNo;
      }
      const responseData =
      currentState === "login"
        ? await login(requestData)
        : await register(requestData);

    if (responseData.success) {
      if (currentState === "login") {
        await loginUser(responseData.user);
        toast.success(responseData.message);
        navigate("/my-courses");
      } else {
        navigate("/verify-email");
      }
    } else {
      setError(responseData.message);
    }
  } catch (error) {
    setError(error.response?.data?.message || "Something went wrong");
  } finally {
    setFormData({ fullName: "", email: "", classNo: "", password: "" });
    setFocusedField(null);
    setIsLoading(false);
  }
};

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (isAuth) navigate("/my-courses");
  }, [isAuth]);

  return (
    <div className={`container mt-7 ${isLoading ? "cursor-wait" : ""}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 place-items-center">
        <div className="hidden lg:block lg:h-[80vh] lg:w-96">
          <img src={authImg1} alt="img" className="w-full h-full object-fit" />
        </div>
        <div className="py-5 lg:py-5 space-y-5 w-full max-w-lg">
          <p className="text-xl lg:text-2xl font-semibold text-center">
            {currentState === "login"
              ? "Login to your Edreq Account"
              : "Sign up and start learning"}
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {currentState === "signup" && (
              <div className="relative border-2 border-n-1 rounded-lg">
                <label
                  htmlFor="fullName"
                  className={`absolute px-3 font-semibold transition-all duration-300 ${
                    focusedField === "fullName" || formData.fullName
                      ? "text-xs top-1"
                      : "text-lg"
                  }`}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  maxLength="30"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl bg-transparent"
                  required
                />
              </div>
            )}
            <div>
              <div className="relative border-2 border-n-1 rounded-lg">
                <label
                  htmlFor="email"
                  className={`absolute px-3 font-semibold transition-all duration-300 ${
                    focusedField === "email" || formData.email
                      ? "text-xs top-1"
                      : "text-lg"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl bg-transparent"
                  required
                />
              </div>
              {fieldErrors.email && (
                <p className="text-red-500 text-sm">{fieldErrors.email}</p>
              )}
            </div>
            <div>
              <div className="relative border-2 border-n-1 rounded-lg">
                <label
                  htmlFor="password"
                  className={`absolute px-3 font-semibold transition-all duration-300 ${
                    focusedField === "password" || formData.password
                      ? "text-xs top-1"
                      : "text-lg"
                  }`}
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  maxLength="20"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl bg-transparent"
                  required
                />
              </div>
              {fieldErrors.password && (
                <p className="text-red-500 text-sm">{fieldErrors.password}</p>
              )}
            </div>
            {currentState === "signup" && (
              <select
                id="classNo"
                name="classNo"
                className="block w-full px-2 text-lg py-3 border-2 border-n-1 bg-transparent rounded-lg shadow-sm focus:outline-none"
                value={formData.classNo}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Class
                </option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            )}
            <button
              className="w-full font-semibold text-n-8 text-lg bg-n-15 p-3 rounded-lg"
              type="submit"
              disabled={isLoading}
            >
              {currentState === "login" ? "Log in" : "Sign up"}
            </button>
          </form>
          {currentState === "login" ? (
            <div className="flex justify-center space-x-2">
              <p>Don't have an account?</p>
              <p
                onClick={() => setCurrentState("signup")}
                className="text-blue-700 font-semibold cursor-pointer"
              >
                Sign up
              </p>
            </div>
          ) : (
            <div className="flex justify-center space-x-2">
              <p>Already have an account?</p>
              <p
                onClick={() => setCurrentState("login")}
                className="text-blue-700 font-semibold cursor-pointer"
              >
                Log in
              </p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1500} closeOnClick />
    </div>
  );
};

export default Login;
