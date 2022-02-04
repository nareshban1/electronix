import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export const CartProductCardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9570030;
  border-radius: 5px;
`;

export const DetailContainer = styled.div`
  display: flex;
  height: 80px;
`;
export const CartProductImage = styled.img`
  height: 100%;
  width: 80px;
  object-fit: fit;
  background-color: red;
`;
export const CartProductName = styled.p`
  font-weight: 600;
`;
export const CartProductPrice = styled.p``;
export const CartProductStock = styled.p``;
export const DeleteProduct = styled(AiFillDelete)`
  height: 20px;
  width: 20px;
  color: red;
  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CartProductDetailContainer = styled.div`
  margin-left: 10px;
`;
