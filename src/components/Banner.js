import React from "react";
import pizzaCafe from "./Images/pizza.jpg";

const Banner = () => {
  return (
    <div className="store-display">
      <div className="store-img">
        <img class="cafe-img" src={pizzaCafe} alt="" />
      </div>
      <div className="store-name">
        <h4>My Pizza Cafe</h4>
        <p>
          Opens next at 10AM <section>Pizzas, Italian</section>{" "}
        </p>
        <p>Dighi, Pune</p>
      </div>
      <div className="offers">
        <h4>Offers</h4>
        <ul>
          <li>15% off | Use code less15</li>
          <li>10% off | Use code less10</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
