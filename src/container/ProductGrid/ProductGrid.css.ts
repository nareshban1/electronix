import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-left: 50px;
  grid-gap: 1.2rem;
  width: 100%;
`;
