import React from "react";
import { Formik, Form, FormikValues, FormikProps } from "formik";
import * as Yup from "yup";
import { FilterHeader } from "../../container/Filter/Filter.css";
import FormikControl from "../Formik/FormikControl";
const PriceRange = () => {
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
  const onSubmit = (values: any) => console.log("Form Data", values);
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PriceRange;
