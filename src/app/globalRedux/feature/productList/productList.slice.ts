"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iproduct } from "../../../../../main/types/productI.interface";
import { productData } from "@/componentsproducts/productList/productData.data";
import { IDrinks } from "../../../../../main/types/productI.interface";

interface IProductSlice {
  productList: (Iproduct | IDrinks)[];
  category: string;
}

interface ICurrentOnFocusProduct {
  name: string;
  onFocus: boolean;
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
    filterBySearch(state, { payload: searchTerm }: PayloadAction<string>) {
      state.category = defaultValueCategory;
      state.productList = productData.filter(item =>
        item.name
          .toUpperCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toUpperCase().replace(/\s/g, ""))
      );
    },

    focusCurrentProduct(
      state,
      { payload: onFocusProduct }: PayloadAction<ICurrentOnFocusProduct>
    ) {
      state.productList.filter(product =>
        product.name === onFocusProduct.name
          ? onFocusProduct.onFocus === true
            ? (product.onFocus = false)
            : (product.onFocus = true)
          : (product.onFocus = false)
      );
    },
    removeFocusCurrentProduct(state) {
      state.productList.map(product => (product.onFocus = false));
    },
    addDrinkSizeToDrink(state, { payload: size }: PayloadAction<string>) {
      // state.productList.filter = (item =>{
      // })
    },
  },
});

export const { actions: productListActions, reducer: productListReducer } =
  productListSlice;
