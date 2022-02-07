import React from "react";
import { FilterHeader } from "../../container/Filter/Filter.css";
import {
  CategoriesContainer,
  SubCategoriesContainer,
  SubCategories,
  Clear,
} from "./CategoryFilter.css";

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const categories: string[] = [
    "laptop",
    "mobile",
    "watch",
    "keyboard",
    "headseat",
  ];
  return (
    <>
      <FilterHeader>
        Categories
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
              key={index}
              selected={selectedCategory === category}
              checkSelected={selectedCategory === ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </SubCategories>
          ))}
        </SubCategoriesContainer>
      </CategoriesContainer>
    </>
  );
};

export default CategoryFilter;
