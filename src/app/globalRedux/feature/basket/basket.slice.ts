"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CBasketItem,
  IBasketItem,
} from "../../../../../main/components/layout/header/myBasket/basketItem/basketI.interface";
import {
  ICompaund,
  IDrinks,
  Iproduct,
} from "../../../../../main/types/productI.interface";
import { categoryDRINKS } from "@/componentsproducts/productList/productData.data";

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
    addToCart(state, { payload: product }: PayloadAction<Iproduct | IDrinks>) {
      const copyProduct = { ...product };

      if ("sizeRange" in copyProduct) {
        copyProduct.name += ` ${product.compaund.totalWeight}`;
      }
      const productItem = new CBasketItem(copyProduct);
      state.cart.push({ ...productItem });
    },
    removeFromCart(state, { payload: product }) {
      state.cart = state.cart.filter(item => item.name !== product.name);
    },
    addOneMoreProduct(state, { payload: product }: PayloadAction<IBasketItem>) {
      state.cart.filter(item => {
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
      product.count == 1
        ? (state.cart = state.cart.filter(item => item.name !== product.name))
        : state.cart.filter(item => {
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
