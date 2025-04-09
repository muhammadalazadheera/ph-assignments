import React from "react";
import FavCard from "./FavCard";

export default function FavItems() {
  return (
    <div className="sidebar bg-white px-2 w-[25%] rounded-lg">
      <div className="caption my-4">
        <h2 className="text-2xl font-bold text-blue-400 text-center">
          <i className="fa-regular fa-heart"></i> Favorite Items
        </h2>
      </div>
      <div className="fav-items border-t border-b">
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </div>
      <div className="py-4">
        <table className="left-bar-table">
          <tbody>
            <tr className="border-b-0">
              <th className="text-left">Total</th>
              <td className="text-right">$1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
