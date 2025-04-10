import React from "react";
import AllItems from "./components/AllItems";
import FavItems from "./components/FavItems";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Auctions() {
  const [items, setItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const addToFav = (item) => {
    const newFavItems = [...favItems, item];
    setFavItems(newFavItems);
  };

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <>
    <ToastContainer />
      <div className="bg-[#ebf0f5] pb-10">
      <div className="container w-[90%] mx-auto overflow-hidden">
        <div className="caption py-10">
          <h1 className="text-xl font-bold">Active Auctions</h1>
          <p className="text-gray-500">Bid on your favorite items</p>
        </div>
        <div className="item-container flex justify-between">
          <div className="w-[70%]">
            <AllItems items={ items } addToFav={addToFav} />
          </div>
          <FavItems favItems={favItems} />
        </div>
      </div>
    </div>
    </>
  );
}
