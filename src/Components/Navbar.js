import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div id="header">
        <ul>
          <li class="font">
            <i class="fab fa-apple"></i>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">Airpods</a>
          </li>
          <li>
            <a href="#">Tv & Home</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li class="font">
            <i class="fas fa-search"></i>
          </li>
          <li class="font">
            <i class="fas fa-shopping-bag"></i>
          </li>
        </ul>
      </div>

      <div id="topbelow">
        <p class="text">
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher. <a href="#">Shop iPhone</a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
