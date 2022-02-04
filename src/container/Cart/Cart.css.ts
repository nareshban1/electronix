import styled from "styled-components";
import { ImCross } from "react-icons/im";

export const CartContainer = styled.section`
  height: 100vh;
  background-color: white;
  width: min(500px, 100%);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 6;
  padding: 1rem;
  box-shadow: -5px 0px 10px 0px #c5c5c5;
`;
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled(ImCross)``;
