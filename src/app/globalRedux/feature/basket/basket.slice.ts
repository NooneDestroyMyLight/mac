"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketItem } from "../../../../../main/components/layout/header/myBasket/basketItem/basketI.interface";

interface IbasketSlice {
  cart: IBasketItem[];
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
    addOneMoreProduct(state, { payload: product }: PayloadAction<IBasketItem>) {
      state.cart.filter(item => {
        item.name === product.name ? item.count++ : item;
      });
      console.log("THIS ONE", state.cart);
    },
    removeOneProduct(state, { payload: product }: PayloadAction<IBasketItem>) {
      product.count - 1 === 0
        ? (state.cart = state.cart.filter(item => item.name !== product.name))
        : state.cart.filter(item => {
            item.name === product.name ? item.count-- : item;
          });
    },
  },
});

export const { actions: basketActions, reducer: basketReducer } = basketSlice;
