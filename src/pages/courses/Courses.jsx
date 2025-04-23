import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import axios from "axios";
import { useFetchCourses } from "./api/getCourse";

const Courses = () => {
  const categories = [
    "All",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const navigate = useNavigate();

  const {
    data: coursesData,
    isFetching,
    isLoading,
    isSuccess,
  } = useFetchCourses({});

  useEffect(() => {
    if (isSuccess) {
      if (selectedClass === "All") {
        setFilteredCourses(coursesData.courses);
      } else {
        const filtered = coursesData.courses.filter(
          (course) => course.category.categoryName === selectedClass
        );
        setFilteredCourses(filtered);
      }
    }
  }, [selectedClass, coursesData, isSuccess]);

  const handleClassChange = (category) => {
    setSelectedClass(category);
  };

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <>
      <div className="container p-7 text-center">
        <p className="font-semibold h3">Classes</p>
      </div>
      <div className="container">
        <div className="sticky top-[5.6rem] lg:top-[5.1rem] z-30 bg-n-8 flex pt-5 space-x-6 border-b-2 border-n-2 text-n-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleClassChange(category)}
              className={`cursor-pointer px-3 py-2 ${
                selectedClass === category
                  ? "text-n-15 border-b-2 border-n-15"
                  : ""
              }`}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses &&
            filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                handleCourseClick={handleCourseClick}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
