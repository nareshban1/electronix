import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Container } from "../../assets/styles/commonStyles.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Filter from "../../container/Filter/Filter";
import ProductGrid from "../../container/ProductGrid/ProductGrid";
import { RootState } from "../../store";
import { fetchProducts } from "../../store/modules/Products/getProducts";
import { ProductPageContainer, ProductPageHeader } from "./ProductPage.css";

const ProductPage = (props: PropsFromRedux) => {
  const { productsData, getProducts } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (productsData.loading) {
    return <LoadingSpinner />;
  } else if (productsData.error) {
    return <LoadingSpinner />;
  }

  return (
    <ProductPageContainer>
      <Container>
        <ProductPageHeader>Our Products</ProductPageHeader>
        <Filter />
        <ProductGrid products={productsData.data?.product} />
      </Container>
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
