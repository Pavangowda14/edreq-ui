import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchSection } from "./api/getSections";
import Loader from "../../shared/components/Loader";

const Lessons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({
    videos: true,
    studyMaterials: false,
  });

  const toggleAccordion = (type) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const {
    data: sections,
    refetch: refetchSections,
    isFetching: isFetchingSection,
    isLoading: isLoadingSection,
    isSuccess: isSectionSuccess,
  } = useFetchSection({ courseId: id });

  useEffect(() => {
    refetchSections();
  }, [id]);

  useEffect(() => {
    if (isSectionSuccess)
      setSelectedSection(sections?.lessons?.sectionContent[0]);
  }, [isSectionSuccess]);

  return (
    <>
      <div className="container">
        <div className="p-5 border rounded-lg flex flex-col md:flex-row gap-7">
          <div className="h-48 w-full md:w-48">
            <img
              src={sections?.lessons?.thumbnail}
              alt={sections?.lessons?.title}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">
              {sections?.lessons?.title}
            </h2>
            <p>10.5 hrs</p>
            <div className="flex items-center">
              <p className="mr-2">Subjects Covered:</p>
              <div className="flex items-center text-sm flex-wrap gap-2">
                <p className="border rounded-lg px-2 py-1 bg-n-2">Science</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Maths</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Social</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-7 border rounded-lg shadow-lg ">
          <div className="flex border-b overflow-hidden  overflow-x-auto">
            {sections?.lessons?.sectionContent?.map((section) => (
              <div
                key={section._id}
                className={`p-4 cursor-pointer ${
                  selectedSection?._id === section._id
                    ? "border-b-[3px] border-blue-500 "
                    : ""
                }`}
                onClick={() => setSelectedSection(section)}
              >
                {section.name}
              </div>
            ))}
          </div>

          <div className="p-4">
            {selectedSection ? (
              <div>
                <div className="mb-2">
                  <button
                    className="w-full text-left px-4 py-4 border-b font-semibold flex justify-between"
                    onClick={() => toggleAccordion("videos")}
                  >
                    <span>Learning Videos</span>
                    <span> {openAccordions.videos ? "▲" : "▼"}</span>
                  </button>
                  {openAccordions.videos && (
                    <div className="border bg-white">
                      {selectedSection.videos.length > 0 ? (
                        selectedSection.videos.map((video) => (
                          <div
                            key={video._id}
                            className="p-4 cursor-pointer text-blue-600 border-b"
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

                <div className="">
                  <button
                    className="w-full text-left px-4 py-4 border-b font-semibold flex justify-between"
                    onClick={() => toggleAccordion("studyMaterials")}
                  >
                    <span>Study Materials</span>
                    <span>{openAccordions.studyMaterials ? "▲" : "▼"}</span>
                  </button>
                  {openAccordions.studyMaterials && (
                    <div className="border bg-white">
                      {selectedSection.studyMaterials.length > 0 ? (
                        selectedSection.studyMaterials.map((material) => (
                          <div
                            key={material._id}
                            className="p-4 cursor-pointer text-blue-600 border-b"
                          >
                            📘 {material.name}
                          </div>
                        ))
                      ) : (
                        <p className="p-4 text-gray-500">
                          No study materials available
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p>Select a section to view its content</p>
            )}
          </div>
        </div>
      </div>
      {(isFetchingSection || isLoadingSection) && (
        <Loader message="Loading..." />
      )}
    </>
  );
};

export default Lessons;
