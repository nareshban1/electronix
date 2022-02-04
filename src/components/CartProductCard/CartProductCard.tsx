import React from "react";
import {
  CartProductCardContainer,
  CartProductDetailContainer,
  CartProductImage,
  CartProductName,
  CartProductPrice,
  CartProductStock,
  DeleteProduct,
  DetailContainer,
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
  return (
    <CartProductCardContainer>
      <DetailContainer>
        <CartProductImage
          src={`https://electronic-ecommerce.herokuapp.com/` + product.image}
        />
        <CartProductDetailContainer>
          <CartProductName>{product.name}</CartProductName>
          <CartProductPrice>{product.price}</CartProductPrice>
          <CartProductStock>{product.quantity}</CartProductStock>
        </CartProductDetailContainer>
      </DetailContainer>
      <DeleteProduct />
    </CartProductCardContainer>
  );
};

export default CartProductCard;
