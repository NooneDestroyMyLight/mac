"use client";
import { FC } from "react";
import style from "./Checkout.module.scss";
import Image from "next/image";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

import UserInfoSection from "@/components/checkout/userInfoSection/UserInfoSection";
import UserOrderSection from "@/components/checkout/userOrderSection/UserOrderSection";
import DeliverySection from "@/components/checkout/deliverySection/DeliverySection";
import PaymentSection from "@/componentscheckout/paymentSection/PaymentSection";

const API_KEY = process.env.API_KEY;

const libraries: Libraries = ["places"];

const Checkout: FC = () => {
  const { center } = useTypedSelector(state => state.googleMap);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  const { cart: cartArray, totalАmountСost } = useTypedSelector(
    state => state.basket
  );

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
        {/* <section className={style.userLocationSection}>
          <div className={style.imageContainer}>
            <img src="/images/mapIcon.png" alt="location icon" />
          </div>
          Choose your city
        </section> */}
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
        <PaymentSection />
      </div>
    </div>
  );
};

export default Checkout;
