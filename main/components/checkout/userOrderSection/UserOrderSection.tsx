"use client";
import { FC } from "react";
import style from "./UserOrderSection.module.scss";

import OrderProductItem from "../orderProductItem/OrderProductItem";
import { IBasketItem } from "@/componentslayout/header/myBasket/basketItem/basketI.interface";

interface IUserOrderSection {
  cartArray: IBasketItem[];
}

const UserOrderSection: FC<IUserOrderSection> = ({ cartArray }) => {
  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <ul className={style.sectionTitle}>
          <li className={style.sectionNumber}>1</li>
          <li>Your product list</li>
          <li>Edit</li>
        </ul>
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
