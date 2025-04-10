import React from "react";
import FavCard from "./FavCard";

export default function FavItems({favItems}) {
  const total = favItems.reduce((acc, item) => acc + item.currentBidPrice, 0);
  return (
    <div className="sidebar bg-white px-2 w-[28%] rounded-lg">
      <div className="caption my-4">
        <h2 className="text-2xl font-bold text-blue-400 text-center">
          <i className="fa-regular fa-heart"></i> Favorite Items
        </h2>
      </div>
      <div className="fav-items border-t border-b">
        {
          favItems.map( item => <FavCard key={item.id} item={item} /> )
        }
      </div>
      <div className="py-4">
        <table className="left-bar-table">
          <tbody>
            <tr className="border-b-0">
              <th className="text-left">Total</th>
              <td className="text-right">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
