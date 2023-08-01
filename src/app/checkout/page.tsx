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
import Sidebar from "@/componentscheckout/sideBar/SideBar";

const API_KEY = process.env.API_KEY;

const libraries: Libraries = ["places"];

const Checkout: FC = () => {
  const { center, userAddress, currentLocation } = useTypedSelector(
    state => state.googleMap
  );
  const { cart: cartArray, totalАmountСost } = useTypedSelector(
    //   const { cart: cartArray, totalАmountСost }: - that how i can typased
    state => state.basket
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  return (
    <div className={style.checkoutPage}>
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
      <h1>Checkout page</h1>
      <div className={style.container}>
        <div className={style.main}>
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
          <DeliverySection
            center={center}
            isLoaded={isLoaded}
            userAddress={userAddress}
            currentLocation={currentLocation}
          />
          <PaymentSection />
        </div>
        <Sidebar totalАmountСost={totalАmountСost} />
      </div>
    </div>
  );
};

export default Checkout;
