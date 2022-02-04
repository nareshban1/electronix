import React from "react";
import {
  CartContainer,
  CartHeader,
  CartItems,
  CartPage,
  CheckoutButton,
  CloseButton,
  CartFooter,
  TotalPrice,
} from "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hideCart } from "../../store/modules/ToggleCart/toggleActions";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import formatCurrency from "../../utils/utilsFunctions/currencyFormatter";

const Cart = () => {
  const viewCart = useSelector((state: RootState) => state.toggleCart.viewCart);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(hideCart());
  };

  const totalAmount = formatCurrency(
    cart
      .map((item) => Number(item.price.substring(1)) * item.quantity)
      .reduce((acc, current) => {
        return acc + current;
      }, 0)
  );

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
            <CartFooter>
              <TotalPrice> Total Amount: &nbsp; {totalAmount}</TotalPrice>
              <CheckoutButton disabled={cart.length === 0}>
                Checkout
              </CheckoutButton>
            </CartFooter>
          </CartContainer>
        </CartPage>
      )}
    </>
  );
};

export default Cart;
