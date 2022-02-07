import React from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import DateRange from "../../components/DateRange/DateRange";
import PriceRange from "../../components/PriceRange/PriceRange";
import { FilterContainer } from "./Filter.css";

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

      <DateRange />

      <PriceRange />
    </FilterContainer>
  );
};

export default Filter;
