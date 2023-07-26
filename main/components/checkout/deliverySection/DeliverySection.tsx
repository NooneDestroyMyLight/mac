"use client";
import { FC, useState } from "react";
import style from "./DeliverySection.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";

import Map from "./userLocation/map/Map";

import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Dropdown from "../../../HOC/dropdown/Dropdown";

import UserLocation from "./userLocation/UserLocation";
import UserAdressInfo from "./userAdressInfo/UserAddressInfo";

import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

interface IDeliverySection {
  isLoaded: boolean;
  center: ImapCenter;
}

const DeliverySection: FC<IDeliverySection> = ({ isLoaded, center }) => {
  const [isUserLocationOpen, setUserLocationOpen] = useState<boolean>(false);
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const ref = useOnclickOutside(() => {
    setDropDownOpen(false);
  });

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>2</div>Delivery
        </div>
        <div className={style.mapContainer}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
        <ul className={style.deliveryInfosInput}>
          <li ref={ref}>
            <input
              type="text"
              value={"Peremohy Avenue, 75, Kharkiv, Kharkiv Oblast"}
              className={style.deliveryButton}
              readOnly
              onClick={e => {
                setDropDownOpen(!isDropDownOpen);
              }}
            />
            {isDropDownOpen ? (
              <Dropdown active={isDropDownOpen}>
                <UserAdressInfo
                  setOpen={setDropDownOpen}
                  setActive={setUserLocationOpen}
                />
              </Dropdown>
            ) : null}
          </li>
          <li>
            <span className={style.uperInputText}>
              Sending to another person?
            </span>
            <input
              value={"Add recipient details to help the courier"}
              type="text"
              readOnly
              className={style.deliveryButton}
            />
          </li>
        </ul>
      </div>
      <ModelWindow active={isUserLocationOpen} setActive={setUserLocationOpen}>
        <UserLocation
          setActive={setUserLocationOpen}
          isLoaded={isLoaded}
          center={center}
        />
      </ModelWindow>
    </section>
  );
};

export default DeliverySection;
