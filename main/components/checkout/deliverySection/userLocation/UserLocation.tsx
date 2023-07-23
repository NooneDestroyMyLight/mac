"use client";
import { FC, useState } from "react";
import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import Autocomplete from "../autocomplete/Autocomplete";
import Map from "../map/Map";
import style from "./UserLocation.module.scss";

interface UserLocation {
  isLoaded: boolean;
  center: ImapCenter;
}

const UserLocation: FC<UserLocation> = ({ isLoaded, center }) => {
  const [openFindAdreess, setOpenFindAdreess] = useState<boolean>(false);

  return (
    <div className={style.mainContainer}>
      {openFindAdreess ? (
        <>
          <h2 className={style.h2Title}>Enter your address on the map</h2>
          <div className={style.content}>
            <div className={style.map}>
              {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
            </div>
          </div>
          <button className={style.submitButton}>Submited adreess</button>
        </>
      ) : (
        <>
          <h2 className={style.h2Title}>Enter your shipping address</h2>
          <div className={style.content}>
            <div className={style.autocompleteContainer}>
              <Autocomplete isLoaded={isLoaded} />
            </div>
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
