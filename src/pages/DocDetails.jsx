import React, { useState } from "react";
import SectionTitle from "../components/Global/SectionTitle";
import DetailsCard from "../components/DrDetails/DetailsCard";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import ChangeTitle from "../components/Global/ChangeTitle"


function DocDetails() {
  const { id } = useParams();
  const idd = id.toString();

  const doctors = useLoaderData();
  const doctor = doctors.find((doc) => doc.id.toString() === idd);

  return (
    (doctor && (
      <div>
        <ChangeTitle title={`${doctor.name} - Doctor Details`} />
        <div className="bg-white py-10 container w-[80%] mx-auto rounded-lg mt-6">
          <SectionTitle
            title="Doctor's Profile Details"
            subtitle="Comprehensive information about the doctor"
          />
        </div>
        <div className="container w-[80%] mx-auto mt-10">
          <DetailsCard doctor={doctor} />
        </div>
      </div>
    )) || (
      <div className="flex justify-center items-center flex-col-reverse h-screen">
        <div className="bg-white text-center p-20 rounded-2xl">
          <h1 className="text-2xl font-bold mb-3">Doctor not found</h1>
          <Link className="btn btn-outline btn-primary" to="/">Browser Doctors</Link>
        </div>
      </div>
    )
  );
}

export default DocDetails;
