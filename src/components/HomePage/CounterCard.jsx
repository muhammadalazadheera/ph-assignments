import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterCard({ icon, title, text }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <div>
      <div className="counter-card bg-white shadow-md rounded-lg px-6 py-8">
        <div className="counter-card-icon">
          <img
            className="border border-gray-200 rounded-md shadow-sm"
            src={icon}
            alt=""
          />
        </div>
        <div className="counter-card-content">
          <h2 ref={ref} className="counter-card-title text-4xl font-extrabold py-5">
            {inView && <CountUp end={parseInt(title)} />}
          </h2>
          <p className="counter-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CounterCard;
