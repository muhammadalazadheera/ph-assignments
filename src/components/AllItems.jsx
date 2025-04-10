import React from "react";
import SingleItem from "./SingleItem";

export default function AllItems({ items, addToFav }) {
  return (
      <div className="border rounded-lg overflow-hidden bg-white">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Current Bid Price</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map( item =>  <SingleItem key={item.id} item={item} addToFav={addToFav} /> )
            }
          </tbody>
        </table>
      </div>

  );
}
