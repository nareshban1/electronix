import styled from "styled-components";

export const CategoriesContainer = styled.ul`
  width: 100%;
  text-transform: capitalize;
`;

export const Clear = styled.button`
  background-color: #f95700ff;
  color: white;
  border: none;
  padding: 0px 5px;
  border-radius: 5px;

  display: ${({ checkSelected }: { checkSelected: boolean }) =>
    checkSelected ? "none" : "block"};
`;
export const Categories = styled.li``;
export const SubCategoriesContainer = styled.ul``;

export const SubCategories = styled.li`
  margin-left: 10px;
  color: ${({ selected }: { selected: boolean }) =>
    selected ? "#f95700ff" : "black"};
  cursor: pointer;
  display: ${({
    selected,
    checkSelected,
  }: {
    selected: boolean;
    checkSelected: boolean;
  }) => (selected ? "block" : checkSelected ? "block" : "none")};
`;
