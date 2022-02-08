import React from "react";
import formatDate from "../../utils/utilsFunctions/dateFormatter";
import {
  CardContainer,
  CartLogo,
  CreateDate,
  CartButton,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
  Stock,
} from "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addToCart } from "../../store/modules/Cart/cartActions";
import { showCart } from "../../store/modules/ToggleCart/toggleActions";
import { getCommaSeperateNumber } from "../../utils/utilsFunctions/numberConverter";
export type ProductData = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  category: string[];
};

const ProductCard = ({ productData }: { productData: ProductData }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  var createDate = formatDate(productData.createDate);
  var price = getCommaSeperateNumber(productData.price.substring(1));
  const addProduct = (product: ProductData) => {
    if (cart.filter((object) => object.id === product.id).length === 0) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
    dispatch(showCart());
  };
  return (
    <CardContainer>
      <ProductImage
        src={`https://electronic-ecommerce.herokuapp.com/` + productData.image}
      />
      <ProductDetails>
        <ProductName>{productData.name}</ProductName>
        <ProductPrice>Rs. {price}</ProductPrice>
        <Stock>{productData.stock} in Stock</Stock>
        <CreateDate>{createDate}</CreateDate>
        <CartButton
          onClick={() => addProduct(productData)}
          disabled={productData.stock === 0}
        >
          Add to <CartLogo />
        </CartButton>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
