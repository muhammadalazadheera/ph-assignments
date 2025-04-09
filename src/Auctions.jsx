import React from "react";
import AllItems from "./components/AllItems";
import FavItems from "./components/FavItems";

export default function Auctions() {
  return (
    <div className="bg-[#ebf0f5] pb-10">
      <div className="container w-[90%] mx-auto overflow-hidden">
        <div className="caption py-10">
          <h1 className="text-xl font-bold">Active Auctions</h1>
          <p className="text-gray-500">Bid on your favorite items</p>
        </div>
        <div className="item-container flex justify-around">
          <div className="w-[70%]">
            <AllItems />
          </div>
          <FavItems />
        </div>
      </div>
    </div>
  );
}
