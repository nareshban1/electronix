import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FilterHeader } from "../../container/Filter/Filter.css";
const DateRange = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <FilterHeader>Product Date Range</FilterHeader>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        autoComplete="off"
      />
    </>
  );
};

export default DateRange;
