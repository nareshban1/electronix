import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/Cart/cartActions";
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
  const dispatch = useDispatch();

  const deleteItem = (productId: number) => {
    dispatch(removeFromCart(productId));
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
          <CartProductStock>{product.quantity}</CartProductStock>
        </CartProductDetailContainer>
      </DetailContainer>
      <DeleteProduct onClick={() => deleteItem(product.id)} />
    </CartProductCardContainer>
  );
};

export default CartProductCard;
