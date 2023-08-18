import { MutableRefObject } from "react";

export interface IPropsUserLocationWM {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setCurrentWindowSlide: React.Dispatch<React.SetStateAction<number>>;
  onLoad: (map: google.maps.Map) => void;
  onUnmount: (map: google.maps.Map) => void;
  mapRef: MutableRefObject<google.maps.Map | null>;
}
