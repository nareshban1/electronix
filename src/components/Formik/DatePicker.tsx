import React from "react";
import { InputLabel } from "../PriceRange/PriceRange.css";
import { InputField, DateViewer } from "./formik.css";

import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from "formik";
import TextError from "./TextError";
const DatePicker = (props: any) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <InputField name={name}>
        {({ form, field }: { form: any; field: any }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateViewer
              {...field}
              {...rest}
              id={name}
              selected={value}
              onChange={(val: Date) => setFieldValue(name, val)}
            />
          );
        }}
      </InputField>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
