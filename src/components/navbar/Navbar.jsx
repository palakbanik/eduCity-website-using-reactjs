import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="container">
      <img src={logo} alt="logo image" className="logo" />

      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}
