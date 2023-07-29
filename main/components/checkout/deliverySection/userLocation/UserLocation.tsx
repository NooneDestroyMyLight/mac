"use client";
import { FC, useState } from "react";
import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "./map/Map";
import Image from "next/image";

import style from "./UserLocation.module.scss";

interface UserLocation {
  isLoaded: boolean;
  center: ImapCenter;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserLocation: FC<UserLocation> = ({ isLoaded, center, setActive }) => {
  const [openFindAdreess, setOpenFindAdreess] = useState<boolean>(false);

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
      {openFindAdreess ? (
        <>
          <h2 className={style.h2Title}>Enter your address on the map</h2>
          <div className={style.content}>
            <div className={style.mapAndDiscriptionWrapper}>
              <div className={style.map}>
                {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
              </div>
              <span className={style.discription}>
                Pin your exact location to help the courier find your address
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpenFindAdreess(false)}
            className={style.submitButton}
          >
            Submited adreess
          </button>
        </>
      ) : (
        <>
          <h2 className={style.h2Title}>Enter your shipping address</h2>
          <div className={style.content}>
            <ul className={style.autocompleteContainer}>
              <li>
                <div className={style.inputField}>
                  <span className={style.uperInputText}>
                    Delivery addresses
                  </span>
                  <Autocomplete isLoaded={isLoaded} />
                </div>
                <div className={style.inputField}>
                  <span className={style.uperInputText}>
                    Floor, door, instructions...
                  </span>
                  <input type="text" />
                </div>
              </li>
              <button
                onClick={() => setOpenFindAdreess(true)}
                className={style.checkoutPageButton}
              >
                Find place adreess in map
              </button>
            </ul>
            <div className={style.mapContainer}>
              <div className={style.map}>
                {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
              </div>
            </div>
          </div>
          <button className={style.submitButton}>Submited adreess</button>
        </>
      )}
    </div>
  );
};
export default UserLocation;
