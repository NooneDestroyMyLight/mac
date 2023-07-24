"use client";
import { FC, useState } from "react";
import style from "./DeliverySection.module.scss";

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

  return (
    <section className={style.deliverySection}>
      <div className={style.deliveryContent}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>2</div>Delivery
        </div>
        <div className={style.mapContainer}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
        {/* <Autocomplete isLoaded={isLoaded} /> */}
        {/* <button
          onClick={() => {
            setActive(true);
          }}
        >
          BUTTON
        </button> */}
        <div className={style.deliveryInfosInput}>
          <input
            type="text"
            value={"Peremohy Avenue, 75, Kharkiv, Kharkiv Oblast"}
            className={style.currentAdress}
            readOnly
          />
          <input type="text" className={style.currentAdress} />
        </div>
        <ModelWindow active={active} setActive={setActive}>
          <UserLocation isLoaded={isLoaded} center={center} />
        </ModelWindow>
      </div>
    </section>
  );
};

export default DeliverySection;
