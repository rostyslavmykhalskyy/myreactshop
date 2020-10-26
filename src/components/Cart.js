import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import User from "./User";

const Cart = () => {
  return (
    <>
      <User />
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
    </>
  );
};

export default Cart;
