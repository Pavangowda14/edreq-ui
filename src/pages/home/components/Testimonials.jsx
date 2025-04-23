import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
const testimonials = [
  {
    review:
      "Edreq has made a huge difference in my child's learning. The tutors explain concepts in a simple way, making it easy to understand. My son now enjoys studying and performs much better in school!",
    name: "Anjali M., Parent",
    star: 5,
  },
  {
    review:"I was struggling with math, but Edreq’s personalized tutoring helped me a lot. The one-on-one sessions cleared all my doubts, and now I feel more confident in solving problems on my own.",
     name: "Rahul S., Class 9 Student",
    star: 4,
  },
  {
    review:"Edreq provides structured and well-organized study materials that cover everything in the CBSE syllabus. The doubt-clearing sessions have been very helpful for my daughter’s exam preparation.",
     name: "Ravi K., Parent",
    star: 5,
  },
  {
    review:"Thanks to Edreq, I improved my grades in science and social studies. The teachers are patient and supportive, making learning a stress-free experience. I highly recommend it to all students!",
    name: "Priya D., Class 8 Student",
    star: 4,
  },
  {
    review:"The best part about Edreq is the personalized mentorship. My son receives individual attention, and the teachers track his progress regularly. It’s a great platform for academic improvement.",
    name: "Meera J., Parent",
    star: 5,
  },
  {
    review:"Edreq has been a game changer for me. The well-structured lessons and expert guidance helped me understand difficult subjects easily. I feel fully prepared for my board exams now!",
     name: "Amit T., Class 10 Student",
    star: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="container my-10 py-4">
      <p className="h3 mb-4 font-semibold text-center">Testimonials</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-5 flex flex-col items-center text-center space-y-3 justify-center w-[20rem]"
          >
            <div className=" inline-block p-3 border rounded-full bg-n-15">
              <RiDoubleQuotesL color="white" size={30} className="mx-auto" />
            </div>
            <p className="text-center">{testimonial.review}</p>
            <div className="flex justify-center space-x-1">
              {Array.from({ length: testimonial.star }).map((_, index) => (
                <FaStar key={index} color="gold" />
              ))}
            </div>
            <p>{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
