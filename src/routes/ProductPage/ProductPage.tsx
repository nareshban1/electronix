import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import { fetchProducts } from "../../store/modules/Products/getProducts";

const ProductPage = (props: PropsFromRedux) => {
  const { productsData, getProducts } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return <div>{JSON.stringify(productsData)}</div>;
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
