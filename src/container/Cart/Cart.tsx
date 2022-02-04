import React from "react";
import { CartContainer, CartHeader, CloseButton } from "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hideCart } from "../../store/modules/ToggleCart/toggleActions";
const Cart = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(hideCart());
  };
  return (
    <>
      {viewCart && (
        <CartContainer>
          <CartHeader>
            <CloseButton onClick={closeCart} />
            Your Cart
          </CartHeader>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
