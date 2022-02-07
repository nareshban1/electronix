import styled from "styled-components";
import { Formik, Form } from "formik";
export const CheckoutPageContainer = styled.section``;
export const CheckOutHeader = styled.h1``;

export const CheckoutFlex = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const FormikForm = styled(Formik)`
  width: 100%;
`;

export const Forms = styled(Form)`
  width: 100%;
`;

export const CheckoutFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  width: 100%;
`;

export const FormGroupContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const FormGroupHeader = styled.h3`
  font-weight: 600;
`;

export const CheckoutButton = styled.button`
  background-color: #f95700ff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Cart = styled.div`
  width: 400px;
`;
