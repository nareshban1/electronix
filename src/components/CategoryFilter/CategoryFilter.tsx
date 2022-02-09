import React, { useEffect } from "react";
import { FilterHeader } from "../../container/Filter/Filter.css";
import {
  CategoriesContainer,
  SubCategoriesContainer,
  SubCategories,
  Clear,
} from "./CategoryFilter.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setProduct } from "../../store/modules/Products/setProducts";
import { ProductData } from "../ProductCard/ProductCard";
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
  const apiproducts = useSelector(
    (state: RootState) => state.productsData.apiProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (apiproducts.data?.product) {
      if (selectedCategory !== "") {
        let filteredData = apiproducts.data?.product.filter(
          (product: ProductData) =>
            product.category.indexOf(selectedCategory) > -1
        );
        dispatch(setProduct(filteredData));
      } else {
        dispatch(setProduct(apiproducts.data?.product));
      }
    }
  }, [apiproducts.data?.product, dispatch, selectedCategory]);

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
