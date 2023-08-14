"use client";
import { FC, useCallback, useRef, useState } from "react";
import style from "./DeliverySection.module.scss";
import { useActions } from "@/hooksuseActions";

import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Selector from "../../../HOC/selector/Selesctor";

import AnotherPersonInfo from "./anotherPersonInfo/AnotherPersonInfo";
import UserLocation from "./userLocation/UserLocationMW";
import AddAddressButton from "./addAddressButton/AddAddressButton";
import Map from "./map/Map";
import MapPlaceholder from "./icons/mapPlaceHolder/MapPlaceHolder";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { userAdressKey } from "./userAddreess.data";

interface IDeliverySection {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  userAddress: IUserAddress[];
  currentLocation: IUserAddress | undefined;
}

const DeliverySection: FC<IDeliverySection> = ({
  isLoaded,
  center,
  userAddress,
  currentLocation,
}) => {
  const [isUserLocationOpen, setUserLocationOpen] = useState<boolean>(false);
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const { setCurrentAddress } = useActions();

  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = null;
  }, []);

  console.log("DeliverySection", isLoaded);

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>2</div>Delivery
        </div>
        <div className={style.mapContainer}>
          {isLoaded ? (
            <Map
              muteMap={false}
              center={center}
              onLoad={onLoad}
              onUnmount={onUnmount}
            />
          ) : (
            <MapPlaceholder />
          )}
        </div>
        <ul className={style.deliveryInfosInput}>
          <Selector
            array={userAddress}
            property={userAdressKey}
            selectorValue={currentLocation ? currentLocation.address : ""}
            placeholder={" Choose address..."}
            setSelectorValue={setCurrentAddress}
            iconSrc="/images/icon/free-icon-pin-3944427.png"
          >
            <AddAddressButton
              setOpen={setDropDownOpen}
              setActive={setUserLocationOpen}
            />
          </Selector>
          <AnotherPersonInfo />
        </ul>
      </div>
      <ModelWindow
        isModelWindowOpen={isUserLocationOpen}
        setModelWindowOpen={setUserLocationOpen}
      >
        <UserLocation
          setModelWindowOpen={setUserLocationOpen}
          isLoaded={isLoaded}
          center={center}
          onUnmount={onUnmount}
          onLoad={onLoad}
          mapRef={mapRef}
        />
      </ModelWindow>
    </section>
  );
};

export default DeliverySection;
