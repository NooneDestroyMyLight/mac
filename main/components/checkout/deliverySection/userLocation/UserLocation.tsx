"use client";
import { FC, useState } from "react";
import { useActions } from "@/hooksuseActions";

import style from "./UserLocation.module.scss";

import Image from "next/image";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import FindAddressOnMap from "./findAddressOnMap/FindAddressOnMap";
import SearchShippingAddress from "./shippingAddress/SearchShippingAddress";

interface UserLocation {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserLocation: FC<UserLocation> = ({ isLoaded, center, setActive }) => {
  const [openFindAdreess, setOpenFindAdreess] = useState<boolean>(false);

  const [location, setLocation] = useState<IUserAddress | null>(null); //Location
  const { setNewUserAddress } = useActions();

  return (
    <div className={style.mainContainer}>
      <div className={style.closeIcon}>
        <Image
          width={20}
          height={20}
          src="/images/closeIcon.png"
          alt="close"
          onClick={() => setActive(false)}
        />
      </div>
      <div className={style.previousPageIcon}>
        <Image
          width={20}
          height={20}
          src="/images/previousIcon.png"
          alt="close"
          onClick={() => setOpenFindAdreess(false)}
        />
      </div>
      <h2 className={style.h2Title}>Enter your shipping address</h2>
      <div className={style.content}>
        {openFindAdreess ? (
          <FindAddressOnMap isLoaded={isLoaded} center={center} />
        ) : (
          <SearchShippingAddress
            isLoaded={isLoaded}
            center={center}
            setOpenFindAdreess={setOpenFindAdreess}
            setLocation={setLocation}
          />
        )}
      </div>
      <button
        onClick={() => {
          setNewUserAddress(location);
        }}
        className={style.submitButton}
      >
        Submit address
      </button>
    </div>
  );
};
export default UserLocation;
