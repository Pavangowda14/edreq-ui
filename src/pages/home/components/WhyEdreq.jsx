import React from "react";
import teacherImg from "../../../assets/images/teacher_icon.png";
import affordableImg from "../../../assets/images/affordable_icon.png";
import teachingImg from "../../../assets/images/teaching_icon.png";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const whyEdreqData = [
  {
    img: teacherImg,
    title: "Academia's Best Trainers",
    description:
      "We have trained hundreds of students and have been trusted by thousands.",
  },
  {
    img: teachingImg,
    title: "Personalized Learning Approach",
    description:
      "Different students have different learning styles, and our program helps them learn in their own way for better understanding and retention.",
  },
  {
    img: affordableImg,
    title: "Convenient & Affordable",
    description:
      "Practice wherever you are at flexible hours with economical rates that guarantee excellent education.",
  },
];

const WhyEdreq = () => {
  
  return (
    <div className="py-10 flex flex-col space-y-10 lg:space-y-15 items-center bg-n-2 min-h-[100vh] justify-center">
      <h1 className="text-4xl text-n-15 font-bold">WHY EDREQ</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {whyEdreqData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border shadow-xl p-6 flex flex-col gap-2 items-center w-[260px] h-[300px] lg:w-[300px] bg-white"
          >
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyEdreq;
