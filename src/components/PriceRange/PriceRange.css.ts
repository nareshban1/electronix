import styled from "styled-components";
import { StyleType } from "./PriceRange";

export const PriceFilterContainer = styled.div`
  margin: 10px auto;
`;

export const PriceInputGroup = styled.div`
  display: flex;
  width: 250px;
  overflow: hidden;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px auto;
`;

export const InputLabel = styled.label``;

export const Button = styled("button")<StyleType>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 5px;
  padding: 0px 5px;
  border: 1px solid ${(props) => props.background};
  cursor: pointer;
`;
