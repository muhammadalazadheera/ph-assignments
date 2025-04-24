import React, { useState } from "react";
import { toast } from "react-toastify";

function DocDetails({ id, name, edu, fees, handleBookingDelete }) {
  
  return (
    <div className="bg-white rounded-2xl my-7 p-7">
      <div className="flex flex-col md:flex-row justify-between border-b border-dashed border-gray-200">
        <div className="dr-info">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-gray-500">{edu.map((edu) => edu + ", ")}</p>
        </div>
        <p className="text-gray-500 mt-3 md:mt-0">Appointment Fee: {fees}tk + vat</p>
      </div>
      <button
        onClick={() => handleBookingDelete(id)}
        className="btn btn-error btn-outline w-full rounded-3xl mt-10"
      >
        Cancel Appointment Now
      </button>
    </div>
  );
}

export default DocDetails;
