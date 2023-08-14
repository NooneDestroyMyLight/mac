import { IBasketSlice } from "../globalRedux/feature/basket/basket.slice";

export interface IShippingAddress {
  streetName: string;
  houseNumber: string;
  floorAndDoor: string;
  anotherInfo?: string;
}

export interface IUserInfo {
  address: {
    addressName: IShippingAddress;
    addressCoordinate: google.maps.LatLngLiteral;
  };
  orderItems: IBasketSlice;
  deliveryPerson: "";
  paymentMethod: "";
}
