import React from "react";
import {
  CategoriesContainer,
  FilterContainer,
  SubCategories,
  SubCategoriesContainer,
  FilterHeader,
  Clear,
} from "./Filter.css";

const categories: string[] = [
  "laptop",
  "mobile",
  "watch",
  "keyboard",
  "headset",
];

const Filter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FilterContainer>
      <FilterHeader>Price Range</FilterHeader>

      <FilterHeader>Date</FilterHeader>
      <FilterHeader>
        Categories{" "}
        <Clear
          onClick={() => setSelectedCategory("")}
          checkSelected={selectedCategory === ""}
        >
          Clear
        </Clear>
      </FilterHeader>
      <CategoriesContainer>
        <SubCategoriesContainer>
          {categories?.map((category, index) => (
            <SubCategories
              selected={selectedCategory === category}
              checkSelected={selectedCategory === ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </SubCategories>
          ))}
        </SubCategoriesContainer>
      </CategoriesContainer>
    </FilterContainer>
  );
};

export default Filter;
