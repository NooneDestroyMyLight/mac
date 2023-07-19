"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImapCenter {
  lat: number;
  lng: number;
}

const initialState = {
  center: {
    lat: -3.745,
    lng: -38.523,
  },
};

export const googleMapSlice = createSlice({
  name: "googleMap",
  initialState,
  reducers: {
    setCoordinates(state, { payload: coordinate }: PayloadAction<ImapCenter>) {
      state.center = coordinate;
    },
  },
});

export const { actions: googleMapActions, reducer: googleMapReducer } =
  googleMapSlice;
