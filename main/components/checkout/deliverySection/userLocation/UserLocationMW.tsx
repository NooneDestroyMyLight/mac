"use client";
import { FC, MutableRefObject, useState } from "react";

import style from "./UserLocationMW..module.scss";

import FindAddressOnMap from "./findAddressOnMap/FindAddressOnMap";
import SearchShippingAddress from "./shippingAddress/SearchShippingAddress";
import AddInfoAboutDelivery from "./addInfoAboutDelivery/AddInfoAboutDelivery";

import CloseIcon from "../icons/closeIcon/CloseIcon";
import PreviousIcon from "../icons/previousIcon/PreviousIcon";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { IPropsUserLocationWM } from "./userLocationMW.interface";

interface UserLocation {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onLoad: (map: google.maps.Map) => void;
  onUnmount: (map: google.maps.Map) => void;
  mapRef: MutableRefObject<google.maps.Map | null>;
}

const UserLocation: FC<UserLocation> = ({
  isLoaded,
  center,
  setModelWindowOpen,
  onLoad,
  onUnmount,
  mapRef,
}) => {
  const [location, setLocation] = useState<IUserAddress | null>(null); //Location
  const [currentWidnowSlide, setCurrentWindowSlide] = useState<number>(1); // Like routing in Model window

  const [stateObj, setstateObj] = useState<IPropsUserLocationWM>({
    isLoaded: isLoaded,
    center: center,
    mapRef: mapRef,
    setCurrentWindowSlide: setCurrentWindowSlide,
    onLoad: onLoad,
    onUnmount: onUnmount,
  });

  return (
    <div className={style.mainContainer}>
      <button
        className={style.closeIcon}
        onClick={() => setModelWindowOpen(false)}
      >
        <CloseIcon />
      </button>
      <button
        className={style.previousPageIcon}
        onClick={() => setCurrentWindowSlide(currentWidnowSlide - 1)}
        disabled={currentWidnowSlide === 1 && true}
      >
        <PreviousIcon />
      </button>
      <h2 className={style.h2Title}>Enter your shipping address</h2>
      <div className={style.content}>
        {currentWidnowSlide === 1 && (
          <SearchShippingAddress
            stateObj={{ ...stateObj, isLoaded: isLoaded, center: center }}
            setLocation={setLocation}
            location={location}
            setModelWindowOpen={setModelWindowOpen}
          />
        )}
        {currentWidnowSlide === 2 && (
          <FindAddressOnMap
            stateObj={{ ...stateObj, isLoaded: isLoaded, center: center }}
          >
            <span>
              Pin your exact location to help the courier find your address
            </span>
          </FindAddressOnMap>
        )}
        {currentWidnowSlide === 3 && <AddInfoAboutDelivery />}
      </div>
    </div>
  );
};
export default UserLocation;
