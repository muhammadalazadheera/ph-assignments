import React, { useState } from "react";
import SectionTitle from "../components/Global/SectionTitle";
import DetailsCard from "../components/DrDetails/DetailsCard";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import ChangeTitle from "../components/Global/ChangeTitle";
import DocImage from "../assets/images/doctor.png";

function DocDetails() {
  const { id } = useParams();
  const idd = id.toString();

  const doctors = useLoaderData();
  const doctor = doctors.find((doc) => doc.id.toString() === idd);

  return (
    (doctor && (
      <div>
        <ChangeTitle title={`${doctor.name} - Doctor Details`} />
        <div className="bg-white py-10 container w-[95%] lg:w-[80%] mx-auto rounded-lg mt-6">
          <SectionTitle
            title="Doctor's Profile Details"
            subtitle="Comprehensive information about the doctor"
          />
        </div>
        <div className="container w-[95%] lg:w-[80%] mx-auto mt-10">
          <DetailsCard doctor={doctor} />
        </div>
      </div>
    )) || (
      <div className="flex justify-center items-center">
        <div className="bg-white text-center px-40 py-20 rounded-2xl my-20 h-[400px] shadow-md">
          <img
            className="px-10 mx-auto"
            width={300}
            src={DocImage}
            alt=""
          />
          <div className="">
            <h1 className="text-2xl font-bold mb-3">
              No Doctor Found with this ID.
            </h1>
            <Link className="btn btn-outline btn-primary rounded-3xl" to="/">
              Browser Doctors
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default DocDetails;
