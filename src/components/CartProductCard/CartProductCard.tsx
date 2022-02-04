import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/modules/Cart/cartActions";
import {
  CartProductCardContainer,
  CartProductDetailContainer,
  CartProductImage,
  CartProductName,
  CartProductPrice,
  CartProductQuantity,
  DeleteProduct,
  DetailContainer,
  Minus,
  Plus,
} from "./CartProductCart.css";

type ProductData = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  quantity: number;
  category: string[];
};

const CartProductCard = ({ product }: { product: ProductData }) => {
  const dispatch = useDispatch();

  const deleteItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };
  const increase = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };
  const decrease = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <CartProductCardContainer>
      <DetailContainer>
        <CartProductImage
          src={`https://electronic-ecommerce.herokuapp.com/` + product.image}
        />
        <CartProductDetailContainer>
          <CartProductName>{product.name}</CartProductName>
          <CartProductPrice>{product.price}</CartProductPrice>
          <CartProductQuantity>
            <Plus onClick={() => increase(product.id)} />
            {product.quantity}
            <Minus onClick={() => decrease(product.id)} />
          </CartProductQuantity>
        </CartProductDetailContainer>
      </DetailContainer>
      <DeleteProduct onClick={() => deleteItem(product.id)} />
    </CartProductCardContainer>
  );
};

export default CartProductCard;
