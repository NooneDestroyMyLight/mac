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
import { IUserOrder } from "@/app/checkout/checkoutOrder.interface";

interface IDeliverySection {
  isError: boolean;
  orederObj: IUserOrder;
  setOrederObj: React.Dispatch<React.SetStateAction<IUserOrder>>;
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
  orederObj,
  setOrederObj,
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
            selectorValue={orederObj.addressName ? orederObj.addressName : ""}
            placeholder={" Choose address..."}
            iconSrc="/images/icon/free-icon-pin-3944427.png"
          >
            <AddAddressButton
              setOpen={setDropDownOpen}
              setActive={setUserLocationOpen}
            />
            {userAddress.map(item => (
              <button
                onClick={() => {
                  setCurrentAddress(item);
                  setOrederObj({ ...orederObj, addressName: item.address });
                }}
                key={item.address}
                className={style.dropdownItem}
              >
                {item.address}
              </button>
            ))}
          </Selector>
          <AnotherPersonInfo />
        </ul>
      </div>
      <ModelWindow
        isModelWindowOpen={isUserLocationOpen}
        setModelWindowOpen={setUserLocationOpen}
      >
        <UserLocation
          setOrederObj={setOrederObj}
          orederObj={{ ...orederObj }}
          setModelWindowOpen={setUserLocationOpen}
          isLoaded={isLoaded}
          center={center}
          onUnmount={onUnmount}
          onLoad={onLoad}
          mapRef={mapRef}
          isUserLocationOpen={isUserLocationOpen}
        />
      </ModelWindow>
    </section>
  );
};

export default DeliverySection;
