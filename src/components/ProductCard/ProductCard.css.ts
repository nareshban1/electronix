import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const CartLogo = styled(FaShoppingCart)`
  color: white;
  height: 50px;
  width: 50px;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const HoverState = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: #f9570090;
`;

export const CardContainer = styled.div`
  height: 350px;
  box-shadow: 0px 0px 10px 0px #c5c5c5;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    ${HoverState} {
      display: grid;
      place-items: center;
    }
  }
`;

export const ProductDetails = styled.div`
  padding: 0.5rem 1rem;
`;
export const ProductName = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
export const ProductPrice = styled.p`
  font-size: 0.8rem;
`;
export const ProductImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
export const CategoryList = styled.ul`
  font-size: 0.8rem;
`;
export const CategoryName = styled.li``;
export const CreateDate = styled.p`
  font-size: 0.8rem;
`;
export const Stock = styled.p`
  font-size: 0.8rem;
`;
