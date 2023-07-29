"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CBasketItem,
  IBasketItem,
} from "../../../../../main/components/layout/header/myBasket/basketItem/basketI.interface";
import { ICompaund } from "../../../../../main/types/productI.interface";

export interface IBasketSlice {
  cart: IBasketItem[];
  totalАmountСost: number;
}

const initialState: IBasketSlice = {
  cart: [],
  totalАmountСost: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setTotalAmountCost(
      state,
      { payload: totalАmountСost }: PayloadAction<number>
    ) {
      state.totalАmountСost = totalАmountСost;
    },
    addToCart(state, { payload: product }) {
      const productItem = new CBasketItem(product);
      state.cart.push({ ...productItem });
    },
    removeFromCart(state, { payload: product }) {
      state.cart = state.cart.filter(item => item.name !== product.name);
    },
    addOneMoreProduct(state, { payload: product }: PayloadAction<IBasketItem>) {
      state.cart.filter(item => {
        // item.name === product.name ? item.count++ : item;
        if (item.name === product.name) {
          item.count++;
          item.subTotal = item.price * item.count;
          return item;
        } else {
          return item;
        }
      });
    },
    removeOneProduct(state, { payload: product }: PayloadAction<IBasketItem>) {
      state.cart.filter(item => {
        // item.name === product.name ? item.count++ : item;
        if (item.name === product.name) {
          item.count--;
          item.subTotal = item.price * item.count;
          return item;
        } else {
          return item;
        }
      });
    },
  },
});

export const { actions: basketActions, reducer: basketReducer } = basketSlice;
