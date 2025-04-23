import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useFetchSectionData } from "./api/getSingleSection";
import { useFetchVideoData } from "./api/getVideoData";
import Loader from "../../shared/components/Loader";

const Lesson = () => {
  const { sectionId, videoId } = useParams();
  const navigate = useNavigate();
  const [courseContentOpen, setCourseContentOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({
    videos: true,
    studyMaterials: false,
  });

  const {
    data: section,
    refetch: refetchSection,
    isFetching: isFetchingSection,
    isLoading: isLoadingSection,
  } = useFetchSectionData({ sectionId: sectionId });

  const {
    data: VideoData,
    refetch: refetchVideo,
    isFetching: isFetchingVideo,
    isLoading: isLoadingVideo,
  } = useFetchVideoData({ videoId: videoId });

  useEffect(() => {
    refetchSection();
  }, [sectionId]);

  useEffect(() => {
    refetchVideo();
  }, [sectionId, videoId]);

  const toggleAccordion = (key) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCourseContentToggle = () => {
    setCourseContentOpen(!courseContentOpen);
  };

  return (
    <>
      <div className="mt-3 mx-1 lg:mx-3 flex space-x-2 h-[500px]">
        <div
          className={`${
            courseContentOpen ? "block" : "hidden"
          } lg:border lg:w-1/3 overflow-y-scroll fixed top-[100px] left-0 right-0 bottom-0 lg:static lg:block lg:mx-auto z-40 lg:z-0d bg-n-2`}
        >
          <div className="p-4 flex justify-between items-center">
            <p className="font-semibold">Content</p>
            <button
              className="lg:hidden text-xl"
              onClick={handleCourseContentToggle}
            >
              {" "}
              <AiOutlineClose />
            </button>
          </div>
          <div className="">
            {section ? (
              <div key={section._id}>
                <div className="border-b">
                  <button
                    className="w-full flex justify-between items-center p-3 text-lg font-semibold focus:outline-none"
                    onClick={() => toggleAccordion("videos")}
                  >
                    Learning Videos
                    <span>{openAccordions.videos ? "▲" : "▼"}</span>
                  </button>
                  {openAccordions?.videos && (
                    <div className="p-2">
                      {section.section?.videos?.length > 0 ? (
                        section.section.videos.map((video) => (
                          <div
                            key={video._id}
                            className="p-2 text-blue-600 cursor-pointer hover:underline"
                            onClick={() =>
                              navigate(
                                `/course/${video.Section}/lesson/${video._id}`
                              )
                            }
                          >
                            {video.title}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No videos available</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Study Materials Accordion */}
                <div className="border-b mt-3">
                  <button
                    className="w-full flex justify-between items-center p-3 text-lg font-semibold focus:outline-none"
                    onClick={() => toggleAccordion("studyMaterials")}
                  >
                    Study Materials
                    <span>{openAccordions.studyMaterials ? "▲" : "▼"}</span>
                  </button>
                  {openAccordions.studyMaterials && (
                    <div className="p-2">
                      {section.section.studyMaterials.length > 0 ? (
                        section.section.studyMaterials.map((material) => (
                          <div key={material._id} className="p-2">
                            📘 {material.name}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">
                          No study materials available
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p>No sections available.</p>
            )}
          </div>
        </div>
        <div className="border p-3 lg:px-5 lg:py-2 w-full space-y-2">
          <button
            className=" lg:hidden flex items-center space-x-1 text-n-15"
            onClick={handleCourseContentToggle}
          >
            <AiOutlineMenu className="text-xl" />
            <p> Course content</p>
          </button>
          <p className="font-semibold lg:text-lg">{VideoData?.video?.title}</p>
          <iframe
            className="w-full h-[230px] md:h-[330px] lg:h-[430px]"
            src={VideoData?.video.videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
       {(isFetchingSection || isLoadingSection || isFetchingVideo || isLoadingVideo) && (
              <Loader message="Loading..." />
            )}
    </>
  );
};

export default Lesson;
