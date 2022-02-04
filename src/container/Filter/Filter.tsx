import React from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import { FilterContainer } from "./Filter.css";

const Filter = () => {
  return (
    <FilterContainer>
      Price Range
      {/* <RangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      /> */}
      Date Categories
    </FilterContainer>
  );
};

export default Filter;
