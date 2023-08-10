"use client";
import { FC, useState } from "react";

import style from "./UserLocationMW..module.scss";

import Image from "next/image";

import FindAddressOnMap from "./findAddressOnMap/FindAddressOnMap";
import SearchShippingAddress from "./shippingAddress/SearchShippingAddress";
import AddInfoAboutDelivery from "./addInfoAboutDelivery/AddInfoAboutDelivery";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

interface UserLocation {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserLocation: FC<UserLocation> = ({
  isLoaded,
  center,
  setModelWindowOpen,
}) => {
  const [location, setLocation] = useState<IUserAddress | null>(null); //Location
  const [currentWidnowSlide, setCurrentWindowSlide] = useState<number>(1);

  return (
    <div className={style.mainContainer}>
      <button
        className={style.closeIcon}
        onClick={() => setModelWindowOpen(false)}
      >
        <Image width={20} height={20} src="/images/closeIcon.png" alt="close" />
      </button>
      <button
        className={style.previousPageIcon}
        onClick={() => setCurrentWindowSlide(currentWidnowSlide - 1)}
        disabled={currentWidnowSlide === 1 && true}
      >
        <Image
          width={20}
          height={20}
          src="/images/previousIcon.png"
          alt="close"
        />
      </button>
      <h2 className={style.h2Title}>Enter your shipping address</h2>
      <div className={style.content}>
        {currentWidnowSlide === 1 && (
          <SearchShippingAddress
            isLoaded={isLoaded}
            center={center}
            setCurrentWindowSlide={setCurrentWindowSlide}
            setLocation={setLocation}
            location={location}
            setModelWindowOpen={setModelWindowOpen}
          />
        )}
        {currentWidnowSlide === 2 && (
          <FindAddressOnMap isLoaded={isLoaded} center={center}>
            <span className={style.discription}>
              Pin your exact location to help the courier find your address
            </span>
            <button
              onClick={() => {
                setCurrentWindowSlide(3);
              }}
              className={style.deliverySectionButton}
            >
              Continue
            </button>
          </FindAddressOnMap>
        )}
        {currentWidnowSlide === 3 && <AddInfoAboutDelivery />}
      </div>
    </div>
  );
};
export default UserLocation;