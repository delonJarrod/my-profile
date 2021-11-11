import React, { useState } from "react";
import classes from "./Cart.module.css";
import Card from "../../ui/Card";
import FeatureBox from "../../ui/FeatureBox";

function Cart() {
  let cartItems = window.itemsArray;
  const [show, setShow] = useState(false);

  function CheckOut() {
    setShow(true);
  }

  return (
    <div className={classes.cart}>
      <div className=" grid grid-cols-1 md:grid-cols-1 w-3/4 gap-4  p-20">
        <div className="flex-col p-10 border-2">
          <Card title="Cart Items">
            {show && (
              <div className="text-center w-full bg-green-600 pt-5 pb-5 rounded-2xl">
                <h1>Success</h1>
              </div>
            )}

            <div className="p-20 ">
              {cartItems.map((item) => (
                <FeatureBox key={item.id}>
                  <div className="text-center pt-10 mb-5">
                    <div className=" grid grid-cols-2 md:grid-cols-2 gap-4 ">
                      <div className="flex-col p-10">{item.title.title}</div>
                      <div className="flex-col p-10">
                        <em>
                          <u>R{item.price} </u>
                        </em>
                      </div>
                    </div>
                  </div>
                </FeatureBox>
              ))}
            </div>
            <div className="text-center pb-5">
              <button
                onClick={CheckOut}
                className="text-white bg-green-600 rounded-3xl border hover:bg-white hover:border-green-600 hover:text-green-600 px-6 py-2 text-sm outline-none  "
              >
                Check Out
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;
