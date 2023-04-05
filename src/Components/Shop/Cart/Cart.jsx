import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
      // if(product.quantity === 0){
      //     product.quantity = 1;
      // }
      // product.quantity = product.quantity || 1;

      totalPrice = totalPrice + product.price * product.quantity;
      totalShipping = totalShipping + product.shipping;
      quantity = quantity + product.quantity;
  }
  const tax = totalPrice * 7 / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  // clear cart

  return (
    <div className="space-y-3 top-20 sticky bg-opacity-50 w-80 bg-pink-200  p-10 font-semibold lg:ml-5 h-fit">
      <h1 className="text-lg font-bold text-ghost">Order Summery</h1>
      <h1>Selected Item: {quantity}</h1>
      <h1>Item Price :${totalPrice}</h1>
      <h1>Shipping Cost:${totalShipping}</h1>
      <h1>Tax: ${tax}</h1>
      <h1>Grand Total : {grandTotal}</h1>
      <button className="btn btn-error">Clear Cart</button>
      <br />
      <button className="btn btn-warning">Review Order</button>
    </div>
  );
};

export default Cart;
