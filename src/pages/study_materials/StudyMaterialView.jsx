import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudyMaterialView = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState("");

  useEffect(() => {
    const fetchStudyMaterial = async () => {
      try {
        const response = await axios.get(
          `https://edreq-backend.onrender.com/api/study-material-view/${id}`
        );
        if (response.data.success) {
          const fetch = response.data.material;
          setMaterial(fetch);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudyMaterial();
  }, [id]);
  return (
    <>
    {material && <div className="mt-5 container">
        <p className="h4 font-semibold">{material.category.categoryName} for Class {material.classNo.categoryName} {material.subject.subjectName}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit enim corrupti ratione nulla eveniet nemo dolore deserunt numquam, placeat sapiente nihil non odio.</p>
        <div className="border-2 border-n-1 rounded-lg overflow-hidden">
            <p className="font-semibold p-3 bg-n-6 text-n-2">{material.category.categoryName} for Class {material.classNo.categoryName} {material.subject.subjectName}  Chapter-Wise - Free PDF Download</p>
            {material.chapters && material.chapters.map((chapter,index)=>(
                <div className="p-3 border-b-2 border-n-1 text-n-15" key={index}>
                {chapter.chapterName}
                </div>
            ))}
        </div>
    </div>
    }
    </>
  );
};

export default StudyMaterialView;
