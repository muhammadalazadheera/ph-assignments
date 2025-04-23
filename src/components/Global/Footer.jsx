import React from "react";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="h-[300px] flex justify-center items-center flex-col bg-white">
      <div className="footer-logo text-center">
      <a className="text-xl"><i className="fa-solid fa-stethoscope bg-primary rounded-full text-white px-1.5 py-2"></i> DocTalk</a>

      </div>
      <ul className="menu menu-horizontal px-1 mb-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="bookings">My-Bookings</NavLink>
        </li>
        <li>
          <NavLink to="blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="footer-social w-[60%] max-auto border-t-2 border-gray-300 pt-5">
        <ul className="flex justify-center items-center gap-2">
            <li><a target="_blank" href="https://www.facebook.com/muhammadalazadheera"><img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="" /></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/muhammadalazadheera/"><img src="https://img.icons8.com/color/48/linkedin-circled--v1.png" alt="" /></a></li>
            <li><a target="_blank" href="https://github.com/muhammadalazadheera"><img src="https://img.icons8.com/color-glass/48/github--v1.png" alt="" /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
