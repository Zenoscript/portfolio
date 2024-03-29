import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <h3>Portfolio</h3>
      </a>
      <ul>
        <li className="nav-links">
          <a href="">About Me</a>
        </li>
        <li className="nav-links">
          <a href="">Skills</a>
        </li>
        <li className="nav-links">
          <a href="">Projects</a>
        </li>
        <li className="nav-links">
          <a href="">Contact Me</a>
        </li>
      </ul>
      <button className="btn">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
