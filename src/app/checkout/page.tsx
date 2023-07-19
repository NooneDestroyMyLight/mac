"use client";
import { FC } from "react";
import style from "./checkout.module.scss";
import Image from "next/image";

import { useTypedSelector } from "@/hooksuseTypedSelector";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import Map from "@/componentscheckout/deliverySection/map/Map";
import Autocomplete from "@/componentscheckout/deliverySection/autocomplete/Autocomplete";

import UserInfoSection from "@/componentscheckout/userInfoSection/UserInfoSection";
import UserOrderSection from "@/componentscheckout/userOrderSection/UserOrderSection";
import DeliverySection from "@/componentscheckout/deliverySection/DeliverySection";

const API_KEY = process.env.API_KEY;

const libraries: Libraries = ["places"];

const Checkout: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  const { cart: cartArray, totalАmountСost } = useTypedSelector(
    state => state.basket
  );

  const { center } = useTypedSelector(state => state.googleMap);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Image
          src="/images/mcdonalds-logoREADY.png"
          alt="MacDonaldsLogo"
          width={40}
          height={40}
          className={style.headerLogo}
        />
        Macdonalds
      </div>
      <div className={style.main}>
        <h1>Checkout page</h1>
        <UserInfoSection />
        <section className={style.userLocationSection}>
          <div className={style.imageContainer}>
            <img src="/images/mapIcon.png" alt="location icon" />
          </div>
          Choose your city
        </section>
        <div className={style.orderTitle}>
          Order
          <div className={style.orderTotalCost}>
            amount:{" "}
            <span>
              {new Intl.NumberFormat("uk-UA").format(totalАmountСost)} ₴
            </span>
          </div>
        </div>
        <UserOrderSection cartArray={cartArray} />
        <DeliverySection center={center} isLoaded={isLoaded} />
        <section className={style.paymentSection}>
          <div>
            <div className={style.sectionNumber}>3</div> Payment
          </div>
          <div></div>
        </section>
        <section>
          <div>add Comments</div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
