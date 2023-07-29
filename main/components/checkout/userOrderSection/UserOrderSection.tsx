"use client";
import { FC, useEffect } from "react";
import { useActions } from "@/hooksuseActions";

import style from "./UserOrderSection.module.scss";

import OrderProductItem from "./orderProductItem/OrderProductItem";

import { IBasketItem } from "@/componentslayout/header/myBasket/basketItem/basketI.interface";
interface IUserOrderSection {
  cartArray: IBasketItem[];
}

const UserOrderSection: FC<IUserOrderSection> = ({ cartArray }) => {
  const { setTotalAmountCost } = useActions();

  useEffect(() => {
    setTotalAmountCost(
      cartArray.reduce(
        (total: number, item: IBasketItem) => total + item.price * item.count,
        0
      )
    );
  }, [cartArray]);

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <ul className={style.sectionTitle}>
          <li className={style.sectionNumber}>1</li>
          <li>Your product list</li>
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
