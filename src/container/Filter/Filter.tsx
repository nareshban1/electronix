import React from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const Filter = () => {
  return (
    <div>
      <RangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </div>
  );
};

export default Filter;
