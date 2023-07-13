"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "../../../../../main/types/productI.interface";
import { productData } from "@/componentsproducts/productList/productData.data";

interface IProductSlice {
  productList: Iproduct[];
  category: string;
}

export const defaultValueCategory = "Menu";
const initialState: IProductSlice = {
  productList: [],
  category: defaultValueCategory,
};

initialState.productList = productData;

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    filterByCategory(state, { payload: category }: PayloadAction<string>) {
      // There need integrate Backend instade productData
      state.category = category;
      defaultValueCategory.toUpperCase() === category.toUpperCase()
        ? (state.productList = productData)
        : (state.productList = productData.filter(
            product => product.category.toUpperCase() === category.toUpperCase()
          ));
    },
  },
});

export const { actions: productListActions, reducer: productListReducer } =
  productListSlice;
