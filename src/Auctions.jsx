import React from "react";
import AllItems from "./components/AllItems";
import FavItems from "./components/FavItems";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Auctions() {
  const [items, setItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const addToFav = (item) => {
    const newFavItems = [...favItems, item];
    setFavItems(newFavItems);
    toast.success("Added to favorites", {
      theme: "colored"
    })
  };

  const handleDelete = (id) => {
    const newFavItems = favItems.filter((item) => item.id !== id);
    setFavItems(newFavItems);
    
    const favButton = document.getElementById(`fav-button-${id}`);
    favButton.removeAttribute("disabled");
    favButton.classList.remove("cursor-not-allowed");

    favButton.querySelector('i').classList.remove("fas", "text-red-500");
    favButton.querySelector('i').classList.add("fa-regular");

    toast.error("Removed from favorites", {
      theme: "colored"
    })
  }

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
          <FavItems favItems={favItems} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
    </>
  );
}
