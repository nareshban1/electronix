import styled from "styled-components";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
export const CartProductQuantity = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
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

export const Plus = styled(AiOutlinePlus)`
  height: 15px;
  width: 15px;
  transition: 300ms ease-in-out;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Minus = styled(AiOutlineMinus)`
  height: 15px;
  width: 15px;
  transition: 300ms ease-in-out;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CartProductDetailContainer = styled.div`
  margin-left: 10px;
`;
