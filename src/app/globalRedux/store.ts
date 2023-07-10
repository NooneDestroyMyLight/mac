"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./feature/basket/basket.slice";

const reducers = combineReducers({
  basket: basketReducer, // Используйте имя "basket" в качестве ключа
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
