import React from "react";
import Input from "./Input";

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
