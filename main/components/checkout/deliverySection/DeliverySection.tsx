"use client";
import { FC, useState, useRef } from "react";
import style from "./DeliverySection.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "./map/Map";

import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import UserLocation from "./userLocation/UserLocation";

import Dropdown from "../../../HOC/dropdown/Dropdown";
import UserAdressInfo from "./userAdressInfo/UserAdressInfo";

interface IdeliverySection {
  isLoaded: boolean;
  center: ImapCenter;
}

const DeliverySection: FC<IdeliverySection> = ({ isLoaded, center }) => {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  return (
    <section className={style.deliverySection}>
      <div className={style.deliveryContent}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>2</div>Delivery
        </div>
        <div className={style.mapContainer}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
        <div className={style.deliveryInfosInput}>
          <li ref={ref}>
            <input
              type="text"
              value={"Peremohy Avenue, 75, Kharkiv, Kharkiv Oblast"}
              className={style.deliveryButton}
              readOnly
              onClick={e => {
                setOpen(!open);
              }}
            />
            {open ? (
              <Dropdown active={open} setActive={setOpen}>
                <UserAdressInfo setOpen={setOpen} setActive={setActive} />
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
        </div>
      </div>
      <ModelWindow active={active} setActive={setActive}>
        <UserLocation
          setActive={setActive}
          isLoaded={isLoaded}
          center={center}
        />
      </ModelWindow>
    </section>
  );
};

export default DeliverySection;
