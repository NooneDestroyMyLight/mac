"use client";
import { FC, MutableRefObject, useMemo, useState } from "react";

import style from "./UserLocationMW..module.scss";

import FindAddressOnMap from "./findAddressOnMapSlide/FindAddressOnMap";
import SearchShippingAddress from "./shippingAddress/SearchShippingAddress";
import AddInfoAboutDelivery from "./addInfoAboutDelivery/AddInfoAboutDelivery";

import CloseIcon from "../icons/closeIcon/CloseIcon";
import PreviousIcon from "../icons/previousIcon/PreviousIcon";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { IPropsUserLocationWM } from "./userLocationMW.interface";
import { IUserOrder } from "@/app/checkout/checkoutOrder.interface";

interface UserLocation {
  orederObj: IUserOrder;
  setOrederObj: React.Dispatch<React.SetStateAction<IUserOrder>>;
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isUserLocationOpen: boolean;
  onLoad: (map: google.maps.Map) => void;
  onUnmount: (map: google.maps.Map) => void;
  mapRef: MutableRefObject<google.maps.Map | null>;
}

export interface IAddressInfo extends IUserAddress {
  houseNumber: string;
}

const UserLocation: FC<UserLocation> = ({
  isLoaded,
  center,
  setModelWindowOpen,
  onLoad,
  onUnmount,
  mapRef,
  orederObj,
  setOrederObj,
  isUserLocationOpen,
}) => {
  const [currentWidnowSlide, setCurrentWindowSlide] = useState<number>(1); // Like routing in Model window

  const stateObj: IPropsUserLocationWM = {
    //Refactor that into default variable
    isLoaded: isLoaded,
    center: center,
    mapRef: mapRef,
    setCurrentWindowSlide: setCurrentWindowSlide,
    onLoad: onLoad,
    onUnmount: onUnmount,
  };

  const [locationOnMap, setLocationOnMap] = useState<IAddressInfo | null>(null); //Location

  useMemo(() => {
    isUserLocationOpen && setCurrentWindowSlide(1);
  }, [isUserLocationOpen]);

  return (
    <>
      {currentWidnowSlide === 1 && (
        <SearchShippingAddress
          setCurrentWindowSlide={setCurrentWindowSlide}
          currentWidnowSlide={currentWidnowSlide}
          setModelWindowOpen={setModelWindowOpen}
          ///=///
          setOrederObj={setOrederObj}
          orederObj={{ ...orederObj }}
          stateObj={{ ...stateObj, isLoaded: isLoaded, center: center }}
        />
      )}
      {currentWidnowSlide === 2 && (
        <FindAddressOnMap
          setCurrentWindowSlide={setCurrentWindowSlide}
          currentWidnowSlide={currentWidnowSlide}
          setModelWindowOpen={setModelWindowOpen}
          ///=///
          stateObj={{ ...stateObj, isLoaded: isLoaded, center: center }}
          setLocationOnMap={setLocationOnMap}
        >
          <span>
            Pin your exact location to help the courier find your address
          </span>
        </FindAddressOnMap>
      )}
      {currentWidnowSlide === 3 && (
        <AddInfoAboutDelivery
          setCurrentWindowSlide={setCurrentWindowSlide}
          currentWidnowSlide={currentWidnowSlide}
          setModelWindowOpen={setModelWindowOpen}
          ///=///
          locationOnMap={
            locationOnMap && {
              ...locationOnMap,
              location: { ...locationOnMap.location },
            }
          }
          setOrederObj={setOrederObj}
          orederObj={{ ...orederObj }}
        />
      )}
    </>
  );
};
export default UserLocation;
