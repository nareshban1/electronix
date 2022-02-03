import styled from "styled-components";

export const RangeSliderContainer = styled.div`
  width: 200px;
  height: 200px;
`;
export const Slider = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;
export const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #f95700ff;
  z-index: 2;
`;
export const SliderLeftValue = styled.div`
  position: absolute;
  color: black;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
`;
export const SliderRightValue = styled.div`
  position: absolute;
  color: black;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;

export const Thumb = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &:first-child {
    z-index: ${(props) =>
      (props.value as number) > (props.max as number) - 100 ? "5" : "3"};
  }
  &:last-of-type {
    z-index: 4;
  }

  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;

  &::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
