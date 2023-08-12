import { FC, MutableRefObject, ReactNode, useMemo, useState } from "react";
import style from "./FindAddressOnMap.module.scss";

import Map from "../map/Map";
import Geocode from "react-geocode";
import { IPropsUserLocationWM } from "../userLocationMW.interface";

interface IFindAddressOnMap {
  children: ReactNode;
  stateObj: IPropsUserLocationWM;
}

const API_KEY = process.env.API_KEY;

const FindAddressOnMap: FC<IFindAddressOnMap> = ({ stateObj, children }) => {
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral>(stateObj.center);

  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  useMemo(() => {
    Geocode.setApiKey(API_KEY);
    Geocode.setLanguage("uk");
    Geocode.fromLatLng(
      markerPosition.lat.toString(),
      markerPosition.lng.toString()
    ).then(
      response => {
        console.log(response.results);
        setCurrentLocation(response.results[0].formatted_address);
      },
      error => {
        console.error("Ошибка", error);
      }
    );
  }, [markerPosition]);

  let timeoutId: any = null;

  const handleCenterChanged = () => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      stateObj.mapRef.current &&
        //@ts-ignore
        setMarkerPosition(stateObj.mapRef.current.getCenter().toJSON());
    }, 1000);
  };

  return (
    <>
      <div className={style.mapAndDiscriptionWrapper}>
        <div className={style.map}>
          {stateObj.isLoaded ? (
            <Map
              handleCenterChanged={handleCenterChanged}
              muteMap={true}
              center={stateObj.center}
              onLoad={stateObj.onLoad}
              onUnmount={stateObj.onUnmount}
            />
          ) : (
            <div>EMPTY MAP</div>
          )}
        </div>
        <span className={style.discription}>
          {!currentLocation ? children : currentLocation}
        </span>
        <button
          onClick={() => {
            stateObj.setCurrentWindowSlide(3);
          }}
          className={style.deliverySectionButton}
        >
          Continue
        </button>
      </div>
    </>
  );
};
export default FindAddressOnMap;
