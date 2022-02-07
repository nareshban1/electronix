import React from "react";
import { ErrorMessage } from "formik";
import { InputLabel } from "../PriceRange/PriceRange.css";
import { InputContainer, InputField } from "./formik.css";
import TextError from "./TextError";

const Input = (props: any) => {
  const { label, name, ...rest } = props;
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </InputContainer>
  );
};

export default Input;
