import React from "react";
import { Link } from "react-router";

function DoctorCard({id, name, edu, reg, exp, img}) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <figure>
          <img
            className="rounded-xl"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="dr-badges">
          <div className="badge badge-outline badge-success mr-2">Available</div>
          <div className="badge badge-outline badge-info">{exp}+ years experience</div>
        </div>
        <div className="dr-detail border-b border-dashed">
          <h2 className="card-title">{name}</h2>
          <p className="py-2">{edu.map(edu => edu + ', ')}</p>
        </div>
        <p className="text-md mt-3">
          <i className="far fa-registered"></i> Registration No: {reg}
        </p>
        <div className="card-actions">
          <Link to={`details/${id}`} className="btn btn-outline btn-primary w-full rounded-3xl">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
