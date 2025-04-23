import React from "react";
import Button from "./Button";

const CourseCard = ({ course , handleCourseClick}) => {

  return (
    <>
      <div className="border-2 rounded-lg" onClick={() => handleCourseClick(course._id)}>
        <div className="h-[11rem] md:h-[15rem]">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-fit"
          />
        </div>
        <div className="px-2 py-4 space-y-4">
        <p className="text-medium font-semibold">{course.title}</p>
        <p className="text-sm text-n-3">CBSE Board</p>
          <hr />
          <div className="flex justify-between items-center">
            <p className="font-semibold">{course.price}</p>
            <Button>view details</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
