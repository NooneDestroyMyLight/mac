"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./feature/basket/basket.slice";
import { productListReducer } from "./feature/productList/productList.slice";
import { googleMapReducer } from "./feature/checkout/googleMap.slice";

const reducers = combineReducers({
  basket: basketReducer,
  productList: productListReducer, // Используйте имя "basket" в качестве ключа
  googleMap: googleMapReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
