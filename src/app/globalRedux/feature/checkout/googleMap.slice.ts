"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImapCenter {
  lat: number;
  lng: number;
}

const initialState = {
  center: {
    lat: 49.9935,
    lng: 36.230383,
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
