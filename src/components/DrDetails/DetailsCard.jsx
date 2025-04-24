import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function DetailsCard({ doctor }) {
  const navigate = useNavigate();
  const handleBooking = () => {
    if (!localStorage.getItem("bookingData")) {
      localStorage.setItem("bookingData", JSON.stringify([doctor]));
    } else {
      const bookingData = JSON.parse(localStorage.getItem("bookingData"));
      const isAlreadyBooked = bookingData.find((doc) => doc.id === doctor.id);
      if (isAlreadyBooked) {
        toast.error("Already Booked");
        return;
      } else {
        localStorage.setItem(
          "bookingData",
          JSON.stringify([...bookingData, doctor])
        );
      }
    }
    toast.success("Booking Successful");
    navigate("/bookings");
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-base-100 shadow-sm p-6 rounded-lg gap-5">
        <figure className="">
          <img
            className="rounded-lg w-full md:w-auto outline-1 outline-gray-400 outline-offset-2"
            src={doctor.img}
            alt="Movie"
          />
        </figure>
        <div className="">
          <h2 className="card-title text-2xl font-semibold">{doctor.name}</h2>
          <p>{doctor.edu.map((edu) => edu + ", ")}</p>
          <div className="my-3">
            <p>Working At</p>
            <p className="text-lg font-semibold">{doctor.hospital}</p>
          </div>
          <div className="border-t-2 border-b-2 border-dashed border-gray-200 h-10 flex items-center my-4">
            <p className="text-md">
              <i className="far fa-registered"></i> Registration No:{" "}
              {doctor.reg_no}
            </p>
          </div>
          <div className="">
            <b className="inline">Availability:</b>
            {doctor.availability.map((day) => {
              return (
                <div className="badge badge-outline badge-warning mx-1">
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-2">
            <p>
              <b>Consultation Fees:</b>{" "}
              <span className="text-primary text-lg font-bold">
                Taka: {doctor.fees}
              </span>{" "}
              (inc. vat) <span className="text-primary">Per Consultaion</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg my-7 p-7">
        <h2 className="text-center text-3xl font-bold">Book An Appointment</h2>
        <div className="flex justify-between items-center border-t-2 border-b-2 border-dashed border-gray-200 h-10 py-5 my-3">
          <h2 className="font-bold">Availibility</h2>
          <div className="badge badge-outline badge-success rounded-2xl">
            Available Today
          </div>
        </div>
        <div className="badge badge-outline badge-warning mx-1 rounded-2xl hidden md:block">
          <p>
            <i className="fa fa-warning"></i> Due to high patient volume, we are
            currently accepting appointments for today only. We appreciate your
            understanding and cooperation.
          </p>
        </div>
        <p className="md:hidden text-orange-400">
          <i className="fa fa-warning"></i> Due to high patient volume, we are
          currently accepting appointments for today only. We appreciate your
          understanding and cooperation.
        </p>

        <button
          onClick={() => handleBooking()}
          className="btn btn-primary w-full rounded-3xl text-white mt-10"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
}

export default DetailsCard;
