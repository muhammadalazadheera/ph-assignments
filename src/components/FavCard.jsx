import React from "react";

export default function FavCard({ item }) {
  return (
    <>
      <div className="flex bg-white px-2 py-4 rounded-lg border my-4">
        <figure className="mr-2 w-[30%]">
          <img
            className="rounded-lg"
            src={item.image}
            alt="Movie"
          />
        </figure>
        <div className="item-info w-[70%]">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</h1>
          <p>${item.currentBidPrice}</p>
          <p>Bids:{item.bidsCount}</p>
        </div>
      </div>
    </>
  );
}
