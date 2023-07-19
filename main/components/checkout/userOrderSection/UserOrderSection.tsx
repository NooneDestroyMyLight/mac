"use client";
import { FC } from "react";
import style from "./UserOrderSection.module.scss";

import OrderProductItem from "../orderProductItem/OrderProductItem";
import { IBasketItem } from "@/componentslayout/header/myBasket/basketItem/basketI.interface";

interface IuserOrderSection {
  cartArray: IBasketItem[];
}

const UserOrderSection: FC<IuserOrderSection> = ({ cartArray }) => {
  return (
    <section className={style.userOrderSection}>
      <div className={style.userInfoContainer}>
        <div className={style.orderProductListTitle}>
          <div className={style.sectionNumber}>1</div>
          <div>Your product list</div>
          <div>Edit</div>
        </div>
        <div className={style.orderInfo}>
          {cartArray.map(product => (
            <OrderProductItem product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default UserOrderSection;
