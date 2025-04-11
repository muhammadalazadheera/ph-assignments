import React from "react";

export default function SingleItem({ item, addToFav }) {
  const handleAddToFav = (e) => {
    e.currentTarget.setAttribute("disabled", "disabled");
    e.currentTarget.classList.add("cursor-not-allowed");
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fas", "text-red-500");
    addToFav(item);
  };
  return (
    <tr>
      <td width={"60%"}>
        <img
          className="inline rounded mr-2"
          width={50}
          height={50}
          src={item.image}
          alt=""
        />
        {item.title}
      </td>
      <td>${item.currentBidPrice}</td>
      <td>{item.timeLeft}</td>
      <td>
      <button id={`fav-button-${item.id}`} onClick={handleAddToFav}>
          <i className="fa-regular fa-heart hover:text-red-500"></i>
        </button>
      </td>
    </tr>
  );
}
