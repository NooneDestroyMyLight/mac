"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface IUserAddress {
  location: google.maps.LatLngLiteral;
  address: string;
}

interface IinitialState {
  center: google.maps.LatLngLiteral;
  userAddress: IUserAddress[];
  currentLocation?: IUserAddress;
}

const initialState: IinitialState = {
  center: {
    lat: 49.9935,
    lng: 36.230383,
  },
  userAddress: [],
  currentLocation: undefined,
};

export const googleMapSlice = createSlice({
  name: "googleMap",
  initialState,
  reducers: {
    setCoordinates(
      state,
      { payload: coordinate }: PayloadAction<google.maps.LatLngLiteral>
    ) {
      state.center = coordinate;
    },
    setNewUserAddress(
      state,
      { payload: location }: PayloadAction<IUserAddress | null>
    ) {
      if (
        location != null &&
        state.userAddress.every(item => item.address !== location.address)
      ) {
        state.userAddress.push(location);
        state.currentLocation = { ...location };
      }
    },
    setCurrentAddress(
      state,
      { payload: location }: PayloadAction<IUserAddress>
    ) {
      state.currentLocation = { ...location };
      state.center = { ...location.location };
    },
  },
});

export const { actions: googleMapActions, reducer: googleMapReducer } =
  googleMapSlice;
