import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Container } from "../../assets/styles/commonStyles.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { ProductData } from "../../components/ProductCard/ProductCard";
import Cart from "../../container/Cart/Cart";
import Filter from "../../container/Filter/Filter";
import ProductGrid from "../../container/ProductGrid/ProductGrid";
import { RootState } from "../../store";
import { fetchProducts } from "../../store/modules/Products/getProducts";
import {
  LoadingContainer,
  ProductFilterContainer,
  ProductPageContainer,
  ProductPageHeader,
  ProductPageHeaderContainer,
} from "./ProductPage.css";

const ProductPage = (props: PropsFromRedux) => {
  const { productsData, getProducts } = props;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory !== "") {
      let filteredData = productsData.data?.product.filter(
        (product: ProductData) =>
          product.category.indexOf(selectedCategory) > -1
      );

      setProducts(filteredData);
    } else {
      setProducts(productsData.data?.product);
    }
  }, [selectedCategory, productsData]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    setProducts(productsData.data?.product);
  }, [productsData]);

  if (productsData.loading) {
    return (
      <ProductPageContainer>
        <Container>
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        </Container>
      </ProductPageContainer>
    );
  } else if (productsData.error) {
    return (
      <ProductPageContainer>
        <Container>
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        </Container>
      </ProductPageContainer>
    );
  }
  return (
    <ProductPageContainer>
      <Container>
        <ProductPageHeaderContainer>
          <ProductPageHeader>Our Products</ProductPageHeader>
        </ProductPageHeaderContainer>
        <ProductFilterContainer>
          <Filter
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <ProductGrid products={products} />
        </ProductFilterContainer>
      </Container>
      <Cart />
    </ProductPageContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  productsData: state.productsData,
});

const mapDispatchToProps = {
  getProducts: fetchProducts,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProductPage);
