import React from "react";
import { Formik, Form, FormikValues, FormikProps, FormikState } from "formik";
import * as Yup from "yup";
import { FilterHeader } from "../../container/Filter/Filter.css";
import FormikControl from "../Formik/FormikControl";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setProduct } from "../../store/modules/Products/setProducts";
import { ProductData } from "../ProductCard/ProductCard";

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

  return (
    <>
      <FilterHeader>Price Range</FilterHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik: FormikProps<FormikValues>) => (
          <Form>
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
            <button type="submit">Submit</button>
            <button type="button" onClick={() => clear(formik.resetForm)}>
              Clear
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PriceRange;
