import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GridContainer } from "./ProductGrid.css";

type ProductType = {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
  createDate: string;
  category: string[];
}[];

const ProductGrid = ({ products }: { products: ProductType }) => {
  return (
    <GridContainer>
      {products?.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
