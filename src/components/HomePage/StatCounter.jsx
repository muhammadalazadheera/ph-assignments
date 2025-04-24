import React from "react";
import SectionTitle from "../Global/SectionTitle";
import CounterCard from "./CounterCard";

function StatCounter() {
  return (
    <div className="container w-[95%] lg:w-[80%] mx-auto py-5">
      <SectionTitle
        title="We Provide the Best Services"
        subtitle="Experience excellence with our top-notch solutions"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <CounterCard
          icon="https://img.icons8.com/office/60/treatment-plan.png"
          title="102+"
          text="Total Doctors"
        />
        <CounterCard
          icon="https://img.icons8.com/fluency/60/favorites-shield-5.png"
          title="467+"
          text="Total Reviews"
        />
        <CounterCard
          icon="https://img.icons8.com/external-others-pike-picture/60/external-agreement-health-insurance-care-others-pike-picture-6.png"
          title="1900+"
          text="Total Patients"
        />
        <CounterCard
          icon="https://img.icons8.com/external-flaticons-flat-flat-icons/60/external-workers-inhome-service-flaticons-flat-flat-icons-2.png"
          title="302+"
          text="Total Stuffs"
        />
      </div>
    </div>
  );
}

export default StatCounter;
