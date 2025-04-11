import React from "react";

export default function FavCard({ item, handleDelete }) {
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
        <div className="item-info w-[70%] relative">
          <button onClick={()=>handleDelete(item.id)} className="float-right"><i class="far fa-times-circle hover:text-red-500"></i></button>
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm w-[75%]">{item.title}</h1>
          <p className="text-sm my-1">${item.currentBidPrice}</p>
          <p className="text-sm">Bids: {item.bidsCount}</p>
        </div>
      </div>
    </>
  );
}
