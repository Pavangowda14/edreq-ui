import React from "react";
import expertImg from "../../../assets/images/expert_icon.png";
import timeImg from "../../../assets/images/time_icon.png";
import permormanceImg from "../../../assets/images/performance_icon.png";
import digitalImg from "../../../assets/images/digital_icon.png";
import consultationImg from "../../../assets/images/consultation_icon.png";

const features = [
  {
    img: expertImg,
    title: "Expert Instructors",
    description:
      "Get taught by top educators specialized in making hard-to-understand topics, gritty and easy.",
  },
  {
    img: consultationImg,
    title: "Concept Clarity Sessions",
    description:
      "After each lesson, interactive sessions are conducted to clear any doubts and strengthen conceptual clarity.",
  },
  {
    img: permormanceImg,
    title: "Performance Tracking",
    description:
      "Receive in-depth progress reports and expert evaluation to pinpoint strengths and areas for improvement.",
  },
  {
    img: timeImg,
    title: "Flexible Learning Hours",
    description:
      "Study after school, on weekends, or whenever suits your schedule better — take your preferred time slots.",
  },
  {
    img: digitalImg,
    title: "Advanced Digital Tools",
    description: "Enjoy crisp video lectures, live Q&As, and screen sharing.",
  },
];

const Features = () => {
  return (
    <div className="px-5 py-15 lg:px-10 flex flex-col space-y-7 lg:space-y-10 items-center">
      <h1 className="text-xl lg:text-3xl font-bold text-n-15">
        Why Our Online Training for Classes 6-10 Stands Out
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 gap-y-10 lg:gap-y-15 lg:gap-x-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col w-[260px]">
            <div>
              <img src={feature.img} alt={feature.title} />
            </div>
            <h2 className="text-bold text-lg text-orange-500">
              {feature.title}
            </h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
