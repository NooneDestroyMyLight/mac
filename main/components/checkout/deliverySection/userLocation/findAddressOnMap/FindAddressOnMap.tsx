import { FC } from "react";
import style from "./FindAddressOnMap.module.scss";

import Map from "../map/Map";

interface IFindAddressOnMap {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
}

const FindAddressOnMap: FC<IFindAddressOnMap> = ({ isLoaded, center }) => {
  return (
    <>
      <div className={style.mapAndDiscriptionWrapper}>
        <div className={style.map}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
        <span className={style.discription}>
          Pin your exact location to help the courier find your address
        </span>
      </div>
    </>
  );
};
export default FindAddressOnMap;
