import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudyMaterial = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [materials, setMaterials] = useState([]);
  const [categories,setCategories]=useState([])
  const [selectedCategory,setSelectedCategory]=useState("")
  const [filteredMaterials,setFilteredMaterials]=useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://edreq-backend.onrender.com/api/study-material/${id}`
        );
        if (response.data.success) {
            const fetchedMaterials=response.data.materials
            setMaterials(fetchedMaterials);
            const uniqueCategories = [...new Set(fetchedMaterials.map(material => material.category.categoryName))];
          setCategories(uniqueCategories);
          setSelectedCategory(uniqueCategories[0])
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMaterials();
  }, [id]);

  useEffect(()=>{
    const filtered=materials.filter(
        (material)=>material.category.categoryName===`${selectedCategory}`
    );
    setFilteredMaterials(filtered)
  },[selectedCategory])


  const handleMaterialClick = (id) => {
    navigate(`/study-material-view/${id}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : (filteredMaterials.length>0?(
          <div className="container space-y-4">
            <div className="sticky top-[5.6rem] lg:top-[5.1rem] z-30 bg-n-8 flex pt-5 space-x-6 border-b-2 border-n-2 text-n-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          {categories.map((category,index)=>(
            <div
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`cursor-pointer px-3 py-2 ${selectedCategory===category?"text-n-15 border-b-2 border-n-15":""}`}>
              {category}
              </div>
          ))}
        </div>
            <p>Class {filteredMaterials[0].classNo.categoryName}</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              illo sequi illum voluptatem incidunt. Dolorem fuga    facere
              distinctio quisquam suscipit sunt vero animi
            </p>
            {filteredMaterials.map((material, index) => (
              <div
                key={index}
                onClick={() => handleMaterialClick(material._id)}
                className="flex justify-between items-center border-b-2 py-4 cursor-pointer"
              >
                <p className="font-semibold text-n-15">
                  class {material.classNo.categoryName} {material.subject.subjectName}
                </p>
                <FaArrowAltCircleRight className="text-xl text-n-16" />
              </div>
            ))}
          </div>
       ):<p>Study Materials not found</p> )}
      </div>
    </>
  );
};

export default StudyMaterial;
