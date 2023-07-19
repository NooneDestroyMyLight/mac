"use client";
import { FC } from "react";
import style from "./deliverySection.module.scss";
import Autocomplete from "./autocomplete/Autocomplete";
import Map from "./map/Map";
import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

interface IdeliverySection {
  isLoaded: boolean;
  center: ImapCenter;
}

const DeliverySection: FC<IdeliverySection> = ({ isLoaded, center }) => {
  return (
    <section className={style.deliverySection}>
      <div>
        <div className={style.sectionNumber}>2</div>Delivery
      </div>
      <div className={style.mapContainer}>
        {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
      </div>
      <Autocomplete isLoaded={isLoaded} />
    </section>
  );
};

export default DeliverySection;
