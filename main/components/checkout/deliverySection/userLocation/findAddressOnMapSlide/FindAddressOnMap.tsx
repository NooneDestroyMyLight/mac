import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import style from "./FindAddressOnMap.module.scss";

import Map from "../../map/Map";
import MapPlaceholder from "../../icons/mapPlaceHolder/MapPlaceHolder";
import Geocode from "react-geocode";

import { IPropsUserLocationWM } from "../userLocationMW.interface";
import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import { IAddressInfo } from "../UserLocationMW";

interface IFindAddressOnMap {
  children: ReactNode;
  stateObj: IPropsUserLocationWM;
  setLocationOnMap: Dispatch<SetStateAction<IAddressInfo | null>>;
}

const API_KEY = process.env.API_KEY;

const FindAddressOnMap: FC<IFindAddressOnMap> = ({
  stateObj,
  children,
  setLocationOnMap,
}) => {
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
        // console.log("массив", response.results[0].address_components);
        setCurrentLocation(response.results[0].formatted_address); // Set Address Name into varible

        const houseNumber: string | undefined =
          response.results[0].address_components.find(
            (component: { types: string | string[] }) =>
              component.types.includes("street_number")
          )?.long_name;

        const addressParts = response.results[0].formatted_address
          .split(",")[0]
          .trim();

        houseNumber &&
          setLocationOnMap({
            location: { ...markerPosition },
            address: addressParts,
            houseNumber: houseNumber,
          });
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
            <MapPlaceholder />
          )}
        </div>
        <span className={style.discription}>
          <img
            className={style.icon}
            src="/images/icon/free-icon-pin-3944427.png"
            alt="LocationIcon"
          />
          {!currentLocation ? children : currentLocation}
        </span>
        <button
          onClick={() => {
            stateObj.setCurrentWindowSlide(3);
            if (currentLocation && markerPosition) {
              // setLocationOnMap({
              //   address: currentLocation,
              //   location: markerPosition,
              // });
            }
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
