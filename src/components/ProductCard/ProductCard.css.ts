import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const CartLogo = styled(FaShoppingCart)`
  color: white;
  height: 20px;
  width: 20px;
  transition: 300ms ease-in-out;
`;

export const CartButton = styled.div`
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
`;

export const CardContainer = styled.div`
  height: 350px;
  box-shadow: 0px 0px 10px 0px #c5c5c5;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
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
