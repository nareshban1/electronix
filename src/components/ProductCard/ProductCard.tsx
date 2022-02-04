import React from "react";
import formatCurrency from "../../utils/utilsFunctions/currencyFormatter";
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

type ProductData = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  category: string[];
};

const ProductCard = ({ productData }: { productData: ProductData }) => {
  var createDate = formatDate(productData.createDate);
  var price = formatCurrency(productData.price);
  return (
    <CardContainer>
      <ProductImage
        src={`https://electronic-ecommerce.herokuapp.com/` + productData.image}
      />
      <ProductDetails>
        <ProductName>{productData.name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
        <Stock>{productData.stock}</Stock>
        <CreateDate>{createDate}</CreateDate>
        <CartButton>
          Add to <CartLogo />
        </CartButton>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
