import styled from "styled-components";
import { ImCross } from "react-icons/im";

export const CartPage = styled.section`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
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
`;
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled(ImCross)``;

export const CartItems = styled.ul``;
export const CartItem = styled.li``;
