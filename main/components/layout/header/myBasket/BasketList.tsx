"use client";
import { FC } from "react";
import style from "./BasketList.module.scss";
import { useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import BasketItem from "./basketItem/BasketItem";

const Basket: FC = () => {
  const { cart: cartArray } = useTypedSelector(state => state.basket);
  //add if cartArray is empty some info about that CART EMTY

  return (
    <div className={style.content}>
      <div className={style.basket}>
        My Basket
        <ul className={style.dropdown}>
          {cartArray.map(item => (
            <BasketItem key={item.imageSrc} product={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Basket;
