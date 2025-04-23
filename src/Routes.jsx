import { Routes, Route } from "react-router-dom";
import Layout from "./shared/layout";
import Courses from "./pages/courses/Courses";
import StudyMaterial from "./pages/study_materials/StudyMaterial";
import StudyMaterials from "./pages/study_materials/StudyMaterials";
import StudyMaterialView from "./pages/study_materials/StudyMaterialView";
import MyCourses from "./pages/my_courses/MyCourses";
import MyProfile from "./pages/my_profile/MyProfile";
import Lessons from "./pages/lessons/Lessons";
import Lesson from "./pages/lessons/Lesson";
import AboutUs from "./pages/about_us/AboutUs";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Settings from "./pages/settings";
import ContactUs from "./pages/contactUs";
import Careers from "./pages/careers";
import Home from "./pages/home/Home";
import Course from "./pages/course_deatils/Course"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Wrapping routes inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="study-material/:id" element={<StudyMaterial />} />
        <Route path="study-materials" element={<StudyMaterials />} />
        <Route path="study-material-view/:id" element={<StudyMaterialView />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="lessons/:id" element={<Lessons />} />
        <Route path="course/:sectionId/lesson/:videoId" element={<Lesson />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
