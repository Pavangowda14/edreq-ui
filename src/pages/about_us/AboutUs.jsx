import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="p-5 md:p-10 text-center space-y-5 flex flex-col justify-center h-[90vh] bg-blue-100">
        <h3 className="font-bold text-4xl text-blue-500">Welcome to Edreq!</h3>
        <p className="text-lg">
          Edreq: An advanced online training platform for classes 6-10 with
          high-quality study materials and personalized one-to-one tutoring and
          pre-recorded teeaching classes. We pioneer an excellent training for
          memorization and mastery using the subjects outlined in the CBSE
          syllabus, allowing students to form a strong base academically. The
          affordable subscription model provides lifetime access to those
          professionally curated resources to make education premium but
          accessible.
        </p>
      </div>
      <div className="py-5 px-12 md:p-[5rem] space-y-4">
        <p className="font-semibold h3 text-center">Our commitment</p>
        <p className="text-lg flex flex-col gap-4 text-center">
          <span>
            At Edreq, we are committed to fostering a learning environment that
            nurtures every student's potential. We recognize that each learner
            has unique abilities, preferences, and academic needs. Through
            careful assessment and structured analysis, we identify individual
            strengths and areas for improvement, allowing us to design a
            tailored learning program that enhances subject comprehension and
            encourages academic growth.
          </span>
          <span>
            Our platform offers a structured and personalized curriculum aligned
            with students' academic requirements. With expert educators and
            dedicated mentors, we focus on providing high-quality study
            resources, including comprehensive notes, practice exercises, and
            regular assessments. Our approach emphasizes direct support, guiding
            students through academic challenges while fostering critical
            thinking, problem-solving skills, and confidence. At Edreq, we are
            committed to holistic student development, ensuring not only
            academic excellence but also equipping learners with essential
            skills for lifelong success.
          </span>
        </p>
      </div>
      <div className="p-5 md:p-[5rem] space-y-4 bg-n-2">
        <p className="font-semibold h3 text-center">Vision</p>
        <p className="text-lg flex flex-col gap-4 text-center">
          <span>
          At Edreq, our vision is to redefine the learning experience by
          providing high-quality, accessible, and personalized education for
          students in grades 6 to 10. We aim to empower young learners with a
          strong academic foundation through structured guidance, expert-led
          instruction, and a curriculum tailored to their individual needs. By
          integrating innovative teaching methodologies with a student-centric
          approach, we strive to foster a love for learning, critical thinking,
          and academic excellence.</span>
          <span>We envision a future where every student has
          the resources and support needed to reach their full potential
          regardless of background or learning pace. We aim to bridge
          educational gaps by offering structured learning pathways, continuous
          mentorship, and performance-driven strategies. At Edreq, we are
          committed to shaping confident, capable, and future-ready individuals
          equipped with the knowledge and skills.</span>
        </p>
      </div>
    </>
  );
};

export default AboutUs;
