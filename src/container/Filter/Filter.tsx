import React from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import DateRange from "../../components/DateRange/DateRange";
import { FilterContainer, FilterHeader } from "./Filter.css";

const Filter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FilterContainer>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FilterHeader>Price Range</FilterHeader>

      <DateRange />
    </FilterContainer>
  );
};

export default Filter;
