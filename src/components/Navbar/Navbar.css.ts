import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 1px 0px 10px 0px #c5c5c5;
`;
export const NavbarFlex = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  font-weight: 700;
  color: #f95700ff;
`;
export const CartLogo = styled(FaShoppingCart)`
  color: #f95700ff;
  height: 20px;
  width: 20px;
`;
