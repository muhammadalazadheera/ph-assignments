import React from "react";

export default function FavCard() {
  return (
    <>
      <div className="flex bg-white px-2 py-4 rounded-lg border my-4">
        <figure className="mr-2 w-[30%]">
          <img
            className="rounded-lg"
            src="https://i.ibb.co.com/39NDbyqX/1524234561685.jpg"
            alt="Movie"
          />
        </figure>
        <div className="item-info w-[70%]">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">Electric Guitar - Fender Stratocaster</h1>
          <p>$120</p>
          <p>Bids:12</p>
        </div>
      </div>
    </>
  );
}
