import styled from "styled-components";
import { ImCross } from "react-icons/im";

export const CartPage = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 100%;
  z-index: 6;
  display: flex;
  justify-content: flex-end;
`;

export const CartContainer = styled.div`
  height: 100%;
  background-color: white;
  width: min(500px, 100%);
  padding: 1rem;
  box-shadow: -5px 0px 10px 0px #c5c5c5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;

export const CloseButton = styled(ImCross)``;

export const CartItems = styled.ul`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1;
  grid-gap: 1rem;

  overflow-y: auto;
  width: 100%;

  /* width */
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #f95700ff;
  }
`;

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;

export const TotalPrice = styled.p``;

export const CheckoutButton = styled.button`
  border: none;
  height: 100%;
  width: max-content;
  background-color: #f95700ff;
  padding: 5px 10px;
  display: flex;
  color: white;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    color: grey;
    background-color: #f9570050;

    &:hover {
      transform: none;
    }
  }
`;
