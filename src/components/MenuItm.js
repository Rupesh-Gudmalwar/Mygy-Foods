import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";

const MenuItm = (props) => {
  let [cartItems, setCartItems] = useState([]);

  const addToCart = (e) => {
    setCartItems(cartItems++);
    console.log("add to cart button clicked")
    console.log(e.target)
    
  };

  useEffect(() => {
    // console.log(cartItems);
  })

  return (
    <div className="menuItm">
      <div className="menu-itmes">
        <h2>Recommended</h2>

        <div className="menu-desc">
          {MenuItems.map((menu, ind) => {
            return (
              <div className="menu-food" key={ind}>
                <div>
                  <h4>{menu.name}</h4>
                  <p>{menu.price}</p>
                  <p>{menu.description}</p>
                </div>
                <div>
                  <img className="menu-img" src={menu.src} alt="" />
                  <button className="btn-atc" onClick={addToCart}>
                    Add
                  </button>
                </div>
              </div>);
          })}
        </div>
      </div>
      {/* <div>{props.Cart}</div> */}
    </div>
  );
};

export default MenuItm;
