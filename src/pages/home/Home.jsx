import React from "react";
import Button from "../../components/Button";
import { FaArrowRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import BookSessionForm from "../../components/BookSession";
import studyMaterial from "../../assets/images/book (1).png";
import bookSession from "../../assets/images/working.png";
import WhyEdreq from "./components/WhyEdreq";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-[90vh] flex justify-center items-center bg-cover bg-no-repeat bg-gradient-to-r bg-yellow-400">
        <div className="flex flex-col space-y-5 static p-8 max-w-2xl">
          <h1 className="text-6xl font-bold">EDREQ</h1>
          <div className="flex flex-col space-y-2">
            <h1 className="text-n-15 font-bold text-xl lg:text-2xl">
              Study Anytime, Anywhere Unlock Pre-Recorded Lessons & Personalized
              Notes!
            </h1>
            <p className="rounded-lg font-semibold">
              Get Access to 6-10 Expert-Led Training Sessions at an Unbeatable
              Price!
            </p>
          </div>
        </div>
      </div>
      <WhyEdreq />
      <div className="container flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 relative  min:h-[90vh] py-10  bg-blue-50 lg:space-y-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-blue-600 font-bold">
            Book your Free Demo session
          </h2>
          <p>Get a free academic counselling session</p>
          <img
            src={bookSession}
            className="w-[300px] h-[300px] hidden md:block"
          />
        </div>
        <BookSessionForm />
      </div>
      <Features />
      <div
        className="w-full h-[60vh] lg:h-[90vh] bg-blue-50 flex justify-center items-center"
        // style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hidden lg:block">
          <img src={studyMaterial} />
        </div>
        <div className="flex flex-col space-y-5 w-full max-w-xl relative p-4">
          <h1 className="text-n-15 font-bold text-4xl">Study Materials</h1>
          <p className="text-sm md:text-medium">
            Master every subject with our expert-curated study resources
            tailored for Class 6-10 CBSE students. Designed by top educators,
            these materials make learning simpler, smarter, and more engaging.
          </p>
          <div>
            <Button
              className="bg-n-15 text-white flex gap-2"
              onClick={() => navigate("/study-materials")}
            >
              <span>Get Started Now</span>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;
