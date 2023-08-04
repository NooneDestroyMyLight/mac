import { FC, ReactNode, useState } from "react";
import style from "./FindAddressOnMap.module.scss";

import Map from "../map/Map";

interface IFindAddressOnMap {
  children: ReactNode;
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
}

const FindAddressOnMap: FC<IFindAddressOnMap> = ({
  isLoaded,
  center,
  children,
}) => {
  const [currentLocation, setCurrentLocation] = useState();

  return (
    <>
      <div className={style.mapAndDiscriptionWrapper}>
        <div className={style.map}>
          {isLoaded ? (
            <Map muteMap={true} center={center} />
          ) : (
            <div>EMPTY MAP</div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
export default FindAddressOnMap;
