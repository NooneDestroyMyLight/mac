import { FC, ReactNode } from "react";
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
  return (
    <>
      <div className={style.mapAndDiscriptionWrapper}>
        <div className={style.map}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
        {children}
      </div>
    </>
  );
};
export default FindAddressOnMap;
