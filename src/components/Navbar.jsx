import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav className=" flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className=" ml-5">
            <img className=" h-14 w-32" src="https://rb.gy/ysl0pp" alt="" />
            {/* <img src="https://shorturl.at/krUZ0" alt="" /> */}
          </div>
        </NavLink>
        <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <div className=" ml-2 mt-1 animate-bounce text-white absolute top-3 flex items-center justify-center bg-green-500 w-5 text-xs h-5 rounded-md">
                {cart.length}
              </div>
              <FaCartShopping className=" text-2xl" />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
