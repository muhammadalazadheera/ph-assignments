import React from "react";

export default function AllItems() {
  return (
      <div className="border rounded-lg overflow-hidden bg-white">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img className="inline rounded mr-2" width={50} height={50} src="https://i.ibb.co.com/39NDbyqX/1524234561685.jpg" alt="" />Electric Guitar - Fender Stratocaster</td>
              <td>$150</td>
              <td>2h 45m</td>
              <td>
                <button><i className="fa-regular fa-heart"></i></button>
              </td>
            </tr>
            <tr>
              <td><img className="inline rounded mr-2" width={50} height={50} src="https://i.ibb.co.com/39NDbyqX/1524234561685.jpg" alt="" />Electric Guitar - Fender Stratocaster</td>
              <td>$150</td>
              <td>2h 45m</td>
              <td>
                <button><i className="fas fa-heart text-red-600"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  );
}
