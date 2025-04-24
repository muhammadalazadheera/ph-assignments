import React from "react";
import banner from "../../assets/images/banner-img-1.png";

function HeroSection() {
  return (
    <div className="hero-section container w-[95%] md:w-[90%] mx-auto mt-10">
      <div className="md:hidden hero-img px-5 w-full mx-auto flex justify-between mb-5">
        <img
          className="inline w-[100%] rounded-md shadow-sm"
          src={banner}
          alt="banner image"
        />
      </div>
      <div className="hero-text text-center px-5 md:px-0 md:w-[70%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="py-5">
          An ideal online health portal provides seamless access to medical
          expertise, personalized care, and reliable health resources. It
          empowers users with tools to manage their health efficiently, ensuring
          convenience, privacy, and trust.
        </p>
      </div>
      <div className="hero-form w-[90%] md:w-[60%] mx-auto flex justify-between flex-col md:flex-row">
        <input
          className="border h-10 px-2 mb-3 mr-3 bg-white rounded-3xl block md:inline flex-grow-1"
          type="text"
          placeholder="Search Any Doctor"
        />
        <button className="bg-primary md:w-[20%] h-10 rounded-3xl text-white px-4 py-2 w-full block md:inline">
          Search Now
        </button>
      </div>
      <div className="hidden md:flex hero-img px-10 w-[90%] mx-auto justify-between mt-5">
        <img
          className="inline w-[49%] rounded-md shadow-sm"
          src={banner}
          alt="banner image"
        />
        <img
          className="inline w-[49%] rounded-md shadow-sm"
          src={banner}
          alt="banner image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
