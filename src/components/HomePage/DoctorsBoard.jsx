import React from "react";
import DoctorCard from "./DoctorCard";
import SectionTitle from "../Global/SectionTitle";
import { useState } from "react";

function DoctorsBoard({ doctors }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  return (
    <div className="container w-[95%] lg:w-[80%] mx-auto py-5">
      <SectionTitle
        title="Our Best Doctors"
        subtitle="Get to know the dedicated professionals who care for you"
      />
      <div className="dr-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.slice(0, visibleCount).map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            img={doctor.img}
            name={doctor.name}
            edu={doctor.edu}
            reg={doctor.reg_no}
            exp={doctor.exp}
          />
        ))}
      </div>
      <div className="text-center">
        <button onClick={() => handleLoadMore() } className="mt-10 bg-blue-500 text-white py-2 px-4 rounded-3xl font-semibold hover:bg-blue-600 transition duration-300">
          View All Doctors
        </button>
      </div>
    </div>
  );
}

export default DoctorsBoard;
