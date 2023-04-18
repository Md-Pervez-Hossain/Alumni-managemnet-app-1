import React from "react";
import student from "../../assets/batchwiseStudent.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";

const BatchWiseStudent = () => {
  const studentsOfTheBatch = useLoaderData();
  const { year } = useParams();
  console.log(year);

  return (
    <div className="bg-accent">
      <InnerPageHeader
        title={`Batch ${year}`}
        img={student}
        description={`Connecting  Graduates: Meet the Students of Our Batch`}
      />
      <div className="w-9/12 mx-auto md:py-32 py-16 ">
        <div className=" grid md:grid-cols-4 gap-10">
          {studentsOfTheBatch.map((singleAlumni) => (
            <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-3 mt-5">
          <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
          <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
        </div>
      </div>
      <GallerySlider year={year} />
    </div>
  );
};

export default BatchWiseStudent;
