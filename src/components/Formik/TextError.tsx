import React from "react";
import { Error } from "./formik.css";

const TextError = (props: any) => {
  return <Error>{props.children}</Error>;
};

export default TextError;
