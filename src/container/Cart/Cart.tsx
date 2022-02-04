import React from "react";
import { CartContainer, CartHeader, CartPage, CloseButton } from "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hideCart } from "../../store/modules/ToggleCart/toggleActions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Cart = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(hideCart());
  };

  viewCart ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  return (
    <>
      {viewCart && (
        <CartPage>
          <CartContainer>
            <CartHeader>
              <CloseButton onClick={closeCart} />
              Your Cart
            </CartHeader>
          </CartContainer>
        </CartPage>
      )}
    </>
  );
};

export default Cart;
