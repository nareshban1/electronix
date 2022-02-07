import React from "react";
import DatePicker from "./DatePicker";
import Input from "./Input";

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "textarea":
    case "select":
    case "checkbox":
    default:
      return null;
  }
};

export default FormikControl;
