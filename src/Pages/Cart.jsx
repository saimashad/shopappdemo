import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  // we need cart to check if the posts array is empty or not.
  // if empty then it means we need to show cart is empty and a button saying shop now.
  // else we will map over the cart items and display each item as a card.
  // so, accessing the cart.
  // but how do we access the cart array.
  // iski state kaha par maintained hai?
  // cartslice pe.
  // toh waha se iski state ko laane ke liye we will use useSelector.
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      // cart.reduce(
      //   (accumulator, currentItem) =>
      //     accumulator + currentItem.price * currentItem.quantity,
      //   0
      // )
      // since we dont have an option of quantity.. we wont be multiplying anything with price.
      cart.reduce((accumulator, curr) => accumulator + curr.price, 0)
    );
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            <div>
              <div className="">Your Cart</div>
              <div className="">Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount: {totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is empty</h1>
          <Link to={"/"}>
            <button>Shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
