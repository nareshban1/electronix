import { Field } from "formik";
import styled from "styled-components";
import DateView from "react-datepicker";
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.8rem;
`;

export const InputField = styled(Field)`
  width: 100%;
`;

export const DateViewer = styled(DateView)`
  width: 100%;
`;
