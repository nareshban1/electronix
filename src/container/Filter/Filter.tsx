import React, { useEffect, useState } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import DateRange from "../../components/DateRange/DateRange";
import PriceRange from "../../components/PriceRange/PriceRange";
import { FilterContainer } from "./Filter.css";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <FilterContainer>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PriceRange
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <DateRange
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </FilterContainer>
  );
};

export default Filter;
