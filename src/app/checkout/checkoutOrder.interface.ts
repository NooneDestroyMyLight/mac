import { IBasketSlice } from "../globalRedux/feature/basket/basket.slice";

export interface IShippingAddress {
  streetName: string;
  houseNumber: string;
  floorAndDoor: string;
  anotherInfo?: string;
}

export interface IUserOrder {
  addressName: string;
  addressCoordinates: google.maps.LatLngLiteral;
  //   orderItems: IBasketSlice;
  deliveryPerson?: string;
  instruction?: string;
  paymentMethod: string;
}
