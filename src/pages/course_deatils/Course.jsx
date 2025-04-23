import {  useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { FaCheck } from "react-icons/fa";
import { useFetchCourseDetails } from "./api/getCourseDetail";
import structureLearningIcon from "../../assets/images/structure.png";
import syllabusIcon from "../../assets/images/syllabus_icon.png";
import documentIcon from "../../assets/images/documents.png";
import expertImg from "../../assets/images/expert_icon.png";
import bookSession from "../../assets/images/working.png";
import BookSessionForm from "../../components/BookSession";
import Loader from "../../shared/components/Loader";
import { useEnrollCourse } from "./api/enrollFreeCourse";

const whatsIncluded = [
  {
    title: "Structured Learning",
    description:
      "Organized lessons with clear explanations and step-by-step solutions.",
    icon: structureLearningIcon,
  },
  {
    title: "Latest CBSE Syllabus",
    description:
      "Content aligned with the latest CBSE curriculum for academic excellence.",
    icon: syllabusIcon,
  },
  {
    title: "Downloadable PDFs",
    description:
      "Get lifetime access to high-quality study materials anytime, anywhere.",
    icon: documentIcon,
  },
  {
    title: "Expert Guidance",
    description:
      "Crafted by experienced educators to ensure in-depth understanding.",
    icon: expertImg,
  },
];
const Course = () => {
  const { id } = useParams();

  const {
    data: courseDetailsData,
    refetch: refetchCourseDetails,
    isFetching: isCourseDetailsFetching,
    isLoading: isCourseDetailsLoading,
  } = useFetchCourseDetails({ courseId: id });

  const { mutate: enrollCourse, isPending: enrolling } = useEnrollCourse();

  useEffect(() => {
    refetchCourseDetails();
  }, [id]);


  return (
    <>
      <div className="py-14 px-7 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sm:h-[16rem] md:h-[70vh]">
          <img
            src={courseDetailsData?.course.thumbnail}
            alt={courseDetailsData?.course.title}
            className="w-full h-full object-fill border-1 rounded-lg"
          />
        </div>
        <div className="lg:px-5 space-y-6">
          <p className="h3 font-semibold">{courseDetailsData?.course.title}</p>
          <div className="space-y-4">
            <div className="flex items-center text-sm flex-wrap">
              <p className="text-sm">{courseDetailsData?.course.description}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-2">Subjects Covered:</p>
              <div className="flex items-center text-sm flex-wrap space-x-2">
                <p className="border rounded-lg px-2 py-1 bg-n-2">Science</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Maths</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Social</p>
              </div>
            </div>
            <div className="flex items-center text-sm flex-wrap">
              <p className="mr-2">Language:</p>
              <p className="border rounded-lg bg-n-7 text-n-8 px-3 py-1">
                English
              </p>
            </div>
          </div>
          <p className="h5">₹{courseDetailsData?.course.price}</p>
          <Button className="text-n-15 bg-white w-full md:w-2/3" onClick={()=>enrollCourse(id)}>
            Buy Now
          </Button>
        </div>
      </div>
      <div className="px-7 py-14 flex flex-col gap-6 bg-n-2">
        <h2 className="text-lg md:text-2xl font-semibold">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatsIncluded.map((data, index) => (
            <div
              className="border px-3 py-9 max-w-sm text-center rounded-lg bg-n-2 flex flex-col items-center gap-2 shadow-xl"
              key={index}
            >
              <img src={data.icon} alt="icon" className="w-12 h-12" />
              <p className="font-semibold">{data.title}</p>
              <p className="text-xs">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-7 py-14 flex flex-col gap-6">
        <p className="text-lg md:text-2xl font-semibold">Course Overview</p>
        <div className="p-6 border rounded-lg bg-blue-50">
          <ul className="flex flex-wrap justify-between">
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Duration: 12 Weeks (Self-paced)
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Structured Learning: Organized lessons & topics
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Latest CBSE Syllabus: Content fully aligned
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Downloadable PDFs: Lifetime access to notes
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Interactive Quizzes: Assess knowledge after each module
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Live Doubt Sessions: Weekly expert-led discussions
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Video Lectures: HD-quality pre-recorded classes
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-blue-600" />
              Certificate of Completion: Recognized & verifiable
            </li>
          </ul>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 relative  min:h-[90vh] py-10  bg-n-2 lg:space-y-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-blue-600 font-bold">
            Need more clarity?
          </h2>
          <p>Book a session with our expert</p>
          <img
            src={bookSession}
            className="w-[300px] h-[300px] hidden md:block"
          />
        </div>
        <BookSessionForm />
      </div>
      {(isCourseDetailsFetching || isCourseDetailsLoading || enrolling) && (
        <Loader message="Loading..." />
      )}
    </>
  );
};

export default Course;
