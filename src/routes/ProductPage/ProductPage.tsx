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
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../store/modules/Products/setProducts";
import { hideCart } from "../../store/modules/ToggleCart/toggleActions";
const ProductPage = (props: PropsFromRedux) => {
  const { productsData, getProducts } = props;
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const products = useSelector(
    (state: RootState) => state.productsData.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsData.data?.product) {
      if (selectedCategory !== "") {
        let filteredData = productsData.data?.product.filter(
          (product: ProductData) =>
            product.category.indexOf(selectedCategory) > -1
        );
        dispatch(setProduct(filteredData));
      } else {
        dispatch(setProduct(productsData.data?.product));
      }
    }
  }, [productsData.data?.product, dispatch, selectedCategory]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    dispatch(hideCart());
  }, [dispatch]);

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
        <Container>{productsData.message}</Container>
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
          {products.length !== 0 && <ProductGrid products={products} />}
        </ProductFilterContainer>
      </Container>
      <Cart />
    </ProductPageContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  productsData: state.productsData.apiProducts,
});

const mapDispatchToProps = {
  getProducts: fetchProducts,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProductPage);
