import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from "react";
import {
  Slider,
  SliderRange,
  SliderTrack,
  SliderLeftValue,
  SliderRightValue,
  Thumb,
  RangeSliderContainer,
} from "./RangeSlider.css";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

const RangeSlider = ({ min, max, onChange }: RangeSliderProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minRef.current) {
      const minPercent = getPercent(+minRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <RangeSliderContainer>
      <Thumb
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
      />
      <Thumb
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
      />

      <Slider>
        <SliderTrack></SliderTrack>
        <SliderRange ref={range}></SliderRange>
        <SliderLeftValue>{minVal}</SliderLeftValue>
        <SliderRightValue>{maxVal}</SliderRightValue>
      </Slider>
    </RangeSliderContainer>
  );
};

export default RangeSlider;
