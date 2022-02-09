import React from "react";
import { Container } from "../../assets/styles/commonStyles.css";
import {
  Cart,
  CheckoutButton,
  CheckoutFlex,
  CheckoutFormGrid,
  CheckOutHeader,
  CheckoutPageContainer,
  FormGroupContainer,
  FormGroupHeader,
  FormikForm,
  Forms,
  CartItems,
  TotalAmt,
} from "./CheckoutPage.css";
import { FormikValues, FormikProps } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/Formik/FormikControl";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import formatCurrency from "../../utils/utilsFunctions/currencyFormatter";

type InitialValues = {
  BfirstName: string;
  BlastName: string;
  BmiddleName: string;
  Baddress1: string;
  Baddress2: string;
  Bemail: string;
  BphoneNo: string;
  currentDate: string | Date;
  SfirstName: string;
  SlastName: string;
  SmiddleName: string;
  Saddress1: string;
  Saddress2: string;
  SphoneNo: string;
  Semail: string;
};

const today = new Date();
today.setHours(0, 0, 0, 0);

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CheckoutPage = () => {
  const initialValues: InitialValues = {
    BfirstName: "",
    BlastName: "",
    BmiddleName: "",
    Baddress1: "",
    Baddress2: "",
    Bemail: "",
    BphoneNo: "",
    currentDate: "",
    SfirstName: "",
    SlastName: "",
    SmiddleName: "",
    Saddress1: "",
    Saddress2: "",
    SphoneNo: "",
    Semail: "",
  };
  const validationSchema = Yup.object({
    BfirstName: Yup.string().required("First Name Required"),
    BlastName: Yup.string().required("Last Name Required"),
    Baddress1: Yup.string().required("Enter Your Billing Address"),
    Bemail: Yup.string()
      .email("Must be a valid Email")
      .required("Billing Email Required"),
    BphoneNo: Yup.string()
      .required("Billing Phone Number Required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    currentDate: Yup.date()
      .nullable()
      .min(today, "Date cannot be in the past")
      .required("Billing Date Required"),

    SfirstName: Yup.string().required("Firs tName Required"),
    SlastName: Yup.string().required("Last Name Required"),
    Saddress1: Yup.string().required("Enter Your Shipping Address"),
    SphoneNo: Yup.string()
      .required("Shipping Phone Number Required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    Semail: Yup.string()
      .email("Must be a valid Email")
      .required("Shipping Email Required"),
  });
  const onSubmit = (values: any) => {};
  const cart = useSelector((state: RootState) => state.cart);
  const totalAmount = formatCurrency(
    cart
      .map((item) => Number(item.price.substring(1)) * item.quantity)
      .reduce((acc, current) => {
        return acc + current;
      }, 0)
  );
  return (
    <CheckoutPageContainer>
      <Container>
        <CheckOutHeader>Checkout Page</CheckOutHeader>
        <CheckoutFlex>
          <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik: FormikProps<FormikValues>) => (
              <Forms>
                <FormGroupContainer>
                  <FormGroupHeader>Billing Address</FormGroupHeader>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="First Name"
                      name="BfirstName"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Middle Name"
                      name="BmiddleName"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Last Name"
                      name="BlastName"
                    />
                  </CheckoutFormGrid>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Address 1"
                      name="Baddress1"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Address 2"
                      name="Baddress2"
                    />
                  </CheckoutFormGrid>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Phone Number"
                      name="BphoneNo"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Email"
                      name="Bemail"
                    />
                    <FormikControl
                      control="date"
                      label="Billing Date"
                      name="currentDate"
                      maxDate={today}
                    />
                  </CheckoutFormGrid>
                </FormGroupContainer>
                <FormGroupContainer>
                  <FormGroupHeader>Shipping Address</FormGroupHeader>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="First Name"
                      name="SfirstName"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Middle Name"
                      name="SmiddleName"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Last Name"
                      name="SlastName"
                    />
                  </CheckoutFormGrid>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Address 1"
                      name="Saddress1"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Address 2"
                      name="Saddress2"
                    />
                  </CheckoutFormGrid>
                  <CheckoutFormGrid>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Phone Number"
                      name="SphoneNo"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Email"
                      name="Semail"
                    />
                  </CheckoutFormGrid>
                </FormGroupContainer>
                <CheckoutButton type="submit">Checkout Now</CheckoutButton>
              </Forms>
            )}
          </FormikForm>
          <Cart>
            <FormGroupHeader>Your Items</FormGroupHeader>
            <CartItems>
              {cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </CartItems>
            <TotalAmt>Total Price : {totalAmount}</TotalAmt>
          </Cart>
        </CheckoutFlex>
      </Container>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
