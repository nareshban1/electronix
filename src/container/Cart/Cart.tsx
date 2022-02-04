import React from "react";
import {
  CartContainer,
  CartHeader,
  CartItems,
  CartPage,
  CloseButton,
} from "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hideCart } from "../../store/modules/ToggleCart/toggleActions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import CartProductCard from "../../components/CartProductCard/CartProductCard";

const Cart = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const cart = useSelector((state: RootState) => state.cart);
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
            <CartItems>
              {cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </CartItems>
          </CartContainer>
        </CartPage>
      )}
    </>
  );
};

export default Cart;
