import React from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFetchCoursesEnrolled } from "./api/getCoursesEnrolled";
import Loader from "../../shared/components/Loader";

const MyCourses = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const { data: coursesEnrolled, isPending: isCoursedEnrolledPending } =
    useFetchCoursesEnrolled();

  const handleCourseClick = (id) => {
    navigate(`/lessons/${id}`);
  };
  return (
    <>
      <p className="p-5 h5 md:h4 font-semibold">
        Welcome {user && user.fullName}, continue Learning
      </p>
      <p className="p-5 h3 md:h4 bg-n-2">Enrolled Courses</p>
      {coursesEnrolled && coursesEnrolled?.courses.length > 0 ? (
        <div className="mt-3 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesEnrolled.courses.map((course) => (
            <div className="p-5 border rounded-lg flex flex-col gap-7" key={course._id} onClick={()=>handleCourseClick(course._id)}>
            <div className="h-48 w-full">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">
                {course.title}
              </h2>
              <p>10.5 hrs</p>
              </div>
              </div>
          ))}
        </div>
      ) : (
        <div className="p-5 text-center">
          <p className="h3 md:h4 font-semibold">No Courses Enrolled</p>
        </div>
      )}
      {isCoursedEnrolledPending && <Loader message="Loading.." />}
    </>
  );
};

export default MyCourses;
