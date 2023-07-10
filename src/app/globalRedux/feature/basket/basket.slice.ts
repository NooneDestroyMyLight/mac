"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../../../../../main/components/products/productList/productI.interface";

interface IbasketSlice {
  cart: Iproduct[];
}

const initialState: IbasketSlice = {
  cart: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart(state, { payload: product }) {
      state.cart.push({ ...product, count: 1 });
    },
    removeFromCart(state, { payload: product }) {
      state.cart = state.cart.filter(item => item.name !== product.name);
    },
    addOneMoreProduct(state, { payload: product }) {
      product.count += 1;
      state.cart.push(product);
    },
    removeOneProduct(state, { payload: product }) {
      product.count -= 1;
      product.count === 0
        ? (state.cart = state.cart.filter(item => item.name !== product.name))
        : state.cart.push(product);
    },
  },
});

export const { actions: basketActions, reducer: basketReducer } = basketSlice;
