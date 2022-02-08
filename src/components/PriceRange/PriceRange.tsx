import React from "react";
import { Formik, Form, FormikValues, FormikProps, FormikState } from "formik";
import * as Yup from "yup";
import { FilterHeader } from "../../container/Filter/Filter.css";
import FormikControl from "../Formik/FormikControl";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setProduct } from "../../store/modules/Products/setProducts";
import { ProductData } from "../ProductCard/ProductCard";
import {
  Button,
  ButtonsContainer,
  PriceFilterContainer,
  PriceInputGroup,
} from "./PriceRange.css";

export interface StyleType {
  background?: string;
  color?: string;
}

const PriceRange = ({
  setSelectedCategory,
}: {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const apiproducts = useSelector(
    (state: RootState) => state.productsData.apiProducts
  );

  const dispatch = useDispatch();

  const initialValues: { min: number; max: number } = {
    min: 0,
    max: 0,
  };

  const validationSchema = Yup.object({
    min: Yup.number()
      .min(10, "min price must be greater than 10")
      .required("Required"),
    max: Yup.number()
      .moreThan(Yup.ref("min"), "Max must be greater than min price")
      .required("Required"),
  });

  const onSubmit = (values: any) => {
    setSelectedCategory("");
    let tempData = apiproducts.data?.product.filter(
      (product: ProductData) =>
        Number(product.price.substring(1)) >= values.min &&
        Number(product.price.substring(1)) <= values.max
    );
    dispatch(setProduct(tempData));
  };

  const clear = (
    resetForm: (
      nextState?: Partial<FormikState<FormikValues>> | undefined
    ) => void
  ) => {
    setSelectedCategory("");
    dispatch(setProduct(apiproducts.data?.product));
    resetForm();
  };

  const clearStyles: StyleType = {
    background: "gray",
    color: "black",
  };

  const filterStyles: StyleType = {
    background: "#f95700ff",
    color: "white",
  };

  return (
    <PriceFilterContainer>
      <FilterHeader>Price Range</FilterHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik: FormikProps<FormikValues>) => (
          <Form>
            <PriceInputGroup>
              <FormikControl
                control="input"
                type="number"
                label="Min"
                name="min"
              />
              <FormikControl
                control="input"
                type="number"
                label="Max"
                name="max"
              />
            </PriceInputGroup>
            <ButtonsContainer>
              <Button type="submit" {...filterStyles}>
                Filter
              </Button>
              <Button
                type="button"
                {...clearStyles}
                onClick={() => clear(formik.resetForm)}
              >
                Clear
              </Button>
            </ButtonsContainer>
          </Form>
        )}
      </Formik>
    </PriceFilterContainer>
  );
};

export default PriceRange;
