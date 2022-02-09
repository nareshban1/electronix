import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { FilterHeader } from "../../container/Filter/Filter.css";
import { setProduct } from "../../store/modules/Products/setProducts";
import { ProductData } from "../ProductCard/ProductCard";
import { Formik, Form, FormikValues, FormikProps, FormikState } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import { StyleType } from "../PriceRange/PriceRange";
import {
  Button,
  ButtonsContainer,
  PriceInputGroup,
  PriceFilterContainer,
} from "../PriceRange/PriceRange.css";

const DateRange = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const apiproducts = useSelector(
    (state: RootState) => state.productsData.apiProducts
  );
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );
  const dispatch = useDispatch();

  const initialValues: {
    from: Date | string | null;
    to: Date | string | null;
  } = {
    from: "",
    to: "",
  };

  const validationSchema = Yup.object({
    from: Yup.date().nullable().required("Required"),
    to: Yup.date()
      .nullable()
      .when(
        "from",
        (from, yup) =>
          from && yup.min(from, "End date cannot be before start date")
      )
      .required("Required"),
  });

  const onSubmit = (values: any) => {
    setSelectedCategory("");
    let tempData = products.filter(
      (product: ProductData) =>
        Number(product.createDate) >= values.from.getTime() &&
        Number(product.createDate) <= values.to.getTime()
    );
    dispatch(setProduct(tempData));
  };

  const clear = (
    resetForm: (
      nextState?: Partial<FormikState<FormikValues>> | undefined
    ) => void
  ) => {
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

  const today = new Date();
  return (
    <PriceFilterContainer>
      <FilterHeader>Release Date Range</FilterHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik: FormikProps<FormikValues>) => (
          <Form>
            <PriceInputGroup>
              <FormikControl control="date" label="From" name="from" />
              <FormikControl
                control="date"
                label="To"
                name="to"
                maxDate={today}
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

export default DateRange;
