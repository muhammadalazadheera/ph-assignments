import React from "react";
import SectionTitle from "../components/Global/SectionTitle";
import DocChart from "../components/BookingPage/DocChart";
import DocDetails from "../components/BookingPage/DocDetails";
import { Link } from "react-router";
import { toast } from "react-toastify";
import ChangeTitle from "../components/Global/ChangeTitle";
import { useEffect, useState } from "react";

function BookingsPage() {
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("bookingData"));
    if (storedData === null) {
      setBookingData([]);
    } else {
      setBookingData(storedData);
    }
  }, []);
  const handleBookingDelete = (id) => {
    const updatedBookingData = bookingData.filter((doc) => doc.id !== id);
    localStorage.setItem("bookingData", JSON.stringify(updatedBookingData));
    setBookingData(JSON.parse(localStorage.getItem("bookingData")));
    toast.error("Booking Cancelled");
  };

  if (bookingData.length > 0) {
    return (
      <div>
        <ChangeTitle title="My Bookings" />
        <div className="bg-white rounded-2xl container w-[80%] mx-auto my-10 p-7">
          <DocChart data={bookingData} />
        </div>
        <SectionTitle
          title="My Today's Appointment"
          subtitle="Overview of scheduled bookings for today"
        />
        <div className="container w-[80%] mx-auto mt-10">
          {bookingData.map((doctor) => (
            <DocDetails
              name={doctor.name}
              edu={doctor.edu}
              fees={doctor.fees}
              id={doctor.id}
              key={doctor.id}
              handleBookingDelete={handleBookingDelete}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col-reverse h-screen">
        <div className="bg-white text-center p-20 rounded-2xl">
          <h1 className="text-2xl font-bold mb-3">Bookings not found</h1>
          <Link className="btn btn-outline btn-primary" to="/">
            Browser Doctors
          </Link>
        </div>
      </div>
    );
  }
}

export default BookingsPage;
