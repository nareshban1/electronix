import styled from "styled-components";

export const ProductPageContainer = styled.section`
  background-color: transparent;
  width: 100%;
`;

export const LoadingContainer = styled.section`
  background-color: transparent;
  height: 90vh;
  display: grid;
  place-items: center;
`;

export const ProductPageHeaderContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
`;

export const ProductPageHeader = styled.h1``;

export const ProductFilterContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
